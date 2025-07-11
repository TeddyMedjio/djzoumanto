import * as React from "react";
const Headphone = (props: React.ComponentPropsWithRef<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={50}
    height={50}
    baseProfile="full"
    viewBox="0 0 76 76"
    {...props}
    fill="currentColor"
    className="text-white rotate-12 m-3"
  >
    <path d="M37.75 19h.5S57 19 57 39c0 9-2 12-3 13 0 0-3 2-2-.75 0-2.314 1-7.25 1-7.25s1 0 1-5c0-6-4-16.5-15-16.5h-2C26 22.5 22 33 22 39c0 5 1 5 1 5s1 4.936 1 7.25C25 54 22 52 22 52c-1-1-3-4-3-13 0-20 18.75-20 18.75-20ZM26.553 39.166a3 3 0 0 1 3.389 2.553l1.53 10.893A3 3 0 0 1 28.92 56c-1.64.23-3.657-.913-3.888-2.553L23.5 42.554c-.23-1.64 1.413-3.158 3.053-3.389Zm22.894 0c1.64.23 3.284 1.747 3.053 3.388l-1.53 10.893c-.231 1.64-2.248 2.784-3.89 2.553a3 3 0 0 1-2.552-3.388l1.53-10.893a3 3 0 0 1 3.389-2.553Z" />
  </svg>
);
export default Headphone;
