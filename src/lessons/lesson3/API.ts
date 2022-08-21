import axios from 'axios';

const apiKey: string = 'ffb8c1a6';
const instance = axios.create({
    baseURL: `https://www.omdbapi.com/`
});

//https://www.omdbapi.com/?apikey=ffb8c1a6&s=Star+Wars&page=2   Star Wars
// t - Название фильма для поиска (один)
// s - Название фильма для поиска (много)
// i - Действительный идентификатор IMDb (например, tt1285016)
// page=x - Номер страницы для возврата (x= номер)
// plot=x - Возврат короткий или полный сюжет (x= short, full), если один фильм (t)
//http://www.omdbapi.com/ - документация


const API = {
    searchFilmsByTitle: (title: string) => {
        return instance.get(`?apikey=${apiKey}&t=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return instance.get(`?apikey=${apiKey}&t=${title}&type=${type}`)
    }
};

export default API;
