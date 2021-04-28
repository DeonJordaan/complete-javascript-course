'use strict';
// /*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
// */
///////////////////////////////////////
//LECTURE 244
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('slovenia');
// getCountryData('germany');
getCountryData('croatia');
getCountryData('montenegro');
// getCountryData('switzerland');
*/
///////////////////////////////////////
//LECTURE 246
/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render country 1
    renderCountry(data);

    // Get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      //   console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('slovenia');
// getCountryAndNeighbour('germany');
// getCountryAndNeighbour('croatia');
// getCountryAndNeighbour('montenegro');
// getCountryAndNeighbour('switzerland');
getCountryAndNeighbour('south africa');
*/
// LECTURE 247
/*
// Old Method:
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

// Using the Fetch API
const request = fetch(`https://restcountries.eu/rest/v2/name/portugal`);
console.log(request);
*/
// LECTURE 248

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// Single AJAX call
// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

//LECTURE 249
// /*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
// */
// Chaining AJAX calls NOTE The inefficient way without the getJSON function above
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💩💩💩`);
//       renderError(`Something went wrong! 💩💩💩 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
/*
const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // console.log(data);

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💩💩💩`);
      renderError(`Something went wrong! 💩💩💩 ${err.message} Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('united kingdom');
// });

// getCountryData('iceland');
// */

// LECTURE 252 - Coding Challenge
/*
//NOTE My solution making use of the 'getCountryData' function we made earlier to render the country
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       response.json().then(data => {
//         console.log(`You are in ${data.city}, ${data.country}`);
//         getCountryData(`${data.country}`);
//       });

//       if (response.status === 403)
//         throw new Error("Too many requests!");
//     })
//     .catch(err => console.log(`${err} ❗❗❗`));
// };

//NOTE Jonas' solution which includes a new fetch call to render the country using just the 'renderCountry' function
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (response.status === 403) throw new Error('Too many requests!');
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err} ❗❗❗`));
};

btn.addEventListener('click', function () {
  // whereAmI(52.508, 13.381);
  // whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);
});
*/

// LECTURE 254
/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/

// LECTURE 255
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is running...🤞');
  setTimeout(function () {
    if (Math.random() > 0.5) {
      resolve('You WIN! 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited 3 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited 4 seconds'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Not abc!')).catch(x => console.error(x));
*/

// LECTURE 256
/*
// Callback based
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );
// console.log('Getting location');

// Promisifyed - Promise based
// First version
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//   });
// };

// Simpler version
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (response.status === 403) throw new Error('Too many requests!');
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err} ❗❗❗`));
};

btn.addEventListener('click', whereAmI);
*/

// LECTURE 257 - Coding Challenge

/*
let image;

// TODO THIS IS AS FAR AS I GOT 
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    image = document.createElement('img');
    image.addEventListener('load', () => {
      document.querySelector('.images').appendChild(image);
      resolve(image);
    });
    image.addEventListener('error', reject);
    image.src = imgPath;
    return image;
  })
    .then(() => {
      wait(2).then(() => (image.style.display = 'none'));
      return image;
    })
    .then(() => {
      wait(2).then(() => (image.style.display = 'flex'));
    });
  // }).then(() => {
  //   wait(2).then(console.log('wtf'));
};


// .catch(err => console.log(`${err} Image not loaded 🤷‍♂️`));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(1).then(() => {
//   console.log('I waited 1 seconds');
//   return wait(1);
// });

createImage('img/img-1.jpg');
*/

// NOTE JONAS' SOLUTION
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', function () {
      imgContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(image => {
    currentImg = image;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return wait(2);
  })
  .then(() => {
    return createImage('img/img-2.jpg');
  })
  .then(image => {
    currentImg = image;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

// LECTURE 258
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 🤦‍♂️`);
    renderError(`🤦‍♂️ ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }

  // NOTE Doing the same with a normal Promise and .then()
  // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res =>
  //   console.log(res)
  // );
};

whereAmI();
*/
// LECTURE 259
/*
//Just a simple example
try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  alert(err.message);
}
*/

// LECTURE 260
/*
console.log('1: Will get location');

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 🤷‍♂️`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 🤷‍♂️`);
  }
  console.log('3: Finished getting location');
})();
*/
// LECTURE 261
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('kazakhstan', 'norway', 'vietnam');
*/

// LECTURE 262
/*
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('More success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('More success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('More success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/
// LECTURE 263 - Coding Challenge
// /*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', function () {
      imgContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// Part 1
const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    await wait(2);

    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

// Part 2
// FIXME My pretty weak attempt
// const loadAll = async function (imgArr) {
//   try {
//     const imgArray = await Promise.all(imgArr);

//     const imgs = await imgArray.map(img => createImage(img));

//     const images = document.querySelectorAll('.images');
//     images.classList.add('parallel');

//     console.log(imgs);
//   } catch (err) {
//     console.error(err);
//   }
// };

// Jonas' Solution
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));

    const imgsEl = await Promise.all(imgs);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
