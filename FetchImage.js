let images = [
  "photos/IMG_2308.JPG",
  "photos/np1.png",
  "photos/np2.png",
];

const paragraph = document.querySelectorAll(".details p");
paragraph.forEach((para) => {
  const p = para.textContent.trim();
  if (p.length > 220) {
    para.textContent = p.slice(0, 220) + "....";
  }
});


//--------------------- fetching news from other websites-------------------

// const apiKey = "d9351b6705f2e82d67151cdc8470c54b";
// const url = "http://api.mediastack.com/v1/news";

// async function FetchingData() {
//   let data = await fetch(
//     `https://content.guardianapis.com/search?api-key=60bbc7b6-a578-4a1d-aa99-26f9fad870f3`,
//     { mode: "no-cors" });
//   console.log(data);
//   let receiveData = await data.json();
//   console.log(receiveData);
// }
// FetchingData();

// -------------------fetching data from different news api----------------------------
// const url = 'https://newsapi.org/v2/everything?q=Apple&from=2024-12-17&sortBy=popularity&apiKey=API_KEY'
// const apiKey = "dd0bdba3de2b482eb7c1630c947de645";

// async function fetchData() {
//   let data = await fetch(
//     `GET https://newsapi.org/v2/everything?q=Apple&from=2024-12-17&sortBy=popularity&apiKey=dd0bdba3de2b482eb7c1630c947de645`
//   );
// }



// var url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2024-12-17&' +
//           'sortBy=popularity&' +
//           'apiKey=dd0bdba3de2b482eb7c1630c947de645';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })
