let number = prompt('Enter the number from 100 to 900', 0);
if(number[0] == number[1] || number[0] == number[2] || number[1] == number[2]){
    alert('Присутсвуют');
} else {
    alert('Нету их');
}