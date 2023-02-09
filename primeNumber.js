function primeNumber (num) {
    if(typeof num === "number" & num >= 1){
        for(let i = 2; i < num; i++) {
             if(num % i === 0) {
                 return `${num} is not a prime number`
             }
        }
         return `${num} is a prime number`
    }
    return "Must be a valid number grater than 0"
}