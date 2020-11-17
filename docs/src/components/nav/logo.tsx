import React from 'react';
import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';
import {
  LogoSportsbet,
  IconChevronDown,
  LogoMoneyball,
} from '@heathmont/moon-assets';
import { mq } from '@heathmont/moon-utils';
import { useTheme } from '@heathmont/moon-themes';

import { useDocsTheme } from '../../provider';

const LogoContainer = styled.div(({ theme: { breakpoint, color, space } }) => ({
  display: 'flex',
  position: 'relative',
  textAlign: 'left',
  height: rem(40),
  width: rem(240),
  alignItems: 'center',
  justifyContent: 'space-between',
  /* The logo */
  'svg:first-child': {
    width: 'auto',
    height: '100%',
  },
  [`${IconChevronDown}`]: {
    fontSize: rem(18),
    marginLeft: rem(space.default),
    flexShrink: 0,
    color: color.trunks[100],
  },
  [mq(breakpoint.medium)]: {
    width: '100%',
  },
}));

const BrandSelect = styled.select({
  position: 'absolute',
  appearance: 'none',
  color: 'transparent',
  width: '100%',
  border: 'none',
  backgroundColor: 'transparent',
  height: '100%',
  option: {
    color: 'initial',
  },
  '&:hover': {
    cursor: 'pointer',
  },
});

