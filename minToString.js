function formating(num){
    if(num >= 10){
        return num
    }
    return "0" + num
}

function minToString(min) {
    if(typeof min === "number" & min >= 0){
        let hours = 0;
        let minutesLeft = min
        for(hours; minutesLeft > 60; minutesLeft -= 60) {
            hours ++;
        }
        return `${formating(hours)}:${formating(Math.floor(minutesLeft))}`
    }
    return "Please pass a numeric value, greater than 0"
}