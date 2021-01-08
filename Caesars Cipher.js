function rot13(str) {

    let myArr = str.split('').map(x => {
        if ((x.charCodeAt(0) <= 77)) {
            return x.replace(/\w/gi, String.fromCharCode((x.charCodeAt(0) + 13))
            );
        } else {
            return x.replace(/\w/gi, String.fromCharCode((x.charCodeAt(0) - 13))
            );
        }
    })
    return myArr.join("");
}

console.log(rot13("SERR CVMMN!"));