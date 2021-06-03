import axios from 'axios';
import moment from 'moment';

export const pincodeResults = (data) => async dispatch => {
    try {
        const date = moment();
        let dateStr = date.format('DD-MM-YYYY');
        let age = data.age;
        let pincode = data.pincode;
        let config = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${dateStr}`,
        }

        let centers = await (await axios(config)).data.centers;
        centers.forEach(element => {
            element.sessions = element.sessions.filter(slot => slot.min_age_limit <= age && slot.available_capacity > 0)
        });
        centers = centers.filter(center => center.sessions.length > 0)
        await dispatch({
            type: 'CHECK_BY_PINCODE',
            result: centers
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'CHECK_ERROR',
            error: error
        })
    }
}
export const userResults = (data) => async dispatch => {
    try {
        const date = moment();
        let dateStr = date.format('DD-MM-YYYY');
        let age = data.age;
        let pincode = data.pincode;
        let preferredVaccine = data.vaccine;
        let config = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${dateStr}`,
        }

        let centers = await (await axios(config)).data.centers;
        if(preferredVaccine == 'ANY') {
            centers.forEach(element => {
                element.sessions = element.sessions.filter(slot => slot.min_age_limit <= age && slot.available_capacity > 0)
            });
        } else {
            centers.forEach(element => {
                element.sessions = element.sessions.filter(slot => slot.min_age_limit <= age && slot.available_capacity > 0 && preferredVaccine == slot.vaccine)
            });
        }
        centers = centers.filter(center => center.sessions.length > 0)

        await dispatch({
            type: 'CHECK_BY_PINCODE_USER',
            result: centers
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'CHECK_ERROR',
            error: error
        })
    }
}
