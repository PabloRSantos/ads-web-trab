const options = [
  {
    image: "../../images/paper.png",
    value: "paper",
  },
  {
    image: "../../images/rock.png",
    value: "rock",
  },
  {
    image: "../../images/scissors.png",
    value: "scissors",
  },
];

const score = {
  user: 0,
  machine: 0,
  tie: 0,
};

const buttons = document.querySelectorAll(".options button");
buttons.forEach((button) => button.addEventListener("click", onOptionPress));

function updateScore() {
    Object.entries(score).forEach(([key, value]) => {
        const element = document.querySelector(`.score #${key}-score`)
        element.textContent = value
    })
}

function onOptionPress(event) {
  const machinePlay = Math.floor(Math.random() * (3 - 0)) + 0;
  const machineSelectedOption = options[machinePlay];
  document
    .querySelector("#machine")
    .setAttribute("src", machineSelectedOption.image);

  const imagePath = event.target.getAttribute("src");
  document.querySelector("#player").setAttribute("src", imagePath);

  const userSelectedOption = options.find(
    (option) => option.image === imagePath
  );

  if (userSelectedOption.value === machineSelectedOption.value) {
    score.tie += 1;
  }

  if (
    userSelectedOption.value === "rock" &&
    machineSelectedOption.value === "scissors"
  ) {
    score.user += 1;
  } else if (
    userSelectedOption.value === "rock" &&
    machineSelectedOption.value === "paper"
  ) {
    score.machine += 1;
  }

  if (
    userSelectedOption.value === "paper" &&
    machineSelectedOption.value === "rock"
  ) {
    score.user += 1;
  } else if (
    userSelectedOption.value === "paper" &&
    machineSelectedOption.value === "scissors"
  ) {
    score.machine += 1;
  }

  if (
    userSelectedOption.value === "scissors" &&
    machineSelectedOption.value === "paper"
  ) {
    score.user += 1;
  } else if (
    userSelectedOption.value === "scissors" &&
    machineSelectedOption.value === "rock"
  ) {
    score.machine += 1;
  }

  updateScore()
}