const LogoBitcasino = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 133 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.36004 0C8.86144 0 8.4535 0.398621 8.4535 0.885825C8.4535 1.39517 8.86144 1.77165 9.36004 1.77165C9.85863 1.77165 10.2666 1.37303 10.2666 0.885825C10.2666 0.398621 9.85863 0 9.36004 0ZM9.36004 26.3533C8.86144 26.3533 8.4535 26.7519 8.4535 27.2391C8.4535 27.7484 8.86144 28.1249 9.36004 28.1249C9.85863 28.1249 10.2666 27.7263 10.2666 27.2391C10.2666 26.7519 9.85863 26.3533 9.36004 26.3533ZM3.92079 5.31492C3.92079 4.82771 4.32873 4.42909 4.82733 4.42909C5.32593 4.42909 5.73387 4.82771 5.73387 5.31492C5.73387 5.80212 5.32593 6.20074 4.82733 6.20074C4.32873 6.20074 3.92079 5.82427 3.92079 5.31492ZM4.82733 9.23476C4.53271 9.23476 4.30607 9.45621 4.30607 9.74411C4.30607 10.032 4.53271 10.2535 4.82733 10.2535C5.12196 10.2535 5.34859 10.032 5.34859 9.74411C5.34859 9.45621 5.12196 9.23476 4.82733 9.23476ZM0 9.74406C0 9.58904 0.135981 9.45616 0.294626 9.45616C0.453271 9.45616 0.589252 9.58904 0.589252 9.74406C0.589252 9.89908 0.453271 10.032 0.294626 10.032C0.135981 10.032 0 9.92122 0 9.74406ZM0.294626 13.5974C0.135981 13.5974 0 13.7303 0 13.8853C0 14.0403 0.135981 14.1732 0.294626 14.1732C0.453271 14.1732 0.589252 14.0403 0.589252 13.8853C0.589252 13.7303 0.453271 13.5974 0.294626 13.5974ZM0 18.6023C0 18.4473 0.135981 18.3145 0.294626 18.3145C0.453271 18.3145 0.589252 18.4473 0.589252 18.6023C0.589252 18.7574 0.453271 18.8902 0.294626 18.8902C0.135981 18.8902 0 18.7795 0 18.6023ZM4.82733 13.376C4.53271 13.376 4.30607 13.5974 4.30607 13.8853C4.30607 14.1732 4.53271 14.3947 4.82733 14.3947C5.12196 14.3947 5.34859 14.1732 5.34859 13.8853C5.34859 13.5974 5.12196 13.376 4.82733 13.376ZM4.30607 18.6023C4.30607 18.3144 4.53271 18.0929 4.82733 18.0929C5.12196 18.0929 5.34859 18.3144 5.34859 18.6023C5.34859 18.8902 5.12196 19.1116 4.82733 19.1116C4.53271 19.1116 4.30607 18.8902 4.30607 18.6023ZM4.82733 22.1456C4.32873 22.1456 3.92079 22.5442 3.92079 23.0314C3.92079 23.5407 4.32873 23.9172 4.82733 23.9172C5.32593 23.9172 5.73387 23.5186 5.73387 23.0314C5.73387 22.5442 5.32593 22.1456 4.82733 22.1456ZM7.84158 5.09346C7.84158 4.20764 8.54415 3.60971 9.36004 3.60971C10.2666 3.60971 10.8785 4.29622 10.8785 5.09346C10.8785 5.89071 10.1759 6.57722 9.36004 6.57722C8.4535 6.57722 7.84158 5.89071 7.84158 5.09346ZM14.346 3.83122C13.5301 3.83122 12.8276 4.42915 12.8276 5.31498C12.8276 6.11222 13.4395 6.79873 14.346 6.79873C15.1619 6.79873 15.8645 6.11222 15.8645 5.31498C15.8645 4.51773 15.2526 3.83122 14.346 3.83122ZM12.8276 23.0315C12.8276 22.1456 13.5301 21.5477 14.346 21.5477C15.2526 21.5477 15.8645 22.2342 15.8645 23.0315C15.8645 23.8287 15.1619 24.5152 14.346 24.5152C13.4395 24.5152 12.8276 23.8287 12.8276 23.0315ZM14.346 12.468C13.5301 12.468 12.8276 13.0659 12.8276 13.9518C12.8276 14.749 13.4395 15.4355 14.346 15.4355C15.1619 15.4355 15.8645 14.749 15.8645 13.9518C15.8645 13.1545 15.2526 12.468 14.346 12.468ZM7.84158 22.8099C7.84158 21.9241 8.54415 21.3262 9.36004 21.3262C10.2666 21.3262 10.8785 22.0127 10.8785 22.8099C10.8785 23.6072 10.1759 24.2937 9.36004 24.2937C8.4535 24.2937 7.84158 23.6072 7.84158 22.8099ZM9.36004 7.55168C8.40817 7.55168 7.56962 8.2382 7.56962 9.30119C7.56962 10.2534 8.27219 11.0728 9.36004 11.0507C10.3119 11.0507 11.1505 10.2313 11.1505 9.30119C11.1505 8.37107 10.4479 7.55168 9.36004 7.55168ZM7.56962 18.6023C7.56962 17.5393 8.40817 16.8528 9.36004 16.8528C10.4479 16.8528 11.1505 17.6722 11.1505 18.6023C11.1505 19.5324 10.3119 20.3518 9.36004 20.3518C8.27219 20.3739 7.56962 19.5546 7.56962 18.6023ZM17.5416 7.90596C16.635 8.41531 16.2951 9.4783 16.7937 10.3863C17.111 10.9621 17.7909 11.3828 18.4934 11.3607C18.7427 11.3607 19.0827 11.2721 19.332 11.1171C20.2385 10.6077 20.5785 9.54474 20.0799 8.63677C19.5586 7.75094 18.4708 7.41876 17.5416 7.90596ZM7.52429 14.8375C6.9577 13.8188 7.34298 12.623 8.38551 12.0693C9.42803 11.5157 10.6519 11.8922 11.2184 12.9109C11.785 13.9296 11.3998 15.1254 10.3572 15.6791C10.0626 15.8562 9.69999 15.967 9.40536 15.967C8.65747 15.9448 7.88691 15.5019 7.52429 14.8375ZM17.3603 16.4542C16.2498 17.0521 15.8418 18.3365 16.4537 19.4217C16.8617 20.1082 17.6776 20.5954 18.4708 20.5954C18.7881 20.5954 19.196 20.5068 19.4906 20.3075C20.6011 19.7096 21.0091 18.4251 20.3972 17.34C19.7853 16.2549 18.4708 15.8562 17.3603 16.4542Z"
      fill="#FF5111"
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="21"
      height="29"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.36004 0C8.86144 0 8.4535 0.398621 8.4535 0.885825C8.4535 1.39517 8.86144 1.77165 9.36004 1.77165C9.85863 1.77165 10.2666 1.37303 10.2666 0.885825C10.2666 0.398621 9.85863 0 9.36004 0ZM9.36004 26.3533C8.86144 26.3533 8.4535 26.7519 8.4535 27.2391C8.4535 27.7484 8.86144 28.1249 9.36004 28.1249C9.85863 28.1249 10.2666 27.7263 10.2666 27.2391C10.2666 26.7519 9.85863 26.3533 9.36004 26.3533ZM3.92079 5.31492C3.92079 4.82771 4.32873 4.42909 4.82733 4.42909C5.32593 4.42909 5.73387 4.82771 5.73387 5.31492C5.73387 5.80212 5.32593 6.20074 4.82733 6.20074C4.32873 6.20074 3.92079 5.82427 3.92079 5.31492ZM4.82733 9.23476C4.53271 9.23476 4.30607 9.45621 4.30607 9.74411C4.30607 10.032 4.53271 10.2535 4.82733 10.2535C5.12196 10.2535 5.34859 10.032 5.34859 9.74411C5.34859 9.45621 5.12196 9.23476 4.82733 9.23476ZM0 9.74406C0 9.58904 0.135981 9.45616 0.294626 9.45616C0.453271 9.45616 0.589252 9.58904 0.589252 9.74406C0.589252 9.89908 0.453271 10.032 0.294626 10.032C0.135981 10.032 0 9.92122 0 9.74406ZM0.294626 13.5974C0.135981 13.5974 0 13.7303 0 13.8853C0 14.0403 0.135981 14.1732 0.294626 14.1732C0.453271 14.1732 0.589252 14.0403 0.589252 13.8853C0.589252 13.7303 0.453271 13.5974 0.294626 13.5974ZM0 18.6023C0 18.4473 0.135981 18.3145 0.294626 18.3145C0.453271 18.3145 0.589252 18.4473 0.589252 18.6023C0.589252 18.7574 0.453271 18.8902 0.294626 18.8902C0.135981 18.8902 0 18.7795 0 18.6023ZM4.82733 13.376C4.53271 13.376 4.30607 13.5974 4.30607 13.8853C4.30607 14.1732 4.53271 14.3947 4.82733 14.3947C5.12196 14.3947 5.34859 14.1732 5.34859 13.8853C5.34859 13.5974 5.12196 13.376 4.82733 13.376ZM4.30607 18.6023C4.30607 18.3144 4.53271 18.0929 4.82733 18.0929C5.12196 18.0929 5.34859 18.3144 5.34859 18.6023C5.34859 18.8902 5.12196 19.1116 4.82733 19.1116C4.53271 19.1116 4.30607 18.8902 4.30607 18.6023ZM4.82733 22.1456C4.32873 22.1456 3.92079 22.5442 3.92079 23.0314C3.92079 23.5407 4.32873 23.9172 4.82733 23.9172C5.32593 23.9172 5.73387 23.5186 5.73387 23.0314C5.73387 22.5442 5.32593 22.1456 4.82733 22.1456ZM7.84158 5.09346C7.84158 4.20764 8.54415 3.60971 9.36004 3.60971C10.2666 3.60971 10.8785 4.29622 10.8785 5.09346C10.8785 5.89071 10.1759 6.57722 9.36004 6.57722C8.4535 6.57722 7.84158 5.89071 7.84158 5.09346ZM14.346 3.83122C13.5301 3.83122 12.8276 4.42915 12.8276 5.31498C12.8276 6.11222 13.4395 6.79873 14.346 6.79873C15.1619 6.79873 15.8645 6.11222 15.8645 5.31498C15.8645 4.51773 15.2526 3.83122 14.346 3.83122ZM12.8276 23.0315C12.8276 22.1456 13.5301 21.5477 14.346 21.5477C15.2526 21.5477 15.8645 22.2342 15.8645 23.0315C15.8645 23.8287 15.1619 24.5152 14.346 24.5152C13.4395 24.5152 12.8276 23.8287 12.8276 23.0315ZM14.346 12.468C13.5301 12.468 12.8276 13.0659 12.8276 13.9518C12.8276 14.749 13.4395 15.4355 14.346 15.4355C15.1619 15.4355 15.8645 14.749 15.8645 13.9518C15.8645 13.1545 15.2526 12.468 14.346 12.468ZM7.84158 22.8099C7.84158 21.9241 8.54415 21.3262 9.36004 21.3262C10.2666 21.3262 10.8785 22.0127 10.8785 22.8099C10.8785 23.6072 10.1759 24.2937 9.36004 24.2937C8.4535 24.2937 7.84158 23.6072 7.84158 22.8099ZM9.36004 7.55168C8.40817 7.55168 7.56962 8.2382 7.56962 9.30119C7.56962 10.2534 8.27219 11.0728 9.36004 11.0507C10.3119 11.0507 11.1505 10.2313 11.1505 9.30119C11.1505 8.37107 10.4479 7.55168 9.36004 7.55168ZM7.56962 18.6023C7.56962 17.5393 8.40817 16.8528 9.36004 16.8528C10.4479 16.8528 11.1505 17.6722 11.1505 18.6023C11.1505 19.5324 10.3119 20.3518 9.36004 20.3518C8.27219 20.3739 7.56962 19.5546 7.56962 18.6023ZM17.5416 7.90596C16.635 8.41531 16.2951 9.4783 16.7937 10.3863C17.111 10.9621 17.7909 11.3828 18.4934 11.3607C18.7427 11.3607 19.0827 11.2721 19.332 11.1171C20.2385 10.6077 20.5785 9.54474 20.0799 8.63677C19.5586 7.75094 18.4708 7.41876 17.5416 7.90596ZM7.52429 14.8375C6.9577 13.8188 7.34298 12.623 8.38551 12.0693C9.42803 11.5157 10.6519 11.8922 11.2184 12.9109C11.785 13.9296 11.3998 15.1254 10.3572 15.6791C10.0626 15.8562 9.69999 15.967 9.40536 15.967C8.65747 15.9448 7.88691 15.5019 7.52429 14.8375ZM17.3603 16.4542C16.2498 17.0521 15.8418 18.3365 16.4537 19.4217C16.8617 20.1082 17.6776 20.5954 18.4708 20.5954C18.7881 20.5954 19.196 20.5068 19.4906 20.3075C20.6011 19.7096 21.0091 18.4251 20.3972 17.34C19.7853 16.2549 18.4708 15.8562 17.3603 16.4542Z"
        fill="#FFFFFF"
      />
    </mask>
    <g mask="url(#mask0)">
      <rect width="31.553" height="30.9895" fill="#FF5111" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.286 20.654H31.6666V7.2654H37.0786C38.5494 7.2654 39.6557 7.59854 40.3974 8.26483C41.1392 8.93112 41.51 9.81111 41.51 10.9048C41.51 11.6088 41.3372 12.2185 40.9914 12.734C40.6457 13.2494 40.1712 13.6328 39.5677 13.8843C40.234 14.1105 40.762 14.4908 41.1517 15.0251C41.5414 15.5594 41.7363 16.1848 41.7363 16.9014C41.7363 18.0831 41.3529 19.004 40.586 19.664C39.8191 20.324 38.7192 20.654 37.286 20.654ZM37.2672 14.9214H33.9106V18.5797H37.2483C38.7066 18.5797 39.4357 17.97 39.4357 16.7505C39.4357 16.1723 39.2472 15.7228 38.87 15.4023C38.4929 15.0817 37.9586 14.9214 37.2672 14.9214ZM37.0974 9.33969H33.9106V12.8283H37.0974C38.5054 12.8283 39.2094 12.25 39.2094 11.0934C39.2094 10.5403 39.0334 10.1097 38.6814 9.80169C38.3294 9.49368 37.8014 9.33969 37.0974 9.33969ZM42.8992 12.866V10.8671H46.5763V20.654H44.3323V12.866H42.8992ZM45.4637 9.22654C45.0489 9.22654 44.7094 9.09769 44.4454 8.83997C44.1814 8.58226 44.0494 8.25226 44.0494 7.84997C44.0494 7.43511 44.1814 7.09569 44.4454 6.83169C44.7094 6.56768 45.0489 6.43569 45.4637 6.43569C45.866 6.43569 46.1992 6.56768 46.4632 6.83169C46.7272 7.09569 46.8592 7.43511 46.8592 7.84997C46.8592 8.25226 46.7272 8.58226 46.4632 8.83997C46.1992 9.09769 45.866 9.22654 45.4637 9.22654ZM53.5283 18.6551V20.5974C53.2517 20.6728 52.862 20.7105 52.3591 20.7105C50.4483 20.7105 49.4929 19.7488 49.4929 17.8254V12.6585H48.0032V10.8671H49.4929V8.3214H51.7369V10.8671H53.566V12.6585H51.7369V17.5991C51.7369 18.366 52.1014 18.7494 52.8306 18.7494L53.5283 18.6551ZM54.3517 15.77C54.3517 14.3243 54.8106 13.108 55.7283 12.1211C56.646 11.1343 57.8151 10.6408 59.2357 10.6408C60.5809 10.6408 61.6526 11.0211 62.4509 11.7817C63.2492 12.5423 63.7237 13.4191 63.8746 14.4123H61.574C61.4357 13.8717 61.156 13.438 60.7349 13.1111C60.3137 12.7843 59.8077 12.6208 59.2169 12.6208C58.4249 12.6208 57.79 12.9131 57.3123 13.4977C56.8346 14.0823 56.5957 14.8397 56.5957 15.77C56.5957 16.7003 56.8346 17.4545 57.3123 18.0328C57.79 18.6111 58.4249 18.9003 59.2169 18.9003C59.8077 18.9003 60.3137 18.7368 60.7349 18.41C61.156 18.0831 61.4357 17.6494 61.574 17.1088H63.8746C63.7237 18.102 63.2492 18.9788 62.4509 19.7394C61.6526 20.5 60.5809 20.8803 59.2357 20.8803C57.8151 20.8803 56.646 20.3868 55.7283 19.4C54.8106 18.4131 54.3517 17.2031 54.3517 15.77ZM71.5431 16.4677C69.3557 16.4677 68.0734 16.5683 67.6963 16.7694C67.3066 16.9705 67.1117 17.3351 67.1117 17.8631C67.1117 18.7054 67.6711 19.1265 68.79 19.1265C70.6254 19.1265 71.5431 18.41 71.5431 16.9768V16.4677ZM68.394 20.8803C67.2374 20.8803 66.3763 20.5974 65.8106 20.0317C65.2449 19.466 64.962 18.718 64.962 17.7877C64.962 16.5934 65.49 15.7574 66.546 15.2797C66.7974 15.1665 67.0394 15.0817 67.272 15.0251C67.5046 14.9685 67.9791 14.912 68.6957 14.8554C69.4123 14.7988 70.3614 14.7705 71.5432 14.7705V14.2803C71.5432 13.086 70.8454 12.4888 69.45 12.4888C68.2306 12.4888 67.5392 12.9728 67.3757 13.9408H65.1883C65.2889 12.9854 65.688 12.1965 66.3857 11.5743C67.0834 10.952 68.1237 10.6408 69.5066 10.6408C70.902 10.6408 71.9549 10.9614 72.6652 11.6025C73.3754 12.2437 73.7306 13.1425 73.7306 14.2991V20.654H71.6563V19.6168C70.9523 20.4591 69.8649 20.8803 68.394 20.8803ZM79.5889 20.8803C78.2437 20.8803 77.2317 20.566 76.5529 19.9374C75.874 19.3088 75.5032 18.5043 75.4403 17.5237H77.6089C77.634 17.9763 77.8289 18.3408 78.1934 18.6174C78.558 18.894 79.0672 19.0323 79.7209 19.0323C80.2992 19.0323 80.7454 18.9317 81.0597 18.7305C81.374 18.5294 81.5312 18.2591 81.5312 17.9197C81.5312 17.5425 81.3394 17.2628 80.956 17.0805C80.5726 16.8983 80.1043 16.7631 79.5512 16.6751C78.998 16.5871 78.4449 16.4708 77.8917 16.3263C77.3386 16.1817 76.8703 15.8957 76.4869 15.4683C76.1034 15.0408 75.9117 14.4563 75.9117 13.7145C75.9117 12.8597 76.2669 12.1337 76.9772 11.5365C77.6874 10.9394 78.6271 10.6408 79.7963 10.6408C80.4626 10.6408 81.0503 10.7445 81.5594 10.952C82.0686 11.1594 82.4646 11.4328 82.7474 11.7723C83.0303 12.1117 83.244 12.4574 83.3886 12.8094C83.5332 13.1614 83.618 13.5197 83.6432 13.8843H81.4934C81.4557 13.4945 81.2892 13.1614 80.9937 12.8848C80.6983 12.6083 80.2803 12.47 79.7397 12.47C79.1992 12.47 78.7843 12.5737 78.4952 12.7811C78.206 12.9885 78.0614 13.2745 78.0614 13.6391C78.0614 13.9785 78.2532 14.2363 78.6366 14.4123C79.02 14.5883 79.4883 14.7203 80.0414 14.8083C80.5946 14.8963 81.1477 15.0188 81.7009 15.176C82.254 15.3331 82.7223 15.6317 83.1057 16.0717C83.4892 16.5117 83.6809 17.0963 83.6809 17.8254C83.6809 18.7054 83.3257 19.4345 82.6154 20.0128C81.9052 20.5911 80.8963 20.8803 79.5889 20.8803ZM84.5609 12.866V10.8671H88.238V20.654H85.994V12.866H84.5609ZM87.1254 9.22654C86.7106 9.22654 86.3712 9.09769 86.1072 8.83997C85.8432 8.58226 85.7112 8.25226 85.7112 7.84997C85.7112 7.43511 85.8432 7.09569 86.1072 6.83169C86.3712 6.56768 86.7106 6.43569 87.1254 6.43569C87.5277 6.43569 87.8609 6.56768 88.1249 6.83169C88.3889 7.09569 88.5209 7.43511 88.5209 7.84997C88.5209 8.25226 88.3889 8.58226 88.1249 8.83997C87.8609 9.09769 87.5277 9.22654 87.1254 9.22654ZM92.8706 10.8671V12.1683C93.0969 11.7408 93.4709 11.3794 93.9926 11.084C94.5143 10.7885 95.146 10.6408 95.8877 10.6408C97.0443 10.6408 97.94 10.9928 98.5749 11.6968C99.2097 12.4008 99.5272 13.3374 99.5272 14.5065V20.654H97.2831V14.7894C97.2831 14.098 97.1229 13.5543 96.8023 13.1583C96.4817 12.7623 95.9946 12.5643 95.3409 12.5643C94.6243 12.5643 94.0617 12.778 93.6532 13.2054C93.2446 13.6328 93.0403 14.2237 93.0403 14.978V20.654H90.7963V10.8671H92.8706ZM106.441 20.8803C104.933 20.8803 103.71 20.3837 102.774 19.3905C101.837 18.3974 101.369 17.1905 101.369 15.77C101.369 14.3494 101.837 13.1394 102.774 12.14C103.71 11.1405 104.933 10.6408 106.441 10.6408C107.963 10.6408 109.191 11.1405 110.128 12.14C111.065 13.1394 111.533 14.3494 111.533 15.77C111.533 17.1905 111.065 18.3974 110.128 19.3905C109.191 20.3837 107.963 20.8803 106.441 20.8803ZM103.613 15.77C103.613 16.7003 103.88 17.4545 104.414 18.0328C104.949 18.6111 105.624 18.9003 106.441 18.9003C107.271 18.9003 107.953 18.6111 108.487 18.0328C109.022 17.4545 109.289 16.7003 109.289 15.77C109.289 14.8271 109.022 14.0665 108.487 13.4883C107.953 12.91 107.271 12.6208 106.441 12.6208C105.624 12.6208 104.949 12.91 104.414 13.4883C103.88 14.0665 103.613 14.8271 103.613 15.77ZM114.412 20.8048C113.959 20.8048 113.585 20.6634 113.29 20.3805C112.994 20.0977 112.847 19.73 112.847 19.2774C112.847 18.8374 112.994 18.4697 113.29 18.1743C113.585 17.8788 113.959 17.7311 114.412 17.7311C114.852 17.7311 115.219 17.8788 115.515 18.1743C115.81 18.4697 115.958 18.8374 115.958 19.2774C115.958 19.73 115.813 20.0977 115.524 20.3805C115.235 20.6634 114.864 20.8048 114.412 20.8048ZM116.947 12.866V10.8671H120.624V20.654H118.38V12.866H116.947ZM119.511 9.22654C119.096 9.22654 118.757 9.09769 118.493 8.83997C118.229 8.58226 118.097 8.25226 118.097 7.84997C118.097 7.43511 118.229 7.09569 118.493 6.83169C118.757 6.56768 119.096 6.43569 119.511 6.43569C119.913 6.43569 120.247 6.56768 120.511 6.83169C120.775 7.09569 120.907 7.43511 120.907 7.84997C120.907 8.25226 120.775 8.58226 120.511 8.83997C120.247 9.09769 119.913 9.22654 119.511 9.22654ZM127.628 20.8803C126.119 20.8803 124.897 20.3837 123.96 19.3905C123.023 18.3974 122.555 17.1905 122.555 15.77C122.555 14.3494 123.023 13.1394 123.96 12.14C124.897 11.1405 126.119 10.6408 127.628 10.6408C129.149 10.6408 130.378 11.1405 131.314 12.14C132.251 13.1394 132.719 14.3494 132.719 15.77C132.719 17.1905 132.251 18.3974 131.314 19.3905C130.378 20.3837 129.149 20.8803 127.628 20.8803ZM124.799 15.77C124.799 16.7003 125.066 17.4545 125.601 18.0328C126.135 18.6111 126.811 18.9003 127.628 18.9003C128.457 18.9003 129.139 18.6111 129.674 18.0328C130.208 17.4545 130.475 16.7003 130.475 15.77C130.475 14.8271 130.208 14.0665 129.674 13.4883C129.139 12.91 128.457 12.6208 127.628 12.6208C126.811 12.6208 126.135 12.91 125.601 13.4883C125.066 14.0665 124.799 14.8271 124.799 15.77Z"
      fill="#FFFFFF"
    />
  </svg>
);

