import PropTypes from 'prop-types';
import { SectionStyle } from './Section.style';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <h2>{title}</h2>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
