const form = document.getElementById("form-contato");
const nome = [];
const sobrenome = [];
const telefone = [];

alert("Bem vindo a sua agenda de contatos");
let linhas = "";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adiciona_linha();
    atualiza_tabela();
});

function adiciona_linha() {
    const input_nomecontato = document.getElementById("nome-contato");
    const input_sobrenomecontato = document.getElementById("sobrenome-contato");
    const input_telefonecontato = document.getElementById("telefone-contato");

    if (telefone.includes(input_telefonecontato.value)) { // tirando a possibilidade de inserir dois telefones iguais
        alert(`O número ${input_telefonecontato.value} já é um contato da sua lista`);
    } else {
        nome.push(input_nomecontato.value);
        sobrenome.push(input_sobrenomecontato.value);
        telefone.push(input_telefonecontato.value);

        let linha = "<tr>";
        linha += `<td>${input_nomecontato.value}</td>`;
        linha += `<td>${input_sobrenomecontato.value}</td>`;
        linha += `<td>${input_telefonecontato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    input_nomecontato.value = ""; // limpado o campo após inserir os dados
    input_sobrenomecontato.value = "";
    input_telefonecontato.value = "";
}

function atualiza_tabela() {
    const corpo_tabela = document.querySelector("tbody");
    corpo_tabela.innerHTML = linhas;
}
