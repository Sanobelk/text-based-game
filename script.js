
let userName;
let level;
let money;

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
    userName = userNameInput.value;
    level = 1;
    money = 0;
    modal.remove();
    document.getElementById('container').hidden = false;
    document.getElementById('playerName').innerText = userName;
    document.getElementById('playerLevel').innerText = level;
    document.getElementById('playerMoney').innerText = money;
}
resetName.onclick = () => userNameInput.value = "";

}

let save = document.getElementById('playerSave');
save.addEventListener('click',() =>{
    savePrompt();
});


function updateStats(){
    document.getElementById('playerName').innerText = userName;
    document.getElementById('playerLevel').innerText = level;
    document.getElementById('playerMoney').innerText = money;
}



function savePrompt(){
    let ans = confirm('Save Game?');
    if(ans == true){
        alert('Game saved');
        localStorage.setItem('name', userName);
        localStorage.setItem('level', level);
        localStorage.setItem('money', money);
    }else{
        alert('Game not saved');
    }
};

let load = document.getElementById('playerLoad');
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