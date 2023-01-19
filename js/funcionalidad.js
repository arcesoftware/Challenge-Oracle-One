const msj = document.querySelector("#textarea"); // Textarea del mensaje a cifrar/descifrar
const btnCifrar = document.querySelector("#cifrar"); // Botón para cifrar
const btnDescifrar = document.querySelector("#descifrar"); // Botón para descifrar
const btnCopiar = document.querySelector("#copiar"); // Botón para copiar el mensaje resultante
const msjFinal = document.querySelector("#resultado"); // Textarea para mostrar el mensaje resultante

const msjCifrar = txt => {
  // Función para cifrar una sola letra
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

let msjCifrado = '';

const cifrar = txt => {
  // Función para cifrar un mensaje completo
  msjCifrado = txt.replace(/a|e|i|o|u/g, msjCifrar); // Reemplaza cada letra por su versión cifrada
  toggleElementVisibility('ocultar', false); // Oculta el elemento con id 'ocultar'
  toggleElementVisibility('resultado', true); // Muestra el elemento con id 'resultado'
  toggleElementVisibility('copiar', true); // Muestra el elemento con id 'copiar'
  return msjCifrado;
};

const msjDescifrar = txt => {
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

const descifrar = txt => {
  const msjDescifrado = txt.replace(/ia|enter|imes|ober|ufat/g, msjDescifrar);
  if (txt === msjCifrado) return msjFinal;
  else return msjDescifrado;
};

btnCifrar.addEventListener("click", event => {
  event.preventDefault();
  const txt = msj.value;
  const msjSeguro = cifrar(txt);
  msjFinal.value = msjSeguro;
});

btnDescifrar.addEventListener("click", event => {
  event.preventDefault();
  const txt = msj.value;
  const msjSeguro = descifrar(txt);
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
