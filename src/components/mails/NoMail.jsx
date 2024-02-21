import { NoMailContainer } from "components/styles/NoMailStyle";
import { useSelector } from "react-redux";

const NoMail = () => {
  const activeArtist = useSelector((state) => state.activeArtistSlice);
  return (
    <NoMailContainer>{activeArtist} 님에게 전달된 팬레터가 없어요 ㅠㅠㅠㅠㅠㅠ</NoMailContainer>
  );
};

export default NoMail;
