// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(person) {
      if(person === "Waldo") {
          return actionWhenFound();
      }
  }, actionWhenFound);
}

function actionWhenFound() {
  console.log("Found Waldo");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);