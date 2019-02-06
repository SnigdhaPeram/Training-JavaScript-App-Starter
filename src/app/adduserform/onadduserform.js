
$.subscribe(message.addUserFormSubmit,onAddUserForm);

function onAddUserForm(){
    try{
        let form = appState.userForm;
        storage.getuserList(form);
        $.publish(message.addUserFormSuccessful)
    }
    catch(error){
        $.publish(message.addUserFormFailed)
    }


}