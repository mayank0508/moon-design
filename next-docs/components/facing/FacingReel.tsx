import React from 'react';

interface Props {}

const FacingReel: React.FC<Props> = ({ children }) => (
  <div className="flex flex-row gap-8 overflow-x-auto reel">{children}</div>
);

export default FacingReel;