const LogoSlots = () => (
  <svg
    width="102"
    height="32"
    viewBox="0 0 102 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#fff" d="M0 0h102v32H0z" />
    <path
      d="M3.206 23.354c1.223 2.43 2.277 3.262 4.053 3.262 1.076 0 1.88-.326 2.432-.97.48-.556.722-1.178.722-1.865 0-.622-.199-1.114-.59-1.46-.412-.348-1.267-.775-2.579-1.266l-2.078-.796c-2.8-1.056-4.2-2.748-4.2-5.09 0-1.7.633-3.074 1.9-4.145 1.29-1.092 2.846-1.656 4.666-1.656 2.734 0 4.812 1.288 6.257 3.891l-3.022 1.526c-.943-1.396-2.056-2.083-3.324-2.083-1.687 0-2.866.97-2.866 2.365 0 .622.176 1.092.545 1.395.376.326 1.223.73 2.601 1.244l1.902.73c3.242 1.223 4.62 2.792 4.62 5.2 0 1.823-.7 3.37-2.122 4.6C10.79 29.413 9.123 30 7.178 30c-3.39 0-5.8-1.786-7.178-5.351l3.206-1.295zM20.14 29.509h-3.93V5.23l3.93-1.757v26.035zM47.972 11.512v.33l.089 1.383V23.23c0 1.85.57 2.788 1.737 2.788.414 0 1.012-.107 1.78-.322v3.447c-.879.237-1.692.366-2.416.366-1.47 0-2.63-.488-3.532-1.448-.947-1.003-1.405-2.616-1.405-4.83V13.224l-.014-1.383.014-1.978v-4.43l3.843-1.469v5.899l-.096 1.648zM56.294 23.354c1.223 2.43 2.277 3.262 4.053 3.262 1.076 0 1.88-.326 2.432-.97.479-.556.722-1.178.722-1.865 0-.622-.199-1.114-.59-1.46-.412-.348-1.267-.775-2.579-1.266l-2.078-.796c-2.8-1.056-4.2-2.748-4.2-5.09 0-1.7.633-3.074 1.9-4.145 1.29-1.092 2.845-1.656 4.666-1.656 2.734 0 4.812 1.288 6.256 3.891l-3.021 1.526c-.944-1.396-2.056-2.083-3.324-2.083-1.688 0-2.867.97-2.867 2.365 0 .622.177 1.092.546 1.395.368.326 1.223.73 2.601 1.244l1.901.73c3.243 1.223 4.621 2.792 4.621 5.2 0 1.823-.7 3.37-2.122 4.6-1.334 1.178-3 1.764-4.945 1.764-3.39 0-5.8-1.786-7.178-5.351l3.206-1.295z"
      fill="#111"
    />
    <path
      d="M72.21 27.54A2.455 2.455 0 0169.733 30c-1.353 0-2.435-1.108-2.435-2.496 0-.661.257-1.215.74-1.711a2.399 2.399 0 011.716-.705 2.45 2.45 0 012.456 2.452z"
      fill="#00E8E8"
    />
    <path
      d="M4.912 10.347a2.455 2.455 0 01-2.477 2.46C1.082 12.807 0 11.7 0 10.311 0 9.65.256 9.096.74 8.6a2.399 2.399 0 011.716-.705 2.44 2.44 0 012.456 2.452z"
      fill="#F7CD00"
    />
    <path d="M79.088 9.86v19.649h-3.93V11.033l3.93-1.173z" fill="#6300FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M101.193 19.663c0-2.708-.868-5.032-2.619-6.986-1.987-2.216-4.413-3.309-7.297-3.309-2.705 0-5.008.833-6.86 2.534-2.238 2.042-3.364 4.619-3.364 7.695 0 2.773.868 5.162 2.618 7.116C85.637 28.907 88.127 30 91.134 30c2.604 0 4.843-.854 6.694-2.555 2.239-2.042 3.365-4.619 3.365-7.782zm-16.366.007c0-2.78 1.004-4.756 3.028-5.98a5.886 5.886 0 013.221-.897c1.665 0 3.071.514 4.24 1.57 1.407 1.274 2.11 3.012 2.11 5.27 0 2.085-.56 3.743-1.686 4.967-1.22 1.332-2.755 1.998-4.606 1.998-1.622 0-3.007-.514-4.176-1.571-1.428-1.274-2.131-3.055-2.131-5.357z"
      fill="#111"
    />
    <path
      d="M79.579 4.463c0 .669-.23 1.232-.706 1.717a2.345 2.345 0 01-1.74.732c-1.39 0-2.466-1.084-2.466-2.484 0-.669.251-1.232.726-1.717A2.354 2.354 0 0177.12 2a2.442 2.442 0 012.46 2.463z"
      fill="#FFA300"
    />
    <path d="M41.754 9.86h9.334v3.438h-9.334V9.86z" fill="#00F490" />
    <path
      d="M39.712 12.733c-2.042-2.238-4.626-3.365-7.695-3.365-2.773 0-5.162.876-7.116 2.62-2.194 1.958-3.287 4.455-3.287 7.461 0 2.598.861 4.836 2.555 6.695 2.042 2.238 4.626 3.365 7.782 3.365 2.708 0 5.032-.876 6.986-2.62 2.216-1.98 3.309-4.412 3.309-7.289 0-2.712-.84-5.008-2.534-6.867z"
      fill="#FC3586"
    />
    <mask id="a" maskUnits="userSpaceOnUse" x="21" y="9" width="22" height="21">
      <path
        d="M39.712 12.733c-2.042-2.238-4.626-3.365-7.695-3.365-2.773 0-5.162.876-7.116 2.62-2.194 1.958-3.287 4.455-3.287 7.461 0 2.598.861 4.836 2.555 6.695 2.042 2.238 4.626 3.365 7.782 3.365 2.708 0 5.032-.876 6.986-2.62 2.216-1.98 3.309-4.412 3.309-7.289 0-2.712-.84-5.008-2.534-6.867z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export const Logo = () => {
  const { setBrand } = useDocsTheme();
  const { brand } = useTheme();

  return (
    <LogoContainer>
      {brand === 'Sportsbet.io' && <LogoSportsbet height="100%" width="auto" />}
      {brand === 'Bitcasino.io' && <LogoBitcasino />}
      {brand === 'Slots.io' && <LogoSlots />}
      {brand === 'LuckySlots' && <p>LuckySlots</p>}
      {brand === 'Livecasino.io' && <p>Livecasino</p>}
      {brand === 'BombayClub' && <p>Bombay Club</p>}
      {brand === 'Hub88' && <p>Hub88</p>}
      {brand === 'Aposta10' && <p>Aposta10</p>}
      {brand === 'MissionsTool' && <p>MissionsTool</p>}
      {brand === 'Moneyball' && <LogoMoneyball />}

      <IconChevronDown aria-hidden="true" />

      <BrandSelect onChange={e => setBrand(e.target.value)}>
        <option value="sportsbet">Sportsbet.io</option>
        <option value="bitcasino">Bitcasino.io</option>
        <option value="slots">Slots.io</option>
        <option value="luckyslots">LuckySlots</option>
        <option value="livecasino">Livecasino</option>
        <option value="bombay">Bombay Club</option>
        <option value="hub88">Hub88</option>
        <option value="aposta10">Aposta10</option>
        <option value="missionsTool">MissionsTool</option>
        <option value="moneyball">Moneyball</option>
      </BrandSelect>
    </LogoContainer>
  );
};
