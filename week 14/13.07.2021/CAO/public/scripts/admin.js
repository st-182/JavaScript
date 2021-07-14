//var
const btnElements = document.querySelectorAll(`button`);
//functions
const deletePost = (e) => {
  const id = e.target.dataset.id;
  return fetch(`http://localhost:5000/blog/${id}`, {
    method: `DELETE`,
  })
    .then((res) => res.json())
    .then((data) => location.reload())
    .catch((err) => console.log(err));
};
//events
btnElements.forEach((btn) => {
  btn.addEventListener(`click`, deletePost);
});
