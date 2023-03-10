import PropTypes from 'prop-types';
import { OptionsBnt } from './FeedbackOptions.style';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const optionKeys = Object.keys(options);
  return (
    <OptionsBnt>
      <button type="button" onClick={() => onLeaveFeedback(optionKeys[0])}>
        {optionKeys[0]}
      </button>
      <button type="button" onClick={() => onLeaveFeedback(optionKeys[1])}>
        {optionKeys[1]}
      </button>
      <button type="button" onClick={() => onLeaveFeedback(optionKeys[2])}>
        {optionKeys[2]}
      </button>
    </OptionsBnt>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape().isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
