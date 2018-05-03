
var arr_ouvrages = Array();//Tableau d'ouvrages
function load() {
    sendAjaxRequestOuvrage("GetOuvrageServlet", null, function (response) {

        arr_ouvrages.length = 0;//initialisation du tableau des ouvrages
        var ouvrages_data = response.split("#@#");
        for (var i = 0; i < ouvrages_data.length; i++) {
            //Recherche d'information dans le tableau, en subdivisant par ";"
            var ouvrage_data = ouvrages_data[i].split(";");
            //Traitement d'éléments vides
            if ((ouvrage_data === null) || (ouvrage_data === undefined) || (ouvrage_data === "")) {
                continue;
            }
            var ouvrage = new ouvrageObj();
            ouvrage.setOuvrageID(ouvrage_data[0]); //id de l'ouvrage
            ouvrage.setTitre(ouvrage_data[1]);//le titre de l'ouvrage
            ouvrage.setAuteur(ouvrage_data[2]);//son auteur
            ouvrage.setEditeur(ouvrage_data[3]);//nom de l'éditeur 
            arr_ouvrages.push(ouvrage);
        }
        print_ouvrages(arr_ouvrages);//appel de la fonction print_ouvrages
    });

    function addCheckBox(chbox, id) {
        chbox.setAttribute("type", 'checkbox');
        chbox.setAttribute("name", 'checkrow');
        chbox.setAttribute("value", id);
        chbox.setAttribute("style", "width:20px; padding:4px;background-color:##F8F8F8");
    }

    //Imprimer sous forme de tableau les ouvrages
    function print_ouvrages(array) {
        array = arr_ouvrages;
        var len = array.length;
        for (var i = 1; i < len; i++) {
            //ajout d'une ligne pour chaque nouveau ouvrage
            var x = document.getElementById("resulttable").insertRow(i);

            var a0 = x.insertCell(0);// création d'une colonne pour ID ouvrage
            var a = x.insertCell(1);// création d'une colonne pour titre ouvrage
            var b = x.insertCell(2);// création d'une colonne pour auteur ouvrage
            var c = x.insertCell(3);// création d'une colonne pour editeur ouvrage


            var id = array[i - 1].getOuvrageID(); //
            var titre = array[i - 1].getTitre();
            var auteur = array[i - 1].getAuteur();
            var editeur = array[i - 1].getEditeur();

            var chbox = document.createElement("input");
            addCheckBox(chbox, id);
            a0.appendChild(chbox);
            a.innerHTML = titre;
            b.innerHTML = auteur;
            c.innerHTML = editeur;

        }
    }
}

$(document).ready(function () {

//Suppression des ouvrages sélectionnés
    $("#delete").click(function (selected_ouvrages) {
        selected_ouvrages = arr_ouvrages;
        var checkedelems = new Array();
        var inputchd = $('input:checked');
        //Parcours de tous les éléments sélectionnés
        //et leur ajout dans le tableau checkedelems
        for (var i = 0; i <= inputchd.length - 1; i++) {
            var res = $(inputchd[i]).val();
            checkedelems.push(res);
        }
        var ouvrageTable = document.getElementById('resulttable');
        //gets table
        function getTableValue(row, cell) {
            return ouvrageTable.rows[row].cells[cell].children[0];
        }
        var rowsLength = ouvrageTable.rows.length; //table length
        
        for (var j = 1; j <= rowsLength - 1; j++) {
            var id = getTableValue(j, 0).id;
            if (checkedelems.indexOf(id, 0) !== -1) {
                var indx;
                for (var t = 0; t < selected_ouvrages.length; t++) {
                    if (selected_ouvrages[t].getOuvrageID() === id) {
                        indx = t;
                        break;
                    }
                }
                //Supression de l'ouvrage de la liste
                if (~indx)
                    selected_ouvrages.splice(indx, 1);
            }
        }


        ajaxDeleteOuvrages(checkedelems);
        function ajaxDeleteOuvrages(ouvrages) {
            $.ajax({
                type: "POST",
                url: "DeleteOuvrageServlet",
                data: "ouvrages=" + ouvrages,
                success: function (response) {
                    console.log(response);
                }
            });
        }
        $("#resulttable").find("tr:gt(0)").remove(); //Supprimons d'abord ce qui existait
        //à l'exception de l'en-tête du tableau, ensuite impimer le reste
        print_ouvrages(selected_ouvrages); //Imprimer ouvrages
        $("#delete").removeAttr('disabled');
    });
});
