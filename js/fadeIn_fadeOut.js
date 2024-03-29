function openEditContactOverlay(j, id) {
  contactToEdit = j;
  setEditContactOverlay(j);

  document.getElementById(id).classList.remove("fade-out-right");
  document.getElementById(id).classList.add("fade-in-left");
  document.getElementById(id).classList.remove("d-none");

  document.getElementById("editContactOverlay").classList.remove("d-none");
  document.getElementById("editContactOverlay").classList.add("fade-in-left");
  document.getElementById("editContactOverlay").classList.remove("fade-out-right");
}

function closeEditContactCard() {

  document.getElementById("editContactOverlay").classList.remove("fade-in-left");
  document.getElementById("editContactOverlay").classList.add("fade-out-right");
  document.getElementById("editContactCard").classList.remove("fade-in-left");
  document.getElementById("editContactCard").classList.add("fade-out-right");
  

  setTimeout(function () {
    document.getElementById("editContactOverlay").classList.add("d-none");
    document.getElementById("addContactCard").classList.add("d-none");
  }, 1000);
}

function closeEditContactForm(event) {
  event.stopPropagation(); // Verhindert, dass das Klickereignis auf das übergeordnete Element übergeht.
}


function closEactiveTask() {
 
  document.getElementById("activeTaskBackgroundOverlay").classList.add("fade-out-right");
  document.getElementById("activeTaskBackgroundOverlay").classList.remove("fade-in-left");
  document.getElementById("background-overlay-aktive-task").classList.remove("fade-in-left");
  document.getElementById("background-overlay-aktive-task").classList.add("fade-out-right");
  setTimeout(function () {
    document.getElementById("activeTaskBackgroundOverlay").classList.add("d-none");
    document.getElementById("background-overlay-aktive-task").classList.add("d-none");
  }, 1500);
}

 function openAddTaskWindow() {
   document.getElementById("add-task-window").classList.remove("fade-out-right");
   document.getElementById("add-task-window").classList.remove("d-none"); 
   document.getElementById("add-task-window").classList.add("fade-in-left");
   document.getElementById("background-overlay-aktive-task").classList.remove("fade-out-right");
   document.getElementById("background-overlay-aktive-task").classList.remove("d-none");
   document.getElementById("background-overlay-aktive-task").classList.add("fade-in-left");
}

function closeAddTaskWindow() {
  document.getElementById("add-task-window").classList.add("fade-out-right");
  document.getElementById("add-task-window").classList.remove("fade-in-left");
  document.getElementById("background-overlay-aktive-task").classList.remove("fade-in-left");
  document.getElementById("background-overlay-aktive-task").classList.add("fade-out-right");
  setTimeout(function () {
    document.getElementById("add-task-window").classList.add("d-none");
    document.getElementById("background-overlay-aktive-task").classList.add("d-none");
  }, 1500);
}

function closeBackgroundOverlay() {
  document.getElementById("backgroundOverlay").classList.remove("fade-in-left");
  document.getElementById("backgroundOverlay").classList.add("fade-out-right");
}

function closeContactCard(id) {
  document.getElementById(id).classList.remove("fade-in-left");
  document.getElementById(id).classList.add("fade-out-right");
  document.getElementById("backgroundOverlay").classList.remove("fade-in-left");
  document.getElementById("backgroundOverlay").classList.add("fade-out-right");
  
  setTimeout(function () {
    document.getElementById("backgroundOverlay").classList.add("d-none");
    document.getElementById(id).classList.add("d-none");
  }, 1000);

  deleteAddContact();
}

function openContactCardWithOverlay(id) {
  document.getElementById(id).classList.remove("fade-out-right");
  document.getElementById(id).classList.add("fade-in-left");
  document.getElementById(id).classList.remove("d-none");
  openBackgroundOverlay();
}

function openBackgroundOverlay() {
  document.getElementById("backgroundOverlay").classList.remove("d-none");
  document.getElementById("backgroundOverlay").classList.add("fade-in-left");
  document.getElementById("backgroundOverlay").classList.remove("fade-out-right");
}


function openHelp() {
  document.getElementById("helpContent").classList.remove("d-none");
}

