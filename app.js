let number = [5, 7, 9, 8, 10, 3, 2];

document.write(number)
document.write('<br>')
document.write('<br>')
document.write('<br>')


for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
        if (number[i] > number[j]) {
            let temp = number[i];
            number[i] = number[j];
            number[j] = temp;
        }
    }
}

let result = '';
for (let i = 0; i < number.length; i++) {
    result += number[i] + ' ';
}
document.write(result.trim());
