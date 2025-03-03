import React from 'react';

const Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
    <circle className="outlined-radio__border" cx="12" cy="12" r="10" fill="none" strokeWidth="2" />
    <circle
      className="outlined-radio__selection"
      cx="12"
      cy="12"
      r="10"
      fill="none"
      strokeWidth="2"
    />
    <circle className="outlined-radio__mark" cx="12" cy="12" r="6" />
  </svg>
);

export default Icon;
