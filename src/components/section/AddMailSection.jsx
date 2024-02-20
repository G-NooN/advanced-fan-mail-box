import { SectionContainer } from "components/styles/GlobalStyle";
import ArtistList from "components/mails/ArtistList";
import AddForm from "components/mails/AddForm";

function AddMailSection() {
  return (
    <SectionContainer>
      <ArtistList />
      <AddForm />
    </SectionContainer>
  );
}

export default AddMailSection;
