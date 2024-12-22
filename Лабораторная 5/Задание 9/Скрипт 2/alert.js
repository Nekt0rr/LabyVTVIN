function getStroku(url){
 if(url.endsWith(".html")) {
 return "Строка заначивается на '.html'";
 }
 else {
 return "Строка не заначивается на '.html'"
 }
}
let info =prompt("Введите строку");
let result=getStroku(info);
alert(result);