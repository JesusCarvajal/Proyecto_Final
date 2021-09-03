const btn = document.querySelector(".barra_btn");

btn.addEventListener("click", function(){
    document.getElementById("barra_lateral").classList.toggle('active');
    document.getElementById("masala_chai").classList.toggle('active');
    document.getElementById("frappe_de_chocolate").classList.toggle('active');
    document.getElementById("frappe").classList.toggle('active');
    document.getElementById("Mocha").classList.toggle('active');
});

