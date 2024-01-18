// async function onloadActiveElement(id, i) {
//     // document.getElementById(id).classList.add("desktopTemplateIconActive");
//     setActiveElement(id, i);
// }

function handleClick() {
//   setActiveElement("summary", 0);
//   clearTheInputFields(0);
window.location.href = "./summary.html";
  // Verzögere die Umleitung um 500 Millisekunden
//   setTimeout(function () {
//     window.location.href = "./summary.html";
//   }, 500);
}

function boardClick() {
//   setActiveElement("board-button", 1);
  //   clearTheInputFields(0);
  //closeSelectContactsToAssign(0);
window.location.href = "./board.html";
  // Verzögere die Umleitung um 500 Millisekunden
//   setTimeout(function () {
//     window.location.href = "./board.html";
//   }, 500);
}



// zeige welcher Content aktuell ausgewählt ist
function setActiveElement(id, i) {
  // let templateActive = document.getElementById()(".desktopTemplateIconActive");
  // templateActive.classList.remove("desktopTemplateIconActive");
 for (let j = 0; j <= 5; j++) {
  let element = document.getElementById(id);
  if (element && element.classList.contains("desktopTemplateIconActive")) {
    element.classList.remove("desktopTemplateIconActive");
  }
  
 }

  document.getElementById(`icon-blue0`).src = `./asset/img/summaryIcon.svg`;
  document.getElementById(`icon-blue1`).src = `./asset/img/boardIcon.svg`;
  document.getElementById(`icon-blue2`).src = `./asset/img/addTaskIcon.svg`;
  document.getElementById(`icon-blue3`).src = `./asset/img/contactsIcon.svg`;
  document.getElementById(`icon-blue4`).src = `./asset/img/Privacy-Policy-icon.svg`;
  document.getElementById(`icon-blue5`).src = `./asset/img/infoIcon.svg`;
  document.getElementById(`icon-blue${i}`).src = `./asset/img/IconBlue${i}.svg`;
  // let icons = document.querySelectorAll(`.svg-icon`);
  // icons.forEach(function(icon) {
  //   icon.classList.remove("svg-icon-aktive");
  // });
 
  document.getElementById(id).classList.add("desktopTemplateIconActive");
//   icons[i].classList.add("svg-icon-aktive");
}