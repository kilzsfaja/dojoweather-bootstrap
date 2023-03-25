function removeCookie(id){
  var element = document.querySelector(id);
  element.remove();
}

var toggles = document.getElementsByClassName('toggleTemp')
console.log(toggles)

function changeTemp(temp){
  for (var toggle of toggles){
    if (temp.value == "F"){
      toggle.innerText = Math.round(toggle.innerText * 1.8 + 32);
    } else {
      toggle.innerText = Math.round((toggle.innerText - 32) / 1.8);
    }
    
  }
  console.log(temp.value)
}

/* 
loop through the array
if value is F change inner text of toggles to (*1.8) + 32
else change inner text of toggles to (°F - 32) / 1.8 = °C
*/