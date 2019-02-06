
$(function() {
    $('.form').on('keyup',updateForm);
});

let $name= $('#name');
let $emailId=$('#emailId');
let $gitId = $('#gitId');

$('#Submit').attr('disabled',true);
$.subscribe(message.addUserFormValidatedSuccessfully,onSubmitEnable);

function onSubmitEnable(){
    $('#Submit').attr('disabled',false)
}

function updateForm(){
    let user = new userForm($name.val(),$emailId.val(),$gitId.val());
    console.log('user:',user);
    storage.updateForm(user);
    $.publish(message.addUserFormUpdate);
}