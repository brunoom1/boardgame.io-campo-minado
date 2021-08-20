function frente(mapa, pos, size) {
  return 1;
}

function tras(mapa, pos, size) {
  return 1;
}

function cima(mapa, pos, size) {
  return 1;
}

function baixo(mapa, pos, size) {
  return 1;
}

function frente_cima(mapa, pos, size) {
  return 1;
}

function frente_baixo(mapa, pos, size) {
  return 1;
}

function tras_cima(mapa, pos, size) {
  return 1;
}

function tras_baixo(mapa, pos, size) {
  return 1;
}

export function contar_minas_no_entorno(G, pos): number {
  const size = G.mapa.length;

  return (
    frente(G.mapa, pos, size) +
    tras(G.mapa, pos, size) +
    cima(G.mapa, pos, size) +
    baixo(G.mapa, pos, size) +
    frente_cima(G.mapa, pos, size) +
    frente_baixo(G.mapa, pos, size) +
    tras_cima(G.mapa, pos, size) +
    tras_baixo(G.mapa, pos, size)
  );
}
