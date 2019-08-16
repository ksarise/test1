import React from 'react';
import Article from '../components/article';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=lenta&apiKey=da8c9a56a5a1467aa31c168d20a2039f';
    fetch(url)
      .then(res => res.json())
      .then(el => this.setState({ articles: el.articles }));
  }

  render() {
    return (
      <div>
        <div className='news header'>
          <h1>News</h1>
        </div>
        { this.state.articles.map((article, index) =>
          <Article key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            author={article.author}
            urlToImage={article.urlToImage}
          />
        )}
      </div>
    );
  }
}

export default News;
