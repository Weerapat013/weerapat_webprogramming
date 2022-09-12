document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#loginForm").onsubmit = function(){
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        let checkUsername = false;
        let checkPassword = false;
        let check = false;
        let errMesUsername = "";
        let errMesPassword = "";

        //alert("Username: " + username + " Password: " + password);

        if(username.length >= 8){
            checkUsername = true;
        }else{
            checkUsername = false;
            errMesUsername = "Please input Username more then 8 characters!";
        }

        if(password.length >= 8){
            checkPassword = true;
        }else{
            checkPassword = false;
            errMesPassword = "Please input Password more then 8 characters!";
        }

        document.querySelector("#alertUsername").innerHTML = errMesUsername;
        document.querySelector("#alertPassword").innerHTML = errMesPassword;
        
        if((checkUsername & checkPassword) == true){
            check = true;
        }
        //check = checkUsername & checkPassword;
        alert(check);
        return check;
    };
});