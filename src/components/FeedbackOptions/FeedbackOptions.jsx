import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackButton';
import { ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(button => (
        <FeedbackButton
          children={button}
          onLeaveFeedback={onLeaveFeedback}
          key={button}
        />
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
