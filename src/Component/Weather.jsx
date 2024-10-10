// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";

function Weather() {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();
   const date = new Date();
   const year = date.getFullYear();
  

  const allIcons = {
    "01d": "https://openweathermap.org/img/wn/01d@2x.png",
    "02d": "https://openweathermap.org/img/wn/02d@2x.png",
    "03d": "https://openweathermap.org/img/wn/03d@2x.png",
    "04d": "https://openweathermap.org/img/wn/04d@2x.png",
    "09d": "https://openweathermap.org/img/wn/09d@2x.png",
    "10d": "https://openweathermap.org/img/wn/10d@2x.png",
    "11d": "https://openweathermap.org/img/wn/11d@2x.png",
    "13d": "https://openweathermap.org/img/wn/13d@2x.png",
    "50d": "https://openweathermap.org/img/wn/50d@2x.png",
    "01n": "https://openweathermap.org/img/wn/01n@2x.png",
    "02n": "https://openweathermap.org/img/wn/02n@2x.png",
    "03n": "https://openweathermap.org/img/wn/03n@2x.png",
    "04n": "https://openweathermap.org/img/wn/04n@2x.png",
  };
   
  

  const search = async (city) => {
    try {
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8110dde7156d3e9c762005c826f96d76`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(url, data);
      const icon = allIcons[data.weather[0].icon];
      setWeatherData({
       

        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        Temperature: Math.round(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    search("nigeria");
  }, []);


  return (
    <div className="flex justify-center items-center  ">
      <div className="bg-white shadow-lg mt-10 h-full rounded-lg p-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3   to-slate-300 flex flex-col items-center">
        <div className="flex flex-col items-center gap-5 ">
          <input
            ref={inputRef}
            className="h-[50px] border-none outline-[40px] focus:border-[3px] focus:border-white  rounded-[40px] px-[25px] text-[#626262] bg-blue-100 text-[18px]"
            type="text"
            placeholder="Enter any Country Name"
          />
          <button
            className=" text-white bg-red-500 w-[100px] h-[40px] font-bold rounded-[50px] cursor-pointer"
            src="https://img.icons8.com/?size=100&id=97574&format=png&color=000000"
            alt="search"
            onClick={() => {
              const value = inputRef.current.value;
              console.log(inputRef);

              search(value);
            }}
          >
            Search
          </button>
          {/* <img
            className=" w-[10px]  font-bold py-2 px-4  rounded-[50px] cursor-pointer"
            src="https://img.icons8.com/?size=100&id=97574&format=png&color=000000"
            alt="search"
            onClick={() => {
              const value = inputRef.current.value;
              console.log(inputRef);

              search(value);
            }}
          /> */}
        </div>

        <img className="w-[150px] mt-10" src={weatherData.icon} alt="" />
        <p className="text-gray-700 text-[80px] leading-1">
          {weatherData.Temperature}°C
        </p>
        <p className="text-gray-700 text-[40px]">{weatherData.location}</p>
        <div className="weather-data w-[100%] flex text-white mt-[40px] justify-between">
          <div className="col  flex gap-[12px] ">
            <div className="">
              {/* image  */}
              <p className="text-gray-700 text-[50px]">
                {weatherData.humidity}
                <span className="flex flex-col text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[2vw] 2xl:text-[1vw] ">
                  Humidity
                </span>
              </p>
            </div>
          </div>
          <div className="col">
            {/* image */}
            <div>
              <p className="text-gray-700 text-end text-[50px]">
                {weatherData.windspeed}
                <span className="flex flex-col text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[2vw] 2xl:text-[1vw]">
                  WindSpeed( km/h)
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-sm mt-10 text-gray-400">
          {" "}
          <p>&copy; {year} made with love by Uchenna joel Eze</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
