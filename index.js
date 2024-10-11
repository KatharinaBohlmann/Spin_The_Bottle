let statusText = document.getElementById("status");
let listArray = [];
let index = listArray.length + 1;

function addMyPlayer() {
    let playerName = document.getElementById("player-name").value;
    let ul = document.getElementById("players");
    let li = document.createElement("li");

    if(playerName !== ""){
        if(listArray.length === 0){
            li.appendChild(document.createTextNode(playerName.toString()));
            ul.appendChild(li);
            listArray.push(playerName.toString());
            statusText.innerText = "Spin the bottle!";

        } else{
            let exist = true;
            for (let i = 0; i <= listArray.length -1; i++) {
                if(playerName === listArray[i]){
                    statusText.innerText = "Player already exists!";
                    exist = true;
                    break;
                } else{
                    exist = false;
                }
            }
            if(!exist){
                li.appendChild(document.createTextNode(playerName.toString()));
                ul.appendChild(li);
                listArray.push(playerName.toString());
                statusText.innerText = "Spin the bottle!";
            }
        }
        document.getElementById("player-name").value = "";
    }
}

function spinning() {
    if(listArray.length < 2)
        return;

    statusText.innerText = "Spinning...";
    index = listArray.length + 1;
    getRandomPlayer();
    setTimeout(() => {
        statusText.innerText = listArray[index];
    }, 2000);
}

function getRandomPlayer() {
    while (index >= listArray.length) {
        index = Math.floor(Math.random() * listArray.length);
    }
    return index;
}