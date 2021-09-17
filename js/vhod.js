document.addEventListener("DOMContentLoaded", function() {
    var ids = ["1", "2", "3", "4", "5"];
    for (var id of ids) {
      var input = document.getElementById(id);
      input.value = localStorage.getItem(id);
      (function(id, input) {
        input.addEventListener("change", function() {
          localStorage.setItem(id, input.value);
        });
      })(id, input);
    } 
});
let email = document.querySelector(".email2");
let data = document.querySelector(".data2");
let nam = document.querySelector(".name2");
let surname = document.querySelector(".surname2");
nam.innerHTML = localStorage.getItem('3');
surname.innerHTML = localStorage.getItem('4');
email.innerHTML = localStorage.getItem('1');
data.innerHTML = localStorage.getItem('5');