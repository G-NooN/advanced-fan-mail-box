import { PageContainer } from "components/styles/GlobalStyle";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ArtistPhotoSection from "components/section/ArtistPhotoSection";
import MailDetailSection from "components/section/MailDetailSection";

const Detail = () => {
  const mailList = useSelector((state) => state.mailList);
  const id = useParams().id;
  const foundMail = mailList.find((mail) => mail.id === id);
  return (
    <PageContainer>
      <ArtistPhotoSection foundMail={foundMail} />
      <MailDetailSection id={id} foundMail={foundMail} />
    </PageContainer>
  );
};

export default Detail;
