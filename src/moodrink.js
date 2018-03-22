import $ from 'jquery';
// import fetchResults from "../src/main.js";
// normally we wouldn't save this in the file
// API_KEY = https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

function getDrink(fetchResults, badResults){

  let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = process.env.API_KEY;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

      promise.then(function(response) {
        let body = JSON.parse(response);
        fetchResults(response);
        console.log(body.ingredients[0]);
        console.log(response);

        // console.log("got here!");
        // console.log(body);
      }, function(error) {
        badResults (error);
      });
    // });
}

export { getDrink };
