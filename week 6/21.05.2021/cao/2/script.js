document.querySelector(`form`, (e) => {
  e.preventDefault();
  let num = e.target[0].value;
  if (num % 2 === 1) {
    for (let i = 0; i < num; i++) {
      console.log(I);
      let i = ` `;
      for (let x = 0; x < num; x++) {
        i += `I`;
        if (i===1 && x===1){
          console.log
        }
      }
    }
  } else {
    console.log(`wrong number (only odd alowed)`);
  }
});
