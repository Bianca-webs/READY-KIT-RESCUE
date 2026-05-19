const openChat =
document.getElementById("openChat");

const closeChat =
document.getElementById("closeChat");

const chatbot =
document.getElementById("chatbot");

let chatOpen = false;

// ABRIR / CERRAR

openChat.addEventListener("click", () => {

  if(chatOpen){

    chatbot.style.display = "none";

    chatOpen = false;

  }else{

    chatbot.style.display = "block";

    chatOpen = true;

  }

});

// BOTON X

closeChat.addEventListener("click", () => {

  chatbot.style.display = "none";

  chatOpen = false;

});

// RESPUESTAS

function toggleAnswer(element){

  const questions =
  document.querySelectorAll(".question");

  questions.forEach(question => {

    if(question !== element){

      question.classList.remove("active");

    }

  });

  element.classList.toggle("active");

}

// CATEGORIAS

function showCategory(categoryId){

  const categories =
  document.querySelectorAll(".category");

  categories.forEach(category => {

    category.classList.remove("active-category");

  });

  document
    .getElementById(categoryId)
    .classList.add("active-category");

}