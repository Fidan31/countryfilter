import { createContext, useState } from "react";

const FavoriteContext = createContext({
  selection: [],
  filteredSelection: [],
  handleFilteredSector: (event) => {},
  allCountry: [],
  yearData: [], // Sadece bir defa tanımlanmalı
  indicatorData: [],
  selectedCountry: [],
  // setSelectedCountry: () => {}, // Fonksiyonun içeriği ve işlevselliği belirginleştirilmeli
  initialDataCountry: [],
});

export default FavoriteContext;
