class NavBar {
    constructor(navElement) {
        this.navElement = navElement;
        this.handburger = this.navElement.querySelector('.fa-bars');
        this.handburger.addEventListener('click', this.show.bind(this))
    }

    show () {
       const linkNav= this.navElement.querySelector('.links');
       linkNav.classList.toggle('show-link');
    }

    
}

const navElement = document.querySelector('nav');
new NavBar(navElement)