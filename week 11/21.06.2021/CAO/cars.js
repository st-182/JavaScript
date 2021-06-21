export default function one(app) {
  let arrayOfCars = ["BMW", "VW", "AUDI", "MB"];
  app.innerHTML += `
<ul>
${arrayOfCars.map((item) => `<li>${item}</li>`).join(``)}
</ul>
`;
}
