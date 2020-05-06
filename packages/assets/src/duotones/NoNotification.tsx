import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/sportsbet-themes';
import { themed } from '@heathmont/sportsbet-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 174 174"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.1}
      d="M80.0981 110.896C100.407 110.896 116.87 94.4326 116.87 74.124C116.87 53.8154 100.407 37.352 80.0981 37.352C59.7894 37.352 43.326 53.8154 43.326 74.124C43.326 94.4326 59.7894 110.896 80.0981 110.896Z"
      fill="currentColor"
    />
    <path
      d="M86.623 136.387C79.721 136.387 74.095 130.761 74.095 123.859C74.095 123.25 74.588 122.757 75.197 122.757C75.806 122.757 76.299 123.25 76.299 123.859C76.299 129.572 80.939 134.183 86.623 134.183C92.307 134.183 96.947 129.543 96.947 123.859C96.947 123.25 97.44 122.757 98.049 122.757C98.658 122.757 99.151 123.25 99.151 123.859C99.151 130.761 93.554 136.387 86.623 136.387Z"
      fill="currentColor"
    />
    <path
      d="M116.87 93.67C106.111 93.67 97.353 84.912 97.353 74.153C97.353 63.394 106.111 54.636 116.87 54.636C127.629 54.636 136.387 63.394 136.387 74.153C136.387 84.912 127.629 93.67 116.87 93.67ZM116.87 56.811C107.329 56.811 99.528 64.583 99.528 74.153C99.528 83.694 107.3 91.495 116.87 91.495C126.44 91.495 134.212 83.723 134.212 74.153C134.183 64.583 126.411 56.811 116.87 56.811Z"
      fill="currentColor"
    />
    <path
      d="M108.779 83.317C108.489 83.317 108.228 83.201 107.996 82.998C107.561 82.563 107.561 81.867 107.996 81.432L124.149 65.279C124.584 64.844 125.28 64.844 125.715 65.279C126.15 65.714 126.15 66.41 125.715 66.845L109.562 82.998C109.359 83.201 109.069 83.317 108.779 83.317Z"
      fill="currentColor"
    />
    <path
      d="M124.961 83.317C124.671 83.317 124.41 83.201 124.178 82.998L108.025 66.845C107.59 66.41 107.59 65.714 108.025 65.279C108.46 64.844 109.156 64.844 109.591 65.279L125.744 81.432C126.179 81.867 126.179 82.563 125.744 82.998C125.512 83.201 125.222 83.317 124.961 83.317Z"
      fill="currentColor"
    />
    <path
      d="M118.726 124.961H54.549C52.722 124.961 51.098 124.004 50.199 122.409C49.3 120.814 49.329 118.929 50.286 117.363L57.507 105.473V84.1C57.507 68.266 70.383 55.129 86.217 54.839C90.4799 54.752 94.6269 55.622 98.542 57.362C99.093 57.623 99.325 58.261 99.093 58.812C98.832 59.363 98.194 59.624 97.643 59.363C94.047 57.739 90.219 56.956 86.275 57.014C71.63 57.304 59.711 69.455 59.711 84.1V106.082L52.171 118.494C51.649 119.364 51.62 120.437 52.113 121.307C52.606 122.206 53.534 122.728 54.549 122.728H118.726C119.77 122.728 120.698 122.177 121.191 121.249C121.684 120.321 121.655 119.248 121.075 118.378L113.883 107.387V98.281C113.883 97.672 114.376 97.179 114.985 97.179C115.594 97.179 116.087 97.672 116.087 98.281V106.72L122.931 117.16C123.946 118.726 124.033 120.64 123.134 122.264C122.235 123.975 120.582 124.961 118.726 124.961Z"
      fill="white"
    />
    <path
      d="M66.8161 84.593C66.2071 84.593 65.7141 84.1 65.7141 83.491C65.7141 72.326 74.7911 63.249 85.9561 63.249C86.5651 63.249 87.0581 63.742 87.0581 64.351C87.0581 64.96 86.5651 65.453 85.9561 65.453C76.0091 65.453 67.9181 73.544 67.9181 83.491C67.9181 84.1 67.4251 84.593 66.8161 84.593Z"
      fill="white"
    />
    <path
      d="M93.2931 57.014C92.6841 57.014 92.1911 56.521 92.1911 55.912C92.1911 52.838 89.6971 50.344 86.6231 50.344C83.5491 50.344 81.0551 52.838 81.0551 55.912C81.0551 56.521 80.5621 57.014 79.9531 57.014C79.3441 57.014 78.8511 56.521 78.8511 55.912C78.8511 51.62 82.3311 48.14 86.6231 48.14C90.9151 48.14 94.3951 51.62 94.3951 55.912C94.3951 56.521 93.9021 57.014 93.2931 57.014Z"
      fill="white"
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
const NoNotification = styled(Svg)<SvgProps>(
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
NoNotification.defaultProps = {
  verticalAlign: 'middle',
};
export default NoNotification;
