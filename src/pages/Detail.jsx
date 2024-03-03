import { PageContainer } from "components/styles/GlobalStyle";
import { useParams } from "react-router-dom";
import ArtistPhotoSection from "components/section/ArtistPhotoSection";
import MailDetailSection from "components/section/MailDetailSection";
import { useQuery } from "@tanstack/react-query";
import { getMailList } from "api/queryFunc";

const Detail = () => {
  const { data: mailList, isLoading } = useQuery({
    queryKey: ["letters"],
    queryFn: getMailList,
  });

  const { id } = useParams();

  if (isLoading) {
    return <p>로딩중...</p>;
  }

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
