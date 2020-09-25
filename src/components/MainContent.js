import React from 'react';
import NewsCard from './NewsCard.js';
import NewsBody from './NewsBody.js';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      items: [],
      error: null,
      news: null,
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/gadimovsabir/react-app/news')
      .then(response => response.json())
      .then(
        result => this.setState({items: result}),
        error => this.setState({error})
      );
  }

  handleClick(e, newsData) {
    fetch('https://my-json-server.typicode.com/gadimovsabir/react-app/newsBody/' + newsData.id)
      .then(response => response.json())
      .then(result => this.setState({items: [], news: {...result, ...newsData}}));
  }

  render() {
    let data;

    if (this.state.error) {
      data = this.state.error.message;
    } else if (this.state.news) {
      data = <div className="col-lg-8"><NewsBody news={this.state.news} /></div>
    } else {
      data = this.state.items.map(item => {
        return (
          <div className="col-lg-4 card-container" key={item.id}>
            <NewsCard
              newsData={item}
              handleClick={this.handleClick}
            />
          </div>
        );
      }); 
    }

    return (
      <main>
        <div className="container">
          <div className="row">{data}</div>
        </div>
      </main>
    );
  }
}

export default MainContent;
