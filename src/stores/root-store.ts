import WeatherStore from "./weather-store";
import OptimisticStore from "./optimistic-store";
import UserStore from "./user-store";

export default class RootStore {
    weatherStore: WeatherStore;
    optimisticStore: OptimisticStore;
    userStore: UserStore;

    init() {
        // init all stores here
        this.weatherStore = new WeatherStore();
        this.optimisticStore = new OptimisticStore();
        this.userStore = new UserStore();
    }
}