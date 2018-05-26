import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentWillMount() {
    this.getRepos();
  }

  getRepos() {
    $.ajax({
      type: "GET",
      url: 'http://localhost:1128/repos',
      contentType: 'application/json',
      success: (data) => {
        console.log('Success! Connected with server to fetch repos.')
        this.setState({
          repos: data,
        })
      }
    })

  }

  search(term) {
    console.log(`${term} was searched`);
    let dataObj = { username: term };
    $.ajax({
      type: "POST",
      url: 'http://localhost:1128/repos',
      data: JSON.stringify(dataObj),
      contentType: 'application/json',
      success: () => {
        console.log('Success! Connected with server to post repos.');
        this.getRepos();
      }

    })
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));