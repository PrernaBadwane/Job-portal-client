"use client";

import { useRouter } from "next/navigation";
import { ICONS } from "../../assets";
import Image from "next/image";

interface AuthHeadingProps {
  heading: string;
  description?: string;
}

const AuthHeading = ({ heading,description }: AuthHeadingProps) => {
  const router = useRouter();

  // navigate to home page on logo click
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-start justify-start gap-5 w-full ">
      <div
        onClick={handleClick}
        className="flex flex-row items-center justify-start gap-5 w-full "
      >
        <Image
          src={ICONS.horizon}
          alt="Logo"
          width={36}
          height={36}
          className=""
        />
        <h1 className="font-semibold text-2xl">{heading}</h1>
      </div>
      <p className="pl-3 font-semibold text-gray-700">{description}</p>
    </div>
  );
};

export default AuthHeading;
