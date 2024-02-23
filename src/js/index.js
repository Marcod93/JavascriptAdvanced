import '../css/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'jquery';
import 'popper.js';
import backgroundImage from '../img/books.jpg';
const axios = require('axios');

const apiUrl = 'https://openlibrary.org';
const btnSearch = document.getElementById('btn-search');
const mainDiv = document.getElementById('mainDiv');
let subject;
let newDiv;
let hr;
let btn;
let newTitle;
let newAuthor;
let popup;
let descriptionBook;

document.body.style.backgroundImage = `url(${backgroundImage})`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
document.body.style.backgroundBlendMode = "overlay";

btnSearch.addEventListener('click', function () {
    subject = '/subjects/' + document.getElementById('input-search').value + '.json';

    fetch(apiUrl + subject)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella richiesta API: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data['works'].length == 0) {
                alert('Non è stato trovato nessun libro di questa categoria! Prova un altra categoria');
            }
            else {
                if (mainDiv.childElementCount > 0) {
                    mainDiv.innerHTML = '';
                }
                displayBooks(data);
            }
        })
        .catch(error => {
            console.error('Si è verificato un errore durante la richiesta:', error.message);
        });
});

function displayBooks(data) {
    data['works'].forEach(element => {

        newDiv = document.createElement('div');
        hr = document.createElement('hr');
        btn = document.createElement('button');

        newDiv.className = 'col-sm-6 col-md-4 col-lg-3 newDiv';
        btn.className = 'btn btn-info';
        btn.innerHTML = 'Info';

        btn.addEventListener('click', function () {
            findDescription(element['key']);
        });
        newDiv.setAttribute('data-key', element['key']);

        mainDiv.appendChild(newDiv);

        newTitle = document.createElement('h2');
        newTitle.innerHTML = element['title'];
        newDiv.appendChild(newTitle);
        newTitle.after(hr);

        newAuthor = document.createElement('p');

        element['authors'].forEach(author => {
            newAuthor.innerHTML = author['name'] + ' ';
        })

        hr.after(newAuthor);
        newAuthor.after(btn);
    });
}

function findDescription(key) {
    fetch(apiUrl + key + '.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella richiesta API: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            createPopup(data['description']);
        })
        .catch(error => {
            console.error('Si è verificato un errore durante la richiesta:', error.message);
        });
}

function createPopup(description) {
    popup = document.createElement('div');
    popup.className = 'popup';
    descriptionBook = description.value ? description['value'] : description;
    popup.innerHTML = `
    <div class="popup-content">
        <p>${descriptionBook}</p>
        <button class="btn btn-danger">Chiudi</button>
    </div>
`;
    document.body.appendChild(popup);

    const closePopupBtn = popup.querySelector('button');
    closePopupBtn.addEventListener('click', () => popup.remove());
}