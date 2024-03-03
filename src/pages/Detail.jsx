import { PageContainer } from "components/styles/GlobalStyle";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ArtistPhotoSection from "components/section/ArtistPhotoSection";
import MailDetailSection from "components/section/MailDetailSection";

const Detail = () => {
  const mailList = useSelector((state) => state.mailList.letters);
  const id = useParams().id;
  const foundMail = mailList.find((mail) => mail.id === id);
  return (
    <PageContainer>
      {/* 아티스트 사진 section */}
      <ArtistPhotoSection foundMail={foundMail} />
      {/* 메일 상세정보 출력 section */}
      <MailDetailSection id={id} foundMail={foundMail} />
    </PageContainer>
  );
};

export default Detail;
