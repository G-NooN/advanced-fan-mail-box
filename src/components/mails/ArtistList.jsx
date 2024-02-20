import { SectionTitle } from "components/styles/GlobalStyle";
import { ArtistsContainer, Artist } from "components/styles/ArtistListStyle";
import { useDispatch, useSelector } from "react-redux";
import { setArtist } from "shared/redux/modules/activeArtist";
import { artistList } from "components/common/artistList";

const ArtistList = () => {
  const activeArtist = useSelector((state) => state.activeArtist);
  const dispatch = useDispatch();
  const onClickArtist = (event) => {
    if (event.target === event.currentTarget) return;
    dispatch(setArtist(event.target.innerText));
  };

  return (
    <>
      <SectionTitle>Our Artists</SectionTitle>
      <ArtistsContainer onClick={onClickArtist}>
        {artistList.map((artist) => (
          <Artist $activeArtist={activeArtist}>{artist}</Artist>
        ))}
      </ArtistsContainer>
    </>
  );
};

export default ArtistList;
