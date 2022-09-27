import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001b89c4b078bfb4a90a9866926b07469d1";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handleImages);
  }
  function handleImages(response) {
    setPhotos(response.data.photos);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeyword}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, ring, car...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
