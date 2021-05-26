
const bracketRangeCalc = (arr, num, newArr) => {
    arr.map((item, index) => {
        if(item.barracks == num){
            newArr.push(item);
        }
    })
};

export { bracketRangeCalc } ;