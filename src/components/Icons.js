import { cx } from "../utils"

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("w-full h-auto", className)}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("w-full h-auto", className)}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const LinkedinIcon = ({ className, ...rest }) => {
  return (
		<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 112.196 112.196",
    }}
    viewBox="0 0 112.196 112.196"
    {...rest}
  >
    <circle
      cx={56.098}
      cy={56.097}
      r={56.098}
      style={{
        fill: "#007ab9",
      }}
    />
    <path
      d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z"
      style={{
        fill: "#f1f2f2",
      }}
    />
  </svg>
  );
};

export const TwitterIcon = ({ className, ...rest }) => {
  return (
		<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 128 128"
    {...rest}
  >
    <g clipRule="evenodd">
      <path fill="none" d="M0 0h128v128H0z" />
      <path
        fill="#00AAEC"
        fillRule="evenodd"
        d="M128 23.294a51.28 51.28 0 0 1-15.079 4.237c5.424-3.328 9.587-8.606 11.548-14.892a51.718 51.718 0 0 1-16.687 6.526c-4.778-5.231-11.608-8.498-19.166-8.498-14.493 0-26.251 12.057-26.251 26.927 0 2.111.225 4.16.676 6.133-21.824-1.126-41.17-11.835-54.131-28.145a27.422 27.422 0 0 0-3.554 13.552c0 9.338 4.636 17.581 11.683 22.412-4.297-.131-8.355-1.356-11.901-3.359v.331c0 13.051 9.053 23.937 21.074 26.403-2.201.632-4.523.948-6.92.948-1.69 0-3.343-.162-4.944-.478 3.343 10.694 13.035 18.483 24.53 18.691-8.986 7.227-20.315 11.533-32.614 11.533-2.119 0-4.215-.123-6.266-.37 11.623 7.627 25.432 12.088 40.255 12.088 48.309 0 74.717-41.026 74.717-76.612a89.39 89.39 0 0 0-.068-3.49A53.862 53.862 0 0 0 128 23.294"
      />
    </g>
  </svg>
  );
};

export const GithubIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={44}
      viewBox="0 0 42 44"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M21 1.739c-10.942 0-19.815 9.212-19.815 20.577 0 9.091 5.678 16.804 13.55 19.525.99.191 1.354-.446 1.354-.99 0-.49-.018-2.111-.027-3.83-5.512 1.244-6.675-2.428-6.675-2.428-.902-2.379-2.2-3.011-2.2-3.011-1.799-1.277.135-1.25.135-1.25 1.99.144 3.038 2.12 3.038 2.12 1.767 3.145 4.635 2.236 5.766 1.71.177-1.33.691-2.238 1.258-2.752-4.401-.52-9.028-2.284-9.028-10.168 0-2.247.774-4.082 2.042-5.524-.206-.518-.885-2.61.191-5.445 0 0 1.664-.553 5.45 2.11A18.325 18.325 0 0 1 21 11.688c1.683.008 3.38.236 4.963.693 3.782-2.663 5.444-2.11 5.444-2.11 1.079 2.834.4 4.928.195 5.445 1.27 1.442 2.039 3.277 2.039 5.524 0 7.903-4.635 9.643-9.048 10.153.711.638 1.345 1.891 1.345 3.81 0 2.754-.023 4.97-.023 5.647 0 .548.357 1.19 1.36.987 7.87-2.724 13.54-10.434 13.54-19.522 0-11.364-8.872-20.577-19.815-20.577Z"
        clipRule="evenodd"
      />
      <path d="M8.69 31.282c-.044.103-.198.133-.34.063-.144-.066-.224-.206-.178-.308.043-.106.198-.135.342-.064.144.067.226.207.176.31Zm.803.93c-.095.091-.28.049-.405-.095-.13-.143-.154-.335-.058-.427.098-.091.277-.048.407.095.13.145.155.335.056.428Zm.781 1.185c-.121.088-.32.006-.443-.177-.121-.183-.121-.403.004-.49.122-.089.318-.01.442.172.121.186.121.406-.003.495Zm1.07 1.145c-.108.125-.34.091-.509-.078-.173-.166-.221-.402-.113-.526.11-.125.343-.09.514.078.173.166.225.402.109.526Zm1.477.665c-.048.161-.27.234-.496.166-.224-.07-.37-.26-.324-.422.045-.163.27-.239.496-.165.224.07.37.257.324.421Zm1.622.123c.005.17-.185.31-.42.314-.237.005-.43-.132-.432-.3 0-.17.187-.31.424-.314.235-.005.428.132.428.3Zm1.508-.266c.029.165-.135.335-.369.38-.23.045-.443-.058-.473-.222-.028-.17.139-.34.369-.384.234-.042.444.058.473.226Z" />
    </svg>
  );
};

