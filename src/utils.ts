import path from "path";

export function isVideo(imagePath: string | undefined) {
  if (!imagePath) return false;
  return [".webm", ".mp4"].includes(path.extname(imagePath));
}
