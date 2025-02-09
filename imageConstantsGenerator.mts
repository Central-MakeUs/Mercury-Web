import fs from "node:fs";
import path from "node:path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const publicImagesDir = path.join(__dirname, "public/images");
const srcDir = path.join(__dirname, "src/shared/images");

const getImageFiles = (dir: string) => {
  const files = fs.readdirSync(dir);
  return files.filter((file) => path.extname(file) === ".webp");
};

const toPascalCase = (str: string) => {
  return str
    .replace(/([a-zA-Z0-9])([._-])([a-zA-Z0-9])/g, (_match, p1, _p2, p3) => {
      return `${p1.toUpperCase()}_${p3.toUpperCase()}`;
    })
    .replace(/^\w/, (match) => match.toUpperCase())
    .replace(/[^A-Za-z0-9_]/g, "_")
    .toUpperCase();
};

const createTSFile = (folderName: string, images: string[]) => {
  const folderPath = path.join(srcDir, folderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const tsFilePath = path.join(folderPath, `${folderName}Images.ts`);
  const content = `
export const ${folderName.toUpperCase()}_ASSETS = {
${images.map((image) => `  ${toPascalCase(image)}: '/images/${folderName}/${image}'`).join(",\n")}
};`;

  fs.writeFileSync(tsFilePath, content);
};

const generateImageTSFiles = () => {
  const subDirs = fs
    .readdirSync(publicImagesDir)
    .filter((subDir) => fs.statSync(path.join(publicImagesDir, subDir)).isDirectory());

  subDirs.forEach((subDir) => {
    const imageFiles = getImageFiles(path.join(publicImagesDir, subDir));
    if (imageFiles.length > 0) {
      createTSFile(subDir, imageFiles);
    }
  });
};

generateImageTSFiles();
