import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 115 20"
    width="1em"
    height="auto"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Sportsbet.io</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.99985 19.4074c5.35925 0 9.70375-4.3445 9.70375-9.70369C19.7036 4.3445 15.3591 0 9.99985 0 4.64064 0 .29615 4.3445.29615 9.70371c0 5.35919 4.34449 9.70369 9.7037 9.70369zm.00009-1.9882c4.26116 0 7.71546-3.4543 7.71546-7.71547 0-4.26114-3.4543-7.71548-7.71546-7.71548-4.26114 0-7.71547 3.45434-7.71547 7.71548 0 4.26117 3.45433 7.71547 7.71547 7.71547z"
      clipRule="evenodd"
    />
    <path
      fill="#0CD664"
      d="M4.69136 9.38315c2.59097 0 4.69136-2.10039 4.69136-4.69136 0-2.59097-2.10039-4.69136-4.69136-4.69136C2.10039.00043 0 2.10082 0 4.69179c0 2.59097 2.10039 4.69136 4.69136 4.69136z"
    />
    <path
      fill="currentColor"
      d="M26.8641 7.16049c0 .46914.2469.8642.7161 1.16049.4691.2963 1.2345.54321 2.2716.76544 1.358.2716 2.3704.74074 3.037 1.33328.6667.6173.9877 1.4321.9877 2.4445 0 1.037-.4198 1.9506-1.2593 2.6667-.8395.7407-1.9506 1.1111-3.3333 1.1111-1.4568 0-2.642-.3704-3.5062-1.0864-.8642-.7161-1.4321-1.6791-1.679-2.8642l2.0494-1.0371c.3703 1.9506 1.4074 2.9383 3.1111 2.9383.6913 0 1.2592-.1482 1.6543-.4691.4198-.2963.6173-.7161.6173-1.2099 0-.5432-.2469-.963-.7407-1.2593-.4939-.2963-1.2593-.5679-2.321-.7654-1.1852-.2469-2.1235-.6667-2.8148-1.28397-.6914-.61728-1.0371-1.43209-1.0371-2.41975 0-1.01235.3951-1.85185 1.2099-2.46914.7901-.61728 1.8518-.91358 3.1358-.91358 2.3457 0 3.9012 1.06173 4.6914 3.1605l-1.8272 1.06173c-.4938-1.45679-1.4568-2.19753-2.9136-2.19753-.5926 0-1.0864.09876-1.4815.32098-.3703.24692-.5679.5679-.5679 1.01235zM34.8394 20V7.65432h2.2223v1.25926c.2963-.44445.7407-.81482 1.2592-1.08642.5432-.27161 1.1358-.41976 1.7531-.41976 1.1358 0 2.0988.41976 2.8642 1.25926.7654.83951 1.1605 1.95064 1.1605 3.35804 0 1.3827-.3951 2.4938-1.2099 3.3333-.8148.8642-1.8024 1.284-2.9876 1.284s-2.1235-.4445-2.8395-1.3334V20h-2.2223zm6.321-9.7778c-.4691-.49381-1.0617-.74072-1.7531-.74072-.716 0-1.2839.24691-1.753.74072-.4692.4938-.7161 1.0864-.7161 1.8025 0 .716.2469 1.3086.7161 1.8025.4691.4938 1.0617.7407 1.753.7407.7161 0 1.284-.2469 1.7531-.7407.4692-.4939.7161-1.0865.7161-1.8025-.0247-.7161-.2469-1.3087-.7161-1.8025zm11.6297-1.58023c.9629.81482 1.4321 1.95063 1.4321 3.38273s-.4692 2.5679-1.4074 3.3827c-.9383.8148-2.0741 1.2346-3.3581 1.2346-1.2839 0-2.4197-.4198-3.358-1.2346-.9383-.8148-1.4074-1.9506-1.4074-3.3827s.4691-2.56791 1.4074-3.38273c.9383-.81481 2.0741-1.23457 3.358-1.23457 1.284 0 2.3951.41976 3.3334 1.23457zM47.679 13.8765c.4938.4692 1.0864.6914 1.7777.6914.6914 0 1.284-.2222 1.7778-.6914.4938-.4691.7407-1.0864.7407-1.8518 0-.7654-.2469-1.3827-.7407-1.8519-.4938-.4691-1.0864-.69132-1.7778-.69132-.6913 0-1.2839.22222-1.7777.69132-.4939.4692-.7408 1.0865-.7408 1.8519 0 .7654.2469 1.3827.7408 1.8518zm13.0123-6.34564v2.04938c-.2222-.12345-.8148-.07407-1.0617-.07407-.642 0-1.1605.24691-1.5309.74073-.3704.4938-.5679 1.1111-.5679 1.8519v4.321h-2.2222V7.65432h2.2222v1.38271c.5432-1.08642 1.358-1.62963 2.4445-1.62963.2222 0 .4691.04939.716.12346zm1.0864.12346V5.28395h2.2222v2.37037h1.9013v1.80247h-1.9013v3.97531c0 .8148.3704 1.2346 1.1112 1.2346.2469 0 .4938-.0247.7407-.0988l.2222 1.8272c-.4444.1728-.9383.2469-1.4815.2469-1.8765 0-2.7901-.9383-2.7901-2.7902V9.45679l-.0247-1.80247zm7.1605 2.14815c0 .54323.6914.96293 2.0741 1.23453 1.0123.2223 1.7531.5432 2.2222.963.4692.4197.6914 1.0123.6914 1.7284 0 .8395-.321 1.5309-.9383 2.0988-.6173.5432-1.4568.8148-2.5185.8148-1.0124 0-1.8519-.2469-2.5185-.7408-.6667-.4938-1.1605-1.1111-1.4815-1.8765l1.7778-1.1358c.1975.5679.4938 1.037.8642 1.3827.3703.3457.8395.5185 1.3827.5185.3703 0 .6913-.0741.9629-.2469.2716-.1728.4198-.4197.4198-.716 0-.2716-.1482-.5186-.4445-.6667-.2963-.1728-.7654-.321-1.4321-.4445-2.0246-.395-3.037-1.3086-3.037-2.74069 0-.79013.321-1.40741.963-1.85186.6419-.44444 1.4074-.66666 2.321-.66666.9382 0 1.679.17283 2.2222.51851.5432.34568 1.0123.91358 1.3827 1.67902l-1.6049.96298c-.3951-1.01237-1.0618-1.53088-1.9753-1.53088-.8889-.04939-1.3334.19753-1.3334.71605zm5.7778 6.59263V4.04938h2.2222v4.66667c.6914-.88889 1.6543-1.33334 2.8642-1.33334 1.2099 0 2.1976.41976 2.9877 1.23457.7901.83951 1.1852 1.95062 1.1852 3.38272 0 1.4074-.3951 2.5432-1.2099 3.358-.8148.8395-1.8025 1.2593-2.9877 1.2593-1.2345 0-2.1975-.4445-2.8395-1.3334v1.0865H74.716v.0247zm2.7901-2.5186c.4692.4692 1.0618.7161 1.7778.7161.7161 0 1.3086-.2469 1.7778-.7161.4691-.4691.6913-1.0864.6913-1.8271 0-.7408-.2222-1.358-.6913-1.8272-.4692-.46912-1.0617-.71603-1.7778-.71603-.716 0-1.3086.24691-1.7778.71603-.4691.4692-.6913 1.0864-.6913 1.8272 0 .716.2222 1.3333.6913 1.8271zm15.9013-1.3086h-6.7408c.0741.6667.321 1.2099.7655 1.6049.4444.3951.9876.5926 1.6296.5926 1.0864 0 1.8765-.5432 2.4197-1.6049l1.6544.963c-.8149 1.7037-2.1976 2.5679-4.0988 2.5679-1.2346 0-2.2963-.4198-3.1852-1.284-.8642-.8642-1.3086-1.9753-1.3086-3.3333 0-1.3581.4444-2.46917 1.3333-3.33336.8889-.8642 1.9753-1.28395 3.2593-1.28395 1.2345 0 2.2716.41975 3.0617 1.23456.7901.81482 1.2099 1.87655 1.2099 3.13585v.7407zm-4.321-3.45679c-.5679 0-1.0864.17284-1.5062.51852-.4198.34567-.716.79007-.8889 1.30867h4.6914c-.0988-.5679-.3704-1.03707-.7655-1.35806-.395-.32098-.9135-.46913-1.5308-.46913zm5.037-1.45679V5.28395h2.2222v2.37037h1.9013v1.80247h-1.9013v3.97531c0 .8148.3704 1.2346 1.1112 1.2346.2469 0 .4938-.0247.7407-.0988l.2222 1.8272c-.4444.1728-.9383.2469-1.4815.2469-1.8765 0-2.7901-.9383-2.7901-2.7902V9.45679l-.0247-1.80247zm6.1486 8.74078c.642 0 1.185-.5186 1.185-1.1852 0-.642-.519-1.1852-1.185-1.1852-.6424 0-1.1856.5185-1.1856 1.1852 0 .6666.5432 1.1852 1.1856 1.1852zm2.172 0V7.65432h2.223v8.74078h-2.223zm11.087-7.75313c.963.81482 1.432 1.95063 1.432 3.38273s-.469 2.5679-1.407 3.3827c-.939.8148-2.075 1.2346-3.359 1.2346-1.283 0-2.419-.4198-3.358-1.2346-.938-.8148-1.407-1.9506-1.407-3.3827s.469-2.56791 1.407-3.38273c.939-.81481 2.075-1.23457 3.358-1.23457 1.284 0 2.371.41976 3.334 1.23457zm-5.136 5.23453c.494.4692 1.086.6914 1.778.6914.691 0 1.284-.2222 1.778-.6914.493-.4691.74-1.0864.74-1.8518 0-.7654-.247-1.3827-.74-1.8519-.494-.4691-1.087-.69132-1.778-.69132-.692 0-1.284.22222-1.778.69132-.494.4692-.741 1.0865-.741 1.8519 0 .7654.247 1.3827.741 1.8518z"
    />
    <path
      fill="#0CD664"
      d="M102.319 5.2351c0 .66762.544 1.18688 1.187 1.18688s1.186-.51926 1.186-1.18688c0-.66762-.543-1.18688-1.186-1.18688-.668 0-1.187.51926-1.187 1.18688z"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const LogoSportsbetFull = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);
LogoSportsbetFull.defaultProps = {
  verticalAlign: 'middle',
};
export default LogoSportsbetFull;
