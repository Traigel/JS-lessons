import React, {useState} from 'react';
import API from './API';
import './lesson_3';
import styles from './Lesson3.module.css'
import poster from '../../assets/images/Poster.jpg'

const Lesson3 = () => {
    const [searchName, setSearchName] = useState<string>('');
    const [serachResult, setSerachResult] = useState<SearchFilmType | null>(null);
    const [searchNameByType, setSearchNameByType] = useState<string>('');
    const [serachResultByType, setSerachResultByType] = useState<SearchFilmType | null>(null);
    const [err, setErr] = useState<ErrorType | null>(null);

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(res => {
                console.log(res.data)
                res.data.Response ? setSerachResult(res.data) : setErr(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then(res => {
                console.log(res.data)
                res.data.Response ? setSerachResultByType(res.data) : setErr(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div className={styles.searchFilm}>
                <div className={styles.search}>
                    <h3><p>Search by name:</p></h3>
                    <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                    <button onClick={searchFilm}>Search</button>
                </div>
                <div className={styles.poster}>
                    <img alt={'Poster'} src={serachResult ? serachResult.Poster : poster}/>
                </div>
                <div className={styles.film}>
                    {serachResult ?
                        <div>
                            <div>
                                Title: {serachResult.Title}
                            </div>
                            <div>
                                Country: {serachResult.Country}
                            </div>
                            <div>
                                Year: {serachResult.Year}
                            </div>
                            <div>
                                Director: {serachResult.Director}
                            </div>
                            <div>
                                Writer: {serachResult.Writer}
                            </div>
                            <div>
                                Actors: {serachResult.Actors}
                            </div>
                            <div>
                                Awards: {serachResult.Awards}
                            </div>

                            <div>
                                Plot: {serachResult.Plot}
                            </div>
                        </div>

                        : null}
                </div>
            </div>

            <div className={styles.searchFilm}>
                <div className={styles.search}>
                    <h3><p>Search by type:</p></h3>
                    <input type="text" value={searchNameByType}
                           onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                    <button onClick={searchByType} data-t='movie'>Movie</button>
                    <button onClick={searchByType} data-t='series'>Series</button>
                </div>
                <div className={styles.poster}>
                    <img alt={'Poster'} src={serachResultByType ? serachResultByType.Poster : poster}/>
                </div>
                <div className={styles.film}>
                    {serachResultByType ?
                        <div>
                            <div>
                                Title: {serachResultByType.Title}
                            </div>
                            <div>
                                Country: {serachResultByType.Country}
                            </div>
                            <div>
                                Year: {serachResultByType.Year}
                            </div>
                            <div>
                                Director: {serachResultByType.Director}
                            </div>
                            <div>
                                Writer: {serachResultByType.Writer}
                            </div>
                            <div>
                                Actors: {serachResultByType.Actors}
                            </div>
                            <div>
                                Awards: {serachResultByType.Awards}
                            </div>

                            <div>
                                Plot: {serachResultByType.Plot}
                            </div>
                        </div>

                        : null}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;

export type SearchFilmType = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: RatingsType[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}
export type RatingsType = {
    Source: string;
    Value: string;
}

export type ErrorType = {
    Response: string;
    Error: string;
}