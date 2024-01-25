const bokA = document.querySelector("#bokA");
const bokB = document.querySelector("#bokB");
const bokC = document.querySelector("#bokC");
const btn1 = document.querySelector("#btn1");
const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const display2B = document.querySelector("#display2B");
const display3B = document.querySelector("#display3B");
const display4B = document.querySelector("#display4B");
const display3 = document.querySelector("#display3");
const display4 = document.querySelector("#display4");

btn1.addEventListener("click", function (evt) {
  evt.preventDefault();

  console.log("!");
  const arr = [
    parseFloat(bokA.value),
    parseFloat(bokB.value),
    parseFloat(bokC.value),
  ];
  const [a, b, c] = arr.sort((a, b) => a - b);
  console.log(a, b, c);
  const p = (1 / 2) * (a + b + c);
  const pole = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  if (a + b <= c) {
    // display1.classList.toggle("hidden")

    display1.innerHTML +=
      "Z boków o długościach: " +
      a +
      ", " +
      b +
      ", " +
      c +
      " nie można utworzyć trójkąta";
  } else if (a * a + b * b == c * c) {
    display2.innerHTML +=
      "Z boków o długościach: " +
      a +
      ", " +
      b +
      ", " +
      c +
      " można utworzyć trójkąt prostokątny";

    display2B.innerHTML += "Pole trójkąta wynosi: " + pole;
  } else if (a * a + b * b > c * c) {
    display3.innerHTML +=
      "Z boków o długościach: " +
      a +
      ", " +
      b +
      ", " +
      c +
      " można utworzyć trójkąt rozwartokątny";

    display3B.innerHTML += "Pole trójkąta wynosi: " + pole;
  } else if (a * a + b * b < c * c) {
    display4.innerHTML +=
      "Z boków o długościach: " +
      a +
      ", " +
      b +
      ", " +
      c +
      " można utworzyć trójkąt ostrokątny";
    display4B.innerHTML += "Pole trójkąta wynosi: " + pole;
  }
});
