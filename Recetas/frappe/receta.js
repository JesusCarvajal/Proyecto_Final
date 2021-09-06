const btn = document.querySelector(".barra_btn");

btn.addEventListener("click", function(){
    document.getElementById("barra_lateral").classList.toggle('active');
    document.getElementById("info_receta").classList.toggle('active');
});