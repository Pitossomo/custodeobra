document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
    const supplyName = document.getElementById("supplyName").value;
    console.log(`Procurando preço de ${supplyName}`);
    fetch("https://pitossomo.github.io/custodeobra/data/sinapi_go_2024_05.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        const supply = data.find((s) => s["DESCRICAO"] === supplyName);
        if (supply) {
          alert(
            `Preço do Insumo: R$ ${supply["PRECO"]} / ${supply["UNIDADE DE MEDIDA"]}`
          );
        } else {
          alert("Insumo não encontrado.");
        }
      })
      .catch((error) => console.error("Erro ao buscar insumos:", error));
  };
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Criando insumos");
  const selectElement = document.getElementById("supplyName");

  fetch("https://pitossomo.github.io/custodeobra/data/sinapi_go_2024_05.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((supply) => {
        const option = document.createElement("option");
        option.value = supply["DESCRICAO"];
        option.textContent = supply["DESCRICAO"];
        selectElement.appendChild(option);
      });
    })
    .catch((error) => console.error("Erro ao carregar insumos:", error));
});
