import { Container, Cell } from "./styles";

export default function App({ state }) {
  const raiz = Math.sqrt(state.G.mapa.length);

  return (
    <Container rowSize={raiz} boxSize={20}>
      {state.G.mapa.map((m, i) => (
        <Cell key={i} boxSize={20}>
          {m}
        </Cell>
      ))}
    </Container>
  );
}
