async function converter() {
    let valor = document.getElementById("valor").value;
    let moedaOrigem = document.getElementById("moedaOrigem").value;
    let moedaDestino = document.getElementById("moedaDestino").value;

    if (valor === "" || valor <= 0) {
        alert("Insira um valor válido!");
        return;
    }

    let url = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;
    
    try {
        let resposta = await fetch(url);
        let dados = await resposta.json();
        let taxa = dados.rates[moedaDestino];
        let resultado = (valor * taxa).toFixed(2);

        document.getElementById("resultado").textContent = `Resultado: ${resultado} ${moedaDestino}`;
    } catch (erro) {
        document.getElementById("resultado").textContent = "Erro ao obter taxa de câmbio!";
    }
}
