import React from 'react';
import Header from './Header.js';
import MainContent from './MainContent.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      items: [],
      news: null,
      error: null,
      showSlider: false,
    };
  }

  loadData(event) {
    const categoryId = event && Number(event.target.dataset.id); 
    fetch('https://my-json-server.typicode.com/gadimovsabir/react-app/news')
      .then(response => response.json())
      .then(
        result => {
          if (categoryId) {
            result = result.filter(item => item.category.includes(categoryId));
          }

          this.setState({
            items: result,
            news: null,
            error: null,
            showSlider: !Boolean(categoryId),
          });
        },
        error => this.setState({error})
      );
  }

  componentDidMount() {
    this.loadData();
  }

  handleClick(e, newsData) {
    fetch('https://my-json-server.typicode.com/gadimovsabir/react-app/newsBody/' + newsData.id)
      .then(response => response.json())
      .then(result => this.setState({items: [], news: {...result, ...newsData}, showSlider: false}));
  }

  render() {
    return (
      <>
        <Header loadData={this.loadData} />
        <MainContent
          items={this.state.items}
          news={this.state.news}
          error={this.state.error}
          handleClick={this.handleClick}
          showSlider={this.state.showSlider}
        />
      </>
    );
  }
}

export default App;
