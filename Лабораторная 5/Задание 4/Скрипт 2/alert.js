let Ry = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
let By = ['Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Суббота','Нядзеля'];
let lang = prompt('Язык для дней недели');
switch(lang){
 case 'ry':
  alert(Ry);    
  break;
 case 'by':
  alert(By);
  break;
 default:
 alert('error');
 break;
}
    