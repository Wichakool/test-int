let AmountOrange = document.getElementById('orange')
let AmountApple = document.getElementById('apple')
let AmountKivi = document.getElementById('kivi')
let InputMoney = document.getElementById('money')
let processButton = document.getElementById('process-button')
let message = document.getElementById('message')

function sumTotal() {
    const [orange, apple, kivi] = [13, 15, 22];
    let money = Number(0 + InputMoney.value);
    let outputHTML = ''
    let sum = (orange * AmountOrange.value) + (apple * AmountApple.value) + (kivi * AmountKivi.value);
    let change = money - sum;
    let coin10 = change / 10;
    let total = change % 10
    let coin5 = total / 5;
    total = total % 5;
    let coin2 = total / 2;
    total = total % 2;
    let coin1 = total / 1;
    total = total % 1;

    //output
    outputHTML += '<div>';
    outputHTML += 'ราคาทั้งหมด : ' + sum + ' บาท';
    outputHTML += '</div>';
    outputHTML += '<div>';
    outputHTML += 'รับเงิน : ' + money + ' บาท';
    outputHTML += '</div>';
    outputHTML += '<div>';
    outputHTML += 'เงินทอน : ' + change + ' บาท';
    outputHTML += '</div>';
    outputHTML += '<div>';
    outputHTML += 'เหรียญ 10 : ' + Math.floor(coin10) + ' บาท ' + '<br/>';
    outputHTML += 'เหรียญ 5 : ' + Math.floor(coin5) + ' บาท' + '<br/>';
    outputHTML += 'เหรียญ 2 : ' + Math.floor(coin2) + ' บาท' + '<br/>';
    outputHTML += 'เหรียญ 1 : ' + Math.floor(coin1) + ' บาท' + '<br/>';
    outputHTML += '</div>';
    message.innerHTML = outputHTML;
}
processButton.addEventListener("click", sumTotal)