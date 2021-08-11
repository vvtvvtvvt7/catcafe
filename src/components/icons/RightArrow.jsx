import * as React from 'react';

function SvgRightArrow(props) {
  return (
    <svg
      width={16}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.667 11.063L3.987.383A1.303 1.303 0 003.058 0c-.351 0-.68.136-.928.383l-.786.787a1.315 1.315 0 000 1.857l8.968 8.968-8.978 8.979a1.304 1.304 0 00-.384.928c0 .351.137.681.384.928l.786.787c.247.247.577.383.929.383.351 0 .68-.136.928-.383l10.69-10.69c.248-.248.384-.58.383-.931 0-.354-.135-.685-.383-.933z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgRightArrow;
