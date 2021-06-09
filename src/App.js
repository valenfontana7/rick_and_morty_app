import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";
import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  const API = "https://rickandmortyapi.com/api/character/";
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState("");
  const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: darkMode ? "white" : "black",
      },
    },
  }));
  const classes = useStyles();
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setPages(data.info.pages);
        setCharacters(data.results);
      });
  }, []);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    fetch(API + "?page=" + value)
      .then((response) => response.json())
      .then((data) => {
        setPages(data.info.pages);
        setCharacters(data.results);
      });
  };
  return (
    <div className={darkMode ? "darkMode" : "lightMode"}>
      <Header onHandleClick={handleClick} darkMode={darkMode} />
      <Characters darkMode={darkMode} characters={characters} />
      <div
        style={{
          width: "100%",
          height: "35px",
          marginTop: "20px",
        }}
      >
        <Pagination
          classes={{ ul: classes.ul }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          count={Number(pages)}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <br />
    </div>
  );
}

export default App;
