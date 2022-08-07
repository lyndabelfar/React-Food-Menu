import './App.css';
import {useState} from 'react'
import items from './data';
import Categories from './Categories'
import Menu from  './Menu'

const allCategories = ['all',...new Set(items.map((item)=> item.category))]

function App() {
  const [menuItems, setMenuItems] =useState(items)
  const [categories, setCategories] =useState(allCategories)

  const filterItems = (category)=>{
    if(category ==="all"){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }



  return (
    <div className="App">
      <div className="top">
        <h1 className='title'>Our Menu</h1>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <div className='items'>
        {
          menuItems.map((item)=>{
            return <Menu item={item} />
          })
        }
      </div>
      
    </div>
  );
}

export default App;
