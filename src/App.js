import Recipe from "./Recipe";
import './App.css';
import { useEffect, useState} from 'react';

function App() {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('chicken')

  async function getRecipes(){
    const response = await fetch(exampleReq)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const APP_ID = "6b865912"
  const APP_KEY = "d6f038028ed9157532e0accae76096b8"
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    getRecipes();
  }, [query]);

  const recipeList = recipes.map(recipe => (
    <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
  ))

  const changeValue = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input onChange = {changeValue}className='search-bar' type='text' value={search}/>
        <button 
          className='search-button' 
          type="submit">
            Search
        </button>
      </form>
      {recipeList}
    </div>
  );
}

export default App;
