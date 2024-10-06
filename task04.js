export function fizzBuzz(num) {
    let res = ""
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 !== 0)
            res += "Fizz";
        else if (i % 5 === 0 && i % 3 !== 0)
            res += "Buzz";
        else if (i % 5 === 0 && i % 3 === 0)
            res += "FizzBuzz";
        else
            res += i;
        if (i < num)
            res += ", ";

    }
    console.log(res);

}