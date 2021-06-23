//var
const form = document.querySelector(`form`);
const selectAll = document.querySelectorAll(`select`);
outputUL = document.querySelector(`#output`);
let dataArray = [];
let i = 0;
//func
async function doIt(e) {
  outputUL.innerHTML = ``;
  e.preventDefault();
  let search = e.target.value;
  if (search.length > 3) {
    //fetch
    await fetch(`https://api.chucknorris.io/jokes/search?query=${search}`)
      .then((response) => {
        // console.log(response.status);
        response.status !== 200
          ? (outputUL.innerHTML = `<li>ERROR</li>`)
          : null;
        return response.json();
      })
      .then((data) => {
        dataArray = [];
        dataArray.push(...data.result);
      })
      .catch((error) => console.log(error));
    // console.log(selectAll[0].value, selectAll[1].value);
    if (!selectAll[0].value && !selectAll[1].value) {
      createList(dataArray);
    } else {
      filter(selectAll[0]);
    }
    numberOfItems();
  } else {
    outputUL.innerHTML = `<li>At least 3 characters in search bar for search</li>`;
  }
}

function numberOfItems() {
  document.querySelector(`#number`).textContent = `You see ${i} items`;
}

function createList(arr) {
  outputUL = document.querySelector(`#output`);
  i = 0;
  for (let item of arr.slice(
    0,
    selectAll[1].value === `` ? 100 : selectAll[1].value
  )) {
    i++;
    outputUL.appendChild(document.createElement(`li`)).textContent = item.value;
  }
}

function filter(e) {
  outputUL.innerHTML = ``;
  let ctgry = ``;
  if (e.target) {
    ctgry = e.target.value;
  } else {
    ctgry = e.value;
  }
  if (ctgry !== ``) {
    createList(
      dataArray.filter((item) => {
        return item.categories[0] === ctgry;
      })
    );
  } else {
    createList(dataArray);
  }

  numberOfItems();
}

// events
form.addEventListener(`keyup`, doIt);
selectAll[0].addEventListener(`change`, filter);
selectAll[1].addEventListener(`change`, () => {
  outputUL.innerHTML = ``;
  createList(dataArray);
  numberOfItems();
});
