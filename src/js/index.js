import '../css/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'jquery';
import 'popper.js';
import backgroundImage from '../img/books.jpg';
const axios = require('axios');
const apiUrl = 'https://openlibrary.org/subjects/';
const btnSearch = document.getElementById('btn-search');
let subject = '';


document.body.style.backgroundImage = `url(${backgroundImage})`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
document.body.style.backgroundBlendMode = "overlay";


// btnSearch.addEventListener('click', function () {
//     subject = document.getElementById('input-search').value + '.json';

//    axios.get(apiUrl + subject)
//         .then(response => {
//             console.log(response.data)
//         })
//         .catch(error => {
//             console.error('Si è verificato un errore durante la richiesta:', error.message);
//         });
// });