import PropTypes from 'prop-types';
import { OptionsBnt } from './FeedbackOptions.style';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <OptionsBnt>
      <button type="button" onClick={() => onLeaveFeedback(options[0])}>
        {options[0]}
      </button>
      <button type="button" onClick={() => onLeaveFeedback(options[1])}>
        {options[1]}
      </button>
      <button type="button" onClick={() => onLeaveFeedback(options[2])}>
        {options[2]}
      </button>
    </OptionsBnt>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
