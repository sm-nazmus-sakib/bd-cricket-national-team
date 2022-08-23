let playerList = [];

function addPlayer(playerName, id) {
  if (playerList.length > 4)
  {
    alert("Already 5 player Added in the Team");
  } 
  else 
  {
    document.getElementById(id).setAttribute("disabled", "");
    playerList.push(playerName);
    const node = document.createElement("li");
    const textNode = document.createTextNode(playerName);
    node.appendChild(textNode);
    document.getElementById("TeamplayerList").appendChild(node);
  }
}

document.getElementById("calculateBtn").addEventListener("click", function () {
  let perPlayerCost = document.getElementById("perPlayerCost");
  let perPlayerCostAmount = parseInt(perPlayerCost.value);
  let totalPlayerCost = perPlayerCostAmount * (playerList.length);
  document.getElementById("totalPlayerAllCost").innerText = totalPlayerCost;
});

document.getElementById('totalCostBtn').addEventListener('click', function () {
  let CoachCost = parseInt(document.getElementById("coachCost").value);
  let ManagerCost = parseInt(document.getElementById("managerCost").value);
  document.getElementById("totalCost").innerText = parseInt(document.getElementById("totalPlayerAllCost").innerText) + ManagerCost + CoachCost;
})


