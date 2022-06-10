// -===============  ===============-
var btnChange = document.querySelector('.btn-change');
var btnCoppy = document.querySelector('.btn-coppy');
var displayColor = document.querySelector('body');
var changeText = document.querySelector('h1');
var inputColor = document.querySelector('#colorPicker');


// Tạo hàm ramdom màu
function randomColor() {
    var letter = '0123456789ABCDEF'
    var result =''
    for (var i = 0; i < 6; i++){
        result += letter[Math.floor(Math.random() * 16)];
    }
    return result;
}

// bắt sự kiện click -> set màu
btnChange.addEventListener('click', function (){
    var color = randomColor();
    displayColor.style.backgroundColor = '#'+color;
    changeText.innerText = color;
});


btnCoppy.addEventListener('click', () => {
    var color = changeText.innerText;
    console.log(color);
});

inputColor.addEventListener('change', (e) => {
    var color = e.target.value;
    displayColor.style.backgroundColor = color;
    changeText.innerText = color.replace('#','');
})


