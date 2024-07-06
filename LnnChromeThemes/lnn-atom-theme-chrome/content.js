// Obtén la fuente que deseas aplicar
var newFont = "JetBrainsMono, monospace";

// Agrega estilos CSS para cambiar la fuente
var style = document.createElement('style');
style.innerHTML = `
  * {
    font-family: ${newFont} !important;
  }
`;
document.head.appendChild(style);

// Centrar la barra de búsqueda en la parte superior
var style = document.createElement('style');
style.innerHTML = `
  .toolbar-address-bar {
    width: 300px !important;
    justify-content: center !important;
  }
`;
document.head.appendChild(style);


function updateOmnibox() {
    const titleElement = document.querySelector('.title');
    const urlInput = document.querySelector('.url');
  
    if (titleElement && urlInput) {
      urlInput.style.display = 'none';
      titleElement.style.display = 'inline';
    }
  }
  
  updateOmnibox();
  