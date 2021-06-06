// var
// const main = document.querySelector(`main`);
// const createDiv = document.createElement(`div`);

// functions
//! parentAddTo(`PARENT ELEMENT`, `CHILD ELEMENT`, `CONTENT`);
function parentAddTo(parent, element, content) {
  document
    .querySelector(parent)
    .appendChild(document.createElement(element)).textContent = content;
}
function setAttributeto(toWhom, attribute, value) {
  document.querySelector(toWhom).setAttribute(attribute, value);
}
function setStyle(toWhom, attribute, value) {
  document.querySelector(toWhom).style[attribute] = value;
}
// events and other code
parentAddTo(`main`, `div`, null);
setAttributeto(`div`, `id`, `card`);
parentAddTo(`#card`, `img`, null);
setAttributeto(`img`, `id`, `card__photo`);
setAttributeto(
  `img`,
  `src`,
  `https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528`
);
parentAddTo(`#card`, `h2`, `Trent Walton`);
setAttributeto(`h2`, `id`, `card__name`);
parentAddTo(`#card`, `p`, `Founder & 1/3 @paravelink`);
setAttributeto(`p`, `id`, `card__ocupation`);
parentAddTo(`#card`, `p`, `Austin, TX`);
setAttributeto(`p:nth-of-type(2)`, `id`, `card__palce`);

setStyle(`#card__name`, `fontSize`, `30px`);
setStyle(`#card__name`, `color`, `white`);

setStyle(`#card__ocupation`, `color`, `floralwhite`);

setStyle(`#card__palce`, `color`, `floralwhite`);

setStyle(`#card`, `height`, `50vh`);
setStyle(`#card`, `width`, `50%`);
setStyle(`#card`, `margin`, `100px auto`);
setStyle(`#card`, `backgroundColor`, `gray`);
setStyle(`#card`, `borderRadius`, `10px`);
setStyle(`#card`, `textAlign`, `center`);

setStyle(`#card__photo`, `width`, `100px`);
setStyle(`#card__photo`, `height`, `100px`);
setStyle(`#card__photo`, `borderRadius`, `50%`);
setStyle(`#card__photo`, `objectFit`, `cover`);
setStyle(`#card__photo`, `position`, `relative`);
setStyle(`#card__photo`, `top`, `-50px`);
// setStyle(`#card__photo`, `left`, `50%`);
setStyle(`#card__photo`, `border`, `3px solid bisque`);
// setStyle(`#card__photo`, `transform`, `translate(-50%, 0)`);

//
//
//
//
//
//
//
//
//
//  ar sakitosi Helper function kaip JS?
