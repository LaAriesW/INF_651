//script to filter news types

var blogBtn = document.getElementById('blog-btn');
var guideBtn = document.getElementById('guide-btn');
var cards = document.querySelectorAll('.card')
var blogCards = document.querySelectorAll('.blog')
var guideCards = document.querySelectorAll('.guide')

blogBtn.addEventListener('click', () => {
    blogBtn.classList.toggle("active");
    
    blogCards.forEach(element => {
        element.classList.toggle("active");
    });
    //if active hide non blog news

    cards.forEach(element => {
        if(!element.classList.contains("active")){ 
            element.style.display = 'none';
        }
        if(element.classList.contains("active")){ 
            element.style.display = 'block';
        }
    });
    //if neither active, then show all
    if(!blogBtn.classList.contains('active') && !guideBtn.classList.contains('active')){
        cards.forEach(element => {
            element.style.display = 'block';
        })
    }
})

guideBtn.addEventListener('click', () => {
    guideBtn.classList.toggle("active");
    guideCards.forEach(element => {
        element.classList.toggle("active");
    });
    //if active hide non blog news
    
    cards.forEach(element => {
        if(!element.classList.contains("active")){ 
            element.style.display = 'none';
        }
        if(element.classList.contains("active")){ 
            element.style.display = 'block';
        }
    });
    //if neither active, then show all
    if(!blogBtn.classList.contains('active') && !guideBtn.classList.contains('active')){
        cards.forEach(element => {
            element.style.display = 'block';
        })
    }
})



