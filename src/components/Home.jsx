import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";

const Home = () => {
  const coffees = useLoaderData();

  const [loadedCoffees, setLoadedCoffees] = useState(
    Array.isArray(coffees) ? coffees : []
  );

  return (
    <div>
      <h2>
        Welcome Coffee Home:{" "}
        {Array.isArray(loadedCoffees) ? loadedCoffees.length : 0}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Array.isArray(loadedCoffees) &&
          loadedCoffees.map((coffee) => (
            <Coffee
              coffee={coffee}
              loadedCoffees={loadedCoffees}
              setLoadedCoffees={setLoadedCoffees}
              key={coffee._id}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
