let buttons = document.querySelector("#buttons");
let display = document.querySelector("#display");
let current_input = "";
let labels = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "C", "=", "/"];

let evaluate = function() {
  if (current_input.includes("+")) {
    let nums = current_input.split("+");
    current_input = (Number(nums[0]) + Number(nums[1])).toString();
  } else if (current_input.includes("-")) {
    nums = current_input.split("-");
    current_input = (Number(nums[0]) - Number(nums[1])).toString();
  } else if (current_input.includes("*")) {
    nums = current_input.split("*");
    current_input = (Number(nums[0]) * Number(nums[1])).toString();
  } else if (current_input.includes("/")) {
    nums = current_input.split("/");
    current_input = (Number(nums[0]) / Number(nums[1])).toString();
  }

  if (current_input.includes(".")) {
    let parts = current_input.split(".");
    current_input = parts[0] + ".";
    current_input += parts[1].length > 8 ? parts[1].substring(0, 9) : parts[1];
  }

  display.textContent = current_input;
};

for (let i = 0; i < 4; i++) {
  let row = document.createElement("div");
  for (let j = 0; j < 4; j++) { 
    let current_button = document.createElement("button");
    current_button.textContent = labels[i*4 + j];

    if (labels[i*4+j] == "C") {
      current_button.addEventListener("click", () => {
        current_input = "";
        display.textContent = current_input;
      });
    } else if (labels[i*4+j] == "=") {
      current_button.addEventListener("click", () => {evaluate()});
    } else {
      current_button.addEventListener("click", () => {
        current_input += labels[i*4 + j];
        display.textContent = current_input;
      });
    }  
    row.appendChild(current_button);
  }
  buttons.appendChild(row);
}