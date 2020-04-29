import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/sportsbet-themes';
import { themed } from '@heathmont/sportsbet-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 184 184"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M91.9997 184C142.81 184 184 142.81 184 92C184 41.1898 142.81 0 91.9997 0C41.1895 0 -0.000244141 41.1898 -0.000244141 92C-0.000244141 142.81 41.1895 184 91.9997 184Z"
      fill="#232A33"
    />
    <path
      d="M72.7717 77.8627C72.5571 77.8627 72.3117 77.8013 72.1277 77.648C71.6064 77.28 71.453 76.5747 71.821 76.0227L92.9197 45.08C94.3304 43.1173 96.9984 42.5653 99.0224 43.8227L129.812 62.5907C130.885 63.2347 131.652 64.3387 131.897 65.5653C132.142 66.792 131.866 68.1107 131.161 69.1227L125.304 77.3413C124.936 77.8627 124.2 77.9853 123.678 77.6173C123.157 77.2493 123.034 76.5133 123.402 75.992L129.26 67.7733C129.628 67.252 129.75 66.6387 129.628 66.0253C129.505 65.412 129.137 64.8907 128.585 64.5533L97.8264 45.816C96.8144 45.2027 95.5264 45.4787 94.8211 46.4293L73.7224 77.372C73.5077 77.6787 73.1397 77.8627 72.7717 77.8627Z"
      fill="currentColor"
    />
    <path
      d="M88.9944 77.8627C88.7797 77.8627 88.5344 77.8014 88.3504 77.6787C87.829 77.3107 87.6757 76.6054 88.0437 76.0534L105.953 49.3427C106.321 48.8213 107.026 48.668 107.578 49.036C108.1 49.404 108.253 50.1093 107.885 50.6613L89.9757 77.372C89.7304 77.6787 89.3624 77.8627 88.9944 77.8627Z"
      fill="currentColor"
    />
    <path
      d="M125.549 76.2373C125.334 76.2373 125.15 76.176 124.936 76.084L88.8412 54.4027C88.2892 54.0653 88.1052 53.36 88.4425 52.808C88.7798 52.256 89.4852 52.072 90.0372 52.4093L126.132 74.0907C126.684 74.428 126.868 75.1333 126.53 75.6853C126.346 76.0227 125.948 76.2373 125.549 76.2373Z"
      fill="currentColor"
    />
    <path
      d="M89.1479 54.74L87.8905 53.8507C86.7252 52.992 76.4825 45.4174 77.4945 39.4374C77.8625 37.168 79.7025 35.512 82.9532 34.5C86.2039 33.5187 88.6265 33.856 90.2212 35.512C94.3919 39.928 90.1905 51.9494 89.6692 53.2987L89.1479 54.74ZM86.2039 36.2787C85.4679 36.2787 84.6092 36.432 83.6279 36.7387C81.2972 37.444 80.0092 38.4867 79.7945 39.8054C79.2732 42.9027 84.1185 47.932 88.0132 50.9987C89.4852 46.276 90.7119 39.4067 88.5345 37.1374C87.9825 36.5547 87.2159 36.2787 86.2039 36.2787Z"
      fill="currentColor"
    />
    <path
      d="M75.2864 62.1C74.7038 62.1 74.1211 62.008 73.5691 61.8547C71.3918 61.1493 70.0118 59.064 69.5211 55.7213C69.0304 52.3787 69.7358 49.9867 71.6371 48.6987C76.6358 45.2333 87.8598 51.2133 89.1171 51.9187L90.4664 52.6547L89.3931 53.7587C88.5038 54.648 80.9904 62.1 75.2864 62.1ZM75.6544 49.9253C74.5811 49.9253 73.6611 50.1093 72.9864 50.5693C71.8824 51.336 71.5144 52.9613 71.8518 55.3533C72.1891 57.7453 73.0171 59.1867 74.3051 59.616C77.2798 60.5973 82.9838 56.5493 86.6024 53.2067C83.3211 51.5813 78.8131 49.9253 75.6544 49.9253Z"
      fill="currentColor"
    />
    <path
      d="M118.68 127.543H78.1385L56.7638 67.6813C56.3345 66.424 55.1385 65.596 53.8198 65.596H47.1038C46.4598 65.596 45.9385 65.0747 45.9385 64.4307C45.9385 63.7867 46.4598 63.2653 47.1038 63.2653H53.8198C56.1198 63.2653 58.2051 64.7373 58.9718 66.884L79.7945 125.181H118.68C119.324 125.181 119.845 125.703 119.845 126.347C119.845 127.021 119.324 127.543 118.68 127.543Z"
      fill="white"
    />
    <path
      d="M119.447 118.68H75.8079C75.1639 118.68 74.6425 118.159 74.6425 117.515C74.6425 116.871 75.1639 116.349 75.8079 116.349H117.913L132.664 80.6227C132.909 80.0093 132.848 79.304 132.48 78.752C132.112 78.2 131.499 77.8627 130.824 77.8627H61.8545C61.2105 77.8627 60.6892 77.3413 60.6892 76.6973C60.6892 76.0533 61.2105 75.532 61.8545 75.532H130.824C132.265 75.532 133.615 76.2373 134.412 77.464C135.209 78.66 135.363 80.1933 134.811 81.512L119.447 118.68Z"
      fill="white"
    />
    <path
      d="M86.2958 147.353C82.0638 147.353 78.6292 143.919 78.6292 139.687C78.6292 135.455 82.0638 132.02 86.2958 132.02C90.5278 132.02 93.9625 135.455 93.9625 139.687C93.9625 143.919 90.5278 147.353 86.2958 147.353ZM86.2958 134.381C83.3518 134.381 80.9598 136.773 80.9598 139.717C80.9598 142.661 83.3518 145.053 86.2958 145.053C89.2398 145.053 91.6318 142.661 91.6318 139.717C91.6318 136.773 89.2398 134.381 86.2958 134.381Z"
      fill="white"
    />
    <path
      d="M112.455 147.353C108.223 147.353 104.788 143.919 104.788 139.687C104.788 135.455 108.223 132.02 112.455 132.02C116.687 132.02 120.121 135.455 120.121 139.687C120.121 143.919 116.687 147.353 112.455 147.353ZM112.455 134.381C109.511 134.381 107.119 136.773 107.119 139.717C107.119 142.661 109.511 145.053 112.455 145.053C115.399 145.053 117.791 142.661 117.791 139.717C117.791 136.773 115.399 134.381 112.455 134.381Z"
      fill="white"
    />
    <path
      d="M46.9198 108.008H40.9397C40.2957 108.008 39.7744 107.487 39.7744 106.843C39.7744 106.199 40.2957 105.677 40.9397 105.677H46.9198C47.5638 105.677 48.0851 106.199 48.0851 106.843C48.0851 107.487 47.5638 108.008 46.9198 108.008Z"
      fill="currentColor"
    />
    <path
      d="M56.2118 108.008H54.3411C53.6971 108.008 53.1758 107.487 53.1758 106.843C53.1758 106.199 53.6971 105.677 54.3411 105.677H56.2118C56.8558 105.677 57.3771 106.199 57.3771 106.843C57.3771 107.487 56.8558 108.008 56.2118 108.008Z"
      fill="currentColor"
    />
    <path
      d="M41.7677 136.896H35.7876C35.1436 136.896 34.6223 136.375 34.6223 135.731C34.6223 135.087 35.1436 134.565 35.7876 134.565H41.7677C42.4117 134.565 42.933 135.087 42.933 135.731C42.933 136.375 42.4117 136.896 41.7677 136.896Z"
      fill="currentColor"
    />
    <path
      d="M51.0597 136.896H49.189C48.545 136.896 48.0237 136.375 48.0237 135.731C48.0237 135.087 48.545 134.565 49.189 134.565H51.0597C51.7037 134.565 52.225 135.087 52.225 135.731C52.225 136.375 51.7037 136.896 51.0597 136.896Z"
      fill="currentColor"
    />
    <path
      d="M61.3639 136.896H59.4932C58.8492 136.896 58.3279 136.375 58.3279 135.731C58.3279 135.087 58.8492 134.565 59.4932 134.565H61.3639C62.0079 134.565 62.5292 135.087 62.5292 135.731C62.5292 136.375 62.0079 136.896 61.3639 136.896Z"
      fill="currentColor"
    />
    <path
      d="M92.6437 106.352C94.6677 106.352 95.9557 105.677 96.9371 104.819V108.284H94.8824C94.3611 108.284 93.9011 108.713 93.9011 109.265C93.9011 109.787 94.3304 110.247 94.8824 110.247H100.924C101.445 110.247 101.905 109.817 101.905 109.265C101.905 108.744 101.476 108.284 100.924 108.284H98.8691V104.819C99.8504 105.677 101.138 106.352 103.162 106.352C104.972 106.352 106.689 105.493 107.762 104.052C111.412 99.2067 105.524 91.9387 98.6237 84.272C98.4397 84.088 98.1944 83.9653 97.9184 83.9653C97.6117 83.9653 97.3664 84.088 97.1824 84.3027C90.2824 91.9387 84.4251 99.2067 88.0744 104.052C89.1477 105.493 90.8651 106.352 92.6437 106.352ZM97.9184 86.388C104.88 94.208 108.652 99.6973 106.229 102.887C105.524 103.837 104.358 104.42 103.162 104.42C101.292 104.42 100.372 103.745 99.4211 102.58C99.2371 102.365 98.9611 102.243 98.6851 102.243H97.1824C96.9064 102.243 96.6304 102.365 96.4464 102.58C95.4957 103.745 94.5451 104.42 92.7051 104.42C91.5091 104.42 90.3744 103.837 89.6384 102.887C87.1851 99.728 90.9571 94.208 97.9184 86.388Z"
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
const CasinoBonus = styled(Svg)<SvgProps>(
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
CasinoBonus.defaultProps = {
  verticalAlign: 'middle',
};
export default CasinoBonus;
