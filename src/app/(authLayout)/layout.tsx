import Container from "@/components/Shared/Container/Container";
import { VIDEOS } from "../../assets";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="flex justify-center items-center border-2 rounded-lg bg-white border-accent-30 shadow-lg w-[90%] h-[90vh] mx-auto mt-10   gap-5">
        <div className="w-[50%] h-full relative">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-accent-10/30 to-primary-10/70 bg-opacity-50 rounded-l-lg">
            <div className="absolute inset-0 flex flex-col justify-end items-center text-start p-5 gap-5">
              <p  className="font-semibold text-gray-200 ">Find jobs that match your passion and potential. Apply easily, track progress, and grow professionally with tools built to empower your career journey. Your future starts here—let’s begin!</p>
            </div>
          </div>
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
