// Vanilla hover effect 
VanillaTilt.init(document.querySelector(".pic"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".pic"));