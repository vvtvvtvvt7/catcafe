import * as React from 'react';

function SvgLeftArrow(props) {
  return (
    <svg
      width={16}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.333 11.063L12.013.383C12.26.136 12.59 0 12.941 0c.352 0 .682.136.929.383l.786.787a1.315 1.315 0 010 1.857l-8.968 8.968 8.978 8.979c.247.247.384.576.384.928 0 .351-.137.681-.384.928l-.786.787a1.304 1.304 0 01-.929.383c-.351 0-.68-.136-.928-.383l-10.69-10.69a1.305 1.305 0 01-.383-.931c0-.354.135-.685.383-.933z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgLeftArrow;
