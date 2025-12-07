function carregar() {
  const mesg = window.document.getElementById("msg");
  const img = window.document.getElementById("imagem");

  let data = new Date();
  let hora = data.getHours();

  mesg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "manha_250.png";
    document.body.style.background = "#f6fa10ff";
  } else if (hora >= 12 && hora < 18) {
    img.src = "tarde_250.png";
    document.body.style.background = "#c7a900ff";
  } else {
    img.src = "noite_250.png";
    document.body.style.background = "#00023cff";
  }
}
