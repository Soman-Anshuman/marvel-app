import { useEffect, useRef, useState } from "react";
import Card from "../components/card";
import bgImage from "../assets/marvel-characters.jpg";
import Loading from "../assets/loading";
import { Link } from "react-router-dom";
import useApiCall from "../components/useApiCall";
import { generateHash } from "../assets/config";

function Characters() {
  const public_key = import.meta.env.PUBLIC_KEY;
  const nameRef = useRef(null);
  const [characters, setCharacters] = useState(null);

  const { allData, loader, fetchData } = useApiCall();

  function removeCard(ind) {
    const newCharacters = characters.filter((element) => element.id !== ind);
    setCharacters(newCharacters);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let name = nameRef.current.value;

    const timestamp = new Date().getTime();
    const hash = generateHash(timestamp);

    const path = `https://gateway.marvel.com:443/v1/public/characters`;
    const params = {
      apikey: public_key,
      hash: hash,
      ts: timestamp,
      nameStartsWith: name,
      limit: 50,
    };

    fetchData(path, params);
  }

  useEffect(() => {
    setCharacters(allData?.data?.results);
  }, [allData]);

  // console.log(characters); //array

  return (
    <div className="container">
      <img src={bgImage} className="background" alt="" />

      <h1>
        Know your Marvel <span style={{ color: "red" }}>character</span>!!!
        <Link to="/comics">
          <button className="chng-sxn-btn">Go to Comics section</button>
        </Link>
        {/* <a href="/login" className='login-btn'>Login</a> */}
      </h1>
      <form>
        <input
          className="search-box"
          type="text"
          placeholder="Enter your character..."
          // onChange={handleName}
          ref={nameRef}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {loader && <Loading />}

      <div className="hero">
        {characters?.map((element) => (
          <Card
            key={element.id}
            props={element}
            type="characters"
            removeCard={removeCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Characters;
