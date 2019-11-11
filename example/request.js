import axios from 'axios'
import { API_URL_BASE, API_KEY } from './utils'

export const getWeatherData = async id => {
    const url = `${API_URL_BASE}${id}&appid=${API_KEY}`
    try {
        const { data } = await axios.get(url)
        return data
    } catch (err) {
        throw err
    }
}