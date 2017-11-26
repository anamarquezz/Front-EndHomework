       //Show Modal Windows
                var modal = document.getElementById('addModal');  
                var btn  = document.getElementById('btnjoinnow');
                var close = document.getElementById('close'); 
               //var emailtr= document.getElementById('emailtr'); 
              
                btn.onclick = function(){
                    modal.style.display="block";
                }
                close.onclick = function() {
                    modal.style.display = "none";
                }
            // validate Email
              function validateEmail(emailField){           
                    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (reg.test(emailField.value) == false) {    
                        emailField.style.borderColor="red";                
                        return false;
                    }
                     emailField.style.borderColor="inherit";  
                    return true;
                    }
              
              
             function validateTel(telFild){           
                    var reg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                    if (reg.test(telFild.value) == false) {    
                        telFild.style.borderColor="red";                
                        return false;
                    }
                     telFild.style.borderColor="inherit";  
                    return true;
             }

           
