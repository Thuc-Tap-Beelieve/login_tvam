import React from "react";
import ReactDOM from 'react-dom';
import Sidebar from '../Components/SideBar/SideBar.jsx';
import Product from './Product/Products.jsx';
import WeatherForecast from '../Components/WeatherForecast/WeatherForecast.jsx';

ReactDOM.render(<WeatherForecast />, document.getElementById('root'));

const Home = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                {/* <!-- Sidebar Column --> */}
                <div class="col-2">
                <div class=" p-0">
                    {/* <!-- Sidebar Content Here --> */}
                    <Sidebar />
                </div>
                </div>
                {/* <!-- Products Column --> */}
                <div class="col-10">
                <div class=" p-0">
                    {/* <!-- Sidebar Content Here --> */}
                    <WeatherForecast />
                </div>
                <div class=" p-1">
                    {/* <!-- Products Content Here --> */}
                    <Product />
                </div>
                </div>
            </div>
            </div>
    )
}


export default Home


