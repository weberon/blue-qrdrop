import { readFileSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom";

const FILE_PATH = "./build/index.html"; // Ensure the path is correct
const DOMAIN = "blue-qrdrop";

const updateUrls = () => {
    try {
        // Read the index.html file
        const htmlContent = readFileSync(FILE_PATH, "utf8");

        // Parse HTML with jsdom
        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;

        // Update <link> tags (stylesheets, manifest, icons)
        document.querySelectorAll("link[href]").forEach((link) => {
            const originalHref = link.href;

            if (originalHref.includes("/css/main.") && originalHref.endsWith(".css")) {
                link.href = originalHref.replace(`/${DOMAIN}/css/`, `/${DOMAIN}/static/css/`);
            } else {
                link.href = originalHref.replace(`/${DOMAIN}/`, `/${DOMAIN}/`);
            }
        });

        // Update <script> tags
        document.querySelectorAll("script[src]").forEach((script) => {
            const originalSrc = script.src;

            if (originalSrc.includes("/js/main.") && originalSrc.endsWith(".js")) {
                script.src = originalSrc.replace(`/${DOMAIN}/js/`, `/${DOMAIN}/static/js/`);
            } else {
                script.src = originalSrc.replace(`/${DOMAIN}/`, `/${DOMAIN}/`);
            }
        });

        // Write the modified HTML back to file
        writeFileSync(FILE_PATH, dom.serialize(), "utf8");
        console.log(`${FILE_PATH} successfully updated.`);
    } catch (error) {
        console.error("Error updating index.html:", error);
        process.exit(1);
    }
};

const init = async () => {
    try {
        updateUrls();
    } catch (error) {
        console.error("[ERROR]", error);
        process.exit(1);
    }
};

// Uncomment this to run the script automatically
init();
