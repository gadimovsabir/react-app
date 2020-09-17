import React from 'react';
import NewsCard from './NewsCard.js';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/gadimovsabir/react-app/news')
      .then(response => response.json())
      .then(result => {
        this.setState({
          items: result,
        })
      });
  }

  render() {
    const news = [];
    news.push(this.state.items.map(
      item => {
        return (
          <div className="col-xl-4 card-container" key={item.id}>
            <NewsCard 
              title={item.title}
              imgSrc={item.imgSrc}
            />
          </div>
        )
      }
    ));

    return (
      <main>
        <div className="container">
          <div className="row">
            {news}
          </div>
        </div>
      </main>
    );
  }
}

export default MainContent;
