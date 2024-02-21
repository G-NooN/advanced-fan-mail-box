import { PageContainer } from "components/styles/GlobalStyle";
import { useSelector } from "react-redux";
import AddMailSection from "components/section/AddMailSection";
import MailListSection from "components/section/MailListSection";

const Home = () => {
  const mailList = useSelector((state) => state.mailList);
  const activeArtist = useSelector((state) => state.activeArtist);
  const filteredMailList = mailList.filter((mail) => mail.writedTo === activeArtist);
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
