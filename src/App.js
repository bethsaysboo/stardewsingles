import { useState } from "react";
import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import { localNpc } from "./Components/NonPlayableChar";
import NonPlayableChar from "./Components/NonPlayableChar";
import PersonDetail from "./Components/NonPlayableChar";
import Instructions from "./Components/Instructions";
import image from "./image/Stardew.png";

function App() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
    setIsShown((current) => !current);
  };

  // return <p> Stardew Singles!</p>;
  return (
    <div className="body" style={{ backgroundImage: `url(${image})` }}>
      <>
        <Header />
        <Instructions />
        <main className="main">
          {/* <aside> */}
          {localNpc.map((data) => {
            return (
              <NonPlayableChar
                pictures={data.pictures}
                nameNpc={data.nameNpc}
                handleClick={handleClick}
                loves={data.loves}
                hates={data.hates}
                description={data.description}
              />
            );
          })}
          {/* </aside> */}
          {/* {localNpc.map((data) => {
          return (
            <PersonDetail
              pictures={data.pictures}
              nameNpc={data.nameNpc}
              handleClick={handleClick}
              loves={data.loves}
              hates={data.hates}
              description={data.description}
            />
          );
        })}
        ; */}
        </main>
      </>
    </div>
  );
}

export default App;

