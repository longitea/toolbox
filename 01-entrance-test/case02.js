// -=============== Bài 2 tổng phần tử trong mảng ===============-
var array = [60, 40, 55, 75, 64];

function alternatingSums(a) {
    var array1 = [];
    var array2 = [];
    var total1 = 0;
    var total2 = 0;
    for (var i = 0; i < array.length; i++){
        if(i % 2 ==0){
            total1 += array[i];
        }else {
            total2 += array[i];
        }
    }
    array1.push(total1);
    array2.push(total2);
    return array1.concat(array2);
}

console.log(alternatingSums(array));


