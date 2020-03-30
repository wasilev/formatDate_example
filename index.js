import formatDate from './formatDate.js';


let date = "2020-04-05";
let formattedDate = formatDate(new Date(date), "D d M");

const appDiv = document.getElementById('app');


appDiv.innerHTML = formattedDate;
