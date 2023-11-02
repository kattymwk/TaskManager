import axios from "axios";

const api = axios.create({
    baseURL:"http://api.task-manager.maketfay.com/"
})

export const methods = {

    async registration() {
        await api.post("user/register",{
            username:"katty",
            password:"2223"
        }).then(r => {
            console.log(r)
        }).catch(e => {
            console.log(e)
        })
    },
    async login(user) {

        console.log(user)

        const data = null

        await api.post("user/login",{
            username: user.name,
            password:user.password
        }).then(r => {
            console.log("response " , r)

        }).catch(e => {
            console.log(e)
        })



    }

}