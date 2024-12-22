let obj = { 
  Минск: 'Беларусь', 
  Киев: 'Украина', 
  Москва: 'Россия' 
};
for (let prop in obj) {
  console.log(prop + ' - это ' + obj[prop]);
}