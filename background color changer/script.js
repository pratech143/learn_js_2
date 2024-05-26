const bgColors = document.querySelectorAll(".colors");
let body = document.getElementsByTagName("body")[0];
const select=document.querySelectorAll(".select")[0];
for (const color of bgColors) {
    let id = color.getAttribute("id");
    console.log(id);
    color.setAttribute("style", `background-color: ${id}; box-shadow: 0 4px 8px ${id};`);
    console.log(color);
    color.addEventListener("click", function(e) {
        body.style.backgroundColor = id;
        if(id=="black"){
            body.style.color="white";
            select.style.border="5px solid white"
        }
        else{
            body.style.color="black";
            select.style.border="5px solid black"
        }
    });
}
