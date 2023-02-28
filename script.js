let date = new Date();
let jour = date.getDate();
let mois = date.getMonth() + 1;
mois = mois.toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping: false})
let annee = date.getFullYear();
let complet = "" + annee + "-" + mois + "-" + jour;
$("#date").val(complet);
$("#savoir").focus();

setInterval(
    () => {
        $.ajax({
                url: "https://api.chucknorris.io/jokes/random",
                method: "GET",
            }
        ).done(
            (donnees) => $("#chuck").text(donnees.value));
    }, 10000
)

$("#bouton").click(
    () => {
        let nouvelElement = $('<li></li>');
        let texteSavoir = $("<h2></h2>");
        texteSavoir.html($("#savoir").val());
        nouvelElement.append(texteSavoir);
        let texteAuteur = $("<p></p>");
        texteAuteur.html("Par " + $("#auteur").val() + ", le " + $("#date").val());
        nouvelElement.append(texteAuteur);
        nouvelElement.click(supprimerSavoir);
        $("#listeSavoir").append(nouvelElement);
    }
);

// function ajouterSavoir(){
//     let nouvelElement = document.createElement('li');
//     let texteSavoir = document.createElement("h2");
//     texteSavoir.innerHTML = document.getElementById("savoir").value;
//     nouvelElement.appendChild(texteSavoir);
//     let texteAuteur = document.createElement("p");
//     texteAuteur.innerHTML = "Par " + document.getElementById("auteur").value + ", le " + document.getElementById("date").value;
//     nouvelElement.appendChild(texteAuteur);
//     nouvelElement.addEventListener("click", supprimerSavoir);
//     document.getElementById("listeSavoir").appendChild(nouvelElement);
// }

function supprimerSavoir() {
    let savoir = this.firstElementChild.innerText;
    if (window.confirm("Voulez-vous supprimer le savoir \"" + savoir + "\" ?")) {
        this.remove();
    }
}