import MovieCard from "./components/MovieCard";
import data from "./data";

function App() {
  const items = data;
  return (
    <div className="App">
      
      <div className="movie-grid">
        {items.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
