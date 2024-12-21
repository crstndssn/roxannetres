import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const folderPath = searchParams.get("folderPath");

  if (!folderPath) {
    return NextResponse.json({ error: "Missing folderPath parameter" }, { status: 400 });
  }

  try {
    // Construir la ruta completa basada en la carpeta pública
    const directoryPath = path.join(process.cwd(), "public", folderPath);

    // Leer los archivos de la carpeta
    const files = fs.readdirSync(directoryPath);

    // Filtrar archivos que son imágenes
    const validFiles = files.filter((file) =>
      /\.(png|jpe?g|svg|webp|heic)$/i.test(file) // Añadido soporte para .HEIC (insensible a mayúsculas)
    );

    // Responder con la lista de archivos
    return NextResponse.json(validFiles, { status: 200 });
  } catch (error) {
    console.error(`Error reading folder ${folderPath}:`, error);
    return NextResponse.json({ error: "Error reading folder" }, { status: 500 });
  }
}



// tome el cambio y buena suerte
// necesitaré ese karma en mi largo viaje
// aun no hemos llegado
// el camino es largo