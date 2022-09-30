import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Groceries from './Groceries';
import AddRecipe from './AddRecipe';
import Recipes from './Recipes';
import StandardNav from './StandardNav';

function App() {
  return (
    <div className="App">
      <StandardNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/groceries" element={<Groceries />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
