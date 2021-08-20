function criar_mapa(size) {
  return new Array(size).fill(null);
}

function mina_pos(ctx, totalMinas) {
  return ctx.random.Die(totalMinas);
}

function criar_minas(ctx, size, porcento) {
  const totalMinas = (size / 100) * porcento;
  const minas = [];

  let i = 0;
  while (i < totalMinas) {
    const newPos = mina_pos(ctx, size);

    if (!minas.includes(newPos)) {
      minas.push(newPos);
      i++;
    }
  }

  return minas;
}

export const setup = function (ctx) {
  return {
    mapa: criar_mapa(this.size),
    minas: criar_minas(ctx, this.size, 50),
    explodiu: false
  };
};
