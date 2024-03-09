function FizzBuzz(number) {
   for (let i = 1; i <= number; i++) {
      if (i % 3 === 0) return "Fizz"
      else if (i % 5 === 0) return "Buzz"
      else if (i % 3 === 0 && i % 5 === 0) return "FizzBuzz"
      else return i
   }
}

test("Should be show fizz buzz fizzbuzz", () => {
   const result = FizzBuzz(15)
   console.log(result)
})
