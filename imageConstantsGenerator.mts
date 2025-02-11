import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const publicImagesDir = path.join(__dirname, "public/images");
const srcDir = path.join(__dirname, "src/shared/images");

// 이미지 파일을 WebP 형식으로 변환하는 함수
const convertToWebP = async (inputPath: string, outputPath: string) => {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 }) // 80% 품질로 WebP로 변환
      .toFile(outputPath);
  } catch (error) {
    console.error(`Error converting ${inputPath}: ${error}`);
  }
};

// 원본 파일 삭제 함수
const deleteOriginalFile = (filePath: string) => {
  try {
    fs.unlinkSync(filePath);
  } catch (error) {
    console.error(`Error deleting file: ${filePath} - ${error}`);
  }
};

const getImageFiles = (dir: string) => {
  const files = fs.readdirSync(dir);
  return files.filter((file) =>
    ["webp", "png", "jpg", "jpeg"].includes(path.extname(file).slice(1)),
  );
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
  const content = `export const ${folderName.toUpperCase()}_ASSETS = {
${images.map((image) => `  ${toPascalCase(image)}: "/images/${folderName}/${image}"`).join(",\n")}
};`;

  fs.writeFileSync(tsFilePath, content);
};

// 이미지를 변환하고, TS 파일을 생성하는 함수
const processImageFiles = async (folderName: string) => {
  const imageFiles = getImageFiles(path.join(publicImagesDir, folderName));

  const processedImages: string[] = [];

  for (const imageFile of imageFiles) {
    const extname = path.extname(imageFile).toLowerCase();
    const inputPath = path.join(publicImagesDir, folderName, imageFile);
    const webpFileName = `${path.basename(imageFile, extname)}.webp`;
    const outputPath = path.join(publicImagesDir, folderName, webpFileName);

    // 이미지가 webp가 아니면 변환
    if (extname !== ".webp") {
      await convertToWebP(inputPath, outputPath);
      processedImages.push(webpFileName); // 변환된 WebP 파일 추가
      deleteOriginalFile(inputPath); // 원본 파일 삭제
    } else {
      processedImages.push(imageFile); // 이미 WebP인 경우 그대로 추가
    }
  }

  // 변환이 끝난 후에 코드 생성
  if (processedImages.length > 0) {
    createTSFile(folderName, processedImages);
  }
};

const generateImageTSFiles = async () => {
  const subDirs = fs
    .readdirSync(publicImagesDir)
    .filter((subDir) => fs.statSync(path.join(publicImagesDir, subDir)).isDirectory());

  for (const subDir of subDirs) {
    await processImageFiles(subDir);
  }
};

generateImageTSFiles();
