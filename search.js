// Insert select options from data
document.addEventListener("DOMContentLoaded", function () {
  console.log("Criando insumos");
  console.log(SUPPLIES);
  const selectElement = document.getElementById("supplyName");

  SUPPLIES.forEach((listItem) => {
    const option = document.createElement("option");
    option.value = listItem["DESCRICAO"];
    option.textContent = listItem["DESCRICAO"];
    selectElement.appendChild(option);
  });
});

// Search price from selected option
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
    const supplyName = document.getElementById("supplyName").value;

    let i = 0;
    let supplyFound = false;
    while (!supplyFound && i < SUPPLIES.length) {
      if (SUPPLIES[i]["DESCRICAO"] === supplyName) {
        supplyFound = true;
        const supply = SUPPLIES[i];
        alert(
          `Preço do Insumo: R$ ${supply["PRECO"]} / ${supply["UNIDADE DE MEDIDA"]}`
        );
      }
      i++;
    }
  };
});
