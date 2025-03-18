import React from "react";
import { Avatar } from "../../src/components/components/ui/Avatar";
import { HeaderSection } from "../components/HeaderSection";

export const ElementDesktopPatients = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative flex">
     

        <div className="flex-1 flex flex-col">
          <header className="w-full h-[22%] bg-white flex items-center justify-between px-[60px]">
            <div className="flex items-center h-[49px]">
              <div className="w-[29px] h-10 bg-[url(/calque-1-2-1.png)] bg-[100%_100%]" />
              <img
                className="w-[29px] h-[30px] ml-1"
                alt="Vector"
                src="/vector-7.svg"
              />
              <img
                className="w-[7px] h-[39px] mx-1"
                alt="Vector"
                src="/vector-1.svg"
              />
              <img
                className="w-[29px] h-[30px]"
                alt="Vector"
                src="/vector-7.svg"
              />
            </div>

            <div className="flex items-center">
              <div className="font-black text-gris-fonc text-sm text-right leading-[14px] mr-3 [font-family:'Nunito',Helvetica]">
                Lola
                <br />
                Dufour
              </div>
              <Avatar className="w-9 h-9">
                <img src="/avatar-infirmier.svg" alt="Avatar infirmier" />
              </Avatar>
              <img
                className="w-[15px] h-2 ml-2"
                alt="Fleche bas"
                src="/fleche-bas.svg"
              />
            </div>
          </header>

          <main className="flex-1 flex flex-col">
            <HeaderSection />
          </main>
        </div>
      </div>
    </div>
  );
};