function abrirImagem(img) {
  const modal = document.getElementById("modal");
  const imgModal = document.getElementById("imgModal");

  modal.style.display = "flex";
  imgModal.src = img.src;
}

function fecharImagem() {
  document.getElementById("modal").style.display = "none";
}

/* BOTÃO X */
document.querySelector(".fechar").onclick = fecharImagem;

/* clicar fora fecha */
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};