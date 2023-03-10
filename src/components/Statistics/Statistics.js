import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import { StatisticsStyle, Stat } from './Statistics.style';

export const Statistics = ({
  FeedBackList: { good, neutral, bad },
  TotalFidback,
  PositiveFeedback,
}) => {
  return (
    <StatisticsStyle>
      <div>
        {TotalFidback > 0 ? (
          <div>
            <Stat>Good {good}</Stat>
            <Stat>Neutral {neutral}</Stat>
            <Stat>Bad {bad}</Stat>
            <Stat>Total:{TotalFidback}</Stat>
            <Stat>PositiveFeedback:{PositiveFeedback}%</Stat>
          </div>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </StatisticsStyle>
  );
};

Statistics.propTypes = {
  FeedBackList: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  TotalFidback: PropTypes.number.isRequired,
  PositiveFeedback: PropTypes.number.isRequired,
};
