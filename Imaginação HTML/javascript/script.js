function Op() {
    var Nome = document.getElementById("NomeId");
    var Op = document.getElementById("OpinId");
    if (Nome.value != "" && Op.value != "") {
        alert("Obrigado: " + Nome.value + ", sua opinião foi encaminhada com sucesso.");
    }
    else {
        alert("Preencha os campos ( NOME ) e (OPINIÃO) !!!");
    }
}

function 