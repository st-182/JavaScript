const END_POINT = `http://localhost:5000/`;

const nameIntputElement = document.querySelector(`#name`);
const surnameIntputElement = document.querySelector(`#surname`);
const emailIntputElement = document.querySelector(`#email`);
const phoneNumberIntputElement = document.querySelector(`#phone-number`);
const yearIntputElement = document.querySelector(`#year`);
const monthIntputElement = document.querySelector(`#month`);
const dayIntputElement = document.querySelector(`#day`);
const timeIntputElement = document.querySelector(`#time`);
const errorIntputElement = document.querySelector(`#error`);

const formElement = document.querySelector(`form`);

//this is fetched data form server, it is cashed localy, so the render would not take too much time
let localData = [];

// I am importing arrays of data (months, days in month, time slots) form outside JS file
import {
  availableTime,
  availableDay,
  availableMonths,
} from "./modules/timeDayMonthYearOptions.js";

// this is starter render function, it is used to show and cash all information after HTML loaded
const renderAvailable = () => {
  // console.log(`one`);
  fetch(END_POINT)
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => {
      localData = [...data];

      renderAvailableYear();
      renderAvailableMonth();
      renderAvailableDay();
      renderAvailableTime();
    })
    .catch((err) => console.log(err));
};

// this function renders year based on current month,
//so, in case it is already November -> the next year opens for registration
const renderAvailableYear = () => {
  yearIntputElement.innerHTML = ``;
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  yearIntputElement.innerHTML = `
    <option>${year}</option>
    ${month >= 11 ? `<option>${year + 1}</option>` : null}
  `;
};

const renderAvailableMonth = () => {
  monthIntputElement.innerHTML = ``;

  let result = [];

  availableMonths.forEach((monthObject) => {
    let howManyBookingsMade = localData.filter((reservation) => {
      return reservation.reservation.month === monthObject.month;
    });

    // console.log(16 * +monthObject.days);
    if (howManyBookingsMade.length >= 16 * +monthObject.days) {
      console.log(`${monthObject.month}`, howManyBookingsMade.length);
      monthIntputElement.innerHTML += `
        <option>${monthObject.month} Full</option>
      `;
    } else {
      monthIntputElement.innerHTML += `
        <option>${monthObject.month}</option>
      `;
    }
  });

  // availableMonths.forEach((monthObject) => {

  // });
};

const renderAvailableDay = () => {
  dayIntputElement.innerHTML = ``;

  let thatMonthLengthInDays = availableMonths.filter(
    (month) => month.month === monthIntputElement.value
  );
  // console.log(thatMonthLengthInDays[0].days);

  // in this step I filter the reservations, so I could get resrvations for specific month
  let thatMonthReservations = localData.filter((userReservation) => {
    if (userReservation.reservation.year === yearIntputElement.value) {
      if (userReservation.reservation.month === monthIntputElement.value) {
        return userReservation;
      }
    }
  });
  // if (thatMonthReservations.length > 16*) {
  //   console.log(
  //     `ERROR,there are more then 16*${thatMonthReservations} reservations, what is impossible for a standard day`
  //   );
  //   return;
  // }
  // console.log(thatMonthReservations);

  // thatDayReservedTimes is an array consisting purely of reserved times of specific day
  let thatMonthReservedDays = thatMonthReservations.reduce((acc, cur) => {
    acc.push(cur.reservation.day);
    return acc;
  }, []);
  // console.log(thatMonthReservedDays);

  let availableDayFiltered = [];
  availableDayFiltered.push(...availableDay);
  // console.log(availableDayFiltered);

  availableDay.slice(0, thatMonthLengthInDays[0].days).forEach((day) => {
    let numberOfResrvedSlots = thatMonthReservedDays.filter(
      (reservedDay) => reservedDay === day
    );
    // console.log(numberOfResrvedSlots.length);
    if (numberOfResrvedSlots.length < 16) {
      dayIntputElement.innerHTML += `
        <option>${day}</option>
      `;
    } else if (numberOfResrvedSlots.length > 16) {
      console.log(
        `ERROR,there are more then 16 reservations for a day! That is impossible for a standard day
        Day: ${day}
        Month: 
        `
      );
      return;
    }
  });
};

