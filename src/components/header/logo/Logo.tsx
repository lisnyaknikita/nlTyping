'use client';

import { FC, useContext } from 'react';

import classes from './Logo.module.scss';

import Link from 'next/link';

import { ThemeContext } from '@/providers/ThemeContext';

import clsx from 'clsx';

const Logo: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Link href='/'>
      <svg
        className={clsx(classes.logo, !darkMode && 'light')}
        width='164'
        height='25'
        viewBox='0 0 164 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.1113 3.15527H8.61816V19H6.4209V3.15527H0.927734V1.22656H14.1113V3.15527ZM18.2007 24.3345C17.9891 24.3345 17.7409 24.3101 17.4561 24.2612C17.1712 24.2124 16.9556 24.1717 16.8091 24.1392L17.1753 22.2959C17.3787 22.3122 17.5781 22.3244 17.7734 22.3325C17.9769 22.3488 18.1356 22.3569 18.2495 22.3569C18.5588 22.3569 18.8395 22.2715 19.0918 22.1006C19.3522 21.9297 19.5841 21.7262 19.7876 21.4902C19.9829 21.2542 20.1497 21.0101 20.2881 20.7578C20.4346 20.5055 20.5485 20.298 20.6299 20.1353L21.5332 18.3774L15.8447 5.79199H18.3716L21.9971 14.3125L22.583 15.9116L23.2056 14.3613L26.6113 5.79199H29.1382L22.4365 21.0386C22.2819 21.3804 22.0825 21.7425 21.8384 22.125C21.6024 22.5075 21.3135 22.8615 20.9717 23.187C20.6299 23.5125 20.2311 23.7852 19.7754 24.0049C19.3197 24.2246 18.7948 24.3345 18.2007 24.3345ZM32.1411 24.0781V5.79199H34.2041L34.314 7.23242C34.493 7.00456 34.6883 6.80111 34.8999 6.62207C35.1115 6.4349 35.3394 6.2762 35.5835 6.146C35.9253 5.95068 36.3037 5.8042 36.7188 5.70654C37.1419 5.60075 37.5936 5.54785 38.0737 5.54785C38.9201 5.54785 39.6688 5.71468 40.3198 6.04834C40.9709 6.382 41.5161 6.84587 41.9556 7.43994C42.395 8.03402 42.7287 8.74609 42.9565 9.57617C43.1844 10.3981 43.2983 11.3014 43.2983 12.2861V12.5425C43.2983 13.4865 43.1844 14.3695 42.9565 15.1914C42.7287 16.0052 42.395 16.7132 41.9556 17.3154C41.5161 17.9176 40.9709 18.3896 40.3198 18.7314C39.6769 19.0732 38.9404 19.2441 38.1104 19.2441C37.6058 19.2441 37.1338 19.1912 36.6943 19.0854C36.263 18.9797 35.8724 18.8291 35.5225 18.6338C35.3109 18.5117 35.1115 18.3774 34.9243 18.231C34.7371 18.0763 34.5622 17.9095 34.3994 17.7305V24.0781H32.1411ZM41.04 12.2861C41.04 11.6432 40.9668 11.0329 40.8203 10.4551C40.682 9.86914 40.4663 9.35238 40.1733 8.90479C39.8722 8.46533 39.4938 8.1154 39.0381 7.85498C38.5824 7.59456 38.0371 7.46436 37.4023 7.46436C37.0524 7.46436 36.7269 7.50505 36.4258 7.58643C36.1328 7.66781 35.8683 7.78581 35.6323 7.94043C35.3719 8.09505 35.14 8.2863 34.9365 8.51416C34.7331 8.74202 34.554 8.9943 34.3994 9.271V15.6309C34.5378 15.875 34.6965 16.1029 34.8755 16.3145C35.0545 16.526 35.258 16.7051 35.4858 16.8516C35.7463 17.0225 36.0352 17.1567 36.3525 17.2544C36.6781 17.3521 37.0361 17.4009 37.4268 17.4009C38.0534 17.4009 38.5946 17.2707 39.0503 17.0103C39.506 16.7417 39.8804 16.3836 40.1733 15.936C40.4663 15.4884 40.682 14.9717 40.8203 14.3857C40.9668 13.7998 41.04 13.1854 41.04 12.5425V12.2861ZM47.522 5.79199H54.2725V17.0469H58.5815V19H47.522V17.0469H52.0142V7.75732H47.522V5.79199ZM51.7212 2.3252C51.7212 2.12988 51.7497 1.94678 51.8066 1.77588C51.8717 1.60498 51.9694 1.4585 52.0996 1.33643C52.2054 1.23063 52.3397 1.14925 52.5024 1.09229C52.6733 1.02718 52.8646 0.994629 53.0762 0.994629C53.2878 0.994629 53.4749 1.02718 53.6377 1.09229C53.8005 1.14925 53.9347 1.23063 54.0405 1.33643C54.1707 1.45036 54.2684 1.59277 54.3335 1.76367C54.3986 1.93457 54.4312 2.12174 54.4312 2.3252C54.4312 2.69141 54.3172 2.99658 54.0894 3.24072C53.8615 3.48486 53.5238 3.60693 53.0762 3.60693C52.6204 3.60693 52.2786 3.48486 52.0508 3.24072C51.8311 2.99658 51.7212 2.69141 51.7212 2.3252ZM62.1826 19V5.79199H64.209L64.3677 7.74512C64.563 7.46842 64.7746 7.21615 65.0024 6.98828C65.2384 6.75228 65.4867 6.54883 65.7471 6.37793C66.1377 6.11751 66.5609 5.91813 67.0166 5.77979C67.4805 5.6333 67.9688 5.55599 68.4814 5.54785C69.1732 5.54785 69.7998 5.64551 70.3613 5.84082C70.931 6.03613 71.4152 6.34131 71.814 6.75635C72.2127 7.17139 72.5179 7.70036 72.7295 8.34326C72.9492 8.97803 73.0591 9.73486 73.0591 10.6138V19H70.8008V10.6626C70.8008 10.0767 70.7357 9.58024 70.6055 9.17334C70.4753 8.76644 70.284 8.43685 70.0317 8.18457C69.7713 7.93229 69.4539 7.74919 69.0796 7.63525C68.7134 7.52132 68.2902 7.46436 67.8101 7.46436C67.395 7.46436 67.0085 7.52539 66.6504 7.64746C66.2923 7.76139 65.9627 7.92008 65.6616 8.12354C65.4175 8.30257 65.1896 8.51009 64.978 8.74609C64.7746 8.9821 64.5955 9.24251 64.4409 9.52734V19H62.1826ZM76.7822 12.2861C76.7822 11.3014 76.9002 10.3981 77.1362 9.57617C77.3804 8.74609 77.7303 8.03402 78.186 7.43994C78.6418 6.84587 79.1951 6.382 79.8462 6.04834C80.4972 5.71468 81.2337 5.54785 82.0557 5.54785C82.5846 5.54785 83.0688 5.60889 83.5083 5.73096C83.9559 5.85303 84.3587 6.03206 84.7168 6.26807C84.9121 6.39014 85.0952 6.53255 85.2661 6.69531C85.4451 6.85807 85.612 7.03711 85.7666 7.23242L85.8765 5.79199H87.9272V18.7192C87.9272 19.59 87.7889 20.3631 87.5122 21.0386C87.2437 21.714 86.8652 22.2878 86.377 22.7598C85.8805 23.2318 85.2905 23.5898 84.6069 23.834C83.9233 24.0781 83.1665 24.2002 82.3364 24.2002C81.9946 24.2002 81.604 24.1595 81.1646 24.0781C80.7251 24.0049 80.2816 23.8787 79.834 23.6997C79.3783 23.5288 78.9388 23.2969 78.5156 23.0039C78.1006 22.7109 77.7425 22.3488 77.4414 21.9175L78.6133 20.5625C78.89 20.8962 79.1748 21.1769 79.4678 21.4048C79.7607 21.6408 80.0578 21.828 80.3589 21.9663C80.66 22.1047 80.9611 22.2023 81.2622 22.2593C81.5633 22.3244 81.8644 22.3569 82.1655 22.3569C82.7026 22.3569 83.1868 22.2796 83.6182 22.125C84.0495 21.9704 84.4198 21.7425 84.729 21.4414C85.0301 21.1484 85.262 20.7822 85.4248 20.3428C85.5876 19.9033 85.6689 19.3988 85.6689 18.8291V17.6938C85.498 17.8892 85.3149 18.0682 85.1196 18.231C84.9325 18.3937 84.729 18.5361 84.5093 18.6582C84.1675 18.8454 83.7891 18.9878 83.374 19.0854C82.959 19.1912 82.5114 19.2441 82.0312 19.2441C81.2256 19.2441 80.4972 19.0732 79.8462 18.7314C79.1951 18.3896 78.6458 17.9176 78.1982 17.3154C77.7425 16.7132 77.3926 16.0052 77.1484 15.1914C76.9043 14.3695 76.7822 13.4865 76.7822 12.5425V12.2861ZM79.0405 12.5425C79.0405 13.1854 79.1056 13.7957 79.2358 14.3735C79.3742 14.9513 79.5898 15.46 79.8828 15.8994C80.1676 16.3389 80.5339 16.6888 80.9814 16.9492C81.429 17.2015 81.9661 17.3276 82.5928 17.3276C82.9834 17.3276 83.3333 17.2829 83.6426 17.1934C83.96 17.0957 84.2448 16.9614 84.4971 16.7905C84.7412 16.6196 84.9609 16.4162 85.1562 16.1802C85.3516 15.9442 85.5225 15.6838 85.6689 15.3989V9.34424C85.5225 9.06755 85.3516 8.81527 85.1562 8.5874C84.9609 8.35954 84.7371 8.16016 84.4849 7.98926C84.2326 7.8265 83.9518 7.70036 83.6426 7.61084C83.3333 7.51318 82.9915 7.46436 82.6172 7.46436C81.9824 7.46436 81.4372 7.59456 80.9814 7.85498C80.5339 8.1154 80.1676 8.46533 79.8828 8.90479C79.5898 9.35238 79.3742 9.86914 79.2358 10.4551C79.1056 11.0329 79.0405 11.6432 79.0405 12.2861V12.5425ZM112.573 2.59375V5.79199H117.603V7.5376H112.573V14.7153C112.573 15.228 112.638 15.6512 112.769 15.9849C112.899 16.3185 113.078 16.583 113.306 16.7783C113.534 16.9818 113.794 17.1242 114.087 17.2056C114.388 17.2869 114.705 17.3276 115.039 17.3276C115.283 17.3276 115.535 17.3154 115.796 17.291C116.056 17.2585 116.313 17.2218 116.565 17.1812C116.809 17.1405 117.037 17.0998 117.249 17.0591C117.468 17.0103 117.647 16.9696 117.786 16.937L118.103 18.5361C117.916 18.6501 117.688 18.7518 117.419 18.8413C117.151 18.9227 116.858 18.9919 116.541 19.0488C116.223 19.1139 115.885 19.1628 115.527 19.1953C115.177 19.2279 114.827 19.2441 114.478 19.2441C113.892 19.2441 113.342 19.1628 112.83 19C112.325 18.8291 111.886 18.5605 111.511 18.1943C111.137 17.8363 110.84 17.3724 110.62 16.8027C110.409 16.2249 110.303 15.5291 110.303 14.7153V7.5376H106.836V5.79199H110.303V2.59375H112.573ZM128.076 19.2441C127.148 19.2441 126.294 19.0854 125.513 18.7681C124.74 18.4507 124.076 18.0072 123.523 17.4375C122.97 16.8678 122.538 16.1924 122.229 15.4111C121.92 14.6299 121.765 13.7795 121.765 12.8599V12.3472C121.765 11.2811 121.936 10.3289 122.278 9.49072C122.62 8.64437 123.075 7.92822 123.645 7.34229C124.207 6.76449 124.845 6.32096 125.562 6.01172C126.286 5.70247 127.026 5.54785 127.783 5.54785C128.735 5.54785 129.565 5.71468 130.273 6.04834C130.99 6.37386 131.584 6.82552 132.056 7.40332C132.528 7.98926 132.878 8.67692 133.105 9.46631C133.341 10.2557 133.459 11.1102 133.459 12.0298V13.043H124.023V13.1284C124.08 13.7713 124.207 14.3369 124.402 14.8252C124.605 15.3135 124.882 15.7448 125.232 16.1191C125.59 16.5179 126.021 16.8312 126.526 17.0591C127.03 17.2869 127.588 17.4009 128.198 17.4009C129.004 17.4009 129.72 17.2381 130.347 16.9126C130.973 16.5871 131.494 16.1558 131.909 15.6187L133.289 16.6929C132.849 17.3602 132.19 17.9543 131.311 18.4751C130.44 18.9878 129.362 19.2441 128.076 19.2441ZM127.783 7.40332C127.327 7.40332 126.896 7.48877 126.489 7.65967C126.082 7.82243 125.716 8.0625 125.391 8.37988C125.065 8.7054 124.788 9.10417 124.561 9.57617C124.341 10.04 124.186 10.5771 124.097 11.1875H131.201V11.0776C131.201 10.6707 131.124 10.2354 130.969 9.77148C130.815 9.29948 130.599 8.89258 130.322 8.55078C130.046 8.20898 129.696 7.93229 129.272 7.7207C128.857 7.50911 128.361 7.40332 127.783 7.40332ZM146.033 15.4966C146.033 15.228 145.98 14.988 145.874 14.7764C145.768 14.5566 145.589 14.3573 145.337 14.1782C145.085 13.9992 144.751 13.8364 144.336 13.6899C143.921 13.5353 143.404 13.397 142.786 13.2749C142.029 13.1203 141.337 12.9331 140.71 12.7134C140.092 12.4937 139.563 12.2292 139.124 11.9199C138.676 11.6188 138.33 11.2648 138.086 10.8579C137.842 10.4429 137.72 9.96273 137.72 9.41748C137.72 8.88037 137.846 8.37988 138.098 7.91602C138.35 7.44401 138.704 7.03304 139.16 6.68311C139.616 6.33317 140.157 6.05648 140.784 5.85303C141.418 5.64958 142.114 5.54785 142.871 5.54785C143.685 5.54785 144.417 5.65365 145.068 5.86523C145.719 6.07682 146.273 6.36979 146.729 6.74414C147.184 7.11849 147.534 7.55794 147.778 8.0625C148.031 8.55892 148.157 9.09603 148.157 9.67383H145.898C145.898 9.389 145.825 9.1123 145.679 8.84375C145.532 8.56706 145.329 8.32292 145.068 8.11133C144.808 7.89974 144.491 7.72884 144.116 7.59863C143.75 7.46842 143.335 7.40332 142.871 7.40332C142.391 7.40332 141.968 7.45622 141.602 7.56201C141.243 7.66781 140.946 7.81022 140.71 7.98926C140.466 8.16829 140.283 8.37581 140.161 8.61182C140.039 8.84782 139.978 9.09196 139.978 9.34424C139.978 9.60465 140.027 9.83659 140.125 10.04C140.222 10.2435 140.393 10.4266 140.637 10.5894C140.873 10.7521 141.191 10.8986 141.589 11.0288C141.996 11.159 142.509 11.2852 143.127 11.4072C143.941 11.5781 144.67 11.7775 145.312 12.0054C145.955 12.2251 146.497 12.4896 146.936 12.7988C147.375 13.1162 147.709 13.4824 147.937 13.8975C148.173 14.3125 148.291 14.7926 148.291 15.3379C148.291 15.9238 148.157 16.4569 147.888 16.937C147.628 17.4172 147.262 17.8281 146.79 18.1699C146.318 18.5117 145.752 18.7762 145.093 18.9634C144.434 19.1506 143.713 19.2441 142.932 19.2441C142.037 19.2441 141.239 19.1261 140.54 18.8901C139.84 18.646 139.25 18.3245 138.77 17.9258C138.281 17.5352 137.907 17.0794 137.646 16.5586C137.394 16.0378 137.268 15.4966 137.268 14.9351H139.526C139.559 15.3989 139.681 15.7896 139.893 16.1069C140.112 16.4243 140.385 16.6807 140.71 16.876C141.028 17.0713 141.382 17.2096 141.772 17.291C142.163 17.3724 142.55 17.4131 142.932 17.4131C143.534 17.4131 144.059 17.3439 144.507 17.2056C144.954 17.0591 145.304 16.8597 145.557 16.6074C145.711 16.4528 145.829 16.2819 145.911 16.0947C145.992 15.9076 146.033 15.7082 146.033 15.4966ZM157.617 2.59375V5.79199H162.646V7.5376H157.617V14.7153C157.617 15.228 157.682 15.6512 157.812 15.9849C157.943 16.3185 158.122 16.583 158.35 16.7783C158.577 16.9818 158.838 17.1242 159.131 17.2056C159.432 17.2869 159.749 17.3276 160.083 17.3276C160.327 17.3276 160.579 17.3154 160.84 17.291C161.1 17.2585 161.357 17.2218 161.609 17.1812C161.853 17.1405 162.081 17.0998 162.292 17.0591C162.512 17.0103 162.691 16.9696 162.83 16.937L163.147 18.5361C162.96 18.6501 162.732 18.7518 162.463 18.8413C162.195 18.9227 161.902 18.9919 161.584 19.0488C161.267 19.1139 160.929 19.1628 160.571 19.1953C160.221 19.2279 159.871 19.2441 159.521 19.2441C158.936 19.2441 158.386 19.1628 157.874 19C157.369 18.8291 156.93 18.5605 156.555 18.1943C156.181 17.8363 155.884 17.3724 155.664 16.8027C155.452 16.2249 155.347 15.5291 155.347 14.7153V7.5376H151.88V5.79199H155.347V2.59375H157.617Z'
          fill='#37323E'
        />
      </svg>
    </Link>
  );
};

export default Logo;
