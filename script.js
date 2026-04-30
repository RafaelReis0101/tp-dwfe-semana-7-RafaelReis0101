const nome = prompt("Qual seu nome?");
var renda = Number(prompt("Qual sua renda?"));
var despesas = Number(prompt("Quantas despesas você possui?"));
var soma = 0;

while (isNaN(renda)) {
    renda = Number(prompt("Qual sua renda? Use somente números"));
}

while (isNaN(despesas)) {
    despesas = Number(prompt("Quantas despesas você tem? Use somente números."));
}

if (despesas < 1) {
    despesas = 1;
} else if (despesas > 5) {
    despesas = 5;
}

for (let cont = 1; cont <= despesas; cont++) {
    let conta = Number(prompt(`Qual o valor da despesa ${cont}?`));

    while (isNaN(conta)) {
        conta = Number(prompt(`Valor inválido! Digite o valor da despesa ${cont} novamente:`));
    }
    soma += conta;
}

let sobra = renda - soma;

if (soma > renda) {
    console.log(`Relatório de ${nome}: Renda R$${renda.toFixed(2)}\n Despesas R$${soma.toFixed(2)}\n Sobra R$${sobra.toFixed(2)}\n Gerenciamento de renda: Ruim`);
    alert(`Nome: ${nome}\nRenda: R$ ${renda.toFixed(2)}\nTotal em despesas: R$ ${soma.toFixed(2)}\nSobra: R$ ${sobra.toFixed(2)}\nAtenção: gastos somam mais que sua renda`);

} else {
    if (sobra >= renda * 0.3) {
        console.log(`Relatório de ${nome}: Renda R$${renda.toFixed(2)}\n Despesas R$${soma.toFixed(2)}\n Sobra R$${sobra.toFixed(2)}\n Gerenciamento de renda: Ótimo`);
        alert(`Nome: ${nome}\nRenda: R$ ${renda.toFixed(2)}\nTotal em despesas: R$ ${soma.toFixed(2)}\nSobra: R$ ${sobra.toFixed(2)}\nÓtimo! Você mantem uma ótima margem de sobra.`);

    } else {
        console.log(`Relatório de ${nome}: Renda R$${renda.toFixed(2)}\n Despesas R$${soma.toFixed(2)}\n Sobra R$${sobra.toFixed(2)}\n Gerenciamento de renda: OK`);
        alert(`Nome: ${nome}\nRenda: R$ ${renda.toFixed(2)}\nTotal em despesas: R$ ${soma.toFixed(2)}\nSobra: R$ ${sobra.toFixed(2)}\nOk, mas dá pra melhorar!`);

    }
}

