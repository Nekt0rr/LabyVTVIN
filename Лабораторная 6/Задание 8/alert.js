let i = 0;
document.querySelector('button').addEventListener('click', function () {
      let progress = document.querySelector('progress');
      i += 5;
      progress.value = i;    
      document.querySelector('span').innerHTML = `${i}%`;
      if(i == 100) {
        document.querySelector('button').hidden = true;
        document.querySelector('span').innerHTML = '100% Максимум';
      }
    })
