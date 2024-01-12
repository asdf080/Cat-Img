import React from "react";
import "./App.css";
import Title from "./components/Title";
import Favorites from "./components/Favorites";
import MainCard from "./components/MainCard";
import Form from "./components/Form";
import preImg from "./components/preImg.png";

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/cat/${responseJson._id}/says/${text}`;
};

const App = () => {
  const [counter, setCounter] = React.useState(() => {
    return jsonLocalStorage.getItem("counter") || 0;
  });
  const [catImg, setCatImg] = React.useState(preImg);
  const [favo, setFavo] = React.useState(() => {
    return jsonLocalStorage.getItem("favo") || [];
  });

  const alreadyFavo = favo.includes(catImg);

  async function setInitCat() {
    const newCat = await fetchCat("First cat");
    setCatImg(newCat);
  }

  React.useEffect(() => {
    setInitCat();
  }, []);

  async function updateCat(value) {
    const newCat = await fetchCat(value);
    setCatImg(newCat);
    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter", nextCounter);
      return nextCounter;
    });
  }

  function heartClick() {
    const nextFavo = [...favo, catImg];
    setFavo(nextFavo);
    jsonLocalStorage.setItem("favo", nextFavo);
  }

  return (
    <div>
      <Title>NO.{counter} 고양이</Title>
      <Form updateCat={updateCat} />
      <MainCard
        img={catImg}
        onHeartClick={heartClick}
        alreadyFavo={alreadyFavo}
      />
      <Favorites favo={favo} />
    </div>
  );
};

console.log(`
      ROCKET SCIENCE

            ##
           #  #
          #    #
         #      #
        #   ##   #
       #  #    #  #
       #  #    #   #
     ##     ##     ##
    # #            # #
   #  #            #  #
  #   #            #   #
 #    #            #    #
 #  # #            # #  #
 # #   #          #   # #
 #      # # # # ##      #

         #      #
          #    #
           #  #
            ##

`)

export default App;
