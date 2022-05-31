import React from 'react';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import CardList from '../Components/CardList';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';
// import {robots} from '../Components/robots';

function App() {
  const [searchField, setSearchField] = React.useState({searchField: ""})

                  const [state, setState] = React.useState({robots:[]})
                        React.useEffect(()=> {
                          fetch("https://jsonplaceholder.typicode.com/users")
                          .then(res=>res.json())
                          .then(users => setState({robots:users}))
                        },[])

  function onSearchChange(event) {
         setSearchField (event.target.value)
          }  

  const filteredRobot = state.robots.filter(robots => {
       return robots.name.toLowerCase().includes(searchField.searchField.toLowerCase())
        })
return (  
    <div className='tc'>
               <h1 className='f2'>Robofriends</h1>
               <SearchBox 
                  searchChange={onSearchChange}
                  />
                <Scroll>
                    <ErrorBoundary>
                          <CardList 
                          robot= {filteredRobot}
                          />
                    </ErrorBoundary>
                </Scroll>
    </div>
  );
}

export default App;
