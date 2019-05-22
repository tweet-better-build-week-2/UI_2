const testimonies = [
    {
        id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste rem quaerat ducimus natus reiciendis quisquam deleniti quidem aperiam itaque laudantium assumenda reprehenderit, minima exercitationem sequi, beatae ut officia praesentium?" ,
         img: 'avater1.png'
    },
    {
        id: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste rem quaerat ducimus natus reiciendis quisquam deleniti quidem aperiam itaque laudantium assumenda reprehenderit, minima exercitationem sequi, beatae ut officia praesentium?" ,
         img: 'avater2.png'
    },
    {
        id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste rem quaerat ducimus natus reiciendis quisquam deleniti quidem aperiam itaque laudantium assumenda reprehenderit, minima exercitationem sequi, beatae ut officia praesentium?" ,
         img: 'avater3.png'
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
        this.rightSlideBtn.addEventListener('click', this.show.bind(this));
        this.leftSlideBtn.addEventListener('click', this.show.bind(this))
    }

    loadCarousel () {
        testimonies.map((testimony, index) =>{
            if (index+1 === this.count) {
                this.img.src = `../assests/${testimony.img}`
                this.text.textContent = testimony.text;
            }
        })
    }

    show () {
        this.count > 3 ? this.count = 1 : this.count++;
        this.loadCarousel();
    }

    showInterval () {
        setInterval(()=>{
            this.show()
        }, 5000)
    }
}

const carouselElement = document.querySelector('.carousel-card');
new Carousel(carouselElement);