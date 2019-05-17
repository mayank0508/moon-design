import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from '@heathmont/sportsbet-tokens';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 157 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.412 4.91948C20.9516 4.91948 26.2525 10.2903 26.2525 16.9157C26.2525 23.541 20.9516 28.9118 14.412 28.9118C7.87282 28.9118 2.5719 23.541 2.5719 16.9157C2.5719 10.2903 7.87282 4.91948 14.412 4.91948ZM14.4664 2.13501C22.4563 2.13501 28.9333 8.71221 28.9333 16.8259C28.9333 24.9392 22.4563 31.5164 14.4664 31.5164C6.47658 31.5164 0 24.9392 0 16.8259C0 8.71221 6.47658 2.13501 14.4664 2.13501Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.50328 0C14.752 0 19.007 4.31912 19.007 9.64641C19.007 14.974 14.752 19.2927 9.50328 19.2927C4.25466 19.2927 0 14.974 0 9.64641C0 4.31912 4.25466 0 9.50328 0Z"
      fill={colors.brand}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M153.024 17.6882C152.421 17.1337 151.672 16.8628 150.79 16.8628C149.861 16.8628 149.075 17.22 148.436 17.9221C147.856 18.5626 147.566 19.4246 147.566 20.5086C147.566 21.7402 147.94 22.6888 148.677 23.366C149.281 23.9079 150.005 24.1792 150.839 24.1792C151.817 24.1792 152.626 23.8217 153.254 23.1197C153.834 22.4672 154.123 21.5925 154.123 20.4838C154.123 19.2891 153.761 18.3531 153.024 17.6882ZM154.691 24.9919C153.616 25.965 152.336 26.4576 150.851 26.4576C149.124 26.4576 147.699 25.8173 146.576 24.5487C145.573 23.4277 145.078 22.0853 145.078 20.5209C145.078 19.0062 145.537 17.7005 146.455 16.6164C147.614 15.2615 149.112 14.5843 150.935 14.5843C152.602 14.5843 154.003 15.2249 155.126 16.5057C156.116 17.6265 156.611 18.9565 156.611 20.5087C156.611 22.3192 155.971 23.8218 154.691 24.9919ZM143.162 26.1131H140.698V16.0387L143.162 14.9292V26.1131ZM137.908 25.9525C137.606 26.2605 137.232 26.4205 136.785 26.4205C136.338 26.4205 135.964 26.2605 135.662 25.9525C135.36 25.6446 135.203 25.2504 135.203 24.7947C135.203 24.3637 135.36 23.9939 135.674 23.686C135.976 23.3781 136.35 23.2304 136.785 23.2304C137.232 23.2304 137.606 23.3903 137.908 23.6986C138.21 24.0065 138.367 24.3881 138.367 24.8192C138.367 25.2626 138.21 25.6446 137.908 25.9525ZM132.037 23.9329C132.291 23.9329 132.678 23.8589 133.197 23.7112V26.0636C132.653 26.2238 132.158 26.3099 131.699 26.3099C130.842 26.3099 130.154 26.0143 129.634 25.4233C129.103 24.8197 128.837 23.8837 128.837 22.5903V17.1954H127.666V14.9293H128.837V12.4534L131.301 11.4559V14.9293H133.04V17.1954H131.301V22.5903C131.301 23.5388 131.518 23.9329 132.037 23.9329ZM122.806 17.8108C122.286 17.1335 121.574 16.8008 120.692 16.8008C119.195 16.8008 118.096 17.8108 117.746 19.5355H123.59C123.41 18.8334 123.156 18.2547 122.806 17.8108ZM126.03 21.4816H117.746C117.866 22.0853 118.084 22.5902 118.386 23.009C118.953 23.7851 119.762 24.1793 120.837 24.1793C121.984 24.1793 123.023 23.637 123.602 22.7382L123.82 22.381L125.945 23.28C124.714 25.3983 123.011 26.4575 120.825 26.4575C119.134 26.4575 117.758 25.8418 116.683 24.5978C115.704 23.4524 115.209 22.0975 115.209 20.5087C115.209 18.6735 115.837 17.1587 117.093 15.9885C118.108 15.0399 119.304 14.572 120.668 14.572C122.226 14.572 123.53 15.1631 124.568 16.3455C125.1 16.9492 125.499 17.7004 125.752 18.6242C125.945 19.3141 126.042 20.0284 126.042 20.7675C126.042 20.8907 126.042 21.1244 126.03 21.4816ZM110.269 17.7988C109.641 17.1708 108.88 16.8628 107.998 16.8628C107.056 16.8628 106.283 17.2078 105.668 17.8851C105.088 18.538 104.798 19.4125 104.798 20.5086C104.798 21.7526 105.172 22.7133 105.909 23.3906C106.489 23.9205 107.189 24.1792 108.022 24.1792C108.964 24.1792 109.749 23.8342 110.377 23.1323C110.969 22.4793 111.259 21.5801 111.259 20.4594C111.259 19.3384 110.933 18.4516 110.269 17.7988ZM111.826 24.9799C110.74 25.965 109.532 26.4576 108.192 26.4576C107.044 26.4576 105.921 26.0142 104.81 25.1397V26.1131H102.347V10.4096L104.81 9.30048V15.9022C105.933 15.0276 107.056 14.5843 108.192 14.5843C109.097 14.5843 109.979 14.8308 110.836 15.3356C111.742 15.8652 112.455 16.5921 112.974 17.491C113.493 18.4148 113.747 19.4126 113.747 20.5087C113.747 22.3192 113.107 23.8097 111.826 24.9799ZM96.3623 16.8137C95.5774 16.8137 95.022 17.2693 95.022 17.947C95.022 18.1687 95.0825 18.3656 95.191 18.5259C95.3118 18.6856 95.7707 18.9322 96.5799 19.2523L97.5942 19.6464C99.4298 20.3732 100.215 21.2848 100.215 22.7134C100.215 23.7973 99.8164 24.709 99.0072 25.4354C98.2584 26.1131 97.3287 26.4576 96.2176 26.4576C94.225 26.4576 92.9084 25.4109 92.0874 23.1938L94.1282 22.344C94.4662 23.0461 94.7923 23.5264 95.0945 23.7851C95.3964 24.056 95.7829 24.1915 96.2419 24.1915C96.761 24.1915 97.1593 24.0313 97.4129 23.7111C97.6426 23.4403 97.7513 23.1446 97.7513 22.8119C97.7513 22.5902 97.691 22.3933 97.5702 22.2207C97.4371 22.0361 96.9664 21.7775 96.1694 21.4695L95.0463 21.0262C93.4641 20.3977 92.6669 19.4003 92.6669 18.0206C92.6669 17.0228 93.0294 16.1979 93.7538 15.5572C94.4905 14.9045 95.3722 14.5843 96.3987 14.5843C97.9806 14.5843 99.2005 15.397 100.046 17.0228L98.1137 18.0206C97.5216 17.1216 97.0869 16.8137 96.3623 16.8137ZM89.2339 23.9329C89.4875 23.9329 89.8739 23.8589 90.3932 23.7112V26.0636C89.8498 26.2238 89.3549 26.3099 88.8958 26.3099C88.0383 26.3099 87.35 26.0143 86.8306 25.4233C86.2993 24.8197 86.0336 23.8837 86.0336 22.5903V17.1954H84.8623V14.9293H86.0336V12.4534L88.4973 11.4559V14.9293H90.2362V17.1954H88.4973V22.5903C88.4973 23.5388 88.7146 23.9329 89.2339 23.9329ZM81.8752 17.1583C80.885 17.1583 80.221 17.4905 79.8704 18.1556C79.5928 18.6852 79.4597 19.5353 79.4597 20.7299V26.1127H76.9963V14.9288H79.4597V15.8277C79.9308 15.4462 80.3173 15.1875 80.6313 15.0642C80.9335 14.941 81.3316 14.8795 81.8269 14.8795C82.0686 14.8795 82.3704 14.8918 82.7328 14.9288V17.1825C82.3342 17.1705 82.0446 17.1583 81.8752 17.1583ZM71.7409 17.6882C71.1372 17.1337 70.3884 16.8628 69.5068 16.8628C68.577 16.8628 67.7919 17.22 67.152 17.9221C66.5722 18.5626 66.2824 19.4246 66.2824 20.5086C66.2824 21.7402 66.6568 22.6888 67.3934 23.366C67.9971 23.9079 68.7217 24.1792 69.555 24.1792C70.5335 24.1792 71.3423 23.8217 71.9706 23.1197C72.5501 22.4672 72.8397 21.5925 72.8397 20.4838C72.8397 19.2891 72.4776 18.3531 71.7409 17.6882ZM73.4076 24.9919C72.3329 25.965 71.0525 26.4576 69.5673 26.4576C67.8404 26.4576 66.4155 25.8173 65.2922 24.5487C64.2897 23.4277 63.7948 22.0853 63.7948 20.5209C63.7948 19.0062 64.2535 17.7005 65.1714 16.6164C66.3307 15.2615 67.8283 14.5843 69.6517 14.5843C71.3181 14.5843 72.7193 15.2249 73.8424 16.5057C74.8327 17.6265 75.3278 18.9565 75.3278 20.5087C75.3278 22.3192 74.6876 23.8218 73.4076 24.9919ZM58.7332 17.6756C58.1291 17.1337 57.4166 16.8628 56.5837 16.8628C55.6535 16.8628 54.8806 17.2078 54.2649 17.8851C53.6729 18.538 53.3832 19.4246 53.3832 20.5456C53.3832 21.7774 53.7455 22.7255 54.4821 23.3906C55.0619 23.9205 55.7745 24.1792 56.6074 24.1792C57.1994 24.1792 57.7548 24.019 58.2741 23.711C59.3248 23.0582 59.8441 21.9989 59.8441 20.533C59.8441 19.2891 59.4698 18.3409 58.7332 17.6756ZM60.4116 24.9799C59.3247 25.965 58.117 26.4576 56.7766 26.4576C55.6414 26.4576 54.5183 26.0142 53.3952 25.1396V30.8911L50.9318 32.0004V14.9293H53.3952V15.9022C54.5063 15.0276 55.6294 14.5843 56.7766 14.5843C57.6825 14.5843 58.5639 14.8307 59.4214 15.3356C60.3273 15.8652 61.0398 16.592 61.5468 17.5032C62.0662 18.4269 62.3319 19.4369 62.3319 20.5331C62.3319 22.3315 61.6919 23.8096 60.4116 24.9799ZM45.282 12.0714C44.7868 11.6156 44.1832 11.3938 43.4707 11.3938C42.6615 11.3938 42.0215 11.6648 41.5625 12.2069C41.1761 12.6625 40.983 13.1799 40.983 13.7342C40.983 14.6333 41.6834 15.3602 43.072 15.9141L44.642 16.5176C46.3084 17.1707 47.4315 17.9711 48.0115 18.9196C48.422 19.5725 48.6272 20.3237 48.6272 21.1735C48.6272 22.7131 48.0599 24.0065 46.9246 25.041C45.8858 25.9895 44.6301 26.4573 43.1566 26.4573C41.9489 26.4573 40.8375 26.1899 39.9563 25.4598C39.3518 24.9544 38.6145 24.332 37.9048 22.4832L39.8756 21.0571C40.0564 21.784 40.7533 22.6268 41.043 22.9966C41.5866 23.6739 42.3112 24.0065 43.193 24.0065C44.0622 24.0065 44.7748 23.6861 45.3304 23.058C45.8015 22.5284 46.0307 21.9004 46.0307 21.1983C46.0307 20.7423 45.9099 20.3483 45.6807 20.0403C45.3546 19.5969 44.6179 19.1535 43.4948 18.7101L41.9973 18.1188C39.6181 17.1827 38.4346 15.7172 38.4346 13.7216C38.4346 12.3301 38.9299 11.1722 39.932 10.2731C40.9104 9.3987 42.1183 8.95532 43.5432 8.95532C45.1007 8.95532 46.381 9.52187 47.3953 10.6425C47.6976 10.9752 48.0235 11.4309 48.3738 12.0096L46.2964 13.3524C45.922 12.7735 45.5838 12.3424 45.282 12.0714Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M141.93 12.773C141.483 12.773 141.109 12.6128 140.807 12.2926C140.493 11.9848 140.336 11.6028 140.336 11.1472C140.336 10.716 140.493 10.3342 140.807 10.0262C141.121 9.71829 141.495 9.55798 141.93 9.55798C142.377 9.55798 142.751 9.71829 143.065 10.0262C143.367 10.3342 143.524 10.716 143.524 11.1594C143.524 11.6151 143.367 11.997 143.065 12.3048C142.751 12.6128 142.377 12.773 141.93 12.773Z"
      fill={colors.brand}
    />
  </svg>
);

export const IconLogoCaption = styled(Svg)(() => [
  {
    verticalAlign: 'middle',
    height: '2rem',
    fontSize: '10rem',
  },
]);