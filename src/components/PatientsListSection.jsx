import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../src/components/components/ui/Avatar";
import { Card, CardContent } from "../../src/components/components/ui/Card";

const patients = [
  {
    id: 1,
    name: "Cécile Moulin",
    age: 81,
    avatar: "/avatar-patiente-3-1.avif",
    phone: "04 77 36 65 95",
    email: "cecilemoulin@gmail.com",
    address: "16 rue Maurice Bouchor\n68007 Lyon",
    selected: false,
  },
  {
    id: 2,
    name: "Juliette Masselis",
    age: 39,
    avatar: "/avatar-patiente-1.avif",
    phone: "04 77 36 65 95",
    email: "cecilemoulin@gmail.com",
    address: "16 rue Maurice Bouchor\n68007 Lyon",
    selected: true,
  },
  {
    id: 3,
    name: "René Guitay",
    age: 81,
    avatar: "/avatar-patient.avif",
    phone: "04 77 36 65 95",
    email: "cecilemoulin@gmail.com",
    address: "16 rue Maurice Bouchor\n68007 Lyon",
    selected: false,
  },
  {
    id: 4,
    name: "Clara Camalet",
    age: 31,
    avatar: "/avatar-patiente-1.avif",
    phone: "04 77 36 65 95",
    email: "cecilemoulin@gmail.com",
    address: "16 rue Maurice Bouchor\n68007 Lyon",
    selected: true,
  },
  {
    id: 5,
    name: "Lola Dufour",
    age: 81,
    avatar: "/avatar-patiente-2-1.avif",
    phone: "04 77 36 65 95",
    email: "cecilemoulin@gmail.com",
    address: "16 rue Maurice Bouchor\n68007 Lyon",
    selected: false,
  },
  {
    id: 6,
    name: "Etienne Morlé",
    age: 81,
    avatar: "/avatar-patient-3-2.avif",
    phone: "04 77 36 65 95",
    email: "cecilemoulin@gmail.com",
    address: "16 rue Maurice Bouchor\n68007 Lyon",
    selected: true,
  },
];

export const PatientsListSection = () => {
  return (
    <section className="w-full max-w-[781px] mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </section>
  );
};

const PatientCard = ({ patient }) => {
  const { name, age, avatar, phone, email, address, selected } = patient;

  return (
    <div className="w-full mt-8">
      <div className="relative flex flex-col items-center">
      <div className="relative -mb-6 z-10">
          <div className="w-24 h-24 rounded-full flex items-center justify-center">
            <Avatar className="w-[88px] h-[88px] border-4 border-white rounded-full overflow-hidden">
              <AvatarImage
                src={avatar}
                alt={`Avatar de ${name}`}
                className="w-full h-full object-cover"
              />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Card
          className={`rounded-[10px] ${
            selected ? "w-full bg-white border-2 border-[#3ce0a0]" : " w-full bg-[#e4f4ed] border-0"
          }`}
        >
             <div className="mt-4 text-center">
            <h3 className="p-4 font-black text-vert text-base tracking-[0.16px] leading-[19.5px] font-['Nunito',Helvetica]">
              {name}
            </h3>
            <p className="font-normal text-sm text-[#363636] tracking-[0] leading-[17.6px] font-['Nunito',Helvetica]">
              {age} ans
            </p>
          </div>
            <div className="flex justify-center mt-4">
            <img
                className="w-full md:w-[179px] h-px object-cover my-2"
                alt="Filet"
                src="/filet.svg"
              />
            </div>
          <CardContent className="p-4 md:p-8 md:pt-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <img
                  className="w-[19px] h-[19px] mr-3"
                  alt="Picto téléphone"
                  src="/picto-t-l.svg"
                />
                <span className="font-['Nunito',Helvetica] font-black text-[#363636] text-xs tracking-[0.12px]">
                  {phone}
                </span>
              </div>

              <div className="flex items-start">
                <img
                  className="w-5 h-4 mr-3"
                  alt="Picto lettre"
                  src="/picto-lettre.svg"
                />
                <span className="font-['Nunito',Helvetica] font-black text-[#363636] text-xs tracking-[0.12px]">
                  {email}
                </span>
              </div>

              <div className="flex items-start">
                <div className="w-4 h-5 mr-3 relative flex-shrink-0">
                  <img
                    className="absolute w-2 h-2 top-1 left-1"
                    alt="Vector"
                    src="/vector.svg"
                  />
                  <img
                    className="absolute w-4 h-5 top-0 left-0"
                    alt="Vector"
                    src="/vector-2.svg"
                  />
                </div>
                <span className="font-['Nunito',Helvetica] font-black text-[#363636] text-xs tracking-[0.12px] whitespace-pre-line">
                  {address}
                </span>
              </div>

              <div className="flex items-center mt-4">
                <img
                  className="w-2.5 h-2.5 mr-3"
                  alt="Union"
                  src="/union.svg"
                />
                <span className="font-['Nunito',Helvetica] font-black text-[#363636] text-xs tracking-[0.12px]">
                  voir ses ordonnances
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};