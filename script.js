let allQuestions = document.querySelectorAll(".texts .question");

let toggle = (element) => {
  let answer = element.currentTarget.nextElementSibling;
  let question = element.currentTarget.children[0];
  let arrowIcon = element.currentTarget.children[1];
  if (answer.style.display === "none") {
    answer.style.display = "block";
    answer.style.height = "50px";
    question.style.color = "hsl(238, 29%, 16%)";
    question.style.fontWeight = "800";
    arrowIcon.style.transform = "rotate(180deg)";
  } else {
    answer.style.display = "none";
    answer.style.height = "0px";
    question.style.color = "hsl(240, 6%, 50%)";
    question.style.fontWeight = "400";
    arrowIcon.style.transform = "rotate(0deg)";
  }
};

for (let question of allQuestions) {
  let answer = question.nextElementSibling;
  answer.style.display = "none";
  question.addEventListener("click", toggle)};