var id = 0;

$(document).ready(function () {

    $("#ajouter").click(function () {
        var titre = document.getElementById("titre").value;//titre
        var auteur = document.getElementById("auteur").value;//auteur
        var editeur = document.getElementById("editeur").value;//editeur
        
        var ouvrageStr =  titre+";"+auteur+";"+editeur;
        ajaxAjout(ouvrageStr);

        function ajaxAjout(ouvrage) {
            $.ajax({
                type: "POST",
                url: "AjouterOuvrageServlet",
                data: "ouvrage=" + ouvrage,
                success: function (data)
                {
                    var lab = document.getElementById("labresult");
                    lab.innerHTML = data;
                    $("#ajouter").removeAttr('disabled');
                }

            });
        }

    });

});




