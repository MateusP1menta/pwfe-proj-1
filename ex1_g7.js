function nMostrar(){
    let nome = document.getElementById("nAluno").value;
    let nota1 = parseFloat(document.getElementById("n1").value);
    let nota2 = parseFloat(document.getElementById("n2").value);
    media =  (nota1 + nota2) / 2;
    console.log(media);
    
    if(media >= 7){
        document.getElementById("Info").textContent = "O aluno: " + nome + " foi " + "Aprovado!" + " O resultado da media deu: " + media;
    }else if(media >= 5 && media < 7){
        document.getElementById("Info").textContent = "O aluno: " + nome + " ficou de " + "Recupração!" + " O resultado da media deu: " + media;
    }else{
        document.getElementById("Info").textContent = "O aluno: " + nome + " foi " + "Reprovado!" + " O resultado da media deu: " + media;
    }
}

function listaAlunos(){
    return JSON.parse(localStorage.getItem('alunos')) || [];
}
function salvarLista(lista){
    localStorage.setItem('alunos', JSON.stringify(lista));
}
let listaAluno = listaAlunos();


function addListaAlunos(){
    let nome = document.getElementById("nAluno").value;
     if (nome && media){
        listaAluno.push({nome, media});
        salvarLista(listaAluno);
        limparCampos();
    }
}
function mostrarLista(){
    let listarAluno = listaAlunos();
        let listaAlunosElement = document.getElementById("lista-alunos");
        listaAlunosElement.innerHTML = "";
            listarAluno.forEach(function(aluno){
                let item = document.createElement("li");
                item.textContent = "Nome: " + aluno.nome + " - Média: " + aluno.media;
                listaAlunosElement.appendChild(item);
            });
    }
    function limparCampos(){
        document.getElementById("nAluno") = "";
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }