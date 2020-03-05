import React from 'react';
import {WeatherComponent} from "./components/weather";
import {Tabs} from "antd";

import 'antd/dist/antd.css';
import './App.css';
import {Optimistic} from "./components/optimistic";
import {UserComponent} from "./components/user";

const { TabPane } = Tabs;

function App() {
  return (
    <div className="App">
        <Tabs type="card">
            <TabPane tab="Weather Example - getRoot/getEnv/allObservable" key="1">
                <WeatherComponent/>
            </TabPane>
            <TabPane tab="Optimistic Ui Example - revertible" key="2">
                <Optimistic/>
            </TabPane>
            <TabPane tab="addComputations/addActions" key="3">
                <UserComponent/>
            </TabPane>
        </Tabs>
    </div>
  );
}

export default App;
