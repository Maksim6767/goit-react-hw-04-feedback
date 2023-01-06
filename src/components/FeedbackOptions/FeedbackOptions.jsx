import PropTypes from 'prop-types';
import { FeedbackBtnWrapper, FeedbackBtn } from './Feedbackoptions.styled';

export const FeedbackOptions = ({ nameFeedback, onLeaveFeedback }) => {
  return (
    <FeedbackBtnWrapper>
      {nameFeedback.map(el => (
        <FeedbackBtn key={el} onClick={onLeaveFeedback}>
          {el}
        </FeedbackBtn>
      ))}
    </FeedbackBtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  nameFeedback: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};