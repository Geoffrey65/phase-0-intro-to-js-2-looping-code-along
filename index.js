// Function to wrap gifts and log a message for each
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  }
  
  // Example array of gifts
  const giftsArray = ["teddy bear", "drone", "doll"];
  
  // Calling the wrapGifts function with the array
  wrapGifts(giftsArray);
  
  // Function to write thank you cards and return an array of messages
  function writeCards(names, event) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  // Example array of names
  const namesArray = ["Charlie", "Samip", "Ali"];
  
  // Calling the writeCards function with the array of names and an event
  const thankYouCards = writeCards(namesArray, "birthday");
  
  // Logging the generated thank you cards
  console.log(thankYouCards);
  
  // Function to count down from a given number to zero
  function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  // Example of counting down from 10
  countDown(10);
  
