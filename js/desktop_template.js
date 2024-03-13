function handleClick() {
window.location.href = "./summary.html";
}

function boardClick() {
window.location.href = "./board.html";
}



// zeige welcher Content aktuell ausgewählt ist
function setActiveElement(id, i) {
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
  document.getElementById(id).classList.add("desktopTemplateIconActive");
}