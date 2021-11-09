const panals = document.querySelectorAll('.contenar div');

panals.forEach((panal) =>{
    panal.addEventListener('click', () => {
        remoceActiveClasses()
        panal.classList.add('active')
    })
})

function remoceActiveClasses(){
    panals.forEach((pnal) => {
        pnal.classList.remove('active')
    })
}