function getDay(dayNumber) {
    let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
    if (dayNumber >= 1 && dayNumber <= 7) { 
        return days[dayNumber - 1]; }
    else { 
        return "Недопустимый номер дня недели"; }
} 
let info = Number(prompt("Введите число от 1 до 7:"));
let result = getDay(info);
alert(result);