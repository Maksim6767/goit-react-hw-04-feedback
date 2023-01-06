import PropTypes from 'prop-types';
import { FeedbackText } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <FeedbackText>{title}</FeedbackText>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};