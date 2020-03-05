import React from 'react';
import {useStore} from "../stores/helpers/use-store";
import {useObserver} from "mobx-react-lite";
import {useEffect} from "react";
import WeatherStore from "../stores/weather-store";
import {Spin, Row, Col} from "antd";

const WeatherComponent = () => {
    const weatherStore = useStore<WeatherStore>((rootStore) => rootStore.weatherStore) as WeatherStore;

    useEffect(() => {
        const initWeather = async () => {
            await weatherStore.getCords();
            await weatherStore.fetch()
        }

        initWeather();
    }, [weatherStore]);

    return useObserver(() => {
        const {weatherData} = weatherStore;
        return (
            <div>
                {!weatherData ?
                    <Spin/>
                    :
                    <Row style={{textAlign: 'center'}}>
                        <Col span={24}>Country: {weatherData.sys.country}</Col>
                        <Col span={24}>City: {weatherData.name}</Col>
                        <Col span={24}>Curent Temp: {weatherData.main.temp}C</Col>
                        <Col span={24}>Feels Like: {weatherData.main.feels_like}C</Col>
                        <Col span={24}>Min: {weatherData.main.temp_min}C</Col>
                        <Col span={24}>Max: {weatherData.main.temp_max}C</Col>
                    </Row>}
            </div>
        )
    });
};

export {WeatherComponent};