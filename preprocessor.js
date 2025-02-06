import { readFileSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom";

const getExistingHomePage = (source) => {
    let first = `${source}`.split('/').filter(s => s.trim() !== '')[0];
    console.log({first});
    if(!isFile(first)){
        return first;
    }
    return undefined;
}

const isFile = (str) => {
    return str.split('.').length > 1;
}

const getLinkWithDomain = (link, domain) => {
    const homePage = getExistingHomePage(link);
    let link2 = `/${domain}/${link}`;
    if(homePage != null){
        link2 = link.replace(homePage, domain);
    }
    const links = link2.split('/').filter(l => l != "");
    const links3 = links.join('/');    
    return links.length > 0 ? `/${links3}`: links3;
}

//module.exports.getLinkWithDomain = getLinkWithDomain;


const FILE_PATH = "./build/index.html"; // Ensure the path is correct
const DOMAIN = "blue-qrdrop";

const updateUrls = () => {
    try {
        // Read the index.html file
        const htmlContent = readFileSync(FILE_PATH, "utf8");
        
        // Parse HTML with jsdom
        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;

        // Update <link> tags (e.g., stylesheets, manifest, icons)
        document.querySelectorAll("link[href]").forEach((link) => {
            link.href = getLinkWithDomain(link.href, DOMAIN);
        });

        // Update <script> tags
        document.querySelectorAll("script[src]").forEach((script) => {
            script.src = getLinkWithDomain(script.src, DOMAIN);
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
