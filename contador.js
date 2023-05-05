
let contador=1;
const enlazar=()=>{
  const etiqueta=document.querySelector("#boton")
  etiqueta.addEventListener('click',aumentar)
}

const aumentar=()=>{
  const etiqueta2=document.querySelector("#h1");
  etiqueta2.innerHTML=contador++;

}
enlazar();
