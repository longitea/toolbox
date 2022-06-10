// -=============== Bài 1: trả về phần tử trong mảng có độ dài lớn nhất ===============-
var array = ["AN", 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
function findMax(array){
    var max = '';
    for (var element of array){
        if(max.length < element.length) max = element;
    }
    return max;
}

function allLongestStrings(inputArray) {
    var longestString = inputArray.filter(function(name, index, array){
        var max = findMax(array).length;
        return name.length == max;
    });
    return longestString;
}
console.log('result: ' + allLongestStrings(array));