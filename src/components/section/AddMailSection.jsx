import { SectionContainer } from "components/styles/GlobalStyle";
import ArtistList from "components/mails/ArtistList";
import AddForm from "components/mails/AddForm";

function AddMailSection() {
  return (
    <SectionContainer>
      {/* 아티스트 목록 출력 */}
      <ArtistList />
      {/* 메일 추가 */}
      <AddForm />
    </SectionContainer>
  );
}

export default AddMailSection;
