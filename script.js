const btn = document.querySelector('.button');
const inp = document.querySelector('.input');
let userAlert = document.querySelector('.alert');

btn.onclick = () => {
   let numb = +inp.value;
   if ( numb >= 54 && numb <=88 || numb == 1488){
      userAlert.innerHTML = ('ЗАХАДЫ');
   }
   else if ( numb == 27){
      userAlert.innerHTML = ('А НУ БЫСТРААА ПАД СТООЛА');
   }
   else if ( numb < 18 ){
      userAlert.innerHTML = ('ИДИ УРОКИ УЧИ');
   }
   else if ( numb >= 18 && numb <= 27){
      userAlert.innerHTML = ('ИДИ, ГУЛЯЙ ПОЛЕМ')
   }
   else if ( numb >= 28 && numb <= 53){
      userAlert.innerHTML = ('ДЕТИ ЖДУТ')
   }
   else if ( numb >= 89 && numb <= 143){
      userAlert.innerHTML = ('ТАНКИ В ДРУГОМ ОКНЕ')
   }
   else {
      userAlert.innerHTML = ('КаВо');
   }
}