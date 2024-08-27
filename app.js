function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}


function resultado (Archivo){ 
    AsignarTexto("h2", "el encriptado es:")
    AsignarTexto("p",textoEncriptado)
}
 

function AsignarTexto (Elemento, texto){
    let ElementoHTML =document.querySelector(Elemento);
    ElementoHTML.innerHTML = texto;
}
AsignarTexto("p","Ingresa el texto que deseas encriptar")
AsignarTexto("h2","Modelador")

function encriptar() {
    let texto = document.getElementById("inputtex").value;
    
    if (!validarTexto(texto)) { 
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    
let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

console.log(textoEncriptado)
   AsignarTexto("p",textoEncriptado)
   AsignarTexto("h2","Tu texto encriptado es:")
}

function desencriptar () {
    let texto = document.getElementById("inputtex").value;

    if (!validarTexto(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

       

        AsignarTexto("p",textoDesencriptado)
        AsignarTexto("h2","Tu texto Desencriptado es:")

}

function copiar() {
    const textoACopiar = document.querySelector("p").innerText;

    if (!textoACopiar || textoACopiar === "Ingresa el texto que deseas encriptar") {
        alert("No hay texto para copiar. Asegúrate de encriptar o desencriptar un texto primero.");
        return;
    }

    navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
