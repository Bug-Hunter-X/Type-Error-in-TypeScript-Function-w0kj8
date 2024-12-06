function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    return a + parseFloat(b);
  } else {
    return a + b; 
  }
}

let result1 = add(1, 2); // Correct
let result2 = addSafe(1, '2'); // Correct - using type guard
let result3 = addSafe(1, 2); // Correct - using type guard
let result4 = add(1, parseFloat('2')); //Correct - using parseFloat before function call.