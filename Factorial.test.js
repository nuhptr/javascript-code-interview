function factorial(value) {
   if (value <= 0) return 1

   let result = 1
   for (let i = value; i >= 1; i--) {
      result *= i
   }

   return result
}

function factorialRecursive(value) {
   if (value <= 0) return 1
   const result = value * factorialRecursive(value - 1)
   return result
}

function factorialTailRecursive(total, value = 1) {
   // factorial(5) =>
   // factorial (5, 4) =>
   // factorial (20, 3) =>
   // factorial (60, 2) =>
   // factorial (120, 1) =>
   // factorial (120, 0) => 120
   if (value <= 0) return total
   else return factorialTailRecursive(total * value, value - 1)
}

test("Factorial should return 120!", () => {
   const result = factorial(5)
   expect(result).toBe(120)
})

test("Factorial should return 1", () => {
   const result = factorial(0)
   expect(result).toBe(1)
})

test("Factorial recursive should return 1", () => {
   const result = factorialRecursive(-1)
   expect(result).toBe(1)
})

test("Factorial recursive should return 3628800!", () => {
   const result = factorialRecursive(10)
   expect(result).toBe(3628800)
})

test("Factorial tail recursive should return 120!", () => {
   const result = factorialTailRecursive(1, 5)
   expect(result).toBe(120)
})
