
let userName;
let level = 1;
let money = 100;
let scene;
let playerInside = false;

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


scene = document.getElementById("scene");

scene.src = '/images/scenes/town.jpg';

let save = document.getElementById('saveGame');

save.addEventListener('click', ()=>{
    save.disabled = true;
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
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.textContent = "Game Saved to Local Storage";
    modal.style.height = '100px';
    document.body.appendChild(modal);
    setTimeout(()=>{
        modal.remove();
    },2000);
}

/*auto save*/
setInterval(()=>{
    saveGame();
    console.log("Autosave complete...");
},60000);

function savePrompt(){
    savePrompt2();
    /*
    let ans = confirm('Save Game?');
    if(ans == true){
        alert('Game saved');
        
    }else{
        alert('Game not saved');
    }*/
};

function savePrompt2(){
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.textContent = 'Save Game?';
    modal.style.width = '300px';
    modal.style.height = '100px';
    let choiceSave = document.createElement('button');
    let choiceQuit = document.createElement('button');
    choiceSave.textContent = "Yes";
    choiceQuit.textContent = "No";
    choiceSave.addEventListener('click',()=>{
        modal.remove();
        saveGame();
        save.disabled = false;
    });
    choiceQuit.addEventListener('click',()=>{
        modal.remove();
        save.disabled = false;
    })
    modal.appendChild(choiceSave);
    modal.appendChild(choiceQuit);
    document.body.appendChild(modal);
}

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


const tavernMenuButton = document.getElementById('tavernMenuButton');
const shopMenuButton = document.getElementById('shopMenuButton');
const innMenuButton = document.getElementById('innMenuButton');
const backButton = document.getElementById('backMenuButton');
backButton.style.color = 'white';


function visitTavern(){
    playerInside = true;
    backButton.textContent = 'Back';
    backButton.style.background = 'brown';
    scene.src = 'images/scenes/tavern.png';
    console.log('you visit the tavern');
}

function visitShop(){
    playerInside = true;
    backButton.textContent = 'Back';
    backButton.style.background = 'brown';
    scene.src = 'images/scenes/shop.jpg';
    console.log('you visit the shop');
}

function visitInn(){
    playerInside = true;
    backButton.textContent = 'Back';
    backButton.style.background = 'brown';
    scene.src = 'images/scenes/inn.jpg';
    console.log('you visit the inn');
}

function goBack(){
    if(playerInside){
        console.log(playerInside);
        playerInside = false;
        scene.src = 'images/scenes/town.jpg';
        console.log('you return to town');
        backButton.textContent = '';
        backButton.style.background = `rgb(114, 97, 76)`;
    }
}

tavernMenuButton.addEventListener('click', () => { visitTavern();});
shopMenuButton.addEventListener('click', () => { visitShop();});
innMenuButton.addEventListener('click', () => { visitInn();});
backButton.addEventListener('click',() => {goBack();})