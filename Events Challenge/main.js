let button = document.getElementById("submitButton");
let nameInput = document.getElementById("nameInput");
let output = document.getElementById('outputDiv');

button.addEventListener('click', () => {
    
    
    if(nameInput.value === ""){
        output.innerText = "Error: please enter a name.";
        output.style.color = "red";
        output.style.backgroundColor = "white";
    }
    else{
    output.innerText = `Welcome ${nameInput.value}!`;
    output.style.backgroundColor = "green";
    output.style.color = "black";
    }
    nameInput.value = "";
})


let trackArea = document.getElementById("mouseTracker");
let coordinates = document.getElementById("coordinates");

trackArea.addEventListener("mousemove", (e) =>{
    coordinates.innerText = `Mouse Coordinates: X: ${e.clientX}, Y: ${e.clientY}`
    

});


nameInput.addEventListener("keydown", (e)=>{
    console.log(e.key);
    if(e.key === "Enter" && nameInput.value != ""){
        output.innerText = `Welcome ${nameInput.value}!`;
        output.style.backgroundColor = "green";
        output.style.color = "black";
        nameInput.value = "";
    }
});