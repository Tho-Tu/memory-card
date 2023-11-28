// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Header />
      <Game />
      <footer>
        Image by{" "}
        <a href="https://pixabay.com/users/stergo-4163614/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2049567">
          Игорь Левченко
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2049567">
          Pixabay
        </a>
      </footer>
    </>
  );
}

export default App;
