// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// Name of the function will be 'divisibleByThree'
describe("divisbleByThree", () => {
    var num1 = 15
    // Expected output: "15 is divisible by three"
    it("return '15 is divisible by three' for an input of number 15", () => {
        expect(divisibleByThree(num1)).toEqual('15 is divisible by three')
    })

    var num2 = 0
    // Expected output: "0 is divisible by three"
    it("return '0 is divisible by three' for an input of number 0", () => {
        expect(divisibleByThree(num2)).toEqual('0 is divisible by three')
    })

    var num3 = -7
    // Expected output: "-7 is not divisble by three"
    it("return '-7 is not divisible by three' for an input of number -7", () => {
        expect(divisibleByThree(num3)).toEqual('-7 is not divisible by three')
    })
})

// b) Create the function that makes the test pass.

// Create a function that takes in 1 argument that is a number
const divisibleByThree = (number) => {
    // The number will check if it is divisible by three by using the modulo
    // and check that the remainder is zero
    // Case 1 - it IS divisible by 3
    if (number % 3 === 0) {
        // Return a string saying the number is divisible by 3
        return `${number} is divisible by three`;
    // Case 2 - it is NOT divisible by 3
    } else if (number % 3 !== 0) {
        // Return a string saying the number is not divisible by 3
        return `${number} is not divisible by three`;
    }
}



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Name of function will be capitalizeFirstLetter
describe("capitalizeFirstLetter", () => {
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    var randomNouns1Expected = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    it('return ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"] for an input of ["streetlamp", "potato", "teeth", "conclusion", "nephew"]', () => {
        expect(capitalizeFirstLetter(randomNouns1)).toEqual(randomNouns1Expected);
    })

    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    var randomNouns2Expected = ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    it('return ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"] for an input of ["temperature", "database", "chopsticks", "mango", "deduction"]', () => {
        expect(capitalizeFirstLetter(randomNouns2)).toEqual(randomNouns2Expected);
    })
})


// b) Create the function that makes the test pass.

// Create a function that takes in 1 argument that is an array
const capitalizeFirstLetter = (array) => {
    // For each element in the array, capitalize the first letter
    // Return the new array
    // Use .map() to create the new array with the updated values
    return array.map(value => {
        // return a string with the first letter capitalized, plus the rest of the string
        return value.charAt(0).toUpperCase() + value.slice(1);
    })
}



// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// Name of the funciton will be onlyNumbersSorted
describe("onlyNumbersSorted", () => {
    var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
    var mixedDataArray1Expected = [-8, 0, 8, 46, 59, 107]
    // Expected output: [-8, 0, 8, 46, 59, 107]
    it('return [-8, 0, 8, 46, 59, 107] for an input of [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]', () => {
        expect(onlyNumbersSorted(mixedDataArray1)).toEqual(mixedDataArray1Expected);
    })

    var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
    var mixedDataArray2Expected = [-9, 0, 3, 18, 94]
    // Expected output: [-9, 0, 3, 18, 94]
    it('return [-9, 0, 3, 18, 94] for an input of [3, "yo!", 94, -9, false, 0, 18, "hola!"]', () => {
        expect(onlyNumbersSorted(mixedDataArray2)).toEqual(mixedDataArray2Expected);
    })
})


// b) Create the function that makes the test pass.

// Create a function that takes in 1 argument that is an array
const onlyNumbersSorted = (array) => {
    // Use .filter() to go through the array and check which ones are numbers
    // Store that in a variable called 'numArray'
    numArray = array.filter(value => {
        return typeof value === 'number';
    })

    // Sort the number array in ascending order
    // using an arrow function and the ternary operator
    // to check whether elements a and b need to be swapped.
    // After the ternary operator '?', the first expression
    // is the truthy, and the expression after the colon ':'
    // is the falsey.
    // For .sort, if the compareFunction returns a value less
    // than zero, then leave a and b unchanged.
    // If the compareFunction returns a value greater than 0,
    // sort b before a.
    return numArray.sort( (a, b) => a > b ? 1 : -1)
}



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// Name of the function will be firstVowel
describe("firstVowel", () => {
    var vowelTester1 = "learn"
    // Expected output: 1
    it("return the number 1 for an input of string 'learn'", () => {
        expect(firstVowel(vowelTester1)).toEqual(1);
    })
    var vowelTester2 = "academy"
    // Expected output: 0
    it("return the number 0 for an input of string 'academy'", () => {
        expect(firstVowel(vowelTester2)).toEqual(0);
    })
    var vowelTester3 = "challenge"
    // Expected output: 2
    it("return the number 2 for an input of string 'challenge'", () => {
        expect(firstVowel(vowelTester3)).toEqual(2);
    })
    var vowelTester4 = "bcdfghjklmnpqrstvwxyz"
    // Expected output: No vowels were found
    it("return the string 'No vowels were found' for the string 'bcdfghjklmnpqrstvwxyz'", () => {
        expect(firstVowel(vowelTester4)).toEqual('No vowels were found');
    })
})


// b) Create the function that makes the test pass.

// Create a function that takes in 1 argument that is a string
const firstVowel = (string) => {
    // Split the string into an array
    let strArray = string.split('');
    // Iterate through the string to look for the first vowel
    for (let i = 0; i < strArray.length; i++) {
        let value = strArray[i];
        if ( ['a', 'e', 'i', 'o', 'u'].includes(value.toLowerCase()) ) {
            return i;
        }
    }

    // If no vowels are found, return a string letting the user know no vowels were found
    return 'No vowels were found'
}