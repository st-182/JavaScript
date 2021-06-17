const moreInfo = document.querySelectorAll(`.toggle-info`); //modeInfo is a button which shows more info about workplace
const infoText = document.querySelectorAll(`.disappear`); //infoText is a p element which the actual info about workplace
// console.log(infoText[infoTextNum]);
function showContent() {
  moreInfo.forEach((item, index) => {
    item.addEventListener(`click`, (e) => {
      infoText[index].classList.toggle(`disappear`);
      e.target.textContent === `Show more`
        ? (e.target.innerText = `Show less`)
        : (e.target.innerText = `Show more`);
    });
  });
}
showContent();

//! CAO JS
const endpointExperiences = `http://64.227.127.73/experiences`;
const endpointSkills = `http://64.227.127.73/skills`;

const allCompanies = document.querySelectorAll(`.grid .year p:nth-of-type(2)`);
const allPositions = document.querySelectorAll(`.grid .job p:nth-of-type(1)`);
const allStartY = document.querySelectorAll(
  `.grid .year p span:nth-of-type(1)`
);
const allEndY = document.querySelectorAll(`.grid .year p span:nth-of-type(2)`);
const allDesc = document.querySelectorAll(`.grid .job p:nth-of-type(2)`);

const allSkills = document.querySelectorAll(
  `.language .one-line p:nth-of-type(1)`
);
const allSkillsLevel = document.querySelectorAll(
  `.language .one-line p:nth-of-type(2)`
);
const allScale = document.querySelectorAll(`.language .line .scale`);

console.log(allScale);
const changeHTML = (url) => {
  fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);
      if (data[0].companyName) {
        data
          .reverse()
          .slice(0, 3)
          .sort((a, b) => a.startYear < b.startYear)
          .forEach((item, index) => {
            console.log(item);
            allCompanies[index].textContent = item.companyName;
            allPositions[index].textContent = item.position;
            allStartY[index].textContent = item.startYear;
            allEndY[index].textContent = item.finishYear;
            allDesc[index].textContent = item.description;
          });
      }
      if (data[0].title) {
        data
          .reverse()
          .slice(0, 5)
          .forEach((item, index) => {
            console.log(item);
            allSkills[index].textContent = item.title;
            allSkillsLevel[index].textContent = item.level;
            allScale[index].style.width = `${item.level}%`;
          });
      }
    });
};
changeHTML(endpointExperiences);
changeHTML(endpointSkills);
