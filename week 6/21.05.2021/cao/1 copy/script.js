document.querySelector(`form`).addEventListener(`submit`, fn);
let toremove;
function fn(e) {
  // removes the previous p elements after 2nd submit
  e.preventDefault();
  let i = 0;
  while (toremove > 0) {
    const pp = document.querySelector(`p`);
    console.log(toremove);
    document.body.removeChild(pp);
    toremove--;
  }
  console.log(toremove);
  let number = Number(e.target[0].value);
  let l = `L`;
  let ll = ``;
  // creates p elements 
  while (i < number) {
    const p = document.createElement(`p`);
    document.body.appendChild(p).textContent = l;
    ll = ll + l;
    i === number - 1
      ? (document.querySelector(`p:nth-of-type(${number})`).textContent = ll)
      : null;
    i++;
  }
  // gives value to remove while-function
  toremove = number;
  console.log(toremove);
}

