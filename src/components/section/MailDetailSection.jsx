import { SectionContainer, SectionTitle } from "components/styles/GlobalStyle";
import MailDetail from "components/mails/MailDetail";

const MailDetailSection = ({ id, foundMail }) => {
  return (
    <SectionContainer>
      <SectionTitle>Mail Detail</SectionTitle>
      <MailDetail id={id} foundMail={foundMail} />
    </SectionContainer>
  );
};

export default MailDetailSection;
