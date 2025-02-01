const crearMessageUsuario = (userMessage) => {
  let container = document.getElementById("messages-container");
  let messageElement = document.createElement("div");
  messageElement.innerHTML =
    "<span> You: </span>" + "<span>" + userMessage + "</span>";
  container.append(messageElement);
  chatBotResponse(userMessage);
};

document.getElementById("myForm").addEventListener("submit", () => {
  event.preventDefault();
  let textBox = document.getElementById("textBox");
  let userMessage = textBox.value;
  if (userMessage.trim() != "") {
    crearMessageUsuario(userMessage);
  }
  textBox.value = "";
});

const chatBotResponse = (userMessage) => {
  let container = document.getElementById("messages-container");
  let messageElement = document.createElement("div");
  messageElement.style.textAlign = "right";
  messageElement.innerHTML =
    "<span style=color:blue> Bot: </span>" + "<span>" + "😊" + "</span>";
  container.append(messageElement);
};

const initialMessage = (text) => {
  let container = document.getElementById("messages-container");
  let messageElement = document.createElement("div");
  messageElement.style.textAlign = "right";
  messageElement.innerHTML =
    "<span style=color:blue> Bot: </span>" + "<span>" + text + "</span>";
  container.append(messageElement);
};

initialMessage("Hola,soy un chat, por ahora no hago mucho, probame");
