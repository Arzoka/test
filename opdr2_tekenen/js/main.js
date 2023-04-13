const cursor = document.getElementById("js--cursor");


//spheres
const sphere = document.getElementsByClassName("js--spheres");

//boxes

const boxes = document.getElementsByClassName("js--box");
// laat de variabele i bij 0 beginnen, 
for(let i = 0; i < boxes.length; i++){
    boxes[i].onmouseenter = function(){
        boxes[i].setAttribute("color",cursor.getAttribute("color"));

    }

}

// laat de variabele i bij 0 beginnen, 

for(let i = 0; i < sphere.length; i++){
    sphere[i].onmouseenter = function(){
        cursor.setAttribute("color",sphere[i].getAttribute("color"));
    }

}

