import {allObservable} from "mobx-easy";
import {Root} from "../../common/common";

interface WeatherData extends Root {}

@allObservable()
class WeatherData {
    constructor(weatherData: Root) {
        Object.assign(this, weatherData);
    }
}

export default WeatherData;