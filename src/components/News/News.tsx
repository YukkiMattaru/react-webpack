import { FC } from 'react';
import styled from 'styled-components';

const newsTitle =
  'Natum iriure donec maiestatis has contentiones. Natoque ubique sagittis doming quot lobortis senectus reprimique. Penatibus efficitur ferri fabulas montes explicari penatibus iriure. Brute dolores porttitor volutpat propriae possit. Habitasse viderer at inceptos class ocurreret.';

const News: FC = () => {
  return (
    <Wrapper>
      <NewsTitleWithoutFont>{newsTitle}</NewsTitleWithoutFont>
      <NewsTitleRegular>{newsTitle}</NewsTitleRegular>
      <NewsTitleItalic>{newsTitle}</NewsTitleItalic>
      <NewsTitleBold>{newsTitle}</NewsTitleBold>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NewsTitleWithoutFont = styled.div`
  font-size: 24px;
`;

const NewsTitleBold = styled(NewsTitleWithoutFont)`
  font-family: 'Roboto Custom', serif;
  font-weight: bold;
  font-style: normal;
`;

const NewsTitleRegular = styled(NewsTitleWithoutFont)`
  font-family: 'Roboto Custom', serif;
  font-weight: normal;
  font-style: normal;
`;

const NewsTitleItalic = styled(NewsTitleWithoutFont)`
  font-family: 'Roboto Custom', serif;
  font-weight: normal;
  font-style: italic;
`;

export default News;
