import Container from "@/components/Shared/Container/Container";
import { VIDEOS } from "../../assets";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="flex justify-center items-center border-2 border-neutral-65 rounded-lg bg-white shadow-lg w-[90%] h-[90vh] mx-auto mt-10   gap-5">
        <div className="w-[50%] h-full">
          <video
            className="w-full h-full object-cover rounded-l-lg"
            controls={false}
            autoPlay
            muted
            loop
          >
            <source src={VIDEOS.authVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-[50%] h-full p-5 overflow-y-auto">{children}</div>
      </div>
    </Container>
  );
};

export default CommonLayout;
