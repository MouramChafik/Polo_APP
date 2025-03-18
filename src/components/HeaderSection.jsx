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
      icon: "/union-10.svg",
      additionalIcons: [
        {
          src: "/union-4.svg",
          className: "w-2 h-2 absolute top-[22px] left-[30px]",
        },
      ],
      isPrimary: true,
      hasCustomIcon: true,
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
      icon: "/vector-4.svg",
      isPrimary: false,
      additionalIcons: [
        { src: "/union.svg", className: "w-2.5 h-2.5 absolute top-5 left-3.5" },
      ],
      hasCustomIcon: true,
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
      <div className="w-full bg-[url(/union-8.svg)] bg-[100%_100%] pt-8 md:pt-12 pb-8 md:pb-16">
        <h1 className="font-black text-2xl md:text-[40px] text-gris-fonc text-center [font-family:'Nunito',Helvetica] leading-8 md:leading-10 mb-6 md:mb-10">
          Les patients du cabinet
        </h1>

        <div className="grid grid-cols-2 md:flex md:justify-center gap-2 md:gap-4 mb-8 md:mb-16">
          {actionButtons.map((button) => (
            <Button
              key={button.id}
              variant={button.isPrimary ? "default" : "outline"}
              className={`h-16 md:h-20 px-3 md:px-6 rounded-[100px] ${
                button.isPrimary
                  ? "bg-[#3ce0a0] hover:bg-[#3ce0a0]/90 text-white"
                  : "border-2 border-[#3ce0a0] text-[#3ce0a0] hover:bg-transparent"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center md:gap-4">
                {button.hasCustomIcon ? (
                  <div className="relative mb-2 md:mb-0">
                    {button.id === 1 && (
                      <div className="relative w-8 md:w-11 h-[30px] md:h-[41px]">
                        <div className="absolute w-7 md:w-9 h-[30px] md:h-[41px] top-0 left-0">
                          <img
                            className="absolute w-[26px] md:w-[34px] h-[28px] md:h-[39px] top-px left-px"
                            alt="Union"
                            src={button.icon}
                          />
                        </div>
                        <div className="absolute w-4 md:w-5 h-4 md:h-5 top-3 md:top-4 left-4 md:left-6 bg-white rounded-[9.96px/10px] border-[3px] border-solid border-[#3ce0a0]" />
                        <img
                          className="absolute w-1.5 md:w-2 h-1.5 md:h-2 top-[16px] md:top-[22px] left-[22px] md:left-[30px]"
                          alt="Union"
                          src="/union-4.svg"
                        />
                      </div>
                    )}
                    {button.id === 3 && (
                      <div className="relative w-[30px] md:w-[38px] h-[30px] md:h-[38px] bg-[url(/vector-4.svg)] bg-[100%_100%]">
                        <img
                          className="w-2 md:w-2.5 h-2 md:h-2.5 absolute top-4 md:top-5 left-3 md:left-3.5"
                          alt="Union"
                          src="/union.svg"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <img
                    className={`${button.iconClassName || "w-8 h-8 md:w-10 md:h-10"} mb-2 md:mb-0`}
                    alt={`Icon for ${button.title}`}
                    src={button.icon}
                  />
                )}
                <span className="font-black text-sm md:text-base [font-family:'Nunito',Helvetica] leading-4 whitespace-pre-line text-center md:text-left">
                  {button.title}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <Card className="border-none shadow-none">
        <CardContent className="p-4 md:p-0">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-[120px] md:w-[178px] h-[120px] md:h-[178px] mb-4">
              <img
                className="absolute w-[96px] md:w-[143px] h-[96px] md:h-[143px] top-[24px] md:top-[35px] left-0"
                alt="Search background"
                src="/group.png"
              />
              <img
                className="absolute w-[92px] md:w-[138px] h-[90px] md:h-[134px] top-7 md:top-11 left-[3px] md:left-[5px]"
                alt="Vector"
                src="/vector-13.svg"
              />
              <img
                className="absolute w-[90px] md:w-[136px] h-[90px] md:h-[136px] top-0 left-[28px] md:left-[42px]"
                alt="Vector"
                src="/vector-9.svg"
              />
              <img
                className="absolute w-[77px] md:w-[116px] h-[77px] md:h-[116px] top-3 md:top-5 left-[41px] md:left-[62px]"
                alt="Vector"
                src="/vector-6.svg"
              />
              <img
                className="absolute w-[62px] md:w-[94px] h-[62px] md:h-[94px] top-[14px] md:top-[21px] left-[42px] md:left-[63px]"
                alt="Vector"
                src="/vector-9.svg"
              />
              <img
                className="absolute w-[53px] md:w-20 h-[53px] md:h-20 top-[23px] md:top-[35px] left-[51px] md:left-[77px]"
                alt="Vector"
                src="/vector-8.svg"
              />
            </div>

            <h2 className="text-[#3ce0a0] font-bold text-lg md:text-xl mb-1">
              Recherchez un patient
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mb-4 text-center">
              Entrez les premières lettres du nom du patient pour lancer la
              recherche
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
              <Input
                className="rounded-md border-gray-300"
                placeholder="Rechercher..."
              />
              <Button
                variant="outline"
                className="border-gray-300 text-gray-500"
              >
                Réinitialiser
              </Button>
            </div>
          </div>

          <Separator className="w-full h-px" />
        </CardContent>
      </Card>
    </section>
  );
};