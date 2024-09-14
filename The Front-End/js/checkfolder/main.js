
let http = new slHTTP();
document.getElementById("searchButton").addEventListener('click', findHotels);


function findHotels(evt) {
  evt.preventDefault();

  let checkInDate = document.getElementById("checkInDate").value;
  parts1 = checkInDate.split('-');
    var day = parts1[2];
    var month = parts1[1];
    var year = parts1[0];
    // console.log(parts1[0]);
  let newCheckInDate = year + '-' + month + '-' + day;
    // console.log("CheckInDat3:"+newCheckInDate);

  let checkOutDate = document.getElementById("checkOutDate").value;
  parts2 = checkOutDate.split('-');
  day = parts2[2];
  month = parts2[1];
  year = parts2[0];
  let newCheckOutDate = year + '-' + month + '-' + day;
  console.log(newCheckOutDate)

  // let url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=19.075984&longitude=72.877656&checkIn=${checkInDate}&checkOut=${checkOutDate}&pageNumber=1&currencyCode=INR&priceMin=5000`;
  // let url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=19.075984&longitude=72.877656&checkIn=${checkInDate}&checkOut=${checkOutDate}&pageNumber=1&currencyCode=INR&priceMax=50000`;
  // let	headers = {
  //   'X-RapidAPI-Key': 'dc8edea5f2msh1210546be58272dp10f793jsn803faf548858',
  //   'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  // }
  console.log(newCheckInDate)
  console.log(newCheckOutDate)
  let url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=19.075984&longitude=72.877656&checkIn=${newCheckInDate}&checkOut=${newCheckOutDate}&pageNumber=1&currencyCode=INR`
  let urlx=`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=19.075984&longitude=72.877656&checkIn=2023-11-09&checkOut=2023-11-16&pageNumber=1&currencyCode=INR`
  let headers = {
    'X-RapidAPI-Key':'64fb630bdfmsh9d41b77d9d61753p138571jsnad5a373b9089',
    'X-RapidAPI-Host':'tripadvisor16.p.rapidapi.com'
  }
// 7cf58f263cmsha0fc2fc47b7e270p1c7ecbjsnbfc72876b42e

console.log(url)
  http.get(urlx,headers)
    .then((res) => {
        // const ele = res.data.data;
        // const jsondata = JSON.stringify(ele);
        // localStorage.setItem('apiData', jsondata);
        console.log(res.data.data);
        displayHotels(res.data.data);
        localStorage.setItem('hotel', JSON.stringify(res.data.data));
    })
    .catch((err) => {
        console.log(err)
        // err.json().then((data) => console.log(data))
    })
}

// displayHotels(JSON.parse(localStorage.getItem('hotel')));

function displayHotels(data) {
  console.log(data);
  // console.log(data[0]);
  const hotelRow = document.getElementById('hotel-row');
  

  // console.log(modifiedUrl);
  // console.log(data[0].title);
  data.forEach(function(value) {
    createCard(value, hotelRow);
  });
}

function createCard(value, hotelRow) {
  let originalUrl = value.cardPhotos[0].sizes.urlTemplate;

  // Replace placeholders with specific values
  const width = 400; // Replace with your desired width
  const height = 400; // Replace with your desired height
  
  const modifiedUrl = originalUrl
    .replace('{width}', width)
    .replace('{height}', height);

  let cardTitle = document.createElement('h5');
  cardTitle.classList = "card-title";
  cardTitle.innerHTML = value.title;

  let cardImage = document.createElement('img');
  cardImage.classList = "img-fluid rounded-start"
  cardImage.setAttribute('src', `${modifiedUrl}`);

  let rating = document.createElement('li');
  rating.classList = "list-group-item";
  rating.innerHTML = `No. of reviews: ${value.bubbleRating.count}`;

  let price = document.createElement('li');
  price.classList = "list-group-item";
  price.innerHTML = `Price: ${value.priceForDisplay}`;

  let location = document.createElement('li');
  location.classList = "list-group-item";
  location.innerHTML = `Location: ${value.secondaryInfo}`;

  let bookingLink = document.createElement('a');
  bookingLink.classList = "btn btn-outline-brown mt-5";

  bookingLink.setAttribute('href', `${value.commerceInfo.externalUrl}`);
  bookingLink.innerHTML = "Book Now"

  // creation of parent element and append
  let ul = document.createElement('ul');
  ul.classList = "list-group list-group-flush";
  ul.appendChild(location);
  ul.appendChild(price);
  ul.appendChild(rating);

  let cardBodyDiv = document.createElement('div');
  cardBodyDiv.classList = "card-body d-flex flex-column";
  cardBodyDiv.appendChild(cardTitle);
  cardBodyDiv.appendChild(ul);
  cardBodyDiv.appendChild(bookingLink);

  let divImage = document.createElement('div');
  divImage.classList = "col-md-4";
  divImage.appendChild(cardImage)

  let divBody = document.createElement('div');
  divBody.classList = "col-md-8";
  divBody.appendChild(cardBodyDiv);

  let divRow = document.createElement('div');
  divRow.classList = "row g-0";
  divRow.appendChild(divImage);
  divRow.appendChild(divBody);

  let cardDiv = document.createElement('div');
  cardDiv.classList = "card mb-3";
  // cardDiv.setAttribute('style', "width: 50rem");
  cardDiv.appendChild(divRow);
  hotelRow.appendChild(cardDiv);
}

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"></li>
    <li class="list-group-item"></li>
    <li class="list-group-item"></li>
  </ul>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

/*
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
*/

// data.forEach(element => {
    // let originalUrl = element.cardPhotos[0].sizes.urlTemplate;

    // // Replace placeholders with specific values
    // const width = 400; // Replace with your desired width
    // const height = 300; // Replace with your desired height
    
    // const modifiedUrl = originalUrl
    //   .replace('{width}', width)
    //   .replace('{height}', height);
// });

/*<div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>*/