import RootStore from "../root-store";
import {wrapRoot} from 'mobx-easy';
import WeatherApi from "../../services/weather-api";

export interface RootEnv {
    weatherService: WeatherApi;
}

const createStore = () => {
    const env = {
        weatherService: new WeatherApi()
    };
    const rootStore = wrapRoot({
        RootStore,
        env
    });

  return {
      env,
      rootStore
  }
};

export {
    createStore
};