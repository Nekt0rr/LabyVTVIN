function getStroku(url){
if (url.startsWith("http://")) {
 return "Строка начинается с 'http://'";
 } 
 else {
 return "Строка не начинается с 'http://'";
 }
}
let info=prompt("Введите ссылку");
let result=getStroku(info);
alert(result);