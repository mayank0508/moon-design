import * as React from 'react';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13H7v-2h2v2zm0-3H7V3h2v7z"
      fill="#FFD600"
    />
  </svg>
);

type SvgProps = {
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
export const IconWarningExclamation = styled(Svg)<SvgProps>(
  ({ height, width, fontSize, verticalAlign }) => ({
    height,
    width,
    fontSize,
    verticalAlign,
  })
);
IconWarningExclamation.defaultProps = {
  verticalAlign: 'middle',
};
