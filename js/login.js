async function initLogin() {
  includeHTML();
await getServer();
  emptyUserArry();
}

document.addEventListener('DOMContentLoaded', function () {
    let logo = document.querySelector('.logo');
    let contentContainer = document.querySelector('.loginContainer');
    logo.addEventListener('animationend', () => {
        contentContainer.classList.add('show');

    });
    updateCheckbox();
    listenerPasswordImg('login');
    listenerPasswordImg('signUp');
    loadRememberedData();
    changePasswortImage('login')
});


function updateCheckbox() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var pathChecked = document.getElementById('checked');
    var pathUnchecked = document.getElementById('unchecked');
    if (checkbox.checked) {
        pathChecked.style.display = 'block';
        pathUnchecked.style.display = 'none';
    } else {
        pathChecked.style.display = 'none';
        pathUnchecked.style.display = 'block';
    }
}



async function getUser() {
    await deleteUserOnServer();
    await findUser();
    await setServer();
    await getServer();

}

function findUser() {
    let email = document.getElementById("loginEmail").value;
    let foundUser = users.find((user) => user.email === email);
    if (foundUser) {
      // Ein Benutzer wurde gefunden, also aktualisiere das globale Array 'user'.
      user = [foundUser]; // 'user' wird ein Array mit dem gefundenen Benutzer als einzigem Element.
    } else {
      // Kein Benutzer gefunden. Das globale Array 'user' bleibt unverändert.
      // Wenn 'user' bereits leer ist, bleibt es leer.
      // Wenn es schon Einträge hatte, bleiben diese erhalten.
    }
}

async function deleteUserOnServer() {
    user = [] ;
    await setServer();

}


function rememberMe() {
    const checkbox = document.getElementById('rememberMe');
    const usernameInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');

    if (checkbox.checked) {
        localStorage.setItem('rememberedUser', usernameInput.value);
        localStorage.setItem('rememberedPass', passwordInput.value);
    } else {
        localStorage.removeItem('rememberedUser');
        localStorage.removeItem('rememberedPass');
        document.querySelector('.loginContainer').reset()
    }

}


function loadRememberedData() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    const rememberedPass = localStorage.getItem('rememberedPass');
    const usernameInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');

    if (rememberedUser && rememberedPass) {
        usernameInput.value = rememberedUser;
        passwordInput.value = rememberedPass;
        document.getElementById('rememberMe').checked = true;
    }
}


async function addUser() {
    let name = document.getElementById('signUpName')
    let email = document.getElementById('signUpEmail');
    let password = document.getElementById('signUpPassword');
    let initials = getInitials('signUpName')
    users.push({name: name.value, email: email.value, password: password.value, initials: initials});
    await setServer();
    window.location.href = 'index.html?msg=Du hast dich erfolgreich registriert';
}


function showContentLogin(element) {
    document.querySelector('.loginContainer').classList.add('d-none')
    document.querySelector('.signUpContainer').classList.add('d-none')
    document.querySelector('.forgotPassword').classList.add('d-none')
    document.querySelector(`.${element}`).classList.remove('d-none')
}
















