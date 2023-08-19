function isPrime(numb) {
    if (numb > 1 && numb <= 1000) {
        for (let i=2; i < numb; i++){
            if (numb % i == 0) {
                return "Составное число";
            }
        }
        return "Простое число";
    } else {
        return "Данные не верны. Число должно в диаппазоне от 2 до 1000"
    }
}

console.log(isPrime(11));