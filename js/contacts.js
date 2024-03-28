let contactToEdit

async function initContacts() {
  includeHTML();
  await getServer();
  headerUserProfilLetter();
  renderContacts();
  setActiveElement("contacts", 3);
}


function renderContacts() {
  getFirstLetter()
  showList()
}

function getFirstLetter() {
  
  contacts.forEach(function (contact) {
      let initial = contact.name.charAt(0).toUpperCase();

  if (initials == 0) {
    initials.push(initial);
  }

  if (!initials.includes(initial)) {
        initials.push(initial);
      }
    });
    initials.sort();
  }


function showList() {
  let contactList = document.getElementById('contactsList')
  contactList.innerHTML = ''
  for (let i = 0; i < initials.length; i++) {
    const initial = initials[i];
    contactList.innerHTML += `
        <div class="contactListSection" id="contactListSection">
          <span>${initial}</span>
        </div>
        <div class="contactListSeperator">
          <img src="./assets/img/contactSeperator.svg" alt="">
        </div>`;

    // Call the 'Test()' function with 'initial' as an argument here
    showContacts(initial);
  }
}


function renderDeleteLetter(number) {
  deleteLetter(number);
  showList();
}


function deleteLetter(number) {
let contactList = document.getElementById("contactsList");  
let contactCard = document.querySelector(".contactsCard");
if (contacts == 0) {
  initials.length = 0;
  contactList.innerHTML = "";
  contactCard.classList.remove("contactsCardActive");
} else {
  contacts.forEach(function (contact) {
    const initial = contact.name.charAt(0).toUpperCase();
    if (!initial.includes(initials)) {
      initials.splice(initial);
    }
    initials.sort();
  });

}
}


function showContacts(initial) {
  let contactList = document.getElementById('contactsList')
  for (let j = 0; j < contacts.length; j++) {
    const contact = contacts[j];
    const backgroundColor = j
    if (contact.name.charAt(0).toUpperCase() == initial) {
      contactList.innerHTML += `
          <div class="contactListElement" id='contact${j}' onclick="setActiveContact(${j}), setDeleteButton(${j})">
          <div class="contantsAvatar" style="background-color: ${avatarBackgroundColors[backgroundColor]}"><span>${contact.initials}</span></div>
          <div class="contactsInfo"><span>${contact.name}</span><span>${contact.email}</span></div>
      </div>`;
    }
  }
}

function setDeleteButton(number) {
  document.getElementById("addContactButtons",).innerHTML = `<button type="button" class="editContactOverlayDelteButton" onclick="deleteContact(${number})"><span>Delete</span></button>
                                                                             <button type="submit" class="editContactOverlaySaveButton"><span>Save</span></button>`;
}

async function deleteContact(number) {
  contacts.splice(number, 1 );
  addTaskContacts.splice(number, 1);
  closeEditContactCard();
  renderDeleteLetter(number);
  renderContacts();
  setInnerContactCard();
  await setServer();
}

function openNewContactOverlay() {
  document.getElementById('addContactCard').classList.remove('d-none')
  document.getElementById('container-opened-task').classList.remove('d-none')
  document.getElementById("addContactCard").classList.remove("fade-out-right");
  document.getElementById("addContactCard").classList.add("fade-in-left");
  document.getElementById('container-opened-task').classList.remove('fade-out-right');
  document.getElementById('container-opened-task').classList.add('fade-in-left');
}

function setEditContactOverlay(j) {
  let contact = contacts[j]
  document.getElementById('editContactName').value = contact.name
  document.getElementById('editContactEmail').value = contact.email
  document.getElementById('editContactPhone').value = contact.phone
  document.getElementById('editContactAvartarInitials').innerHTML = contact.initials
  document.getElementById('editContactAvartar').style = `background-color: ${avatarBackgroundColors[j]};`
  document.getElementById('editContactOverlay').addEventListener('submit', function() {
    checkInputsEditContact(j); return false;
  });
}

function setActiveContact(j) {
  var contact = document.querySelector(".contactListElementActive");
  var element = document.getElementById(`contact${j}`)
  contactCard = document.querySelector(".contactsCard")

  if (contact === element) {
    
    contact.classList.remove("contactListElementActive");
    contactCard.classList.remove("contactsCardActive");

  } else {
    
    if (contact) {
      contact.classList.remove("contactListElementActive");
      contactCard.classList.remove("contactsCardActive");
    }

    element.classList.add("contactListElementActive");
    contactCard.classList.add("contactsCardActive");
    setInnerContactCard(j)
  }
}


function setInnerContactCard(j) {

  if (j >= 0) {
    let contactCard = document.querySelector(".contactsCard");
    contactCard.innerHTML = "";
    contactCard.innerHTML += setInnerContactCardTemplate(j);
  } else {
    let contactCard = document.querySelector(".contactsCard");
    contactCard.innerHTML = "";
  }

  

}

