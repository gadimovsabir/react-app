import React from 'react';
import Header from './Header.js';
import MainContent from './MainContent.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchData = this.searchData.bind(this);
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

  handleClick(e, newsData) {
    fetch('https://my-json-server.typicode.com/gadimovsabir/react-app/newsBody/' + newsData.id)
      .then(response => response.json())
      .then(result => this.setState({items: [], news: {...result, ...newsData}, showSlider: false}));
  }

  searchData(pattern) {
    if (pattern === '') {
      this.setState({items: null,});
      return false;
    }

    fetch('https://my-json-server.typicode.com/gadimovsabir/react-app/news')
      .then(response => response.json())
      .then(
        result => {
          result = result.filter(item => {
            const regex = new RegExp(pattern, 'i');
            return regex.test(item.title);
          });

          this.setState({
            items: result.length > 0 ? result : null,
            news: null,
            error: null,
            showSlider: false,
          });
        },
        error => this.setState({error})
    );
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const body = this.state.items ?
      <MainContent
        items={this.state.items}
        news={this.state.news}
        error={this.state.error}
        handleClick={this.handleClick}
        showSlider={this.state.showSlider}
      /> :
      <p className="nothing-found">По вашему запросу ничего не найдено</p>

    return (
      <>
        <Header loadData={this.loadData} searchData={this.searchData} />
        {body}
      </>
    );
  }
}

export default App;
