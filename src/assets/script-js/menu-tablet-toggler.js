
const iconsTogglerParent = document.querySelectorAll('.toggle-icons ');
const iconsToggler = document.querySelectorAll('.toggle-icons > i');
const menuConnexion = document.querySelector('.connexion');
const userMenu = document.querySelector('.user-infos')  ;


Array.from(iconsToggler).forEach((icon) => {

    icon.addEventListener('click', function ()  {

    iconsTogglerParent.forEach((parent) => parent.classList.toggle('open'));

        document.body.classList.toggle('overflow-hidden');
      if (menuConnexion != null) {
        menuConnexion.classList.toggle('displayed')
      }else if (userMenu != null ) {
        userMenu.classList.toggle('displayed')
      }else{
        return;
      }

    })
})

if ( userMenu != null)  {

    userMenu.addEventListener('click', (event) => {
    
        if (event.target !== event.currentTarget) return;
    
        document.body.classList.toggle('overflow-hidden');
        if ( userMenu != null) {
            userMenu.classList.toggle('displayed')
          }else if (menuConnexion != null ) {
            menuConnexion.classList.toggle('displayed')
          }
    
         iconsTogglerParent.forEach((parent) => parent.classList.remove('open'));
    
    
    
    })

}

if (menuConnexion != null) {

    menuConnexion.addEventListener('click', (event) => {
    
        if (event.target !== event.currentTarget) return;
    
        document.body.classList.toggle('overflow-hidden');
        if (menuConnexion != null) {
            menuConnexion.classList.toggle('displayed')
          }else if (userMenu != null ) {
            userMenu.classList.toggle('displayed')
          }
    
         iconsTogglerParent.forEach((parent) => parent.classList.remove('open'));
    
    })

}