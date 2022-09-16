// บูรพา - รับผิดชอบ

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#registerForm").onsubmit = function(){
        let id = document.querySelector("#id").value;
        let tel = document.querySelector("#tel").value;
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        let confirmpassword = document.querySelector("#confirmpassword").value;
        let checkID = false;
        let checkTel = false;
        let checkUsername = false;
        let checkPassword = false;
        let checkConfirmPassword = false;
        let check = false;
        let errMesID = "";
        let errMesTel = "";
        let errMesUsername = "";
        let errMesPassword = "";
        let errMesConfirmPassword = "";

        //alert("Username: " + username + " Password: " + password);

        if(id.length >= 13){
            checkID = true;
        }else{
            checkID = false;
            errMesID = "กรุณาใส่รหัสบัตรประชาชนให้ครบ 13 หลัก";
        }

        if(id.length <= 13){
            checkID = true;
        }else{
            checkID = false;
            errMesID = "กรุณาใส่รหัสบัตรประชาชนไม่เกิน 13 หลัก";
        }

        if(tel.length >= 10){
            checkTel = true;
        }else{
            checkTel = false;
            errMesTel = "กรุณาใส่เบอร์โทรให้ครบ 10 หลัก";
        }

        if(tel.length <= 10){
            checkTel = true;
        }else{
            checkTel = false;
            errMesTel = "กรุณาใส่เบอร์โทรไม่เกิน 10 หลัก";
        }

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

        if(confirmpassword == password){
            checkConfirmPassword = true;
        }else{
            checkConfirmPassword = false;
            errMesConfirmPassword = "กรุณาใส่รหัสผ่านให้ตรงกัน";
        } 

        document.querySelector("#alertID").innerHTML = errMesID;
        document.querySelector("#alertTel").innerHTML = errMesTel;
        document.querySelector("#alertUsername").innerHTML = errMesUsername;
        document.querySelector("#alertPassword").innerHTML = errMesPassword;
        document.querySelector("#alertConfirmPassword").innerHTML = errMesConfirmPassword;
        
        if((checkID & checkTel & checkUsername & checkPassword & checkConfirmPassword) == true){
            check = true;
        }
        //check = checkUsername & checkPassword;
        alert(check);
        return check;
    };
});