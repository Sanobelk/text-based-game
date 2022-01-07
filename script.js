
let userName;
let level = 1;
let money = 100;
let scene;

/*
{
let modal = document.createElement('div');
modal.classList.add('modal');
modal.style.height = "300px";
modal.style.width = "600px";
document.body.appendChild(modal);

let userNameInput = document.createElement('input');
let confirmName = document.createElement('button');
let resetName = document.createElement('button');

confirmName.textContent = "Confirm";
resetName.textContent = "Reset";

modal.appendChild(userNameInput);
modal.appendChild(confirmName);
modal.appendChild(resetName);

confirmName.onclick = () => {
    if(userNameInput.value == "" || userNameInput.value == null){
        alert("Please enter a valid name!");
    }else{
        userName = userNameInput.value;
        modal.remove();
        document.getElementById('container').hidden = false;
        document.getElementById('playerName').innerText = userName;
        document.getElementById('playerLevel').innerText = level;
        document.getElementById('playerMoney').innerText = money;
    }
    
}
resetName.onclick = () => userNameInput.value = "";

}
*/

scene = document.getElementById("scene");

scene.src = '/images/scenes/town.jpg';

let save = document.getElementById('saveGame');
save.addEventListener('click',() =>{
    savePrompt();
});


function updateStats(){
    document.getElementById('playerName').innerText = userName;
    document.getElementById('playerLevel').innerText = level;
    document.getElementById('playerMoney').innerText = money;
}

function saveGame(){
    localStorage.setItem('name', userName);
    localStorage.setItem('level', level);
    localStorage.setItem('money', money);
    
}

/*auto save*/
setInterval(()=>{
    saveGame();
    console.log("Autosave complete...");
},60000);

function savePrompt(){
    let ans = confirm('Save Game?');
    if(ans == true){
        alert('Game saved');
        saveGame();
    }else{
        alert('Game not saved');
    }
};

let load = document.getElementById('loadGame');
load.addEventListener('click', () =>{
    loadPrompt();
})

function loadPrompt(){
    let ans = confirm('Load Game?');
    if(ans == true){
        alert('Game Loaded');
        userName = localStorage.getItem('name');
        level = localStorage.getItem('level');
        money = localStorage.getItem('money');
        updateStats();
    }
}

