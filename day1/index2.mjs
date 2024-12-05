import { firstColumn, secondColumn } from "./index1.mjs";
//task2

//количество повторений чисел второго массива превращаем в объект
function countOccurrences(arr) {
    const countObj = {}; 
    arr.forEach(num => {
        if (countObj[num]) {
            countObj[num]++;
        } else {
            countObj[num] = 1;
        }
    });

    return countObj;
}

function multiplyArrayByCount(arr, countObj) {
    const result = [];
    const keysArr = Object.keys(countObj);
    arr.forEach(num =>{
        const numStr = num.toString();
        if (keysArr.includes(numStr)){
    result.push(num * countObj[numStr]);
} else {
    result.push(0)
}
    }
)


    return result.reduce((a, b) => a + b);

}

console.log(multiplyArrayByCount(firstColumn, countOccurrences(secondColumn)))