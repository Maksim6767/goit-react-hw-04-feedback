import styled from 'styled-components';

export const FeedbackBtnWrapper = styled.div`
  display: flex;
  gap: 48px;
  margin-bottom: 20px;
  justify-content: center;
`;
 
export const FeedbackBtn = styled.button`
  width: 120px;
  height: 40px;
  text-align: center;
  border-radius: 1.2em;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  border: 2px solid silver;
  :hover {
    background-color: ${p => {
      if (p.children === 'good') {
        return '#20b2aa';
      } else if (p.children === 'neutral') {
        return '#d9a9d9';
      } else if (p.children === 'bad') {
        return '#b34469';
      }
    }};
  }
  transition: background-color 0.25s;
`;

