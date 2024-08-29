const numb1 = document.getElementById("numb1");
const numb2 = document.getElementById("numb2");

const pls = document.getElementById("pls");
const minus = document.getElementById("minus");
const mnog = document.getElementById("mnog");
const del = document.getElementById("del");

let znak = "+";

pls.onclick = function () {
  znak = "+";
};

minus.onclick = function () {
  znak = "-";
};

mnog.onclick = function () {
  znak = "памножт";
};

del.onclick = function () {
  znak = "дела";
};

const ps = document.getElementById("ps");

const resElement = document.getElementById("resultNum");

ps.onclick = function () {
  if (znak == "+") {
    const sum = Number(numb1.value) + Number(numb2.value);
    resElement.textContent = sum;
  } else if (znak == "-") {
    const sum = Number(numb1.value) - Number(numb2.value);
    resElement.textContent = sum;
  } else if (znak == "памножт") {
    const sum = Number(numb1.value) * Number(numb2.value);
    resElement.textContent = sum;
  } else if (znak == "дела") {
    const sum = Number(numb1.value) / Number(numb2.value);
    resElement.textContent = sum;
  }
};
