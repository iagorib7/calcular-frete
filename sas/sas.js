function calcularFrete() {
    var peso = parseFloat(document.getElementById('peso').value);
    var modalidade = document.getElementById('modalidade').value;
    
    if (isNaN(peso) || peso < 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira um peso válido.';
        return;
    }

    var taxaPadrao = 10.00;        
    var taxaExpresso = 20.00;     
    var taxaInternacional = 50.00; 
   
    var valorFrete;
    if (modalidade === 'padrao') {
        valorFrete = peso * taxaPadrao;
    } else if (modalidade === 'expresso') {
        valorFrete = peso * taxaExpresso;
    } else if (modalidade === 'internacional') {
        valorFrete = peso * taxaInternacional;
    }


    document.getElementById('resultado').innerText = `O valor do frete é R$ ${valorFrete.toFixed(2)}.`;
}