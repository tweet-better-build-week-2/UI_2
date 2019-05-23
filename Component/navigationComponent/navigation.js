class NavBar {
    constructor(navElement) {
        this.navElement = navElement;
        this.handburger = this.navElement.querySelector('.fa-bars');
        this.handburger.addEventListener('click', this.show.bind(this))
    }

    show () {
       const linkNav= this.navElement.querySelector('.links');
       linkNav.classList.toggle('show-link');
        // linkNav.classList.contains('show-link') 
        // ? TweenMax.to(linkNav, 2, {x:10, display:'flex'}) 
        // : TweenMax.to(linkNav,2 , {x:0, display:'none'})
    }

    
}

const navElement = document.querySelector('nav');
new NavBar(navElement)