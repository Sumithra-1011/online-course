// Pick Your Course tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// owlCarousel
$(".carousell").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText : [
        '<i class="fa-solid fa-angle-right"></i>',
        '<i class="fa-solid fa-angle-left"></i>'
    ],
    responsive: {
        0:{
            items:1,
            nav: true,

        },
        768:{
            items:1,
            nav:true,
        },
        992:{
            items:1,
            nav:true,
        }
    }
});
const totop=document.querySelector('.scroll-btn')
console.log(totop)
// scroll top button
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        totop.classList.add("activee");
    }else{
        totop.classList.remove("activee")
    }
})


