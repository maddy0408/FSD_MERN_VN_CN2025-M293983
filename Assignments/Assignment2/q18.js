function start(callback) {
  setTimeout(() => {
    console.log("Exam started");
    callback();
  }, 1000);
}

function evaluate(callback) {
  setTimeout(() => {
    console.log("Evaluating answers");
    callback();
  }, 2000);
}

function declareresult() {
  setTimeout(() => {
    console.log("Result declared");
  }, 1500);
}

// Execute in sequence
start(() => {
  evaluate(() => {
    declareresult();
  });
});
