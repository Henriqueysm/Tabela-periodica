// Detectar a orientação da tela
window.addEventListener("orientationchange", function() {
    if (window.innerHeight > window.innerWidth) {
        // Modo retrato
        document.body.classList.remove("landscape");
    } else {
        // Modo paisagem
        document.body.classList.add("landscape");
    }
});

// Verifica a orientação inicial da página
if (window.innerHeight > window.innerWidth) {
    // Modo retrato
    document.body.classList.remove("landscape");
} else {
    // Modo paisagem
    document.body.classList.add("landscape");
}
