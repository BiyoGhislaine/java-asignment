function ShowRegistrationForm(){

    SetTitle("Registration");

    ShowHideform("RegistrationFrom", "Show");
    ShowHideform("LoginFrom", "Hide");
    ShowHideform("ForgotPasswordForm", "Hide");
    

}

function SetTitle(Title){
    var formTitle = document.getElementById('formTitle');
    formTitle.innerHTML = Title;
}

function ShowHideform(FormID,ShowOrHide){
    var Form= document.getElementById(FormID);

    if(ShowOrHide == "Show"){
        Form.style.display = "block";

    }else{
        Form.style.display= "none";
    }

}