const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
}

function getResponse(input) {
  // Replace this function with your own logic to generate chatbot responses.
  // For this example, we'll use predefined responses based on user input.
  const lowerCaseInput = input.toLowerCase();
  if (lowerCaseInput.includes('hello')) {
    return 'Hello! How can I assist you today?';
  } else if (lowerCaseInput.includes('help')) {
    return 'Sure, I am here to help you!';
  } else if (lowerCaseInput.includes('bye')) {
    return 'Goodbye! Have a nice day!';
  } else {
    return 'Sorry, I did not understand that.';
  }
}

function handleUserInput() {
  const input = userInput.value.trim();
  if (input !== '') {
    appendMessage('You', input);
    userInput.value = '';
    const response = getResponse(input);
    setTimeout(() => {
      appendMessage('Chatbot', response);
    }, 500);
  }
}

userInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});
