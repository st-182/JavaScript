// Add
import addNumbers, { addThreeNumbers, addFourNumbers } from "./modules/add.js";

// Multyply
import multyplyNumbers, {
  multyplyThreeNumbers,
  multyplyFourNumbers,
} from "./modules/multyply.js";

// Devide
import devideNumbers, {
  devideThreeNumbers,
  devideFourNumbers,
} from "./modules/devide.js";

// Subtract
import subtractNumbers, {
  subtractThreeNumbers,
  subtractFourNumbers,
} from "./modules/subtract.js";

console.group(`add`);
console.log(addNumbers(1, 3));
console.log(addThreeNumbers(1, 2, 3));
console.log(addFourNumbers(1, 2, 3, 4));
console.groupEnd(`add`);

console.group(`multyply`);
console.log(multyplyNumbers(1, 3));
console.log(multyplyThreeNumbers(1, 2, 3));
console.log(multyplyFourNumbers(1, 2, 3, 4));
console.groupEnd(`multyply`);

console.group(`devide`);
console.log(devideNumbers(1, 3));
console.log(devideThreeNumbers(1, 2, 3));
console.log(devideFourNumbers(1, 2, 3, 4));
console.groupEnd(`devide`);

console.group(`subtract`);
console.log(subtractNumbers(1, 3));
console.log(subtractThreeNumbers(1, 2, 3));
console.log(subtractFourNumbers(1, 2, 3, 4));
console.groupEnd(`subtract`);
