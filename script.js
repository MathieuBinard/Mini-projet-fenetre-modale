//je sélectionne et je stocke la DIV modal-container
const modal = document.querySelector('.modal-container');
console.log(modal);
//je sélectionne le bouton
const btn = document.querySelector('.btn-success');
console.log(btn);
//je sélectionne le code
const code = document.querySelector('.code');
console.log(code);
//je sélectionne l'icône
const icone = document.querySelector('.fa-times');
console.log(icone);

window.addEventListener('scroll', displayModal);
    function displayModal(){
    console.log('défilement détecté !');

    let hauteur = document.documentElement.scrollTop;
    console.log(hauteur, 'nombre de pixels depuis le haut de la page');

    if (hauteur > 400){
        console.log('Affichage de la modale')
        modal.style.display = "flex";
    };
}
    btn.addEventListener('click', function(){
        console.log('Bouton cliqué');
        //je rends visible le code
        code.style.display = "block";
        //je rends le invisible le bouton
        btn.style.display = "none";
});

    icone.addEventListener('click', function(){
        console.log('icone cliquée');
        //je rends invisible la DIV modal-container
        modal.style.display = "none";
        //j'annule l'évènement
        window.removeEventListener('scroll', displayModal)
});
