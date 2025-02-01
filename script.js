// Message de bienvenue dans la console
console.log("Bienvenue sur Cryptonia20 !");

// Effet de survol sur les boutons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.transform = "scale(1.1)";
            button.style.transition = "0.3s";
        });

        button.addEventListener("mouseout", function() {
            button.style.transform = "scale(1)";
        });
    });
});
