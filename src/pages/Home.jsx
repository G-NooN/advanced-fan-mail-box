import { PageContainer } from "components/styles/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import AddMailSection from "components/section/AddMailSection";
import MailListSection from "components/section/MailListSection";
import { useEffect } from "react";
import { __getMailList } from "shared/redux/modules/mailListSlice";

const Home = () => {
  const mailList = useSelector((state) => state.mailList.letters);
  const activeArtist = useSelector((state) => state.activeArtist);
  const filteredMailList = mailList.filter((mail) => mail.writedTo === activeArtist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMailList());
  }, [dispatch]);

  return (
    <PageContainer>
      {/* 메일 추가 section */}
      <AddMailSection />
      {/* 메일 출력 section */}
      <MailListSection filteredMailList={filteredMailList} />
    </PageContainer>
  );
};

export default Home;
