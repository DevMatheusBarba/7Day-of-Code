function start() {
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value;
    var language = document.getElementById("language").value;
    alert(
        "OLá " +
        name +
        " você tem  " +
        age +
        " anos e já está aprendendo " +
        language +
        "!"
    );
    var gostou = prompt("VVocê gosta de estudar" + language + " Responda com o número 1 para SIM ou 2 para NÃO.")
    if (gostou == "1") {
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
    }
    else if (gostou == "2"){
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    }
        if (gostou != '2' || '1') {
            alert('Opção selecionada invalida!')
        }
}