import React from "react";

import { CatInterface } from "../types/cat";

interface CatProps {
  cat: CatInterface;
}

const Cat: React.FC<CatProps> = ({ cat }) => {
  return (
    <div>
      {cat.user}
      <p>{cat.text}</p>
      <p>{cat.createdAt}</p>
    </div>
  );
};

export default Cat;
