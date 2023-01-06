import PropTypes from 'prop-types';
import { FeedbackBtnWrapper, FeedbackBtn } from './Feedbackoptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBtnWrapper>
      {options.map(el => (
        <FeedbackBtn key={el} onClick={onLeaveFeedback}>
          {el}
        </FeedbackBtn>
      ))}
    </FeedbackBtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};