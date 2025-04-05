
"use client"; 

import { useRouter } from "next/navigation";
import { ICONS } from "../../assets";
import Image from "next/image";

interface AuthHeadingProps {
  heading: string;
}

const AuthHeading = ({ heading }: AuthHeadingProps) => {
  const router=useRouter();

  // navigate to home page on logo click
  const handleClick = () => {
  router.push("/");
  };

  return (
    <div onClick={handleClick} className="flex flex-row items-center justify-start gap-5 w-full ">
      <Image
        src={ICONS.horizon}
        alt="Logo"
        width={36}
        height={36}
        className=""
      />
      <h1 className="font-semibold">{heading}</h1>
    </div>
  );
};

export default AuthHeading;