const portfolioitems = document.querySelectorAll('.portfolio-item-wrapper');
    portfolioitems.forEach(portfolioitem => {
        portfolioitem.addEventListener('mouseover', () => {
            portfolioitem.childNodes[1].classList.add('img-darken');
        })

        portfolioitem.addEventListener('mouseout', () => {
            portfolioitem.childNodes[1].classList.remove('img-darken');
        })
    });

//For tab Initeration
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.portfolio-items-wrapper');

// Select tab content
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border')

    // Grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    //Add the show class
    tabContentItem.classList.add('show');
}


/*  For intersection observer  */
const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');


const faders = document.querySelectorAll('.fade-in');


const sliders = document.querySelectorAll('.slide-in');


// Section One
const sectionOneOptions ={
    rootMargin: '-200px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('nav-scrolled');
        }else{
            header.classList.remove('nav-scrolled')
        }
    });
}, sectionOneOptions);


sectionOneObserver.observe(sectionOne);


// Section Two
const appearOptions = {
    threshold:0,
    rootMargin:'0px 0px -250px 0px'
};


const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// Section Three
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));