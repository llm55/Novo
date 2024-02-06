

function teste(){

    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    if(nome == "juquinha" && senha != "123"){
        alert("Usuário ou senha inválidos");
    }

   
    alert(nome);
    alert (senha);
}