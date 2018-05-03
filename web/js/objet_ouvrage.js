

var titre, //titre ouvrage
        ouvrageID, //id ouvrage
        auteur, //auteur
        editeur;//editeur
//Objet ouvrage

function ouvrageObj()
{
    // public property
    this.titre = '';
    this.ouvrageID = '';
    this.auteur = '';
    this.editeur = '';

    // private constructor 
    __construct = function (that) {

        that.titre = "As the man thinketh in his heart";
        that.ouvrageID = 0;
        that.auteur = 'Wise Solomon';
        that.editeur = 'UPG';
    }(this);

    // getters and setters

    this.getTitre = function () {
        return this.titre;

    };
    this.setTitre = function (titre) {
        this.titre = titre;
    };
    this.getOuvrageID = function () {
        return this.ouvrageID;
    };

    this.setOuvrageID = function (ouvrageID) {
        this.ouvrageID = ouvrageID;
    };
    this.getAuteur = function () {
        return this.auteur;
    };

    this.setAuteur = function (auteur) {
        this.auteur = auteur;
    };

    this.getEditeur = function () {
        return this.editeur;
    };
    this.setEditeur = function (editeur) {
        this.editeur = editeur;
    };

}
