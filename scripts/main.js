function get(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    console.log(request.responseText)
    return request.responseText;
}

function criaLinha(produtos){
    linha = document.createElement("tr");
    tdEditar = document.createElement("td");
    tdProduto = document.createElement("td");
    tdExcluir = document.createElement("td");
    
    tdEditar.innerHTML = '<a href="form.html"><i class="fas fa-edit"></i></a>'
    tdProduto.innerHTML = produtos.descricao;
    tdExcluir.innerHTML = '<i class="fas fa-trash-alt" onclick="deletar()"></i>'

    linha.appendChild(tdEditar);
    linha.appendChild(tdProduto);
    linha.appendChild(tdExcluir);

    return linha;
}

function main(){
    let data = get("http://18.231.42.102:3000/api/produtos");
    let produtos = JSON.parse(data);
    let tabela = document.getElementById('tabela');

    produtos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
        
    });

    id = produtos._id;
    
}

function deletar() {
    if (window.confirm("Você realmente deseja excluir este item?")) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch("http://18.231.42.102:3000/api/produtos/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(location.reload()))
        .catch(error => console.log('error', error));
    
        
    }
}




main()