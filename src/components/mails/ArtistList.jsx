import { SectionTitle } from "components/styles/GlobalStyle";
import { ArtistsContainer, Artist } from "components/styles/ArtistListStyle";
import { useDispatch, useSelector } from "react-redux";
import { setArtist } from "shared/redux/modules/activeArtistSlice";
import { artistList } from "components/common/artistList";

const ArtistList = () => {
  const activeArtist = useSelector((state) => state.activeArtistSlice);
  const dispatch = useDispatch();
  // li가 아닌 빈 공간 클릭 시 return, li 클릭 시 target 설정
  const onClickArtist = (event) => {
    if (event.target === event.currentTarget) return;
    dispatch(setArtist(event.target.innerText));
  };

  return (
    <>
      <SectionTitle>Our Artists</SectionTitle>
      <ArtistsContainer onClick={onClickArtist}>
        {artistList.map((artist, index) => (
          <Artist key={index} $activeArtist={activeArtist}>
            {artist}
          </Artist>
        ))}
      </ArtistsContainer>
    </>
  );
};

export default ArtistList;
