const TrashIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 256 256"
      className="fill-red-600" // Tailwind class for the red color
    >
      <g
        fill="currentColor" // Uses Tailwind's current text color (you can customize it with Tailwind utilities)
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M10,2l-1,1h-6v2h18v-2h-6l-1,-1zM4.36523,7l1.70313,15h11.86328l1.70313,-15z"></path>
        </g>
      </g>
    </svg>
  );
};

export default TrashIcon;
