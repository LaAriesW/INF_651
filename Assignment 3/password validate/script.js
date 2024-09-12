let password = prompt('enter password');

do{
    let validation = prompt('re-enter password for validation')

    if(validation === password){
        alert('password validated');
        break;
    }
    else{
        alert('incorrect password');
        continue;
    }

}while(true)