const renderAvailableTime = () => {
  timeIntputElement.innerHTML = ``; // clearing options

  // in this step I filter the reservations, so I could get resrvations for specific date
  let thatDayReservations = localData.filter((userReservation) => {
    if (userReservation.reservation.year === yearIntputElement.value) {
      if (userReservation.reservation.month === monthIntputElement.value) {
        if (userReservation.reservation.day === dayIntputElement.value) {
          return userReservation;
        }
      }
    }
  });
  if (thatDayReservations.length > 16) {
    console.log(
      `ERROR,there are more then 16 reservations, what is impossible for a standard day`
    );
    return;
  }
  // thatDayReservedTimes is an array consisting purely of reserved times of specific day
  let thatDayReservedTimes = thatDayReservations.reduce((acc, cur) => {
    acc.push(cur.reservation.time);
    return acc;
  }, []);

  // now I am pushing time slots array, which i imported, into new array, which will be rendered
  let availableTimeFiltered = [];
  availableTimeFiltered.push(...availableTime);

  // now I am checking the time slots, those which been reserved are assighed with undefined
  for (let reservedTime of thatDayReservedTimes) {
    availableTimeFiltered.forEach((time, index) => {
      if (time === reservedTime) {
        // console.log(time);
        availableTimeFiltered[index] = undefined;
      }
    });
  }
  // finally I am rendering available ones
  availableTimeFiltered.forEach((item) => {
    if (item) {
      timeIntputElement.innerHTML += `
      <option>${item}</option>
    `;
    }
  });
};

const sendData = (e) => {
  e.preventDefault();
  //making error message empty
  errorIntputElement.textContent = ``;

  if (
    !nameIntputElement.value ||
    !surnameIntputElement.value ||
    !emailIntputElement.value ||
    !phoneNumberIntputElement.value ||
    !yearIntputElement.value ||
    !monthIntputElement.value ||
    !dayIntputElement.value ||
    !timeIntputElement.value
  ) {
    errorIntputElement.textContent = `Sorry, but you missing:
    ${!nameIntputElement.value ? `Name, ` : ``}
    ${!surnameIntputElement.value ? `Surname, ` : ``}
    ${!emailIntputElement.value ? `Email, ` : ``}
    ${!phoneNumberIntputElement.value ? `Phone Number, ` : ``}
    ${!yearIntputElement.value ? `Year, ` : ``}
    ${!monthIntputElement.value ? `Month, ` : ``}
    ${!dayIntputElement.value ? `Day, ` : ``}
    ${!timeIntputElement.value ? `Time Slot. ` : ``}
    `;
    return;
  }
  fetch(END_POINT, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({
      name: nameIntputElement.value,
      surname: surnameIntputElement.value,
      email: emailIntputElement.value,
      phoneNumber: phoneNumberIntputElement.value,
      reservation: {
        year: yearIntputElement.value,
        month: monthIntputElement.value,
        day: dayIntputElement.value,
        time: timeIntputElement.value,
      },
    }),
  })
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      renderAvailable();
    })
    .catch((err) => console.log(err));
};

//renders month day and time
const renderAgainMonthDayTime = () => {
  renderAvailableMonth();
  renderAvailableDay();
  renderAvailableTime();
};

//renders day and time
const renderAgainDayTime = () => {
  renderAvailableDay();
  renderAvailableTime();
};

//renders time
const renderAgainTime = () => {
  renderAvailableTime();
};

document.addEventListener(`DOMContentLoaded`, renderAvailable);
formElement.addEventListener(`submit`, sendData);

//if another date chosen -> content is rendered
yearIntputElement.addEventListener(`change`, renderAgainMonthDayTime);
monthIntputElement.addEventListener(`change`, renderAgainDayTime);
dayIntputElement.addEventListener(`change`, renderAgainTime);
