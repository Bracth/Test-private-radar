function angle (x, y) {
    if(typeof x === "number" & typeof y === "number"){
        const rad = Math.atan(y/x)
        const angleX = rad*180 / Math.PI;
        const angleY = 90 - Math.floor(angleX)
        return angleY
    }
    return "You have to pass corrects numbers"
}