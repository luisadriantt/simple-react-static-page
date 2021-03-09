import React, { useEffect, useState } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const monstersFetch = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setMonsters(users);
    };
    monstersFetch();
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1> Monster Rolodex </h1>
      <SearchBox placeholder="search monsters" handleChange={handleChange} />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;
