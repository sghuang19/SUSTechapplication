/** Loads metadata fields from metadata.yaml */
import { load } from "js-yaml";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); // get the name of the directory

export default function useMetadata() {
  const filePath = resolve(__dirname, "../metadata.yaml");
  const file = readFileSync(filePath);
  return load(file);
}
