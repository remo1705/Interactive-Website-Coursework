document.addEventListener('DOMContentLoaded', function () {
    const allinputs = document.querySelectorAll('input');
    const btn = document.getElementById("button1"); 
    
    btn.addEventListener('click', function () {
        document.getElementById('error').innerHTML = '';
        for (let i = 0; i < allinputs.length; i++) {
            var str = allinputs[i].value;
            if (str.trim() === '') {
                event.preventDefault(); 
                document.getElementById('error').innerHTML = 'Data not completed; please re-enter.';
                return;
            }

            if (allinputs[i] == document.getElementById("number")) {
                var numberValue = parseFloat(str);
                if (numberValue < 1 || numberValue % 1 != 0) {
                    event.preventDefault();
                    document.getElementById('error').innerHTML = 'Please enter a valid number of people!';
                    return;
                }
            }
        }
    
        // using library.
        if (reserve(allinputs[0].value, document.getElementById('timeSlot').value, allinputs[1].value) == true) {
            alert("Your reservation is successful!");
            event.preventDefault();
        }
        else {
            
            alert("Sorry, the reservation is full!");
            event.preventDefault();
        }
    
    });
    
    });
    
        