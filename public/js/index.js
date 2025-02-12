const crearMessageUsuario = (userMessage) => {
  let container = document.getElementById("messages-container");
  let messageElement = document.createElement("div");
  messageElement.innerHTML =
    "<span style='font-weight:bold; color:green;'> You: </span>" +
    "<span>" +
    userMessage +
    "</span>";
  container.append(messageElement);
  responseManager(userMessage);
  container.scrollTop = container.scrollHeight;
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

const chatBotResponse = (response) => {
  let container = document.getElementById("messages-container");
  let messageElement = document.createElement("div");
  messageElement.style.textAlign = "right";
  messageElement.innerHTML =
    "<span style='font-weight:bold; color:blue;'> Bot: </span>" +
    "<span>" +
    response +
    "</span>";
  container.append(messageElement);
};

const urlForIA = "http://localhost:8000/ia";

const responseManager = (userConsult) => {
  fetch(urlForIA, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userConsult,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      chatBotResponse(data.responseia);
    });
};
