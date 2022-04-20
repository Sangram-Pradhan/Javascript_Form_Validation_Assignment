
    function validate() {
        var fname = document.reg_form.fname;
        var lname = document.reg_form.lname;
        var faname = document.reg_form.faname;
        var moname = document.reg_form.moname;
        var address = document.reg_form.address;  
        var gender = document.reg_form.gender; 
        var mobile = document.reg_form.mobile; 

        if(fname.value.length <=0){
            alert("First Name is Required");
            fname.focus();
            return false;
        }

        if(lname.value.length <= 0){
            alert("Last Name is Required");
            lname.focus();
            return false;
        }

        if(faname.value.length <= 0){
            alert("Father Name is Required");
            faname.focus();
            return false;
        }

        if(moname.value.length <= 0){
            alert("Mother Name is Required");
            moname.focus();
            return false;
        }
  
        if (address.value.length <= 0) {  
            alert("Address is required");  
            address.focus();  
            return false;  
            } 

        if (gender.value.length <= 0) {  
            alert("Gender is required");  
            gender.focus();  
            return false;    
        }

        
        if (mobile.value.length <= 10) {  
            alert("10 digit number is required");  
            gender.focus();  
            return false;    
        }


    }