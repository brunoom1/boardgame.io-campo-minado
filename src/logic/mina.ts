import { setup } from "./setup";
import { VASIA, BANDEIRA, INTERROGACAO, ABERTA, MINA } from "./simbolos";

import { contar_minas_no_entorno } from "./contagem_minas";

function abrir_pos(G, ctx, pos) {
  if (G.mapa[pos] === BANDEIRA) {
    return;
  }

  if (G.minas.includes(pos)) {
    // verifica se há bomba na posicao
    G.explodiu = true;
    return;
  }

  const minas_no_entorno = contar_minas_no_entorno(G, pos);

  if (minas_no_entorno) {
    G.mapa[pos] = minas_no_entorno;
    return;
  }

  G.mapa[pos] = ABERTA;
}

function marcar_pos(G, ctx, pos) {
  switch (G.mapa[pos]) {
    case VASIA:
      G.mapa[pos] = BANDEIRA;
      break;
    case BANDEIRA:
      G.mapa[pos] = INTERROGACAO;
      break;
    case INTERROGACAO:
      G.mapa[pos] = VASIA;
      break;
  }
}

export const mina = () => ({
  name: "mina",
  size: 81,
  setup,
  moves: {
    marcar_pos,
    abrir_pos
  },
  endIf: (G) => G.explodiu,
  onEnd: (G) => G.minas.forEach((p) => (G.mapa[p] = MINA))
});
