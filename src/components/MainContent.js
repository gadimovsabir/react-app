import React from 'react';
import NewsCard from './NewsCard.js';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: null,
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

  render() {
    let data;

    if (this.state.error) {
      data = this.state.error;
    } else {
      data = this.state.items.map(item => {
        return (
          <div className="col-lg-4 card-container" key={item.key}>
            <NewsCard
              title={item.title}
              imgSrc={item.imgSrc}
              published={item.published}
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
