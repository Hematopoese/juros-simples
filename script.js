function calcular() {

    var cap = document.getElementById('cap');
    var tem = document.getElementById('tem');
    var tax = document.getElementById('tax');
    var res = document.getElementById('res');

    var capital = Number(cap.value);
    var tempo = Number(tem.value);
    var taxa = Number(tax.value);

    var taxaJ = taxa / 100;

    var juros = capital * taxaJ * tempo;
    var montante = juros + capital

    res.innerHTML = `O montante final é de ${montante.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;

}