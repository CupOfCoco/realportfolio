const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))



// ==========scroll

const sections= document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// for typedJS

let typingText = new Typed ("#text", {
    strings: ['WEB DEVELOPER','FRONTEND DEVELOPER','WEB APP DESIGNER','WEB APP DEVELOPER'],
    typeSpeed: 35,
    startDelay:500,
    backSpeed: 35,
    backDelay: 1000,
    loop: true,
    showCursor:true
});

//FOR SCROLL REVEAL

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//scroll home

sr.reveal('.home-title' ,{})
sr.reveal('.home-scroll' ,{delay:200})
sr.reveal('.home-img' , {origin:'right', delay:4000})