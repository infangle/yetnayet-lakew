import React from "react";
import Link from "next/link";

interface LinkButtonProps {
  text: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
