let computer_score = 0;
let user_score = 0;

const result_ref = document.getElementById("result");
const user_choice_ref = document.getElementById("user_choice");
const comp_choice_ref = document.getElementById("comp_choice");
const user_score_ref = document.getElementById("user_score");
const computer_score_ref = document.getElementById("computer_score");

const start_btn = document.getElementById("start_btn");
const reset_btn = document.getElementById("reset_btn");
const buttons = document.querySelectorAll(".weapons button");

const choices = ["rock", "paper", "scissor"];
const choices_object = {
    rock: { rock: "draw", scissor: "win", paper: "lose" },
    scissor: { rock: "lose", scissor: "draw", paper: "win" },
    paper: { rock: "win", scissor: "lose", paper: "draw" }
};

buttons.forEach(btn => btn.disabled = true);
reset_btn.style.display = "none";

start_btn.addEventListener("click", () => {
    buttons.forEach(btn => btn.disabled = false);
    reset_btn.style.display = "block";
    start_btn.style.display = "none";
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        user_choice_ref.innerHTML = `You choose <span>${userChoice.toUpperCase()}</span>`;
        comp_choice_ref.innerHTML = `Computer choose <span>${computerChoice.toUpperCase()}</span>`;

        const result = choices_object[userChoice][computerChoice];
        result_ref.className = "";

        if (result === "win") {
            result_ref.style.cssText = "background-color:#00c853;color:#fff";
            result_ref.innerHTML = "YOU WIN";
            result_ref.classList.add("win");
            user_score++;
        } else if (result === "lose") {
            result_ref.style.cssText = "background-color:#d50000;color:#fff";
            result_ref.innerHTML = "YOU LOSE";
            result_ref.classList.add("lose");
            computer_score++;
        } else {
            result_ref.style.cssText = "background-color:#757575;color:#fff";
            result_ref.innerHTML = "DRAW";
        }

        user_score_ref.textContent = user_score;
        computer_score_ref.textContent = computer_score;
    });
});

reset_btn.addEventListener("click", () => {
    user_score = 0;
    computer_score = 0;
    user_score_ref.textContent = 0;
    computer_score_ref.textContent = 0;
    result_ref.textContent = "";
    user_choice_ref.textContent = "";
    comp_choice_ref.textContent = "";
    result_ref.style.cssText = "";
    result_ref.className = "";

    reset_btn.style.display = "none";
    start_btn.style.display = "block";
    buttons.forEach(btn => btn.disabled = true);
});
