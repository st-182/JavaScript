document.addEventListener(`DOMContentLoaded`, () => {
  animateDiv(".a");
  animateDiv(".b");
  animateDiv(".c");
  animateDiv(".d");
});

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  let h = $(window).height() - 50;
  let w = $(window).width() - 50;

  let nh = Math.floor(Math.random() * h);
  let nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(myclass) {
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 1000, function () {
    animateDiv(myclass);
  });
}
