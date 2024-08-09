export const getUserProfileData = () =>{
    if(localStorage.getItem('userProfileData')){
        return JSON.parse(localStorage.getItem('userProfileData'))
    }else{
        return null;
    }
}