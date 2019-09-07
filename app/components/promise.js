function addPromise(a, b) {

  var sum= a + b;

  return new Promise(function (resolve, reject) {

    if (typeof sum === "number") {
    	resolve(sum);
    }

    else {
    	reject("You must supply two numbers.");
    }
  });
}

addPromise(6,"g").then(function(sum) {
  console.log("Promise sucess: " + sum);
},
function(err) {
  console.log("Promise error: " + err);
});
  
