import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Groceries from './Components/Groceries';
import AddRecipe from './Components/AddRecipe';
import Recipes from './Components/Recipes';
import StandardNav from './Components/StandardNav';

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
