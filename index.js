// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Filtering array of objects</h1>`;

const list = [
  {
    lastName: 'Shoval',
    firstName: 'Peretz',
  },
  {
    lastName: 'Peretz',
    firstName: 'Shoval',
  },
  {
    firstName: 'Jhon',
    lastName: 'Connor',
  },
  {
    firstName: 'Kyle',
    lastName: 'Reese',
  },
  {
    lastName: 'Alter',
    firstName: 'Geve',
  },
  {
    firstName: 'Geva',
    lastName: 'Alter',
  },
  {
    firstName: 'Geva',
    lastName: 'Alter',
  },
  {
    firstName: 'Arnold',
    lastName: 'Schwarzenegger',
  },
];
// SOLVE HERE
const result = list;

const tagComponent = ({ firstName, lastName }) =>
  `<li>${firstName} -> ${lastName}</li>`;

let newArray = [];

for (let item of result) {
  if (compareDouble(item)) {
    newArray.push(item);
  }
}

function compareDouble(item) {
  let amountSeach = 0;
  let obj = result.map((elem) => {
    if (elem.firstName == item.firstName && elem.lastName == item.lastName) {
      amountSeach++;
    }
  });

  return amountSeach === 1;
}

const tagsList = `<ul>${newArray
  .map((tag) => tagComponent(tag))
  .join('')}</ul>`;
document.getElementById('root').innerHTML = tagsList;
