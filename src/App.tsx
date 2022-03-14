import React from "react";
import Cat from "./components/Cat";
import useFetchCats from "./hooks/useFetchCats";

const App: React.FC = () => {
  const cats = useFetchCats();

  if (!cats) return null;

  return (
    <div className="App">
      {cats.map((cat) => (
        <Cat key={cat._id} cat={cat} />
      ))}
    </div>
  );
};

export default App;
