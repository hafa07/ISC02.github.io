// const btn= document.querySelectorAll("nav .menu_button img")
// const menu_list= document.querySelectorAll("nav .menuhid")

// btn[0].addEventListener("click",function(){
//     menu_list[0].classList.toggle("active")
// })
/*panel*/
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>{
panel.addEventListener("click",() =>{
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) =>{
        panel.classList.remove("active");
    })
}
/*faq */
var acc = document.getElementsByClassName("accordion");
var i;
for ( i = 0 ; i < acc.length; i++ ){
    acc[i].addEventListener("click",function (){
        this.classList.toggle("active")
        this.parentElement.classList.toggle("active");
         var panel = this.nextElementSibling;
         if ( panel.style.display === "block"){
            panel.style.display="none";
         } else {
            panel.style.display="block"
         }
    });
}