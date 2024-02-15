// Inspiration : https://sharp.pixelplumbing.com/
// Utilisation : node webp.js

const sharp = require("sharp");
const fs = require("fs");

const outputFolder = "./docs/public/assets/img/";
const inputFolder = "./docs/img_source/";

const files = fs.readdirSync(inputFolder);

files.map(async function (file_to_convert) {
  await sharp(inputFolder + file_to_convert).toFile(outputFolder + file_to_convert.substring(0, file_to_convert.indexOf(".")) + ".webp");
});

console.log("Fichiers images transformés au format webp");