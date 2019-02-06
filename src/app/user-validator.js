
$.subscribe(message.addUserFormUpdate,validate)

function validate(){
    let form = storage.getuserForm();
    let valid = isFormValid(form)
    afterValidation(valid);
}
function afterValidation(valid){
    if(valid){
        $.publish(message.addUserFormValidatedSuccessfully)
    }
    else{
        $.publish(message.addUserFormValidationFailed)
    }
}
 
function isFormValid(form){
   let  isFormValid= (isNameValid(form.name) && isMailValid(form.emailId) && isMailValid(form.gitId));
    return isFormValid;
};

function isNameValid(name) {
    return !(name.length<0);
}

function isMailValid(mail){
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(mail)) {
    return false;
    }
    else{
        return true;
    }
}