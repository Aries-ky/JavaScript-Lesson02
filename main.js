let display = document.getElementById("output");
let numsAdd;

function set(nums) {
  display.textContent += nums.textContent;
}

function operator(nums) {
  if(display.textContent != ""){
    numsAdd = display.textContent += nums.textContent;
    display.textContent = "";
  }
}

function calc() {
  numsAdd += display.textContent;
  display.textContent = new Function("return " + numsAdd)();
}

function reset() {
  display.textContent = "";
  numsAdd = 0;
}