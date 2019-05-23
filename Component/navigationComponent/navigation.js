class NavBar {
    constructor(navElement) {
        this.navElement = navElement;
        this.handburger = this.navElement.querySelector('.fa-bars');
        this.isOpen = false
        this.handburger.addEventListener('click', this.show.bind(this))
    }

    show () {
       const linkNav= this.navElement.querySelector('.links');
       linkNav.classList.toggle('show-link');
        if (this.isOpen) {
            TweenMax.from(linkNav, 1, {y:100})
            this.isOpen = false
        } else {
            TweenMax.from(linkNav, 1, {y:-50})
            this.isOpen = true
        }
    }

    
}

const navElement = document.querySelector('nav');
new NavBar(navElement)