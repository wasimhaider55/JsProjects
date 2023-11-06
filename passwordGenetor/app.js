const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"



// selector 
const totalChar = document.getElementById("total-char")
const uppperCase = document.getElementById("upper-case")
const lowerCase = document.getElementById("lower-case")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")
const passBox = document.getElementById("pass-box")


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const passwordgenerater = (password = "") => {
    if(uppperCase.checked){
       password =  password + getRandomData(upperSet);
    }
    if(lowerCase.checked){
       password =  password + getRandomData(lowerSet);
    }
    if(numbers.checked){
       password =  password + getRandomData(numberSet);
    }
    if(symbols.checked){
       password =  password + getRandomData(symbolSet);
    }
    if(password.length < totalChar.value){
       return  passwordgenerater(password);

    }

   passBox.innerHTML = (truncateString(password, totalChar.value));
}
passwordgenerater();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        passwordgenerater();

    }
)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}