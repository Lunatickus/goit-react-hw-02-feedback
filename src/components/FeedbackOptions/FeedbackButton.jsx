import PropTypes from 'prop-types';
import { Button } from './FeedbackButton.styled';

export const FeedbackButton = ({ children, onLeaveFeedback }) => {
  return (
    <li>
      <Button type="button" onClick={onLeaveFeedback}>
        {children}
      </Button>
    </li>
  );
};

FeedbackButton.propTypes = {
  children: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
