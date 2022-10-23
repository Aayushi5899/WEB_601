import Movie from './Movie';
import {Row, Col} from "antd";

function App() {
    const movieList = [
      { title: "The Godfather" , year: 1972,genre:"Drama",director:"Francis Ford Capolla"},
      { title: "Superbad" , year: 2007,genre:"Comedy",director:"Greg Mottola"},
      { title: "The Departed" , year: 2006,genre:"Drama",director:"Martin Scorsese"},
      { title: "Saving Private Ryan" , year: 1998,genre:"Action",director:"Steven Spielberg"},
      { title: "The Expendables" , year: 2010,genre:"Action",director:"Sylvester Stallone"},
    ];

    return (
      
        <div>

      {movieList.map(
        (movieObj)=>{return(<Movie title={movieObj.title} year={movieObj.year} age={movieObj.age}genre={movieObj.genre} director={movieObj.director}/>)}
      )}
    </div>  
      
    );
}

export default App;
