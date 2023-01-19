const msj = document.querySelector("#textarea"); // Textarea del mensaje a Encriptar/Desencriptar
const btnEncriptar = document.querySelector("#Encriptar"); // Botón para Encriptar
const btnDesencriptar = document.querySelector("#desencriptar"); // Botón para desencriptar
const btnCopiar = document.querySelector("#copiar"); // Botón para copiar el mensaje resultante
const msjFinal = document.querySelector("#resultado"); // Textarea para mostrar el mensaje resultante

const msjEncriptar = txt => {
  // Función para encriptar una sola letra
  switch (txt) {
    case 'a':
      return 'ia';
    case 'e':
      return 'enter';
    case 'i':
      return 'imes';
    case 'o':
      return 'ober';
    case 'u':
      return 'ufat';
    default:
      return txt;
  }
};

let msjEncriptado = '';

const Encriptar= txt => {
  // Función para Encriptar un mensaje completo
  msjEncriptado= txt.replace(/a|e|i|o|u/g, msjEncriptar); // Reemplaza cada letra por su versión Encriptda
  toggleElementVisibility('ocultar', false); // Oculta el elemento con id 'ocultar'
  toggleElementVisibility('resultado', true); // Muestra el elemento con id 'resultado'
  toggleElementVisibility('copiar', true); // Muestra el elemento con id 'copiar'
  return msjEncriptado;
};

const msjDesencriptar = txt => {
  switch (txt) {
    case 'ia':
      return 'a';
    case 'enter':
      return 'e';
    case 'imes':
      return 'i';
    case 'ober':
      return 'o';
    case 'ufat':
      return 'u';
    default:
      return txt;
  }
};

const Desencriptar = txt => {
  const msjDesEncriptado = txt.replace(/ia|enter|imes|ober|ufat/g, mjsDesencriptar);
  if (txt === msjEncriptado) return msjFinal;
  else return msjDesencriptado;
};

btnEncriptar.addEventListener("click", event => {
  event.preventDefault();
  const txt = msj.value;
  const msjSeguro = Encriptar(txt);
  msjFinal.value = msjSeguro;
});

btnDesencriptar.addEventListener("click", event => {
  event.preventDefault();
  const txt = msj.value;
  const msjSeguro = Desencriptar(txt);
  msjFinal.value = msjSeguro;
});

btnCopiar.addEventListener("click", event => {
  event.preventDefault();
  msjFinal.select();
  navigator.clipboard.writeText(msjFinal.value);
});

const toggleElementVisibility = (elementId, shouldShow) => {
  const element = document.getElementById(elementId);
  if (shouldShow) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
};
