const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const questions = document.querySelectorAll(".faq-question");
const answers = document.querySelectorAll(".faq-answer");
const FAQIcons = document.querySelectorAll(".faq-question svg");

// Open Menu
menuBtn.addEventListener("click", () => {
  menu.classList.replace("hidden", "flex");
});

// Close Menu
[...menu.children].forEach((el) => {
  el.addEventListener("click", () => {
    menu.classList.replace("flex", "hidden");
  });
});

// control FAQs
questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("svg");

    // Toggle the visibility of the answer
    if (answer.classList.contains("max-h-0")) {
      // Close all other open answers
      answers.forEach((el) => el.classList.replace("max-h-24", "max-h-0"));
      FAQIcons.forEach((el) => el.classList.remove("rotate-180"));

      // Open the clicked answer
      answer.classList.replace("max-h-0", "max-h-24");
      icon.classList.add("rotate-180");
    } else {
      // Close the clicked answer
      answer.classList.replace("max-h-24", "max-h-0");
      icon.classList.remove("rotate-180");
    }
  });
});
