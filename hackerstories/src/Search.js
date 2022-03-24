import React from 'react'

const Search = ({onSearch,search}) => {
    const [searchTerm, setSearchTerm] = React.useState(search);
    const changeHandler=(event)=> {
        console.log("event clicked");
        setSearchTerm(event.target.value);
        console.log("--------------------------search component-----------------------------------")
        onSearch(event);
       
        };
  return (
    <div><label htmlFor="search">Search: </label>
   {// <input id="search" value={searchTerm} type="text" onChange={changeHandler}/>
    }
    <input
      id="search"
      type="text"
      value={searchTerm}
      onChange={changeHandler}
    />
    Searching for <strong>{searchTerm}</strong>.</div>
  )
}

export default Search