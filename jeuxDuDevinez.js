
//Ma grande div
var body=document.body;
var grandeDiv=document.createElement('div');
grandeDiv.setAttribute('id','container');
grandeDiv.setAttribute('style','width:600px;height:200px;background-color:rgb(233,189,16); border:4px solid black;' +
    'left:100px;margin-left:200px;margin-top:100px;border-radius:10px;');
body.appendChild(grandeDiv);
//****************************************************************************************************************
//l'input pour l'entrée côté utilisateur  ;son input afin de pouvoir remplir
var createInput=document.createElement('input');
createInput.setAttribute('id','entreUtilisateur');
createInput.setAttribute('type','number');
createInput.setAttribute('style','margin-left:90px;margin-top:20px;width:400px;height:60px;' +
    'border:4px gray solid;border-radius:10px;');

grandeDiv.appendChild(createInput);
//*****************************************************************************************************************
//le bouton pour valider les entrées
var createBouton=document.createElement('button'); // je cré un élément <button>
var validation = document.createTextNode("validez");       // je cré un noeud textuel
createBouton.appendChild(validation);// j'ajoute le texte au bouton
createBouton.setAttribute('id','btnValidation');
createBouton.setAttribute('style','display:inline-block;width:100px;height:30px;border:4px solid green;margin-top:50px;margin-left:200px;');
grandeDiv.appendChild(createBouton); // j'ajoute la balise <button> à la balise <body>
//***********************************************************************************************************
//les div des issus possibles evidemment je les cache au depart:
//premierement la div si l'utilisaeur trouve le bon nombre; ne pas oublier qu'elle est d'abord cahée
var createBravo=document.createElement('div');
createBravo.setAttribute('id','bravo');
createBravo.setAttribute('style', 'text-align:center;margin-top:80px;font-size:20px;color:gray;visibility:hidden;');
grandeDiv.appendChild(createBravo);
var textBravo= document.createTextNode("vous l'avez deviné:BRAVO!!"); //mon noeud textuel
createBravo.appendChild(textBravo);
//**************************************************************************************************************
//deuxième div la div de l'echec en hidden également
var createEchec=document.createElement('div');
createEchec.setAttribute('id','echec');
createEchec.setAttribute('style','text-align:center;font-size:20px;color:gray;margin-top:80px;visibility:hidden;');
grandeDiv.appendChild(createEchec);
var textDesole=document.createTextNode("ooooh! sorry vous ne l'avez pas trouvé! vous êtes en dessous");
createEchec.appendChild(textDesole);
//***********************************************************************************************************
var deuxiemeDivEchec=document.createElement('div');
deuxiemeDivEchec.setAttribute('id','echec2');
deuxiemeDivEchec.setAttribute('style','position:absolute;text-align:center;font-size:20px;color:gray;margin-top:80px;visibility:hidden;');
grandeDiv.appendChild(deuxiemeDivEchec);
var textDesoleUN=document.createTextNode("ooooh! sorry vous ne l'avez pas trouvé! vous êtes au dessus");
deuxiemeDivEchec.appendChild(textDesoleUN);


//********************************************************************************************************
//la div du refresh(pour recommencer le jeux)
//la div pour recommencer
var createRefreshBouton=document.createElement('button');
createRefreshBouton.setAttribute('id','recommencer');
createRefreshBouton.setAttribute('style','width:100px;height:30px;border:4px solid black;' +
    'position:absolute; top:245px;margin-left:380px;');
grandeDiv.appendChild(createRefreshBouton);
var textRecommencer=document.createTextNode("REJOUER");
createRefreshBouton.appendChild(textRecommencer);
//**************************************************************************************************
//la div des essais
var createUL=document.createElement('ul');
createUL.setAttribute('id','essais');
grandeDiv.appendChild(createUL);
var createLi=document.createElement('li');
createUL.appendChild( createLi);
createLi.setAttribute('style','list-style-type:none;');
//******************************************************************************************************
//le navigateur doit stocker les 10nombres aléatoires
//création d'une div pour les nombres aléatoires
var nbreAleatoires=document.createElement('div');
nbreAleatoires.setAttribute('id','randNombre');
body.appendChild(nbreAleatoires);
//********************************************************************************************************************
//je stocke mes nombres dans une  div pour les exploiter plutard
//mes nombres aléatoires,tant qu'il n'a pas dépassé ses 10 essais donne moi des nombres au hasard
var intervalNumber=Math.random();
var ordiNombres=Math.floor(intervalNumber*100);
var createInferieurLimite=document.createElement("div");
createInferieurLimite.setAttribute('id','limite');
createInferieurLimite.setAttribute('style', 'text-align:center;font-size:20px;color:gray;margin-top:80px;visibility:hidden;');
console.log(ordiNombres);

var nbEssais=0;
//******************************************************************************************************************


//*************************************************************************************************************************
//declenchement du jeu
    function commencer() {

        var idBoutonValidation = document.getElementById('btnValidation');
        idBoutonValidation.addEventListener('click', function () {


                var idEntrez = document.getElementById('entreUtilisateur');//côté utilisateur,s'il rentre un nombre pour vérifier les conditions

                if (ordiNombres === parseInt(idEntrez.value)) {
                    var idReussi = document.getElementById('bravo');
                    idReussi.style.visibility = "visible";
                    //console.log(i);

                }
                if (ordiNombres > idEntrez.value) {
                    var idEchec = document.getElementById('echec');
                    idEchec.style.visibility = "visible";
                }else if (ordiNombres < idEntrez.value) {
                    var    idEchec2= document.getElementById('echec2');
                    idEchec2.style.visibility = "visible";

                }
        });
    }

    commencer();
//***************************************************************************************************************************
//MAINTENANT NOTRE BOUTON REJOUER
    function rejouer() {

var idLimite1=document.getElementById('nombreLimite1');
            var refreshIt = document.getElementById('recommencer');
            var idEntrez = document.getElementById('entreUtilisateur');
            refreshIt.addEventListener('click', function () {
                nbEssais++;
                if( nbEssais===9){//la condition pour stopper les essais
                  alert("vous avez épuisé vos essais désolé!");
                    var idEchec = document.getElementById('echec');
                    idEchec.style.visibility = "hidden";
                    idEntrez.value = "";
                }
                alert(nbEssais);//mon compteur du nombre d essais
                if (!idEntrez.value) {

                } else {
                    var idEchec = document.getElementById('echec');
                    var idEchec2 = document.getElementById('echec2');
                    idEchec.style.visibility = "hidden";
                    idEntrez.value = "";
                    idEchec2.style.visibility = "hidden";
                    idEntrez.value = "";

                }
            });

    }

    rejouer();
    //******************************************************************************************************************

