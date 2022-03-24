import React from "react";
import DisplayList from "./DisplayList";
import List from "./list";
import Search from "./Search";


const welcome = {
  greeting: 'Hey',
  title: 'React',
};


console.log(List);
function App() {

  let hasStored;
if (localStorage.getItem('search')) {
  hasStored = true;
} else {
  hasStored = false;
}
 
const initialState = hasStored
  ? localStorage.getItem('search')
  : 'React';
  const[first,setfirst] =React.useState(initialState);

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark shaik',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [story,setstories]=React.useState(stories);


  const changeHandler=(event)=> {
    
    

    console.log("event clicked");
    console.log(event.target.value);
    setfirst(event.target.value);
    console.log("=========="+first);
   
    
    };
    React.useEffect(() => {
      localStorage.setItem('search', first);
      console.log("data refreshed"+first)
    }, [first]);
   
    const searchedStories = stories.filter(function (story) {
      return story.title.includes(first);
    });
  return (
    <div>
        <hr/>
      <Search onSearch={changeHandler} search ={first}/>
      <DisplayList listOfStories={searchedStories} />
      <p> the value after the caller is {first}</p>
    </div>
  )
};
 
export default App;
