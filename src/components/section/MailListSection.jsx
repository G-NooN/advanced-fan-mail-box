import { SectionContainer, SectionTitle } from "components/styles/GlobalStyle";
import { MailListContainer } from "components/styles/MailStyle";
import Mail from "components/mails/Mail";
import NoMail from "components/mails/NoMail";

const MailListSection = ({ filteredMailList }) => {
  return (
    <SectionContainer>
      <SectionTitle>Mail LIST</SectionTitle>
      <MailListContainer>
        {/* 아티스트에게 전송된 메일의 개수에 따라 조건부 출력 */}
        {filteredMailList.length === 0 ? (
          <NoMail />
        ) : (
          filteredMailList.map((mail) => <Mail key={mail.id} mail={mail} />)
        )}
      </MailListContainer>
    </SectionContainer>
  );
};

export default MailListSection;
