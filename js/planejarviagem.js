const form = document.querySelector("form");
const cardsContainer = document.querySelector(".cards");

window.addEventListener("DOMContentLoaded", () => {
  const viagens = JSON.parse(localStorage.getItem("viagens")) || [];
  viagens.forEach(viagem => criarCard(viagem));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.elements[0].value.trim();
  const destino = form.elements[1].value.trim();
  const data = form.elements[2].value;
  const anotacoes = form.elements[3].value.trim();

  if (!nome || !destino || !data) {
    alert("Preencha todos os campos obrigatórios!");
    return;
  }

  const novaViagem = { nome, destino, data, anotacoes };
  salvarViagem(novaViagem);
  criarCard(novaViagem);
  form.reset();
});

function salvarViagem(viagem) {
  const viagens = JSON.parse(localStorage.getItem("viagens")) || [];
  viagem.id = Date.now();
  viagens.push(viagem);
  localStorage.setItem("viagens", JSON.stringify(viagens));
}

function criarCard(viagem) {
  const { id, nome, destino, data, anotacoes } = viagem;

  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = id;

  card.innerHTML = `
    <h3>${nome}</h3>
    <p><strong>Destino:</strong> ${destino}</p>
    <p><strong>Data:</strong> ${data}</p>
    ${anotacoes ? `<p><strong>Anotações:</strong> ${anotacoes}</p>` : ""}
    <div class="card-buttons">
      <button class="excluir">Excluir</button>
    </div>
  `;

  card.querySelector(".excluir").addEventListener("click", () => {
    excluirViagem(id);
    card.remove();
  });

  cardsContainer.appendChild(card);
}

function excluirViagem(id) {
  let viagens = JSON.parse(localStorage.getItem("viagens")) || [];
  viagens = viagens.filter(v => v.id !== id);
  localStorage.setItem("viagens", JSON.stringify(viagens));
}