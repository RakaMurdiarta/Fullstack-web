import React, { useEffect, useState } from 'react'
// import Motorbike2 from './components/UpdateObjectInArray';
// import Message from './components/UseEffectHook';


function App() {
  const stories = [
    {
      title: 'React',
      url: 'https://react.js.org/',
      author: 'Mr.X',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Mr.Y',
      num_comments: 2,
      points: 1,
      objectID: 1
    }
  ];
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || 'React')

  useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  };

  const searchStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div>
      <Search search={searchTerm} onSearch={handleSearch} />
      <List list={searchStories} />
    </div>

  )
}
const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search"> Search : </label>
      <input id={search} type="text" value={search} onChange={onSearch} />
    </div>
  )
}
const List = ({ list }) => {
  list.map((item) => (
    <Item key={item.objectID} item={item} />
  ))
}
const Item = ({ item }) => {
  return (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>

    </div>
  )
}

export default App;
