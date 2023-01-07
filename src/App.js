import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen"
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen"
import DetailScreen from "./components/detailComponents/DetailScreen"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route index element = {<HomeScreen/>} />
        <Route path ='newRecipe' element={<NewRecipeScreen />}/>
        <Route path= 'recipe/:id' element={<DetailScreen />}/>
      </Routes>
      </main>
      {/* This is where you will code for some of Part 1. */}
      <Footer />
    </div>
  );
}

export default App;
