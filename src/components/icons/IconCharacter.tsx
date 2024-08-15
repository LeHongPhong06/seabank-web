import icon from "@/assets/images/icons/mingcute.svg";
import Image from "next/image";
import React from "react";

type Props = {
  size?: number;
};

const IconCharacter: React.FC<Props> = ({ size }) => {
  return (
    <div className={`size-${size} relative`}>
      <Image src={icon} alt='icon' fill />
    </div>
  );
};

export default IconCharacter;
