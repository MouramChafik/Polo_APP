import React, { useState } from "react";
import { Avatar } from "../../src/components/components/ui/Avatar";
import { Button } from "../../src/components/components/ui/Button";
import { HeaderSection } from "../components/HeaderSection";
import { NavigationMenuSection } from "../components/NavigationMenuSection";
import { PatientsListSection } from "../components/PatientsListSection";

export const ElementDesktopPatients = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <><header className="w-full h-[22%] bg-white flex items-center justify-between px-[60px]">
          <div className="flex items-center h-[49px]">
              <div className="w-[29px] h-10 bg-[url(/calque-1-2-1.png)] bg-[100%_100%]" />
              <img
                  className="w-[29px] h-[30px] ml-1"
                  alt="Vector"
                  src="/vector-7.svg" />
              <img
                  className="w-[7px] h-[39px] mx-1"
                  alt="Vector"
                  src="/vector-1.svg" />
              <img
                  className="w-[29px] h-[30px]"
                  alt="Vector"
                  src="/vector-7.svg" />
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
                  src="/fleche-bas.svg" />
          </div>
      </header><div className="bg-white flex flex-row justify-center w-full min-h-screen">
              <div className="bg-white w-full max-w-[1440px] relative flex flex-col md:flex-row">
                  {/* Mobile menu button */}
                  <Button
                      variant="ghost"
                      className="md:hidden fixed bottom-4 left-4 z-50 bg-vert text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={isMobileMenuOpen
                                  ? "M6 18L18 6M6 6l12 12"
                                  : "M4 6h16M4 12h16M4 18h16"} />
                      </svg>
                  </Button>
                  {/* Left navigation */}
                  <aside
                      className={`${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed md:relative md:translate-x-0 z-40 transition-transform duration-300 ease-in-out md:w-[21%] h-full`}
                  >
                      <NavigationMenuSection />
                  </aside>
                  <div className="bg-white flex flex-row justify-center w-full">
                      <div className="bg-white w-full max-w-[1440px] relative flex">
                          <div className="flex-1 flex flex-col">
                              <main className="flex-1 flex flex-col">
                                  <HeaderSection />
                                  <PatientsListSection />
                              </main>
                          </div>
                      </div>
                  </div>
              </div>
          </div></>
  );
};
