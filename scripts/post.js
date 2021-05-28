function post(url, body) {

    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body));

    request.onload = function () {
        console.log(this.responseText)
        location.reload()
    }

    return request.responseText

}

function CadastrarProduto() {
    event.preventDefault();
    let url = "http://18.231.42.102:3000/api/produtos";

    let produto = document.getElementById("produto").value;

    body = {
        "descricao": produto, 
    }

    
    post(url, body)
    
}

function alterarProduto(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://18.231.42.102:3000/api/produtos/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    
}