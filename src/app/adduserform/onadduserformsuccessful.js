
$.subscribe(message.addUserFormSuccessful,onAddUserSuccessful)

function onAddUserSuccessful(){
    $('#messageDiv').text('Hey '+appState.userList.splice(-1)[0].name+'! Thankyou for joining us');
}