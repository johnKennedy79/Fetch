console.log("Hello World Test");

// we put async in front of our function to tell it that we can wait for the responce

async function dadjoke() {
  //call api
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );

  // put the json data into a format I can use /read
  const data = await response.json();
  //put the data into our page
  const setup = document.getElementById("setup");
  const punch = document.getElementById("punch");

  setup.innerText = [data.setup];
  punch.innerText = [data.punchline];
  console.log(response);
  console.log(data);
}

dadjoke();

// async function getMyStuffFromOverThere() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log("HTTP Response:", response);
//   const json = await response.json();
//   console.log("JSON Data:", json);
// }

// getMyStuffFromOverThere();

// You can also do it without async/await, by using the .then() method on the object returned by fetch. This is a special type of object called a "promise", and it's how async/await works under the hood. We'll use async/await in most cases, but it's useful to recognise what this is if you see it. We'll look at how we can make and break promises next week.

fetch("https://official-joke-api.appspot.com/random_joke")
  .then(function (response) {
    console.log("HTTP Response:", response);
    return response.json();
  })
  .then(function (json) {
    console.log("JSON Data:", json);
    const setup2 = document.getElementById("setup2");
    const punch2 = document.getElementById("punch2");
    setup2.innerText = [json.setup];
    punch2.innerText = [json.punchline];
  });
