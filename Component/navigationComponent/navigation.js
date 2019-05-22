class NavBar {
    constructor(navElement) {
        this.navElement = navElement;
        this.handburger = this.navElement.querySelector('.fa-bars');
        this.handburger.addEventListener('click', this.show.bind(this))
    }

    show () {
       const linkNav= this.navElement.querySelector('.links');
       linkNav.classList.toggle('show-link');
       linkNav.classList.contains('show-link') ? TweenMax.to(linkNav, 2, {y:-10, opacity:0.7})
       : TweenMax.to(linkNav, 2, {y:-250}) 
    //    ? TweenMax.from(linkNav,2,{y:-100,x:-100, delay:1}) 
        // : TweenMax.from(linkNav,2,{y:-100,delay:1})
    //    
    }
}

const navElement = document.querySelector('nav');
new NavBar(navElement)