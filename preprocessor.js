// \build\index.html
// import { readFile, writeFile } from "fs";
// import { JSDOM } from "jsdom";
// import { getLinkWithDomain } from "./index.js"; // Adjust path

// const FILE_PATH = "/build/index.html";
// const DOMAIN = "blue-qrdrop";

// // Read the index.html file
// readFile(FILE_PATH, "utf8", (err, data) => {
//     if (err) {
//         console.error("Error reading index.html:", err);
//         return;
//     }

//     // Parse HTML with jsdom
//     const dom = new JSDOM(data);
//     const document = dom.window.document;

//     // Update <link> tags (e.g., stylesheets, manifest, icons)
//     document.querySelectorAll("link[href]").forEach((link) => {
//         link.href = getLinkWithDomain(link.href, DOMAIN);
//     });

//     // Update <script> tags
//     document.querySelectorAll("script[src]").forEach((script) => {
//         script.src = getLinkWithDomain(script.src, DOMAIN);
//     });

//     // Write the modified HTML back to file
//     writeFile(FILE_PATH, dom.serialize(), "utf8", (err) => {
//         if (err) {
//             console.error("Error writing index.html:", err);
//         } else {
//             console.log("index.html successfully updated.");
//         }
//     });
// });

console.log("preprocessor")