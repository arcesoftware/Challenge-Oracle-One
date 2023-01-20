
const msj = document.querySelector("#textarea"); // Textarea del mensaje a encriptar/desencriptar
const btnEncriptar = document.querySelector("#encriptar"); // Botón para encriptar
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

const encriptar = txt => {
  // Función para encriptar un mensaje completo
  const msjEncriptado = txt.replace(/a|e|i|o|u/g, msjEncriptar); // Reemplaza cada letra por su versión encriptada
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

const desencriptar = txt => {
  const msjDesencriptado = txt.replace(/ia|enter|imes|ober|ufat/g, msjDesencriptar);
  return msjDesencriptado;
};
btnEncriptar.addEventListener("click", event => {
  event.preventDefault();
  const txt = msj.value;
  msjFinal.value = ""; // Limpia el textarea resultante antes de asignar el nuevo valor cifrado
  const msjSeguro = encriptar(txt);
  msjFinal.value = msjSeguro;
});

btnDesencriptar.addEventListener("click", event => {
  event.preventDefault();
  const txt = msj.value;
  msjFinal.value = ""; // Limpia el textarea resultante antes de asignar el nuevo valor descifrado
  const msjSeguro = desencriptar(txt);
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
