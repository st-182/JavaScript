//End Point
const urlOfServer = `http://localhost:5000/`;
//Variables
const formAddToDoElement = document.querySelector(`#add-todo`);
const toggleBTNNameElement = document.querySelector(`#toggle-add-update`);
const todosOutputElement = document.querySelector(`#todos-output`);
let idForUpdate = `0`;

//Functions
const showTodos = (e) => {
  let output = ``;
  fetch(urlOfServer)
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => {
      data.forEach((todo) => {
        todosOutputElement.innerHTML += `
          <div class=" col pt-5 " >
            <div class="col col-sm-6 col-md-4 col-lg-3 ">
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">${todo.title}</h5>
                  <p class="card-text">
                    ${todo.description}
                  </p>
                  <a href="#add-todo" id="${todo.id}" class="card-link update">Update</a>
                  <a href="#add-todo" id="${todo.id}" class="card-link delete">Delete</a>
                </div>
              </div>
            </div>
          `;
      });
      addEventListenerTObuttons();
    })
    .catch((err) => console.log(err));
};

const addEventListenerTObuttons = () => {
  const updateBtnElement = document.querySelectorAll(`.update`);
  const deleteBtnElement = document.querySelectorAll(`.delete`);
  updateBtnElement.forEach((btn) => {
    btn.addEventListener(`click`, DataTransferToForm);
    console.log(`done`);
  });
  deleteBtnElement.forEach((btn) => {
    btn.addEventListener(`click`, deleteToDo);
  });
};

const DataTransferToForm = (e) => {
  toggleBTNNameElement.textContent = `Update`;
  //   console.log(formAddToDoElement.children[0].children[1].value);
  //   console.log(formAddToDoElement.children[1].children[1].value);
  //   console.log(e.target.parentNode.children[0].textContent.trim());
  //   console.log(e.target.parentNode.children[1].textContent.trim());
  formAddToDoElement.children[0].children[1].value =
    e.target.parentNode.children[0].textContent.trim();
  formAddToDoElement.children[1].children[1].value =
    e.target.parentNode.children[1].textContent.trim();
  idForUpdate = e.target.id;
};
const deleteToDo = (e) => {
  idForUpdate = e.target.id;
  fetch(urlOfServer + idForUpdate, {
    method: `DELETE`,
    headers: {
      "Content-Type": `application/json`,
    },
  })
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => console.log(data));
};

const UpdateOrAdd = (e) => {
  e.preventDefault();
  if (toggleBTNNameElement.textContent === `Add new`) {
    addNewToDo(e);
  } else {
    updateToDo(e);
  }
};

const updateToDo = (e) => {
  let todo = {
    title: e.target[0].value,
    description: e.target[1].value,
  };
  console.log(todo);
  fetch(urlOfServer + idForUpdate, {
    method: `PUT`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(todo),
  })
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      location.reload();
    })
    .catch((err) => console.log(err));
};

const addNewToDo = (e) => {
  let todo = {
    title: e.target[0].value,
    description: e.target[1].value,
  };
  fetch(urlOfServer, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(todo),
  })
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      location.reload();
    })
    .catch((err) => console.log(err));
};

//Events
document.addEventListener(`DOMContentLoaded`, showTodos);
formAddToDoElement.addEventListener(`submit`, UpdateOrAdd);
