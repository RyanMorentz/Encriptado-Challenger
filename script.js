const ingresaTexto=document.getElementById("ingresaTexto");
const botonEncriptar=document.getElementById("btn_encriptar");
const botonDesencriptar=document.getElementById("btn_desencriptar");
const botonCopiar=document.getElementById("btncopy");
const mensajeFinal=document.getElementById("mensajeFinal");
const muneco=document.getElementById("muneco");
const rightinfo=document.getElementById("rightinfo");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]
const remplace = (nuevovalor) => {
    mensajeFinal.innerHTML = nuevovalor;
    muneco.classList.add("oculto");
    ingresaTexto.value= "";
    rightinfo.style.display="none";
    botonCopiar.style.display="block";
    rightinfo.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    muneco.classList.remove("oculto");
    rightinfo.style.display="block";
    botonCopiar.style.display="none";
    rightinfo.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresaTexto.focus();
}

botonEncriptar.addEventListener("click", () =>{
    const texto = ingresaTexto.value.toLowerCase();
    if (texto != ""){
        function encriptar(newText){
            for (let i = 0; i < remplazar.length; i++){
                if (newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])
                };
            };
            return newText
        };
        remplace(encriptar(texto));
    } else{
        alert("Ingrese texto a encriptar");
        reset()
    }
});



botonDesencriptar.addEventListener("click",() =>{
    const texto = ingresaTexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newText){
            for(let i =0; i < remplazar.length;  i++){
                if(newText.includes(remplazar[i][1])){
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText
        }
    } else{
        alert("Ingrese texto a Desencriptar");
        reset();
    }
    remplace(desencriptar(texto));
});

botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    texto.select() 
    navigator.clipboard.writeText(texto.value);
    alert("Texto Copiado");
    reset();
});
