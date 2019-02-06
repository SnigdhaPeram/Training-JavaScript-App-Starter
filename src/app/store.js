let initalState ={
    userForm:{},
    userList:[]
} 

let appState = initalState;

let storage = {
     updateForm : function(form){
        appState.userForm = form;
    },
    getuserForm : function(){
        return appState.userForm
    },
    getuserList:function(form){
        appState.userList.push(form);
        console.log('User List: ' +userList);
    }
}
