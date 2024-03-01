document.addEventListener("DOMContentLoaded", () => {
    const texto = document.body.querySelector("#texto");
    texto.addEventListener("click",() => {
        if (texto.textContent ==="Olá Mundo")
        texto.textContent = "hello World";
        else
            texto.textContent ="Olá Mundo";
    });
});
