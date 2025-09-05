export async function listProducts() {
    await delay(500); // Simula un retraso de 500ms
    return [
        {
            id: 1,
            nombre: `Mouse`,
            descripcion: `Mouse inalámbrico con batería de color negro`,
            precio: 20990,
            urlImagen: "/img/M1.webp",
            stock: 20,
            categoria: `Mouse`,
            etiqueta: `oficina`
        }
    ];
}

function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}