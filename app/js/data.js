class data{};

const PEOPLES = [
    {
        id : 1,
        firstName : "Tony",
        lastName : "Curtis",
        picture : "Tony.jpg",
        jobs : ["acteur"],
        tags : ["années 70", "Hollywood", "Amicalement vôtre"],
        birthDate : "1925-03-06",
        deathDate : "2010-09-23",
        summary : "L'acteur Tony Curtis a tiré sa révérence le 29 septembre 2010 à l'âge de 85 ans. Nous vous proposons un retour sur la carrière étonnante de ce grand acteur qui aura su marquer de son empreinte aussi bien le grand que le petit écran.",
        biography : null,
        filmography : null,
    },
    {
        id : 2,
        firstName : "Farrah",
        lastName : "Fawcett",
        picture : "Farah.jpg",
        jobs : ["actrice"],
        tags : ["années 70", "Drôles de dames"],
        birthDate : "1947-02-02",
        deathDate : null,
        summary : "La blonde égérie de années 70 disparaissait brutalement le 25 juin 2009. <br/>Retour sur la carrière d'une \"Drôle de Dame\" qui nous a cruellement rappelé(e)s que les anges meurent aussi...",
        biography : null,
        filmography : null,
    },
    {
        id : 3,
        firstName : "Tony",
        lastName : "Curtis",
        picture : "Tony.jpg",
        jobs : ["acteur"],
        tags : ["années 70", "Hollywood", "Amicalement vôtre"],
        birthDate : "1925-03-06",
        deathDate : "2010-09-23",
        summary : "L'acteur Tony Curtis a tiré sa révérence le 29 septembre 2010 à l'âge de 85 ans. Nous vous proposons un retour sur la carrière étonnante de ce grand acteur qui aura su marquer de son empreinte aussi bien le grand que le petit écran.",
        biography : null,
        filmography : null,
    },
    {
        id : 4,
        firstName : "Farrah",
        lastName : "Fawcett",
        picture : "Farah.jpg",
        jobs : ["actrice"],
        tags : ["années 70", "Drôles de dames"],
        birthDate : "1947-02-02",
        deathDate : "2009-06-25",
        summary : "La blonde égérie de années 70 disparaissait brutalement le 25 juin 2009. Retour sur la carrière d'une \"Drôle de Dame\" qui nous a cruellement rappelé(e)s que les anges meurent aussi...",
        biography : null,
        filmography : null,
    },
    {
        id : 5,
        firstName : "Tony",
        lastName : "Curtis",
        picture : "Tony.jpg",
        jobs : ["acteur"],
        tags : ["années 70", "Hollywood", "Amicalement vôtre"],
        birthDate : "1925-03-06",
        deathDate : "2010-09-23",
        summary : "L'acteur Tony Curtis a tiré sa révérence le 29 septembre 2010 à l'âge de 85 ans. Nous vous proposons un retour sur la carrière étonnante de ce grand acteur qui aura su marquer de son empreinte aussi bien le grand que le petit écran.",
        biography : null,
        filmography : null,
    },
    {
        id : 6,
        firstName : "Farrah",
        lastName : "Fawcett",
        picture : "Farah.jpg",
        jobs : ["actrice"],
        tags : ["années 70", "Drôles de dames"],
        birthDate : "1947-02-02",
        deathDate : "2009-06-25",
        summary : "La blonde égérie de années 70 disparaissait brutalement le 25 juin 2009. Retour sur la carrière d'une \"Drôle de Dame\" qui nous a cruellement rappelé(e)s que les anges meurent aussi...",
        biography : null,
        filmography : null,
    },
    {
        id : 7,
        firstName : "Tony",
        lastName : "Curtis",
        picture : "Tony.jpg",
        jobs : ["acteur"],
        tags : ["années 70", "Hollywood", "Amicalement vôtre"],
        birthDate : "1925-03-06",
        deathDate : "2010-09-23",
        summary : "L'acteur Tony Curtis a tiré sa révérence le 29 septembre 2010 à l'âge de 85 ans. Nous vous proposons un retour sur la carrière étonnante de ce grand acteur qui aura su marquer de son empreinte aussi bien le grand que le petit écran.",
        biography : null,
        filmography : null,
    },
    {
        id : 8,
        firstName : "Farrah",
        lastName : "Fawcett",
        picture : "Farah.jpg",
        jobs : ["actrice"],
        tags : ["années 70", "Drôles de dames"],
        birthDate : "1947-02-02",
        deathDate : "2009-06-25",
        summary : "La blonde égérie de années 70 disparaissait brutalement le 25 juin 2009. Retour sur la carrière d'une \"Drôle de Dame\" qui nous a cruellement rappelé(e)s que les anges meurent aussi...",
        biography : null,
        filmography : null,
    },
    {
        id : 9,
        firstName : "Tony",
        lastName : "Curtis",
        picture : "Tony.jpg",
        jobs : ["acteur"],
        tags : ["années 70", "Hollywood", "Amicalement vôtre"],
        birthDate : "1925-03-06",
        deathDate : "2010-09-23",
        summary : "L'acteur Tony Curtis a tiré sa révérence le 29 septembre 2010 à l'âge de 85 ans. Nous vous proposons un retour sur la carrière étonnante de ce grand acteur qui aura su marquer de son empreinte aussi bien le grand que le petit écran.",
        biography : null,
        filmography : null,
    },
    {
        id : 10,
        firstName : "Farrah",
        lastName : "Fawcett",
        picture : "Farah.jpg",
        jobs : ["actrice"],
        tags : ["années 70", "Drôles de dames"],
        birthDate : "1947-02-02",
        deathDate : "2009-06-25",
        summary : "La blonde égérie de années 70 disparaissait brutalement le 25 juin 2009. Retour sur la carrière d'une \"Drôle de Dame\" qui nous a cruellement rappelé(e)s que les anges meurent aussi...",
        biography : null,
        filmography : null,
    }
];

data.getPeoples = function(){
    return PEOPLES;
}

data.getPeopleById = function(id){
    for (var i = 0; i<PEOPLES.length;i++){
        if ( PEOPLES[i].id == id ) return PEOPLES[i];
    }
    return null;
}

exports.PEOPLES = PEOPLES;
module.exports = data;
