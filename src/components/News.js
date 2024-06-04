import React, { Component } from 'react';
import Newsitem from './Newsitem';

export default class News extends Component {
    constructor() {
        super();
        console.log("Hello, I am constructor from news component");
        this.state = {

        }
    }
    async componentDidMount() {
        try {
            // const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=07ff98447df644a2b6d2d6d220e47ec5";
            const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=07ff98447df644a2b6d2d6d220e47ec5";

            // const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-05-04&sortBy=publishedAt&apiKey=07ff98447df644a2b6d2d6d220e47ec5";
            const data = await fetch(url);
            const parseData = await data.json();
            this.setState({
                articles: parseData.articles
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    

    render() {
        const { articles } = this.state;
    
        return (
            <div className='container my-3'>
                <h2>News Monkey - Top Headlines</h2>
                <div className="row justify-content-center align-items-center g-2">
                    {articles ? (
                        articles.map((element, index) => (
                            <div className="col-md-4" key={index}>
                                <Newsitem 
                                    title={element.title} 
                                    imageurl={element.urlToImage} 
                                    description={element.description} 
                                    url = {element.url}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No articles available.</p>
                    )}
                </div>
            </div>

        );
    }
}    