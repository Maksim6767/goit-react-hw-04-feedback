import PropTypes from 'prop-types';
import { FeedbackText } from '../Statistics/Statistics.styled';

export const Notification = ({ message }) => {
  return <FeedbackText>{message}</FeedbackText>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};