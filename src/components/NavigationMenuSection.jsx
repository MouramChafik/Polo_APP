import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../src/components/components/ui/Accordion";
import { Button } from "../../src/components/components/ui/Button";

export const NavigationMenuSection = () => {
  const menuItems = [
    { id: "accueil", label: "Accueil", active: false },
    { id: "ordonnances", label: "Mes ordonnances", active: false },
    {
      id: "patients",
      label: "Mes patients",
      active: true,
      subItems: [
        { id: "tous", label: "Tous les patients" },
        { id: "attente", label: "Patients en attente" },
        { id: "archives", label: "Patients archivés" },
      ],
    },
    { id: "pharmacies", label: "Mes pharmacies", active: false },
    { id: "documents", label: "Mes documents", active: false },
    { id: "pilbeez", label: "Mes Pilbeez", active: false },
    { id: "parrainer", label: "Parrainer un cabinet", active: false },
  ];

  return (
    <nav className="w-full h-full ">
      <div className="relative w-full h-full bg-vert ">
        <div className="pt-[65px] px-8 md:px-[60px]">
          <ul className="flex flex-col items-start gap-8">
            {menuItems.map((item) => (
              <li key={item.id} className="w-full">
                {item.subItems ? (
                  <div className="relative">
                    {item.active && (
                     <img
                     className="absolute w-2.5 h-8 -left-8 md:-left-[60px] top-0"
                     alt="Marqueur"
                     src="/marqueur.svg"
                   />
                   
                    )}
                    <Accordion
                      type="single"
                      collapsible
                      defaultValue={item.active ? item.id : undefined}
                      className="w-full"
                    >
                      <AccordionItem value={item.id} className="border-none">
                        <AccordionTrigger
                          className={`p-0 hover:no-underline [&[data-state=open]>svg]:rotate-180 ${
                            item.active
                              ? "text-[#363636] font-black"
                              : "text-white font-black"
                          } [font-family:'Nunito',Helvetica] text-lg`}
                        >
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="pt-1.5 pb-0">
                          <ul className="flex flex-col gap-1.5 ml-5">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.id}>
                                <Button
                                  variant="link"
                                  className="p-0 h-auto [font-family:'Nunito',Helvetica] font-black text-white text-xs leading-[20.7px] hover:text-white/90"
                                >
                                  {subItem.label}
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ) : (
                  <Button
                    variant="link"
                    className={`p-0 h-auto [font-family:'Nunito',Helvetica] font-black ${
                      item.active ? "text-[#363636]" : "text-white"
                    } text-lg hover:text-white/90`}
                  >
                    {item.label}
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact buttons at the bottom */}
        <div className="absolute w-[139px] h-[60px] bottom-[60px] left-0 mb-[2px] sm:mb-0">
          <div className="relative h-[60px] rounded-[100px_0px_0px_100px]">
            <div className="absolute w-[139px] h-[60px] top-0 left-0 bg-white rounded-[0px_100px_100px_0px]" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-5 left-[84px] h-[18px] w-6 p-0"
            >
              <MailIcon className="h-full w-full" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-[19px] left-[42px] h-[22px] w-[21px] p-0"
            >
              <PhoneIcon className="h-full w-full" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};