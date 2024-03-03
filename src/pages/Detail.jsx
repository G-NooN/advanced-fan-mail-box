import { PageContainer } from "components/styles/GlobalStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArtistPhotoSection from "components/section/ArtistPhotoSection";
import MailDetailSection from "components/section/MailDetailSection";
import { useEffect } from "react";
import { __getMailList } from "shared/redux/modules/mailListSlice";

const Detail = () => {
  const { letters: mailList, isLoading } = useSelector((state) => state.mailList);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMailList());
  }, [dispatch]);

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
