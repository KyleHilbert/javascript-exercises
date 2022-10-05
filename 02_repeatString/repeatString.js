
const repeatString = function(string, num) {
    let tempString = ""; 

    if (num >= 0) {
        for (let i=0; i<num; i++) {
            tempString += string;
        }
        return tempString
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
