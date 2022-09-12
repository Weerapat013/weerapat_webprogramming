document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#registerForm").onsubmit = function(){
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        let confirmpassword = document.querySelector("#confirmpassword").value;
        let checkUsername = false;
        let checkPassword = false;
        let checkConfirmPassword = false;
        let check = false;
        let errMesUsername = "";
        let errMesPassword = "";
        let errMesConfirmPassword = "";

        //alert("Username: " + username + " Password: " + password);

        if(username.length >= 8){
            checkUsername = true;
        }else{
            checkUsername = false;
            errMesUsername = "กรุณาใส่ชื่อผู้ใช้มากกว่า 8 ตัวอักษร";
        }

        if(password.length >= 8){
            checkPassword = true;
        }else{
            checkPassword = false;
            errMesPassword = "กรุณาใส่รหัสผ่านมากกว่า 8 ตัวอักษร";
        }

         if("#confirmpassword" == "#password"){
            checkConfirmPassword = true;
        }else{
            checkConfirmPassword = false;
            errMesConfirmPassword = "กรุณาใส่รหัสผ่านให้ตรงกัน";
        } 

        document.querySelector("#alertUsername").innerHTML = errMesUsername;
        document.querySelector("#alertPassword").innerHTML = errMesPassword;
        document.querySelector("#alertConfirmPassword").innerHTML = errMesConfirmPassword;
        
        if((checkUsername & checkPassword) == true){
            check = true;
        }
        //check = checkUsername & checkPassword;
        alert(check);
        return check;
    };
});