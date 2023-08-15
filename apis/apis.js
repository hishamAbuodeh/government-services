import axios from "axios";

async function saveRate(no){
    const data ={
        phone: "0796601667",
        rating: no,
        comment: "test",
        locationId: "c5c54c0d-9c79-4591-cad4-08da90fe06cf"
    }
    return axios({
        url:`https://qms-waqtak-api.azurewebsites.net/RobotFeedBack`,
        method:'post',
        headers: {
            'Content-Type': 'application/json',
        },
        data:JSON.stringify(data),
        timeout:5000
    }).then(response => {
        return response.data
    }).catch((err) => {
        return {
            status : 'error',
            msg: 'connection error'
        }
    })
}

export {
    saveRate
}