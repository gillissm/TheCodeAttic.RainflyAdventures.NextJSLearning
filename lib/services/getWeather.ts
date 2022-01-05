import { DailyWeatherModel } from '../models/weather.model';

const OpenWeatherAPIKey = process.env.OPENWEATHER_API_KEY;

export async function getCurrentWeather(zipcode:string):Promise<DailyWeatherModel[]> {
    const apiRequestUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${OpenWeatherAPIKey}&units=imperial`;
    const response = await fetch(apiRequestUrl);
    const data = await response.json();

    const forecast = data.list.map((day:any):DailyWeatherModel =>{
        const w = day.weather;
        const d = day.weather.description;
        return {
            dateStamp: day.dt_txt,
            weatherDescription: day.weather[0].description,
            tempMin: day.main.temp_min,
            tempMax: day.main.temp_max,
            feelsLike: day.main.feels_like,
            windSpeed: day.wind.speed
        };
    });
    return forecast;
}