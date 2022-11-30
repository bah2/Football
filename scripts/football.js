"use strict";

window.onload = init;

const teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

//Function Initialiation (main)
function init() {
  console.log("football.js");
  fillDropdown(); // Created function
  const actionBnt = document.getElementById("actionBnt");
  actionBnt.onclick = actionBntOnClick;
}

// btn output expectation 
function actionBntOnClick() {
    const teamPick = document.getElementById("teamPick");
    let choosenTeamCode = teamPick.value;
    let choosenTeam = extracTeamUsingCodeObj(teams, choosenTeamCode);
  
    let message = `You selected the ${choosenTeam.name} (${choosenTeam.code}) who play in ${choosenTeam.plays}.`;
  
    const teamInfo = document.getElementById("teamInfo");
    teamInfo.innerHTML = message;
    return false;
  }
// Dropdown menu
function fillDropdown() {
  // pick element and option creation 
  const teamPick = document.getElementById("teamPick");
  let chooseTeamOpt = document.createElement("option");

  chooseTeamOpt.value = "";
  chooseTeamOpt.textContent = "Select a Team...";
  teamPick.appendChild(chooseTeamOpt);

  let teamsLength = teams.length;
  for (let i = 0; i < teamsLength; i++) {
    let dispOption = document.createElement("option");
    dispOption.value = teams[i].code;
    dispOption.textContent = teams[i].name;

    teamPick.appendChild(dispOption);
}
} function extracTeamUsingCodeObj(tm, cd) {
  let teamsTrack = tm.length;
  for (let i = 0; i < teamsTrack; i++) {
    if (tm[i].code == cd) {
      return tm[i];
    }
}
  return null;
}
