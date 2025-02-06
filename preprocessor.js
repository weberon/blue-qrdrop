// \build\index.html
// import { readFile, writeFile, readFileSync, writeFileSync } from "fs";
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

const updateUrls = () => {
  const htmlContent = readFileSync(FILE_PATH);
  const dom = new JSDOM(data);
  const document = dom.window.document;
  // Update <link> tags (e.g., stylesheets, manifest, icons)

  // Update <script> tags

  writeFileSync(FILE_PATH, dom.serialize(), "utf8");
  console.log(FILE_PATH, "successfully updated"); 
  
}

const init = async() => {
  try{
    updateUrls();
  }catch(err){
    console.log("[ERROR]", err);
    console.log(error);
    process.exit(1);
  }
}

//init();
console.log("preprocessor")
