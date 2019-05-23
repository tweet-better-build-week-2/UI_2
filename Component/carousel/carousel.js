const testimonies = [
    {
        id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste rem quaerat ducimus natus reiciendis quisquam deleniti quidem aperiam itaque laudantium assumenda reprehenderit, minima exercitationem sequi, beatae ut officia praesentium?" ,
         img: 'avater1.png' , alt: 'first user'
    },
    {
        id: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste rem quaerat ducimus natus reiciendis quisquam deleniti quidem aperiam itaque laudantium assumenda reprehenderit, minima exercitationem sequi, beatae ut officia praesentium?" ,
         img: 'avater2.png' , alt: 'second user'
    },
    {
        id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste rem quaerat ducimus natus reiciendis quisquam deleniti quidem aperiam itaque laudantium assumenda reprehenderit, minima exercitationem sequi, beatae ut officia praesentium?" ,
         img: 'avater3.png', alt: 'third user'
    }
]


class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.count = 1;
        this.time = 1
        this.carouselDiv = this.carouselElement.querySelector('.slide-carousel');
        this.text = document.createElement('p');
        this.img = document.createElement('img');
        this.carouselDiv.appendChild(this.img);
        this.carouselDiv.appendChild(this.text);
        this.rightSlideBtn = this.carouselElement.querySelector('.right-slide')
        this.leftSlideBtn = this.carouselElement.querySelector('.left-slide');
        window.addEventListener('load', this.loadCarousel.bind(this));
        this.showInterval()
        this.rightSlideBtn.addEventListener('click', (e)=>{
            this.slideBtn(e.target)
        });
        this.leftSlideBtn.addEventListener('click',  (e)=>{
            this.slideBtn(e.target)
        });
    }

    loadCarousel () {
        testimonies.map((testimony, index) =>{
            if (index+1 === this.count) {
                this.img.src = `../assests/${testimony.img}`
                this.text.textContent = testimony.text;
                this.img.alt = testimony.alt;
            }
        })
    }

    show () {
        this.count > 3 ? this.count = 1 : this.count++;
        this.loadCarousel();
   }

    slideBtn (e) {
        this.show()
        clearInterval(this.showInterval.bind(this))
        e.classList.contains('right-slide') ? TweenMax.from(this.carouselDiv, 1, {x:-300, ease: Power1.easeOut})
        : TweenMax.from(this.carouselDiv, 1, {x:300, ease: Power1.easeOut})

    }

    showInterval () {
        setInterval(()=>{
            this.show();
            TweenMax.from(this.carouselDiv, 1, {scale:1.3,opacity: 0.7})
        }, 20000)
    }
}

const carouselElement = document.querySelector('.carousel-card');
new Carousel(carouselElement);