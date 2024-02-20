import styled, { css } from "styled-components";

const ArtistsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 600px;
  margin: 20px 0;
  padding: 10px;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 5px;
`;

const setArtistBackground = (artistName) => {
  switch (artistName) {
    case "최예지":
    case "박가현":
      return css`
        background-color: lavenderblush;
      `;
    default:
      return css`
        background-color: aliceblue;
      `;
  }
};

const Artist = styled.li`
  width: 120px;
  margin: 10px;
  padding: 10px;

  ${(props) => {
    if (props.$activeArtist === props.children) {
      return setArtistBackground(props.children);
    }
    return css`
      background-color: white;
    `;
  }}

  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-weight: 700;

  ${(props) => {
    switch (props.children) {
      case "최예지":
      case "박가현":
        return css`
          color: hotpink;
        `;
      default:
        return css`
          color: dodgerblue;
        `;
    }
  }}
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    ${(props) => {
      return setArtistBackground(props.children);
    }}

    transform: scale(1.05);
  }
`;

export { ArtistsContainer, Artist };
