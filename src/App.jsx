import { useContext, useState } from "react";
import "./App.css";
import Selection from "./components/Selection.jsx";
import FavoriteContext from "./store/SectorContext.js";
import CountryDetails from "./components/CountryDetails.jsx";



function App() {
  // const favCard = useContext(FavoriteContext);

  // const [count, setCount] = useState(0);

  return (
    // <>
    //   <FavoriteContext.Provider
    //     value={{
    //       selection: [],
    //       filteredSelection: [],
    //       handleFilteredSector: (event) => {},
    //       flagsForCountry: [],
    //       allCountry: [],
    //       yearData: [],
    //       indicatorData: [],
       
    //       selectedCountry: [],
    //       setSelectedCountry: () => {},
    //       initialDataCountry: [],
    //     }}
    //   >
    //     <div className="container">
    //       <Selection />
    //       <CountryDetails />
    //     </div>
    //   </FavoriteContext.Provider>
    // </>
  );
}

export default App;