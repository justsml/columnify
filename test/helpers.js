import path from "path";
import { fileURLToPath } from "url";

export default function getFileAndDirname(importMetaUrl) {
  const __filename = fileURLToPath(importMetaUrl);
  const __dirname = path.dirname(__filename);
  return { __filename, __dirname };
}
