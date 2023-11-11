import axios from "axios";


const api = axios.create({
    baseURL:"http://api.task-manager.maketfay.com/"
})


export const methods = {

    deskVisibility(){
        console.log("desk visibility")
        return api.get("desk/visibility")
    },
    async register(user) {
        return api.post("user/register", {
            "userName": user.username,
            "password": user.password
        })
    },
    login(user){
        return api.post("user/login",{
            "userName": user.username,
            "password": user.password
        })
    },
    refresh(){

    },
    createWorkspace(token,workspace,type) {
        return api.post("workSpace",{
            "workSpaceName": workspace,
            "visibilityTypeCode": type
        },{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
    },
    getWorkSpaces(token) {
        return api.get("user/workSpace",{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
    }

}
