
function enviarWhats(event) {
    event.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5561994187591";
  const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
  const mensagemFormatada = encodeURIComponent(texto);
  //const url =`https://wa.link/2r92j3=${mensagemFormatada}`;
  const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

  window.open(url, "_blank");
}
