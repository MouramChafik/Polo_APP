import React from "react";
import { Button } from "../components/components/ui/Button";
import { Card, CardContent } from "../components/components/ui/Card";
import { Input } from "../components/components/ui/Input";
import { Separator } from "../components/components/ui/Separator";

export const HeaderSection = () => {
  const actionButtons = [
    {
      id: 1,
      title: "Ajouter\nun patient",
      icon: "/Add_New_Patient_White.svg",
      isPrimary: true,
      iconClassName: "w-[42px] h-[42px]",
    },
    {
      id: 2,
      title: "Patients\nen attente",
      icon: "/picto-patient-attente.svg",
      isPrimary: true,
      iconClassName: "w-[42px] h-[42px]",
    },
    {
      id: 3,
      title: "Patients\narchivés",
      icon: "/Picto_archives.svg",
      isPrimary: false,
      iconClassName: "w-[39px] h-[39px]",
    },
    {
      id: 4,
      title: "Voir les\naidants",
      icon: "/shape-1.svg",
      isPrimary: false,
      iconClassName: "w-[39px] h-[37px]",
    },
  ];

  return (
    <section className="w-full max-w-[1142px] mx-auto px-4 md:px-0">
<div className="w-full bg-[url(/union-8.svg)] bg-no-repeat bg-cover py-8 md:py-16 px-4 md:px-8">
<h1 className="font-black text-2xl md:text-[40px] text-gris-fonc text-center [font-family:'Nunito',Helvetica] leading-8 md:leading-10 mb-6 md:mb-10">
          Les patients du cabinet
        </h1>

        <div className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-4 mb-8 md:mb-16">
          {actionButtons.map((button) => (
            <Button
              key={button.id}
              variant={button.isPrimary ? "default" : "outline"}
              className={`h-14 md:h-20 px-4 md:px-6 rounded-[100px] ${
                button.isPrimary
                  ? "bg-[#3ce0a0] hover:bg-[#3ce0a0]/90 text-white"
                  : "border-2 border-[#3ce0a0] text-[#3ce0a0] hover:bg-transparent"
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4 w-full justify-center md:justify-start">
                {button.hasCustomIcon ? (
                  <div className="relative">
                    {button.id === 1 && (
                      <div className="relative w-7 md:w-11 h-[28px] md:h-[41px]">
                        <div className="absolute w-6 md:w-9 h-[28px] md:h-[41px] top-0 left-0">
                          <img
                            className="absolute w-[24px] md:w-[34px] h-[26px] md:h-[39px] top-px left-px"
                            alt="Union"
                            src={button.icon}
                          />
                        </div>
                        <div className="absolute w-3.5 md:w-5 h-3.5 md:h-5 top-2.5 md:top-4 left-3.5 md:left-6 bg-white rounded-[9.96px/10px] border-[3px] border-solid border-[#3ce0a0]" />
                        <img
                          className="absolute w-1.5 md:w-2 h-1.5 md:h-2 top-[14px] md:top-[22px] left-[20px] md:left-[30px]"
                          alt="Union"
                          src="/union-4.svg"
                        />
                      </div>
                    )}
                    {button.id === 3 && (
                      <div className="relative w-[28px] md:w-[38px] h-[28px] md:h-[38px] bg-[url(/vector-4.svg)] bg-[100%_100%]">
                        <img
                          className="w-2 md:w-2.5 h-2 md:h-2.5 absolute top-3.5 md:top-5 left-2.5 md:left-3.5"
                          alt="Union"
                          src="/union.svg"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <img
                    className={`${
                      button.iconClassName
                        ? `w-[32px] h-[32px] md:${button.iconClassName}`
                        : "w-7 h-7 md:w-10 md:h-10"
                    }`}
                    alt={`Icon for ${button.title}`}
                    src={button.icon}
                  />
                )}
                <span className="font-black text-sm md:text-base [font-family:'Nunito',Helvetica] leading-4 whitespace-pre-line">
                  {button.title}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <Card className="border-none shadow-none">
        <CardContent className="p-4 md:p-0">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-full flex justify-center items-center md:items-center">
              <div className="relative w-[120px] md:w-[178px] h-[120px] md:h-[178px] mx-auto md:mx-0">
                <img
                  className="absolute w-[96px] md:w-[143px] h-[96px] md:h-[143px] top-[24px] md:top-[35px] left-0"
                  alt="Search background"
                  src="/search-icon.svg"
                />
              </div>
            </div>

            {/* Content on the right */}
            <div className="flex flex-col w-full items-center justify-center md:items-center">
              <h2 className="text-[#3ce0a0] font-bold text-lg md:text-xl mb-1">
                Recherchez un patient
              </h2>
              <p className="text-gray-500 text-xs md:text-sm mb-4 text-center md:text-left">
                Entrez les premières lettres du nom du patient pour lancer la
                recherche
              </p>

              <div className="flex flex-col gap-4 w-full max-w-md">
                <Input
                  className="rounded-[40px] border-gray-300"
                  placeholder="Rechercher..."
                />
              </div>
            </div>
          </div>

          <Separator className="w-full h-px" />
        </CardContent>
      </Card>
    </section>
  );
};