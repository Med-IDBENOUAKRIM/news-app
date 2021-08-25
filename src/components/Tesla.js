import React, { useEffect, useState } from 'react';
import { instance } from '../axios';
import { Parser } from 'html-to-react';
import '../GlobalCSS.css'
import moment from 'moment';
import loading from '../loading.gif';

function Tesla() {
    const [news, setNews] = useState([])

    useEffect(() => {
        getNews()
    }, [])

    const getNews = () => {
        instance.get('/everything?q=tesla&from=2021-07-25&sortBy=publishedAt&apiKey=b538916daffa45a8bb30d3777add2d7b')
            .then(res => setNews(res.data.articles))
            .catch(err => console.log(err))
    }

    const descLength = (txt, n) => txt?.length > 100 ? txt.substr(0, n - 1) + '...' : txt;
    console.log(news)
    return (
        <div className="app__news">
            {
                news.length > 0 ? (
                    news && news.map((item, i) => (
                        <div key={i} className="app__news__card">
                            <img src={item.urlToImage} alt={item.author} className="img" />
                            <div className="app__news__info">
                                <h4>{item.author ? item.author : "unknown"}</h4>
                                <p className="app__news__desc" >
                                    {Parser().parse(descLength(item.description, 70))}
                                </p>
                                <a className="app__news__more" rel="noreferrer" target="_blank" href={item.url}>More</a>
                                <p>
                                    Published : {moment(item.publishedAt).fromNow()}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="loading" >
                        <img src={loading} alt="loading" />
                    </div>
                )
            }
        </div>
    )
}

export default Tesla
