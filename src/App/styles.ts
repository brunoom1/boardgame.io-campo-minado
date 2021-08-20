import styled, { css } from "styled-components";

interface MapContainerProps {
  rowSize: number;
  boxSize: number;
}

export const Container = styled.div<MapContainerProps>`
  display: grid;
  ${(props) => {
    return css`
      grid-template-columns: repeat(${props.rowSize}, 1fr);
      width: ${props.boxSize}px;
    `;
  }}
`;

interface CellProps {
  boxSize: number;
}

export const Cell = styled.div<CellProps>`
  display: flex;

  ${(props) => css`
    width: ${props.boxSize}px;
    height: ${props.boxSize}px;
  `}

  overflow: hidden;
  transition: background-color 0.2s;

  background-color: #ddd;
  padding: 4px;
  justify-content: center;
  justify-items: center;
  border: solid 1px #555;
  margin: 1px;

  :hover {
    background-color: #aa00aa;
    cursor: pointer;
  }
`;