export const InstagramIcon = ({ className, ...rest }) => {
  return (
		<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 128 128"
    {...rest}
  >
    <path fill="none" d="M0 0h128v128H0z" clipRule="evenodd" />
    <radialGradient
      id="a"
      cx={19.111}
      cy={128.444}
      r={163.552}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ffb140",
        }}
      />
      <stop
        offset={0.256}
        style={{
          stopColor: "#ff5445",
        }}
      />
      <stop
        offset={0.599}
        style={{
          stopColor: "#fc2b82",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#8e40b7",
        }}
      />
    </radialGradient>
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M105.843 29.837a7.68 7.68 0 1 1-15.36 0 7.68 7.68 0 0 1 15.36 0zM64 85.333c-11.782 0-21.333-9.551-21.333-21.333 0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333 0 11.782-9.551 21.333-21.333 21.333zm0-54.198c-18.151 0-32.865 14.714-32.865 32.865 0 18.151 14.714 32.865 32.865 32.865 18.151 0 32.865-14.714 32.865-32.865 0-18.151-14.714-32.865-32.865-32.865zm0-19.603c17.089 0 19.113.065 25.861.373 6.24.285 9.629 1.327 11.884 2.204 2.987 1.161 5.119 2.548 7.359 4.788 2.24 2.239 3.627 4.371 4.788 7.359.876 2.255 1.919 5.644 2.204 11.884.308 6.749.373 8.773.373 25.862s-.065 19.113-.373 25.861c-.285 6.24-1.327 9.629-2.204 11.884-1.161 2.987-2.548 5.119-4.788 7.359-2.239 2.24-4.371 3.627-7.359 4.788-2.255.876-5.644 1.919-11.884 2.204-6.748.308-8.772.373-25.861.373-17.09 0-19.114-.065-25.862-.373-6.24-.285-9.629-1.327-11.884-2.204-2.987-1.161-5.119-2.548-7.359-4.788-2.239-2.239-3.627-4.371-4.788-7.359-.876-2.255-1.919-5.644-2.204-11.884-.308-6.749-.373-8.773-.373-25.861 0-17.089.065-19.113.373-25.862.285-6.24 1.327-9.629 2.204-11.884 1.161-2.987 2.548-5.119 4.788-7.359 2.239-2.24 4.371-3.627 7.359-4.788 2.255-.876 5.644-1.919 11.884-2.204 6.749-.308 8.773-.373 25.862-.373zM64 0C46.619 0 44.439.074 37.613.385 30.801.696 26.148 1.778 22.078 3.36c-4.209 1.635-7.778 3.824-11.336 7.382C7.184 14.3 4.995 17.869 3.36 22.078 1.778 26.149.696 30.801.385 37.613.074 44.439 0 46.619 0 64s.074 19.561.385 26.387c.311 6.812 1.393 11.464 2.975 15.535 1.635 4.209 3.824 7.778 7.382 11.336 3.558 3.558 7.127 5.746 11.336 7.382 4.071 1.582 8.723 2.664 15.535 2.975 6.826.311 9.006.385 26.387.385s19.561-.074 26.387-.385c6.812-.311 11.464-1.393 15.535-2.975 4.209-1.636 7.778-3.824 11.336-7.382 3.558-3.558 5.746-7.127 7.382-11.336 1.582-4.071 2.664-8.723 2.975-15.535.311-6.826.385-9.006.385-26.387s-.074-19.561-.385-26.387c-.311-6.812-1.393-11.464-2.975-15.535-1.636-4.209-3.824-7.778-7.382-11.336-3.558-3.558-7.127-5.746-11.336-7.382C101.851 1.778 97.199.696 90.387.385 83.561.074 81.381 0 64 0z"
      clipRule="evenodd"
    />
  </svg>
  );
};
