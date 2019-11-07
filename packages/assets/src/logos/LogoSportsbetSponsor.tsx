import * as React from 'react';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="auto"
    viewBox="0 0 414 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Sportsbet.io</title>
    <path
      d="M393.324 47.4876C382.742 42.8823 375.642 32.5202 375.642 20.9519V3.32543H410.978V20.9519C410.978 32.5202 403.878 42.8823 393.324 47.4876ZM412.842 20.9519V1.48877H373.806V20.9519C373.806 33.6989 381.673 44.5544 393.324 49.4888C404.947 44.5819 412.842 33.7263 412.842 20.9519Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M393.324 48.4196C398.834 46.0895 403.549 42.3065 406.866 37.2899C410.045 32.4927 411.882 26.7908 411.882 20.9244V2.39331H393.324H374.765V20.9244C374.765 26.7908 376.602 32.4927 379.782 37.2899C383.099 42.3339 387.814 46.0895 393.324 48.4196Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M410.155 24.7349H376.465C376.273 23.4739 376.19 22.1855 376.19 20.8971V19.1701H410.429V20.8971C410.429 22.1855 410.347 23.4739 410.155 24.7349ZM380.577 35.892H406.071C407.167 34.1375 408.072 32.2735 408.785 30.2997H377.863C378.575 32.246 379.48 34.1375 380.577 35.892ZM393.324 46.912C390.281 45.5961 387.485 43.7321 385.1 41.4842H393.324H401.547C399.163 43.7321 396.366 45.5961 393.324 46.912ZM393.324 13.5779H410.429V7.98563H393.324V13.5779ZM376.19 17.7994H391.98V3.76404H376.19V17.7994Z"
      fill="#C3281E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M381.289 15.1129C381.289 15.9901 381.07 16.4013 380.714 16.6754C381.18 17.1689 382.413 17.3882 383.4 17.0866C382.742 16.6754 382.55 16.0449 382.55 15.25C382.112 15.25 381.701 15.1951 381.289 15.1129ZM385.785 15.2774V14.4824C385.429 13.9616 385.018 13.3585 384.552 12.9747V15.1677C384.552 15.9627 384.332 16.4561 383.976 16.7029C384.442 17.1963 385.675 17.4156 386.662 17.114C386.004 16.6754 385.785 15.9353 385.785 15.2774ZM389.65 8.99983C391.048 8.3145 390.774 6.56008 390.61 6.12147C390.39 6.53266 389.952 6.77938 389.184 6.77938H388.28C388.472 7.08092 388.663 7.40988 388.828 7.76624C389.541 7.79366 389.76 8.56122 389.65 8.99983ZM387.348 12.1797C388.115 12.1797 388.417 12.7006 388.362 13.4133C389.705 12.7006 389.486 11.138 389.294 10.6994C389.075 10.9736 388.773 11.2203 388.033 11.2203H385.813V7.79366H386.498C386.416 7.40988 386.251 7.08092 386.032 6.80679H385.73C385.155 6.80679 384.634 6.72455 384.058 6.50525L384.552 7.79366V11.1929C385.155 11.3847 385.566 11.7411 385.977 12.1797H387.348ZM386.059 10.9187H387.074C388.197 9.76739 388.006 8.34192 388.773 8.34192C387.704 5.71028 386.224 4.42187 382.934 4.50411C381.947 4.53152 381.454 4.53152 380.659 4.22998L381.262 5.79252C381.838 5.57321 382.55 5.43615 383.263 5.43615C385.401 5.43615 386.882 6.6149 386.882 8.75311C386.854 9.5755 386.607 10.3431 386.059 10.9187ZM379.151 10.3979C379.151 12.262 380.357 13.7697 382.221 14.0164C382.907 14.0986 383.647 14.0164 384.277 13.7148V14.6743C383.592 14.8936 382.934 15.0032 382.276 14.9484C379.562 14.8388 377.753 12.728 377.177 10.1786C377.698 10.1786 377.89 9.46584 378.329 8.64346C378.987 7.4647 380.083 6.45043 381.372 6.01182C381.92 5.81993 382.578 5.68286 383.263 5.68286C383.428 5.68286 383.592 5.68286 383.757 5.71028C383.976 6.28595 383.948 7.60177 383.674 8.20485C383.373 7.40988 382.715 7.05351 382.002 7.05351C380.248 7.08092 379.151 8.69828 379.151 10.3979ZM382.523 7.43729V11.1106C383.428 11.1106 384.497 11.2477 385.292 11.9056C386.443 12.865 387.074 14.0986 387.731 14.8114C388.444 15.6063 389.349 15.5241 390.116 14.9758C390.007 16.1272 388.773 17.0044 388.197 17.1415C387.238 16.4561 386.196 14.4824 385.401 13.4681C384.661 12.5087 383.976 12.1249 382.523 12.1249V13.7697C382.084 13.7423 381.673 13.66 381.289 13.4955V7.43729C381.701 7.32764 382.112 7.30023 382.523 7.43729Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M336.898 48L357.806 26.6469L350.929 10.535H354.809V0H318.987V10.535H322.877L316 26.6469L336.898 48Z"
      fill="#ED2127"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M320.947 2.00214C320.947 4.0148 320.947 6.52015 320.947 8.53282C321.912 8.53282 351.884 8.53282 352.849 8.53282C352.849 6.52015 352.849 4.0148 352.849 2.00214C349.554 2.00214 324.252 2.00214 320.947 2.00214Z"
      fill="#FBEE23"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M336.898 10.5351H325.012C323.185 14.8015 319.028 24.5504 318.33 26.2066C319.931 27.8419 334.599 42.8321 336.898 45.1802V10.5351V10.5351Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M348.784 10.5351H336.898V45.1698C339.197 42.8216 353.865 27.8419 355.466 26.1962C354.768 24.5504 350.611 14.8015 348.784 10.5351Z"
      fill="#FBEE23"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M325.495 4.41317L326.193 7.70472H327.096L328.174 3.06091H327.342L326.654 6.63549L325.956 3.06091H325.094L324.386 6.63549L323.688 3.06091H322.846L323.914 7.70472H324.858L325.495 4.41317Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M329.713 6.0589L330.216 4.47602L330.719 6.0589H329.713ZM331.242 7.70467H332.115L330.657 3.64789H329.795L328.338 7.70467H329.21L329.508 6.76123H330.955L331.242 7.70467Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M332.125 3.64789V4.35023H333.213V7.70467H334.045V4.35023H335.112L335.276 3.64789H332.125Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M335.985 3.64789V7.70467H336.796V5.94359H337.996V5.24125H336.796V4.35023H338.191L338.356 3.64789H335.985Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M340.716 7.1701C339.926 7.1701 339.731 6.50969 339.731 5.70253C339.731 4.89537 339.926 4.23496 340.716 4.23496C341.507 4.23496 341.702 4.89537 341.702 5.70253C341.702 6.50969 341.507 7.1701 340.716 7.1701ZM340.716 3.59552C339.362 3.59552 338.797 4.53896 338.797 5.69205C338.797 6.85562 339.362 7.78858 340.716 7.78858C342.071 7.78858 342.636 6.84514 342.636 5.69205C342.636 4.53896 342.071 3.59552 340.716 3.59552Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M345.038 5.40897H344.412V4.35023H345.038C345.263 4.35023 345.602 4.38167 345.602 4.84291C345.602 5.30415 345.263 5.40897 345.038 5.40897ZM345.551 5.98552V5.94359C345.818 5.94359 346.485 5.68152 346.485 4.82194C346.485 3.95188 345.838 3.64789 345.099 3.64789H343.59V7.70467H344.412V6.01697H344.483C344.761 6.01697 345.736 7.70467 345.736 7.70467H346.772L345.551 5.98552Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M349.051 7.00234H348.425V4.35023H349.051C349.595 4.35023 349.903 4.88484 349.903 5.68152C349.913 6.48869 349.595 7.00234 349.051 7.00234ZM349.031 3.64789H347.614V7.70467H349.031C350.293 7.70467 350.827 6.83461 350.827 5.68152C350.827 4.52843 350.293 3.64789 349.031 3.64789Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M330.175 13.7323C330.175 13.8581 330.185 13.9315 330.195 14.0048C330.206 14.0782 330.216 14.1621 330.216 14.3508C330.216 14.9692 330.072 15.2627 329.98 15.2627C329.959 15.2627 329.949 15.2627 329.939 15.2627C329.929 15.2523 329.908 15.2208 329.888 15.1999C329.723 14.9588 329.498 14.7072 328.892 14.7072C328.327 14.7072 327.958 15.116 327.958 15.7135C327.958 16.6045 328.173 17.3173 328.358 17.8939C328.461 18.2293 328.553 18.5228 328.553 18.7115C328.553 18.8688 328.481 19.0155 328.44 19.047C328.225 19.047 328.143 18.9736 327.989 18.8164C327.783 18.6067 327.496 18.3132 326.849 18.3132C326.572 18.3132 325.936 18.4075 325.936 19.2986C325.936 19.6864 326.069 20.0219 326.192 20.3363C326.326 20.6718 326.47 21.0282 326.47 21.4894C326.47 21.5314 326.47 21.8563 326.367 21.8563C325.956 21.8563 325.802 21.5943 325.556 21.133C325.351 20.7347 325.094 20.2315 324.489 20.2315C323.503 20.2315 323.503 21.7305 323.503 22.2966C323.503 25.4833 326.459 26.6364 328.451 26.6364C328.83 26.6364 329.046 26.605 329.261 26.5735C329.477 26.5421 329.693 26.5106 330.103 26.5106C331.314 26.5106 332.228 26.7517 332.772 27.2234C332.464 27.1081 332.105 27.0243 331.674 27.0243C330.637 27.0243 330.247 27.2759 329.888 27.5798C329.754 27.6952 329.651 27.779 329.467 27.8314L327.989 28.2612L329.487 28.6071C330.113 28.7539 330.462 29.2571 330.822 29.7812C331.212 30.3473 331.653 30.9867 332.464 30.9867C332.536 30.9867 332.608 30.9762 332.679 30.9657C332.608 31.3536 332.556 31.8568 332.556 32.4333C332.556 33.2614 332.751 33.5864 333.018 33.9218L333.141 34.0896C333.254 34.2678 333.377 34.4355 333.501 34.5927C333.932 35.1693 334.332 35.7144 334.332 36.4691C334.332 36.8675 334.353 37.1924 334.373 37.4964C334.394 37.8109 334.404 38.1044 334.404 38.4713C334.404 39.572 335.153 39.9179 335.553 40.1066C335.595 40.1276 335.646 40.1485 335.677 40.1695C335.759 40.5469 336.118 40.6727 336.344 40.746L336.426 40.7775L336.508 40.8089C336.621 40.8613 336.785 40.9347 337.073 40.9347C337.822 40.9347 338.15 40.3687 338.212 39.8969C338.222 39.8865 338.243 39.8865 338.253 39.876C338.581 39.7292 339.269 39.4147 339.269 38.4294C339.269 37.9157 339.208 37.5279 339.146 37.1819C339.105 36.9304 339.074 36.7102 339.074 36.4901C339.074 35.8611 339.32 35.5467 339.669 35.1169C340.131 34.5298 340.716 33.7961 340.716 32.1503C340.716 31.5632 340.686 31.123 340.645 30.7771C340.737 30.798 340.84 30.819 340.932 30.819C341.999 30.819 342.369 30.1586 342.636 29.624C343.139 28.6071 344.104 28.67 344.104 28.67C344.104 28.67 343.334 27.3178 341.507 27.3178C340.952 27.3178 340.521 27.4331 340.193 27.5798C340.347 27.1396 340.593 26.9404 340.809 26.8251C341.312 26.5525 342.061 26.5316 342.728 26.5316C343.139 26.5316 343.426 26.563 343.703 26.5945C343.97 26.6259 344.237 26.6469 344.586 26.6469C347.286 26.6469 347.994 25.7768 348.743 24.8544C349.379 24.0682 349.8 23.3134 349.8 22.1289C349.8 21.3427 349.574 20.4936 348.948 20.4936C348.404 20.4936 348.168 21.0177 347.984 21.4265C347.758 21.9192 347.624 22.1289 347.398 22.1289C347.101 22.1289 346.854 21.8249 346.854 21.4475C346.854 21.1016 347.08 20.6613 347.296 20.242C347.542 19.7598 347.799 19.2566 347.799 18.7639C347.799 18.4809 347.686 18.2398 347.481 18.0616C347.306 17.9149 347.091 17.8415 346.854 17.8415C346.372 17.8415 345.992 18.2503 345.623 18.6382C345.387 18.8897 345.068 19.2252 344.873 19.2461C344.832 19.2147 344.771 19.0679 344.771 18.9631C344.771 18.6172 344.925 18.114 345.068 17.6213C345.222 17.0972 345.376 16.594 345.376 16.1957C345.376 15.3361 344.884 14.9483 344.391 14.9483C343.95 14.9483 343.662 15.1579 343.426 15.3361C343.252 15.4619 343.139 15.5353 343.005 15.5458C343.005 15.5353 342.995 15.5353 342.995 15.5248C342.995 15.5038 342.995 15.116 342.995 15.116C342.995 14.9902 342.995 14.8644 342.995 14.7491C342.995 13.8371 342.954 13.2186 342.615 12.8622C342.451 12.684 342.225 12.6002 341.958 12.6002C340.737 12.6002 340.183 14.2564 340.183 15.8917C340.183 16.6465 340.213 17.3173 340.244 17.9673C340.275 18.5857 340.296 19.1728 340.296 19.8017C340.296 21.3217 339.988 22.5691 339.731 23.2191C339.649 22.4958 339.515 21.4056 338.694 21.4056C338.007 21.4056 337.853 22.2966 337.668 23.3344C337.504 24.2673 337.278 25.5357 336.703 25.5357C336.231 25.5357 336.087 24.6552 335.964 23.4916C335.831 22.3595 335.687 21.0701 334.702 21.0701C333.624 21.0701 333.562 22.4958 333.511 23.4287C333.501 23.544 333.501 23.6908 333.49 23.8166C333.223 23.2924 332.916 22.3909 332.916 21.5523C332.916 20.5041 332.977 19.6759 333.049 18.8793C333.111 18.114 333.172 17.3278 333.172 16.3634C333.172 14.2459 332.659 13.6694 332.197 13.1662L332.166 13.1348C331.858 12.7993 331.571 12.4744 331.119 12.4744C330.514 12.4848 330.175 13.1138 330.175 13.7323Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M339.782 31.364L339.71 31.4793C339.71 31.4793 339.341 31.3536 339.002 31.3536C338.386 31.3536 338.161 31.7833 338.161 31.7833C338.161 31.7833 338.366 31.6576 338.756 31.6576C339.279 31.6576 339.669 31.9511 339.669 32.0559C339.669 32.1712 339.505 32.2236 339.372 32.2236C339.372 32.4857 339.023 32.8421 337.986 32.8421C337.986 33.3662 338.304 33.7122 338.304 33.8694C338.037 33.8694 338.007 34.1315 338.007 34.5927C338.007 34.5927 337.637 33.1146 337.637 32.5276C337.637 31.6471 337.986 30.9867 338.715 30.9867C339.249 30.9867 339.782 31.364 339.782 31.364ZM342.01 28.4079C342.174 28.4079 342.266 28.4394 342.266 28.4394C341.301 28.6176 341.312 29.8126 340.532 29.8126C340.367 29.8126 340.254 29.7392 340.254 29.7392C340.367 29.5191 340.727 29.4667 340.727 29.1732C340.47 29.1732 340.295 29.1941 340.049 29.2465C340.039 29.1522 340.809 28.4079 342.01 28.4079ZM335.523 34.6556V34.0161C335.523 33.8379 335.451 33.7646 335.297 33.7646L335.697 32.8211V32.7268C334.979 32.7268 334.363 32.58 334.363 32.0559H334.157C334.116 32.0559 334.024 32.0035 334.024 31.9196C334.024 31.8567 334.26 31.5737 334.835 31.5737C335.266 31.5737 335.523 31.7624 335.523 31.7624C335.523 31.7624 335.276 31.1754 334.619 31.1754C334.229 31.1754 334.127 31.2278 334.127 31.2278C334.127 31.2278 334.363 30.9238 334.681 30.9238C335.677 30.9238 335.933 31.5632 335.933 32.6849C335.933 33.8799 335.523 34.6556 335.523 34.6556ZM332.762 29.3619C332.762 29.4667 333.08 29.5401 333.275 29.5401C333.275 29.6554 333.049 29.8336 332.833 29.8336C332.023 29.8336 332.413 28.5442 330.791 28.2297C330.791 28.2297 330.873 28.1878 331.088 28.1878C332.372 28.1878 332.741 29.2046 333.439 29.2046C333.234 29.2256 332.762 29.2361 332.762 29.3619ZM349 20.8919C348.353 20.8919 348.394 22.5377 347.439 22.5377C346.916 22.5377 346.495 22.0555 346.495 21.4579C346.495 20.5879 347.439 19.5816 347.439 18.7744C347.439 18.4285 347.152 18.2503 346.895 18.2503C346.259 18.2503 345.612 19.6549 344.904 19.6549C344.576 19.6549 344.422 19.2147 344.422 18.9736C344.422 18.1874 345.017 16.9085 345.017 16.2061C345.017 15.6401 344.771 15.3571 344.432 15.3571C343.806 15.3571 343.601 15.9546 343.005 15.9546C342.779 15.9546 342.646 15.703 342.646 15.5457C342.646 13.9733 342.728 13.0089 341.999 13.0089C341.065 13.0089 340.614 14.4555 340.614 15.9021C340.614 17.3697 340.727 18.5018 340.727 19.8122C340.727 21.8563 340.244 23.565 339.823 23.9319C339.823 23.9319 339.721 25.1269 340.183 25.1269C341.106 25.1269 342.625 22.4748 344.494 22.4748C345.335 22.4748 345.397 23.0094 345.397 23.219C345.397 23.9109 344.432 24.2673 344.432 24.7076C344.432 24.9277 344.771 24.9487 345.181 24.9487C346.413 24.9487 347.316 24.173 347.316 24.173C347.316 24.173 346.434 25.2422 345.048 25.2422C344.442 25.2422 343.97 25.043 343.97 24.6866C343.97 24.1101 345.109 23.6488 345.109 23.0723C345.109 22.8941 344.914 22.653 344.483 22.653C342.954 22.653 341.342 25.6091 340.09 25.6091C339.834 25.6091 339.474 25.4309 339.474 24.76C339.474 24.1834 339.433 21.8248 338.725 21.8248C337.883 21.8248 338.284 25.955 336.734 25.955C335.092 25.955 336.077 21.4999 334.732 21.4999C333.911 21.4999 334.045 22.7054 333.911 23.7956C333.809 24.6866 333.552 25.4938 333.018 25.4938C332.31 25.4938 331.817 25.1583 331.212 24.7809C330.832 24.5398 330.421 24.2987 330.083 24.0472C329.539 23.6279 329.231 23.2085 328.697 23.2085C328.41 23.2085 328.091 23.3658 328.091 23.6698C328.091 24.2568 328.697 24.4874 328.697 24.9906C328.697 25.2736 328.286 25.5042 327.814 25.5042C326.387 25.5042 325.536 24.5503 325.536 24.1625C325.536 24.1625 326.244 25.1898 327.886 25.1898C328.235 25.1898 328.368 25.1059 328.368 24.9277C328.368 24.5923 327.876 24.2987 327.876 23.6593C327.876 23.2505 328.184 22.9255 328.635 22.9255C329.2 22.9255 329.59 23.3553 330.175 23.7851C331.017 24.4141 332.115 25.1269 332.957 25.1269C333.285 25.1269 333.501 24.9801 333.501 24.6342C333.501 24.3092 332.546 23.4077 332.546 21.5837C332.546 19.4872 332.803 18.3236 332.803 16.3948C332.803 14.3822 332.33 13.9104 331.899 13.4387C331.581 13.0823 331.407 12.9041 331.14 12.9041C330.698 12.9041 330.544 13.4073 330.544 13.7427C330.544 13.9524 330.596 13.9629 330.596 14.3612C330.596 15.074 330.432 15.6715 329.97 15.6715C329.426 15.6715 329.713 15.116 328.892 15.116C328.502 15.116 328.348 15.399 328.348 15.7239C328.348 17.1077 328.933 18.093 328.933 18.722C328.933 19.0365 328.758 19.4662 328.44 19.4662C327.629 19.4662 327.773 18.7325 326.839 18.7325C326.439 18.7325 326.316 18.9631 326.316 19.3195C326.316 20.0009 326.849 20.525 326.849 21.5208C326.849 21.9611 326.706 22.2861 326.346 22.2861C325.135 22.2861 325.279 20.6613 324.478 20.6613C324.068 20.6613 323.893 21.2064 323.893 22.3175C323.893 25.2841 326.736 26.259 328.451 26.259C329.179 26.259 329.261 26.1332 330.103 26.1332C334.075 26.1332 333.757 28.6176 333.757 28.6176C333.757 28.6176 333.254 27.4435 331.674 27.4435C330.144 27.4435 330.308 28.0201 329.569 28.2402C331.099 28.5861 331.232 30.6093 332.464 30.6093C333.018 30.6093 333.285 30.1795 333.285 30.1795C333.285 30.1795 332.936 31.0915 332.936 32.4542C332.936 33.3872 333.203 33.513 333.449 33.8904C333.973 34.6766 334.712 35.3789 334.712 36.4901C334.886 36.4901 335.02 35.6619 335.122 35.6619C335.184 35.6619 335.245 35.7877 335.245 35.9764C335.245 36.4062 334.794 37.1505 334.794 38.5027C334.794 39.3099 335.287 39.5719 335.656 39.7397C335.748 39.7397 336.262 38.6285 336.262 38.6285C335.954 39.4986 336.046 39.9808 336.046 40.0437C336.046 40.2743 336.262 40.3162 336.549 40.421C336.703 40.4735 336.795 40.5573 337.073 40.5573C337.719 40.5573 337.842 39.9598 337.842 39.7292C337.842 39.4986 337.606 39.0478 337.606 38.7858C337.606 38.7858 337.596 38.6285 337.637 38.6285C337.719 38.6285 338.058 39.551 338.058 39.551C338.366 39.4147 338.879 39.2155 338.879 38.4608C338.879 37.5802 338.356 36.3957 338.356 35.8506C338.356 35.7248 338.397 35.641 338.438 35.641C338.54 35.641 338.705 36.1232 338.705 36.1232C338.93 34.7814 340.306 34.6556 340.306 32.1607C340.306 30.5883 340.07 30.0747 340.07 30.0747C340.07 30.0747 340.48 30.4311 340.911 30.4311C342.4 30.4311 342.051 28.9111 343.211 28.4079C343.211 28.2612 342.584 27.7161 341.486 27.7161C340.1 27.7161 339.659 28.4813 339.659 28.4813C339.659 26.2695 341.178 26.1332 342.708 26.1332C343.529 26.1332 343.878 26.2485 344.565 26.2485C347.08 26.2485 347.696 25.4833 348.415 24.5923C349.051 23.8061 349.379 23.1247 349.379 22.1288C349.461 21.5837 349.338 20.8919 349 20.8919Z"
      fill="#ED2127"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M338.13 32.3809L338.068 32.5067C338.068 32.5067 338.191 32.5906 338.448 32.5906C338.971 32.5906 339.197 32.1608 339.146 32.1084C339.094 32.056 338.869 32.4334 338.468 32.4334C338.232 32.4438 338.13 32.3809 338.13 32.3809Z"
      fill="#ED2127"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M338.694 32.2341C338.694 32.276 338.643 32.3075 338.581 32.3075C338.52 32.3075 338.468 32.276 338.468 32.2341C338.468 32.1922 338.52 32.1607 338.581 32.1607C338.643 32.1607 338.694 32.2026 338.694 32.2341Z"
      fill="#ED2127"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M334.722 32.0455C334.773 32.0874 334.886 32.3704 335.163 32.3704C335.369 32.3704 335.399 32.2866 335.461 32.2551C335.523 32.2132 335.594 32.2866 335.553 32.3494C335.512 32.4123 335.441 32.4857 335.174 32.4857C334.835 32.4857 334.63 32.2027 334.609 32.1293C334.568 32.0035 334.609 31.9616 334.722 32.0455Z"
      fill="#ED2127"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M335.215 32.1292C335.215 32.1711 335.174 32.1921 335.122 32.1921C335.071 32.1921 335.03 32.1606 335.03 32.1292C335.03 32.0873 335.071 32.0663 335.122 32.0663C335.174 32.0663 335.215 32.0873 335.215 32.1292Z"
      fill="#ED2127"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.9996 46.5778C36.8617 46.5778 47.2885 36.151 47.2885 23.2889C47.2885 10.4268 36.8617 0 23.9996 0C11.1375 0 0.710693 10.4268 0.710693 23.2889C0.710693 36.151 11.1375 46.5778 23.9996 46.5778ZM23.9999 41.806C34.2266 41.806 42.517 33.5156 42.517 23.2889C42.517 13.0622 34.2266 4.77175 23.9999 4.77175C13.7731 4.77175 5.48271 13.0622 5.48271 23.2889C5.48271 33.5156 13.7731 41.806 23.9999 41.806Z"
      fill="white"
    />
    <path
      d="M11.2593 22.519C17.4776 22.519 22.5185 17.478 22.5185 11.2597C22.5185 5.04137 17.4776 0.000427246 11.2593 0.000427246C5.04094 0.000427246 0 5.04137 0 11.2597C0 17.478 5.04094 22.519 11.2593 22.519Z"
      fill="#0CD664"
    />
    <path
      d="M64.4744 17.1852C64.4744 18.3111 65.067 19.2593 66.193 19.9704C67.3189 20.6815 69.1559 21.2741 71.6448 21.8074C74.9041 22.4593 77.3337 23.5852 78.9337 25.0074C80.5337 26.4889 81.3041 28.4444 81.3041 30.8741C81.3041 33.363 80.2967 35.5555 78.2819 37.2741C76.267 39.0518 73.6004 39.9407 70.2818 39.9407C66.7856 39.9407 63.9411 39.0518 61.867 37.3333C59.793 35.6148 58.43 33.3037 57.8374 30.4592L62.7559 27.9704C63.6448 32.6518 66.1337 35.0222 70.2226 35.0222C71.8818 35.0222 73.2448 34.6667 74.193 33.8963C75.2004 33.1852 75.6744 32.1778 75.6744 30.9926C75.6744 29.6889 75.0818 28.6815 73.8967 27.9704C72.7115 27.2593 70.8744 26.6074 68.3263 26.1333C65.4818 25.5407 63.23 24.5333 61.5707 23.0518C59.9115 21.5704 59.0818 19.6148 59.0818 17.2444C59.0818 14.8148 60.03 12.8 61.9856 11.3185C63.8818 9.83703 66.43 9.12592 69.5115 9.12592C75.1411 9.12592 78.8744 11.6741 80.7707 16.7111L76.3855 19.2592C75.2004 15.763 72.8893 13.9852 69.393 13.9852C67.9707 13.9852 66.7855 14.2222 65.8374 14.7555C64.9485 15.3481 64.4744 16.1185 64.4744 17.1852ZM83.6152 48V18.3704H88.9485V21.3926C89.6596 20.3259 90.7263 19.437 91.9707 18.7852C93.2744 18.1333 94.6967 17.7778 96.1781 17.7778C98.9041 17.7778 101.215 18.7852 103.052 20.8C104.889 22.8148 105.837 25.4815 105.837 28.8593C105.837 32.1778 104.889 34.8444 102.934 36.8593C100.978 38.9333 98.6078 39.9407 95.7633 39.9407C92.9189 39.9407 90.667 38.8741 88.9485 36.7407V48H83.6152ZM98.7855 24.5333C97.6596 23.3481 96.2374 22.7555 94.5781 22.7555C92.8596 22.7555 91.4967 23.3481 90.3707 24.5333C89.2448 25.7185 88.6522 27.1407 88.6522 28.8593C88.6522 30.5778 89.2448 32 90.3707 33.1852C91.4967 34.3704 92.9189 34.963 94.5781 34.963C96.2967 34.963 97.6596 34.3704 98.7855 33.1852C99.9115 32 100.504 30.5778 100.504 28.8593C100.445 27.1407 99.9115 25.7185 98.7855 24.5333ZM126.697 20.7407C129.008 22.6963 130.134 25.4222 130.134 28.8593C130.134 32.2963 129.008 35.0222 126.756 36.9778C124.504 38.9333 121.778 39.9407 118.697 39.9407C115.615 39.9407 112.889 38.9333 110.637 36.9778C108.386 35.0222 107.26 32.2963 107.26 28.8593C107.26 25.4222 108.386 22.6963 110.637 20.7407C112.889 18.7852 115.615 17.7778 118.697 17.7778C121.778 17.7778 124.445 18.7852 126.697 20.7407ZM114.43 33.3037C115.615 34.4296 117.037 34.963 118.697 34.963C120.356 34.963 121.778 34.4296 122.963 33.3037C124.149 32.1778 124.741 30.6963 124.741 28.8593C124.741 27.0222 124.149 25.5407 122.963 24.4148C121.778 23.2889 120.356 22.7555 118.697 22.7555C117.037 22.7555 115.615 23.2889 114.43 24.4148C113.245 25.5407 112.652 27.0222 112.652 28.8593C112.652 30.6963 113.245 32.1778 114.43 33.3037ZM145.66 18.0741V22.9926C145.126 22.6963 143.704 22.8148 143.111 22.8148C141.571 22.8148 140.326 23.4074 139.437 24.5926C138.549 25.7778 138.074 27.2593 138.074 29.037V39.4074H132.741V18.3704H138.074V21.6889C139.378 19.0815 141.334 17.7778 143.941 17.7778C144.474 17.7778 145.067 17.8963 145.66 18.0741ZM148.267 18.3704V12.6815H153.6V18.3704H158.163V22.6963H153.6V32.237C153.6 34.1926 154.489 35.2 156.267 35.2C156.86 35.2 157.452 35.1407 158.045 34.963L158.578 39.3481C157.511 39.763 156.326 39.9407 155.023 39.9407C150.519 39.9407 148.326 37.6889 148.326 33.2444V22.6963L148.267 18.3704ZM165.452 23.5259C165.452 24.8296 167.111 25.837 170.43 26.4889C172.86 27.0222 174.637 27.7926 175.763 28.8C176.889 29.8074 177.423 31.2296 177.423 32.9481C177.423 34.963 176.652 36.6222 175.171 37.9852C173.689 39.2889 171.674 39.9407 169.126 39.9407C166.697 39.9407 164.682 39.3481 163.082 38.163C161.482 36.9778 160.297 35.4963 159.526 33.6593L163.793 30.9333C164.267 32.2963 164.978 33.4222 165.867 34.2518C166.756 35.0815 167.882 35.4963 169.186 35.4963C170.074 35.4963 170.845 35.3185 171.497 34.9037C172.149 34.4889 172.504 33.8963 172.504 33.1852C172.504 32.5333 172.148 31.9407 171.437 31.5852C170.726 31.1704 169.6 30.8148 168 30.5185C163.141 29.5704 160.711 27.3778 160.711 23.9407C160.711 22.0444 161.482 20.563 163.023 19.4963C164.563 18.4296 166.4 17.8963 168.593 17.8963C170.845 17.8963 172.623 18.3111 173.926 19.1407C175.23 19.9704 176.356 21.3333 177.245 23.1704L173.393 25.4815C172.445 23.0518 170.845 21.8074 168.652 21.8074C166.519 21.6889 165.452 22.2815 165.452 23.5259ZM179.319 39.3481V9.71851H184.652V20.9185C186.311 18.7852 188.623 17.7185 191.526 17.7185C194.43 17.7185 196.8 18.7259 198.697 20.6815C200.593 22.6963 201.541 25.363 201.541 28.8C201.541 32.1778 200.593 34.9037 198.637 36.8593C196.682 38.8741 194.311 39.8815 191.467 39.8815C188.504 39.8815 186.193 38.8148 184.652 36.6815V39.2889H179.319V39.3481ZM186.015 33.3037C187.141 34.4296 188.563 35.0222 190.282 35.0222C192 35.0222 193.423 34.4296 194.548 33.3037C195.674 32.1778 196.208 30.6963 196.208 28.9185C196.208 27.1407 195.674 25.6593 194.548 24.5333C193.423 23.4074 192 22.8148 190.282 22.8148C188.563 22.8148 187.141 23.4074 186.015 24.5333C184.889 25.6593 184.356 27.1407 184.356 28.9185C184.356 30.637 184.889 32.1185 186.015 33.3037ZM224.178 30.163H208C208.178 31.763 208.771 33.0667 209.837 34.0148C210.904 34.963 212.208 35.437 213.749 35.437C216.356 35.437 218.252 34.1333 219.556 31.5852L223.526 33.8963C221.571 37.9852 218.252 40.0592 213.689 40.0592C210.726 40.0592 208.178 39.0518 206.045 36.9778C203.971 34.9037 202.904 32.237 202.904 28.9778C202.904 25.7185 203.971 23.0518 206.104 20.9778C208.237 18.9037 210.845 17.8963 213.926 17.8963C216.889 17.8963 219.378 18.9037 221.274 20.8592C223.171 22.8148 224.178 25.363 224.178 28.3852V30.163ZM213.808 21.8667C212.445 21.8667 211.2 22.2815 210.193 23.1111C209.186 23.9407 208.474 25.0074 208.06 26.2518H219.319C219.082 24.8889 218.43 23.763 217.482 22.9926C216.534 22.2222 215.289 21.8667 213.808 21.8667ZM225.897 18.3704V12.6815H231.23V18.3704H235.793V22.6963H231.23V32.237C231.23 34.1926 232.119 35.2 233.897 35.2C234.489 35.2 235.082 35.1407 235.674 34.963L236.208 39.3481C235.141 39.763 233.956 39.9407 232.652 39.9407C228.149 39.9407 225.956 37.6889 225.956 33.2444V22.6963L225.897 18.3704ZM240.652 39.3481C242.193 39.3481 243.497 38.1037 243.497 36.5037C243.497 34.963 242.252 33.6593 240.652 33.6593C239.111 33.6593 237.808 34.9037 237.808 36.5037C237.808 38.1037 239.111 39.3481 240.652 39.3481ZM245.867 39.3481V18.3704H251.2V39.3481H245.867ZM272.474 20.7407C274.786 22.6963 275.911 25.4222 275.911 28.8593C275.911 32.2963 274.786 35.0222 272.534 36.9778C270.282 38.9333 267.556 39.9407 264.474 39.9407C261.393 39.9407 258.667 38.9333 256.415 36.9778C254.163 35.0222 253.037 32.2963 253.037 28.8593C253.037 25.4222 254.163 22.6963 256.415 20.7407C258.667 18.7852 261.393 17.7778 264.474 17.7778C267.556 17.7778 270.163 18.7852 272.474 20.7407ZM260.148 33.3037C261.334 34.4296 262.756 34.963 264.415 34.963C266.074 34.963 267.497 34.4296 268.682 33.3037C269.867 32.1778 270.46 30.6963 270.46 28.8593C270.46 27.0222 269.867 25.5407 268.682 24.4148C267.497 23.2889 266.074 22.7555 264.415 22.7555C262.756 22.7555 261.334 23.2889 260.148 24.4148C258.963 25.5407 258.371 27.0222 258.371 28.8593C258.371 30.6963 258.963 32.1778 260.148 33.3037Z"
      fill="white"
    />
    <path
      d="M245.565 12.5642C245.565 14.1664 246.871 15.4127 248.414 15.4127C249.957 15.4127 251.262 14.1664 251.262 12.5642C251.262 10.9619 249.957 9.71564 248.414 9.71564C246.812 9.71564 245.565 10.9619 245.565 12.5642Z"
      fill="#2ADD4D"
    />
  </svg>
);

type SvgProps = {
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
export const LogoSportsbetSponsor = styled(Svg)<SvgProps>(
  ({ height, width, fontSize, verticalAlign }) => ({
    height,
    width,
    fontSize,
    verticalAlign,
  })
);
LogoSportsbetSponsor.defaultProps = {
  verticalAlign: 'middle',
};
