import React from "react";
import Container from "./container";
import { MailIcon, PhoneCallIcon } from "lucide-react";
import ContactForm from "./formulaire/form";

export default function Contact() {
  return (
    <div id="contact" className="pt-20 pb-[100px]">
      <Container>
        {" "}
        {/* titre */}
        <div className="flex flex-col md:flex-row gap-20">
          <div className="space-y-5 flex-1/3">
            <div className="h-1 w-16 rounded-full bg-secondary mb-10"></div>
            <h1 className=" text-[33px] lg:text-5xl font-clash uppercase">
              Let’s get in touch
            </h1>
            <p className="text-white/75">
              Feel free to both ask questions and send business inquries.
            </p>
            <div className="h-[1px] w-full bg-white/20"></div>
            <span className="flex items-center gap-2">
              <MailIcon size={20} className="text-secondary" />
              <p className="text-white/75">djzoumanto@gmail.com</p>
            </span>
            <span className="flex items-center gap-2">
              <PhoneCallIcon size={20} className="text-secondary" />
              <p className="text-white/75">+41 78 855 61 03</p>
            </span>
          </div>
          <div className="flex-2/3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
