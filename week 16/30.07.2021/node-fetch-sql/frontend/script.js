const body = document.querySelector(`body`);
fetch(`http://localhost:5000/users`)
  .then((res) => {
    console.log(res.status);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    body.innerHTML = ``;
    data.forEach((user) => {
      body.innerHTML += `
    <div class="item">
    <img src="${user.img_url}" alt="${user.login}">
    <p>${user.login}</p>
    </div>
    `;
    });
  });
