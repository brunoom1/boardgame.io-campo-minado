import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Client } from "boardgame.io/client";

import { mina } from "./logic/mina";
import App from "./App";

const cliente = Client({
  game: mina(),
  numPlayers: 1
});

cliente.start();

const rootElement = document.getElementById("root");

cliente.subscribe((state) => {
  ReactDOM.render(
    <StrictMode>
      <App state={state} />
    </StrictMode>,
    rootElement
  );
});
