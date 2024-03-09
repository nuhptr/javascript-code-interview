// Cara 1
function isPalimdrom(value) {
   let temp = ""

   for (let i = value.length - 1; i >= 0; i--) {
      temp += value[i]
      console.log(temp)
   }

   return temp === value
}

// Cara 2
function isPalimdromTwo(value) {
   for (let i = 0; i < value.length / 2; i++) {
      let indexAwal = i
      let indexAkhir = value.length - 1 - i

      if (value[indexAwal] !== value[indexAkhir]) {
         return false
      }

      return true
   }
}

// Cara 3
function isPalindromRecursive(value, index) {
   if (index < value.length / 2) {
      let indexAwal = index
      let indexAkhir = value.length - 1 - index

      if (value[indexAwal] !== value[indexAkhir]) {
         return false
      } else {
         return isPalindromRecursive(value, index + 1)
      }
   } else {
      return true
   }
}

test("Should be show true", () => {
   const result = isPalimdrom("katak")
   console.log(result)
})

test("should be show true if using second function", () => {
   const result = isPalimdromTwo("dudut")
   console.log(result) // false
})

test("should be show true if using recursive function", () => {
   const result = isPalindromRecursive("katak", 0)
   console.log(result) // true
})
