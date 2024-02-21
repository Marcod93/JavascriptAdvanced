import '../css/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import backgroundImage from '../img/books.jpg';

document.body.style.backgroundImage = `url(${backgroundImage})`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
document.body.style.backgroundBlendMode = "overlay";