window.onload = function(){
    var parag = document.createElement("p");
    var demo = document.createAttribute("id");
    demo.value = "demo";
    parag.setAttributeNode(demo);
    parag.appendChild(document.createTextNode("Hello"));
    document.body.appendChild(parag);
};

function changeP(){
    document.getElementById("demo").innerHTML= "Paragraph changed.";
};

function removeB(){
    document.getElementById("button1").remove();
    document.getElementById("button2").remove();
}
