function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;
}

function criaLinha(usuario) {
    document.createElement('tr');  //cria linha
    td = document.createElement('td');  //cria coluna
    tdNome = document.createElement('td');
    tdId.innerHTML = usuario.id;    //add filho
    tdNome.innerHTML = usuario.nome;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;

}

function main() {
    let data = fazGet('http://127.0.0.1:5000/get/usuarios');
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById('tabela')
    usuarios.forEach(element => {
        let linha = criaLinha(element); //pega linha que foi criada e add na tabela
        tabela.appendChild(linha);
    })
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela

}

main();