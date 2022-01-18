let names = [];
let text = [];
load();

function render() {
    let content = document.getElementById('content')
    content.innerHTML = '';
    content.innerHTML += `
    <video autoplay muted loop id="myVideo">
        <source src="video/herbst.mp4" type="video/mp4">
    </video>
    <h1>Notizen</h1>
    <div class="inputField">
    <input class="titel" placeholder="Titel" id="name">
    <input class="notiz" placeholder="Notiz schreiben..." id="notiz">
    <button class="button" onclick="addNotiz()">Anpinnen</button>
    </div>  
    `;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const texte = text[i];

        content.innerHTML += `
        <div class="textPin">
            <p><b>${name}</b></p> <br>
            <p>${texte}</p> <br>
            <button class="button" onclick="deleteNotiz(${i})">Notiz löschen</button>
        </div>
        `;

    }
}

function addNotiz() {
    let titel = document.getElementById('name');
    let notizen = document.getElementById('notiz');

    names.push(titel.value);
    text.push(notizen.value);

    render();
    save()
}

function deleteNotiz(i) {
    names.splice(i, 1);
    text.splice(i, 1);
    render();
    save()
}

function save() {
    let titelText = JSON.stringify(names);
    let notizText = JSON.stringify(text);

    localStorage.setItem('names', titelText);
    localStorage.setItem('text', notizText);
}

function load() {
    let titelText = localStorage.getItem('names')
    let notizText = localStorage.getItem('text')
    if (titelText && notizText) {
        names = JSON.parse(titelText);
        text = JSON.parse(notizText);
    }
}