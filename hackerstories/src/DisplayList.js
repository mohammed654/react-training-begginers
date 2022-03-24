import React from 'react'
import List from './list'
const DisplayList = (props) => {
    console.log(props.listOfStories);
    console.log(props.age);
    const listOfStories = props.listOfStories;
  return (
    <div>
      <ul>
        {listOfStories.map((item) => {
          return <li key={item.objectID}>{item.title}
          <span> <a href={item.url}>{item.title}</a> </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span> {props.age}</span></li>












































































































































        })}
      </ul>
    </div>
  )
}

export default DisplayList