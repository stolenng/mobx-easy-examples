import {Cord} from "../common/common";

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2d28a5b650671cf2506def1569f1d9ea';

export default class WeatherApi {
    async getWeatherByCords({longitude, latitude}: Cord) {
        const result = await fetch(`${URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        return result.json()
    }
}