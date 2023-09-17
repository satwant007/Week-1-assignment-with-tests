let counter = 0;

function incrementCounter() {
    counter++;
    console.clear()
  console.log("Counter:", counter);
}

const intervalId = setInterval(incrementCounter, 1000);