export function checkCredentials( username:string, password:string){
    if(username.toLowerCase().startsWith('a')){
        return true
    } else{
        return false
    }

}