function trocarImagem(filename, carroname) {
    document.querySelector('.imagem').setAttribute('src', 'assets/images/' + filename);
    document.querySelector('.imagem').setAttribute('data-carro', carroname);
}

function PegarCarro() {
    let carro = document.querySelector('.imagem').getAttribute('data-carro');
    alert("O carro e: " +carro);
}