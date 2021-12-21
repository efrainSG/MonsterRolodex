import './App.css';
import { Component } from 'react/cjs/react.production.min';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>
      response.json())
      .then(users => {
        console.log(users);
        this.setState({monsters: users});
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    console.log(monsters);
    const filteredMonsters = monsters.filter(
      m => m.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monster'
        handleChange={this.handleChange}></SearchBox>
        <p></p>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
