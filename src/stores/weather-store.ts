import {observable} from "mobx";
import {Cord, Root} from "../common/common";
import {getEnv, setter} from "mobx-easy";
import {RootEnv} from "./helpers/create-store";
import WeatherData from "./models/weather-data";

interface WeatherStore {
    setCord: (cord: Cord) => void;
    setWeatherData: (setWeatherData: Root) => void;
}

class WeatherStore {
    @setter('setCord')
    @observable
    cord: Cord;

    @setter('setWeatherData')
    @observable
    weatherData: WeatherData;

    getCords() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.setCord({latitude: position.coords.latitude, longitude: position.coords.longitude});
                    resolve();
                });
            } else {
                reject();
            }
        });
    }

    async fetch() {
        const {weatherService} = getEnv<RootEnv>();
        const result = await weatherService.getWeatherByCords(this.cord);

        this.setWeatherData(result);
    }
}


export default WeatherStore;