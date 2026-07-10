import fs from "fs";
import path from "path";

const WORK_DIR = path.join(process.cwd(), "public", "work");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/**
 * Lists the images already sitting in `public/work/<id>/`, sorted by
 * filename. Lets a case study's gallery pick up new photos just by
 * dropping a file into its folder — no code or data edit required.
 */
export function getWorkImages(id: string): string[] {
  const dir = path.join(WORK_DIR, id);

  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/work/${id}/${file}`);
}