function setInnerContactCardTemplate(j) {
  let contact = contacts[j]
  return /*html*/ `<div class="contactCardHeader">
  <div class="contactCardAvatar" style="background-color: ${avatarBackgroundColors[j]};"><span>${contact.initials}</span></div>
  <div class="contactCardContentHeader">
      <span>${contact.name}</span>
      <div onclick="popUpWindowaddTask()"class="contactCardHeaderAddTask">
          <img src="./assets/img/contactPlus.svg" alt="">
          <div onclick="openEditContactOverlay(${j}, 'editContactCard')" class="contactCardEdit">
          <img src="./assets/img/editIcon.svg" width="16" height="25" alt="">
          <span>Edit</span>
      </div>
      <div onclick="deleteContact(${j})" class="contactCardEdit">
        <img src="/assets/img/delete.svg" width="16" height="25" alt="">
        <span>Delete</span>
     </div>
    </div>
  </div>
</div>
<div class="contactCardInfoHeader">
  <span>Contact Information</span>
  
</div>
<div class="contactCardInfo">
  <div class="contactCardEmail">
      <span>Email</span>
      <a href="mailto:${contact.email}">${contact.email}</a>
  </div>
  <div class="contactCardPhone">
      <span>Phone</span>
      <a href="tel:${contact.phone}">${contact.phone}</a>
  </div>
</div>`;
}


 function addContact() {
  let name = document.getElementById('addContactName')
  let email = document.getElementById('addContactEmail');
  let phone = document.getElementById('addContactPhone')
  let initials = getInitials('addContactName');
  isEmailAvailable(email.value, name.value, phone.value, initials);
  
}

function deleteAddContact() {
  document.getElementById("addContactName").value = "";
  document.getElementById("addContactEmail").value = "";
  document.getElementById("addContactPhone").value = "";
  
  deleteAddContactBoarderAndText();

}

function deleteAddContactBoarderAndText() {
  document.getElementById("addContactEmailBorder").classList.remove("redBorder");
  document.getElementById("addContactEmailError").classList.add("d-none");
  document.getElementById("addContactNameBorder").classList.remove("redBorder");
  document.getElementById("addContactNameError").classList.add("d-none");
  document.getElementById("addContactEmailIsAvailable").classList.add("d-none");
}


async function isEmailAvailable(email, name, phone, initials) {

  let emailToCheck = email;

  let isEmailExists = contacts.some((contact) => contact.email.toLowerCase() === emailToCheck.toLowerCase());

  if (!isEmailExists) {
    
    contacts.push({name: name,email: email,phone: phone,initials: initials,});
    await setServer();
  document.getElementById('contactOverlay').reset()
  document.getElementById("addContactEmailIsAvailable").classList.add("d-none");
  document.getElementById("addContactEmailBorder").classList.remove("redBorder");

  renderContacts()
  setActiveContact(contacts.length-1);
 closeContactCard("addContactCard");

  } else {
    document.getElementById("addContactEmailError").classList.add('d-none');
    document.getElementById("addContactEmailFormatError").classList.add("d-none");
    document.getElementById("addContactEmailIsAvailable").classList.remove("d-none");
    document.getElementById("addContactEmailBorder").classList.add("redBorder");
  }
}

async function editContact() {
  let name = document.getElementById('editContactName');
  let email = document.getElementById('editContactEmail');
  let phone = document.getElementById('editContactPhone');
  let initials = getInitials('editContactName');
  contacts.splice(contactToEdit, 1, { name: name.value, email: email.value, phone: phone.value, initials: initials });

  await setServer();
  renderContacts();
  setActiveContact(contactToEdit);
  checkInputsEditContact();
}

function checkInputsAddContact() {
  document.querySelectorAll(`.addContactErrorMessage`).forEach(function (el) {
    el.classList.add("d-none");
  });
  document.querySelectorAll(`.inputFieldWithImg`).forEach(function (el) {
    el.classList.remove("redBorder");
  });
  let errorCount = 0;
  errorCount += checkInputEmpty('addContactName') ? 1 : 0;
  errorCount += checkInputEmpty('addContactEmail') ? 1 : 0;
  errorCount += checkEmailFormat('addContactEmail') ? 1 : 0;
  if (errorCount > 0) return;
  document.querySelectorAll(`.addContactErrorMessage`).forEach(function (el) {
    el.classList.add("d-none");
  });
  addContact()
  
}

function checkInputsEditContact(j) {
  document.querySelectorAll(`.addContactErrorMessage`).forEach(function (el) {
    el.classList.add("d-none");
  });
  document.querySelectorAll(`.inputFieldWithImg`).forEach(function (el) {
    el.classList.remove("redBorder");
  });
  let errorCount = 0;
  errorCount += checkInputEmpty('editContactName') ? 1 : 0;
  errorCount += checkInputEmpty('editContactEmail') ? 1 : 0;
  errorCount += checkEmailFormat('editContactEmail') ? 1 : 0;
  if (errorCount > 0) return;
  document.querySelectorAll(`.addContactErrorMessage`).forEach(function (el) {
    el.classList.add("d-none");
  });
  editContact(j)
}

function onMouseOverImg(id, src) {
  document.getElementById(id).setAttribute("src", src);
}

function onMouseOutImg(id, src) {
  document.getElementById(id).setAttribute("src", src);
}



