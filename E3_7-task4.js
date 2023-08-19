function listNumbers(firstNumb, lastNumb) {
    let timerId = setInterval(function(){
        console.log(firstNumb);
        if (firstNumb == lastNumb) {clearInterval(timerId)};
        firstNumb++;
    }, 1000)
}

listNumbers(1, 5)