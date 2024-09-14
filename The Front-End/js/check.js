// // const axios = require('axios');

// // // long-72.877656
// // // lat-19.075984

// // const options = {
// //   method: 'GET',
// //   url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation',
// //   params: {
// //     latitude: '19.075984',
// //     longitude: '72.877656',
// //     checkIn: '2023-10-4',
// //     checkOut: '2023-10-8',
// //     pageNumber: '1',
// //     currencyCode: 'USD'
// //   },
// //   headers: {
// //     'X-RapidAPI-Key': '446e4f9dc8mshe85d904bcabf773p1575f4jsn415ce95ca243',
// //     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
// //   }
// // };

// // async function apicall() {

// //     try {
// // 	    const response = await axios.request(options);
// // 	    console.log(response.data);
// //     } catch (error) {
// // 	    console.error(error);
// //     }

// // }

// // apicall();


// const options = {
//   method: 'GET',
//   url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation',
//   params: {
//     latitude: '19.075984',
//     longitude: '72.877656',
//     checkIn: '2023-10-05',
//     checkOut: '2023-10-11',
//     pageNumber: '1',
//     currencyCode: 'USD'
//   },
//   headers: {
//     'X-RapidAPI-Key': '446e4f9dc8mshe85d904bcabf773p1575f4jsn415ce95ca243',
//     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
//   }
// };

// async function apicall() {

//     try {
//         const response = await axios.request(options);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// apicall();
// '446e4f9dc8mshe85d904bcabf773p1575f4jsn415ce95ca243'
//94e2e9d4f4mshbe3eaec7243184bp15c02djsn133979677ef6
let http = new slHTTP();
let url = 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=19.075984&longitude=72.877656&checkIn=2023-10-26&checkOut=2023-10-28&currencyCode=INR&priceMin=10000';
let	headers = {
		'X-RapidAPI-Key': '1d851d9fcdmsh4069f983e528c93p1c7589jsn7584792e61d2',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}

http.get(url,headers)
    .then((res) => {
        displayHotels(res.data.data);
    })
    .catch((err) => {
        console.log(err)
        // err.json().then((data) => console.log(data))
    })

function displayHotels(data) {
    const hotelRow = document.getElementById('hotel-row');
    let i = 1;
    console.log(data);
    data.forEach(element => {
    let originalUrl = element.cardPhotos[0].sizes.urlTemplate;

    // Replace placeholders with specific values
    const width = 400; // Replace with your desired width
    const height = 300; // Replace with your desired height
    
    const modifiedUrl = originalUrl
      .replace('{width}', width)
      .replace('{height}', height);
    // let hotelCard = `
    //     <div class="col-md-6 col-lg-4 ftco-animate">
    //         <div class="project">
    //             <div class="img">
    //                 <div class="vr"><span>Sale</span></div>
    //                 <a href="#"><img src="${modifiedUrl}" class="img-fluid" alt="Colorlib Template width="400" height="300"></a>
    //             </div>
    //             <div class="text">
    //                 <h4 class="price">
    //                 ${data[0].commerceInfo.priceForDisplay}
    //                 </h4>
    //                 <span>3 nights</span>
    //                 <h3><a href="#">${data[0].title}</a></h3>
    //                 <div class="star d-flex clearfix">
    //                     <div class="mr-auto float-left">
    //                         <span class="ion-ios-star"></span>
    //                         <span class="ion-ios-star"></span>
    //                         <span class="ion-ios-star"></span>
    //                         <span class="ion-ios-star"></span>
    //                         <span class="ion-ios-star"></span>
    //                     </div>
    //                     <div class="float-right">
    //                         <span class="rate"><a href="#">(${data[0].bubbleRating.count})</a></span>
    //                     </div>
    //                 </div>
    //             </div>
                
    //         </div>
    //     </div>
    // `;

if(element.commerceInfo.priceForDisplay.text !== null){
    let hotelCard = `
<div class="card mt-4">
    <div class="row g-0">
      <div class="col-4">
        <img src="${modifiedUrl}" class="img-fluid rounded-start" alt="..."style="padding:20px;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">price = ${element.commerceInfo.priceForDisplay.text}</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          <button class="btn-success" onclick="window.open('${element.commerceInfo.externalUrl}','_blank')">Get Info</button>
        </div>
      </div>
    </div>
</div>
    `
    console.log("i am executed");
    hotelRow.innerHTML += hotelCard;  }  
  });
}

// let prompt = "Generate a ${no_of_days} day planner for a trip to mumbai"