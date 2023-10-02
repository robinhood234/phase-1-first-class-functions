function receivesAFunction (callback) {
return callback();
}
receivesAFunction(function () {return 'spy';});

function returnsANamedFunction() {
return function noName() {
  
}
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log('this is a function')
  }
  
}
const myFunction = returnsAnAnonymousFunction;


