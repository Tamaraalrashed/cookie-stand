'use strict';

let workHours= ['6am', '7am', '8am','9am','10am','11am','12am' ,'1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm'];

function City ( name, minOfCustomers,maxOfCustomers, averAge ) {
  this.name = name;
  this.minOfCustomers = minOfCustomers;
  this.maxOfCustomers = maxOfCustomers;
  this.averAge = averAge;
  this.noOfCookies =[];
  this.noOfCustomersHourly=[];
  this.totalDialy=0;
  this.toTalHourly=0;
  City.allCity.push( this );
}
City.allCity = [];


City.prototype.getCookies= function() {
  for( let j=0; j<workHours.length; j++ ){
    let hourlyCustomers= randomNoOfCustomers( this.minOfCustomers, this.maxOfCustomers );
    let cookiesNo=Math.ceil( ( hourlyCustomers )*this.averAge );
    this.totalDialy+=cookiesNo;
    this.noOfCookies.push( cookiesNo );
    this.noOfCustomersHourly.push( hourlyCustomers );
  }

};


City.prototype.render=function () {

  const tableElement = document.getElementById( 'myTable' );
  const tr2Element=document.createElement( 'tr' );
  tableElement.appendChild( tr2Element );
  const th4Element=document.createElement( 'th' );
  tr2Element.appendChild( th4Element );
  th4Element.textContent = `${this.name}`;
  for( let i = 0; i < workHours.length; i++ ) {
    const td1Element=document.createElement( 'td' );
    tr2Element.appendChild( td1Element );
    td1Element.textContent = `${this.noOfCookies[i]}`;
  }
  const td3Element=document.createElement( 'td' );
  tr2Element.appendChild( td3Element );
  td3Element.textContent = `${this.totalDialy}`;
};

const header = function () {
  const parentElement = document.getElementById( 'Sales' );
  const tableElement=document.createElement( 'table' );
  tableElement.id='myTable';
  parentElement.appendChild( tableElement );
  const tr1Element=document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );
  const th1Element=document.createElement( 'th' );
  tr1Element.appendChild( th1Element );
  th1Element.textContent = 'City';
  for( let i = 0; i < workHours.length; i++ ) {
    const th2Element=document.createElement( 'th' );
    tr1Element.appendChild( th2Element );
    th2Element.textContent = `${workHours[i]}`;

  }
  const th16Element=document.createElement( 'th' );
  tr1Element.appendChild( th16Element );
  th16Element.textContent = 'Daily Location Total';


};
header();


const seattle = new City( 'Seattle', 23, 65, 6.3 );


seattle.getCookies();
seattle.render();

console.log( seattle );


const tokyo = new City( 'tokyo', 3, 24, 1.2 );
tokyo.getCookies();
tokyo.render();

const dubai = new City( 'Dubai', 11, 38, 3.7 );
dubai.getCookies();
dubai.render();


const Paris = new City( 'Paris', 20, 38, 2.3 );
Paris.getCookies();
Paris.render();

const Lima = new City( 'Lima', 2, 16, 4.6 );
Lima.getCookies();
Lima.render();


// const seattle = {
//   noOfCookies: [],
//   noOfCustomersHourly:[],
//   minOfCustomers: 23,
//   maxOfCustomers: 65,
//   averAge: 6.3,
//   toTal:0,
//   getCookies: function() {
//     for( let j=0; j<workHours.length; j++ ){
//       let hourlyCustomers= randomNoOfCustomers( this.minOfCustomers, this.maxOfCustomers );
//       let cookiesNo=Math.ceil( ( hourlyCustomers )*this.averAge );
//       console.log( cookiesNo );
//       this.noOfCookies.push( cookiesNo );
//       this.toTal+=cookiesNo;
//       this.noOfCustomersHourly.push( hourlyCustomers );

//     }
//   },


//   render: function () {
//     const parentElement = document.getElementById( 'Sales' );

//     const articleElement = document.createElement( 'article' );
//     parentElement.appendChild( articleElement );

//     const h2Element = document.createElement( 'h2' );
//     articleElement.appendChild( h2Element );
//     h2Element.textContent='Seattle';

//     const ulElement = document.createElement( 'ul' );
//     articleElement.appendChild( ulElement );

//     for( let i = 0; i < workHours.length; i++ ) {
//       const liElement = document.createElement( 'li' );
//       ulElement.appendChild( liElement );
//       liElement.textContent = `${workHours[i]}: ${this.noOfCookies[i]} cookies`;

//     }
//     const li2Element = document.createElement( 'li' );
//     ulElement.appendChild( li2Element );
//     li2Element.textContent = `Total: ${this.toTal} cookies`;

//   }
// };

function randomNoOfCustomers( min, max ){
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min - 1 ) + min );
}



const footer = function () {
  const tableElement = document.getElementById( 'myTable' );
  const tr1Element=document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );
  const th1Element=document.createElement( 'th' );
  tr1Element.appendChild( th1Element );
  th1Element.textContent = 'Totals';
  for( let i = 0; i < workHours.length; i++ ) {
    const th2Element=document.createElement( 'th' );
    tr1Element.appendChild( th2Element );
    let totalCookies=0;
    for ( let j = 0; j < City.allCity.length; j++ ) {
      totalCookies += parseInt( City.allCity[j].noOfCookies[i] );

    }
    th2Element.textContent= totalCookies;
    // td2Element.textContent = `${seattle.noOfCookies[i]+tokyo.noOfCookies[i]+dubai.noOfCookies[i]+Paris.noOfCookies[i]+Lima.noOfCookies[i]}`;
  }
  const th3Element=document.createElement( 'th' );
  tr1Element.appendChild( th3Element );
  let totalOfTotals =0;
  for ( let i=0; i < City.allCity.length; i++ ) {
    totalOfTotals += City.allCity[i].totalDialy;

  }

  th3Element.textContent = totalOfTotals;
};

footer();


// let text = 'please enter the maximu value more than minimum value.';

const formElement = document.getElementById( 'addNewCity' );
formElement.addEventListener( 'submit', function( event ) {
  event.preventDefault();
  const cityName = event.target.city_name.value;
  const minOfCustomers = event.target.minOfCustomers.value;

  const maxOfCustomers = event.target.maxOfCustomers.value;

  const averAge = event.target.averAge.value;
  if ( Number( minOfCustomers ) >= Number( maxOfCustomers ) ){
    alert( 'Please enter the value of maximum number greater than minimum number' );
  }
  else{
    document.getElementById( 'myTable' ).removeChild( document.getElementById( 'myTable' ).lastChild );
    const city = new City ( cityName, minOfCustomers, maxOfCustomers, averAge );
    formElement.reset();
    console.log( city.noOfCustomersHourly );

    city.getCookies();
    city.render();

    footer();
  }

} );

