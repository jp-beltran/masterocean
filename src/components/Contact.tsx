import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="flex flex-row items-center justify-between px-60 h-[60rem]"
      id="contact"
    >
      <div className="border-l-4 pl-10 border-secundaryRed">
        <h1 className="font-alvar-bold text-2xl">
          {language === "pt" ? "CONTATO" : "CONTACT"}{" "}
          <span className="text-secundaryRed">- MASTER OCEAN ANGOLA</span>
        </h1>
        <h1 className="text-6xl font-alvar-bold tracking-tighter uppercase">
          {language === "pt"
            ? "Começar hoje a \n tratar de soluções \n eficientes"
            : "Start today \n solving efficient \n solutions"}
        </h1>
        <p className="font-alvar-light text-2xl max-w-[450px] mt-10">
          {language === "pt"
            ? "Sua mensagem é importante para nós. Entre em contato e juntos, daremos início à transformação da sua empresa."
            : "Your message is important to us. Get in touch and together we will start transforming your company."}
        </p>
      </div>

      <div className="w-1/2">
        <form
          className="flex flex-col gap-4"
          action="https://submit-form.com/2JnAVptIM"
          method="POST"
        >
          <input type="hidden" name="_replyto" value={formData.email} />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={language === "pt" ? "Nome" : "Name"}
            className="bg-secundaryRed rounded-4xl p-4 text-white border-0"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={language === "pt" ? "E-mail" : "Email"}
            className="bg-secundaryRed rounded-4xl p-4 text-white border-0"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={
              language === "pt" ? "Breve descrição" : "Brief description"
            }
            className="bg-secundaryRed rounded-4xl text-white border-0 h-[220px] w-full p-4 text-left align-text-top resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-secundaryRed cursor-pointer rounded-4xl self-end px-4 py-1 font-alvar-bold text-lg text-white transition-transform duration-300 hover:scale-105 "
          >
            {language === "pt" ? "ENVIAR" : "SEND"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
