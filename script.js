/* const toggle = document.getElementById("menu-toogle-id");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    console.log("estou funcionando")
  navLinks.classList.toggle("show");
});
 */


/* SEÇÃO DE FAQ - ABRIR E FECHAR RESPOSTA */

const pergunta = document.querySelectorAll(".question");
pergunta.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const resposta = pergunta.nextElementSibling;
    resposta.classList.toggle("show");
  });
});
