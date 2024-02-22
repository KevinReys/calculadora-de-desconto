function calcularDesconto() {
    const valordaCompra = parseFloat(document.getElementById('valordaCompra').value);
    const resultadoElement = document.getElementById('resultado');

    if (isNaN(valordaCompra) || valordaCompra < 0) {
        resultadoElement.textContent = "Valor inválido.";
        return;
    }

    let desconto;

    if (valordaCompra < 50) { // Se a compra for MENOR que R$ 50,00
        desconto = 0; // Sem desconto
    } else if (valordaCompra < 100) { // Se a compra for MENOR que R$ 100,00
        desconto = 5; // Desconto de 2%
    } else if (valordaCompra < 200) { // Se a compra for MENOR que R$ 200,00
        desconto = 10; // 5% de desconto
    } else if (valordaCompra >= 200) { // Se a compra for MAIOR ou IGUAL a R$ 200,00
        desconto = 15; // 10% de desconto
    } else {
        desconto = 20; // 15% de desconto (caso a compra não se enquadre em nenhuma das condições anteriores)
    }

    const valorDesconto = (valordaCompra * desconto) / 100;
    resultadoElement.textContent = `Seu desconto é de R$${valorDesconto.toFixed(2)}.`;
}
