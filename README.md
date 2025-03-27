# 🌊 MasterOcean Angola — Website Institucional

![image](https://github.com/user-attachments/assets/aad7afd3-ba3b-4101-a074-6593875fe3e3)
![image](https://github.com/user-attachments/assets/8ed0429e-ea63-4925-a890-c52a76acaa9b)
![image](https://github.com/user-attachments/assets/6a8b224e-9ff1-4d68-821d-b10eec777654)
Link do projeto: https://masterocean.vercel.app



Este repositório contém o código-fonte do website institucional da **MasterOcean Angola**, desenvolvido como projeto freelance. A empresa atua nos setores de petróleo, gás, engenharia e logística, e o objetivo foi entregar uma plataforma moderna, multilíngue e funcional, representando sua atuação estratégica no mercado.

---

## 📋 Sobre o Projeto

Projeto freelance desenvolvido com foco em:

- ✨ **Identidade visual profissional e moderna**
- 🌍 **Suporte multilíngue (Português/Inglês)**
- ⚙️ **Formulário de contato funcional (via EmailJS ou SMTP personalizado)**
- 📱 **Responsividade para desktop, tablets e smartphones**
- 🧠 **Arquitetura modular em componentes React**

O site foi inteiramente codificado usando **React com TypeScript**, estilizado com **Tailwind CSS**, e otimizado com **Vite** para performance em produção.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [EmailJS](https://www.emailjs.com/) (ou integração SMTP opcional)
- [React Context API](https://reactjs.org/docs/context.html) (para gerenciamento de idioma)
- [Vercel](https://vercel.com/) (para deploy e hospedagem)

---

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens e gifs utilizados
├── components/          # Componentes da interface (Header, Hero, Footer, etc.)
├── context/             # Contexto global para idioma
├── App.tsx              # Composição principal da página
├── main.tsx             # Entrada da aplicação
```

---

## 🌐 Internacionalização

O site é completamente bilíngue (PT/EN), com alternância de idioma feita via botão no `Header`, utilizando `Context API`:

```tsx
const { language, toggleLanguage } = useLanguage();

return (
  <button onClick={toggleLanguage}>
    {language === "pt" ? "EN" : "PT"}
  </button>
);
```

Todos os textos dos componentes principais são renderizados dinamicamente conforme o idioma selecionado.

---

## ✉️ Contato e Formulário

O formulário de contato envia e-mails diretamente para a empresa por duas opções:

- **EmailJS** (frontend)
- **SMTP seguro com Nodemailer** (via backend opcional)

Após envio, o formulário exibe alertas de sucesso ou erro, e os campos são resetados.

---

## 🚀 Deploy

O site foi implantado na [Vercel](https://vercel.com/), com integração contínua via GitHub. Cada `push` na branch principal gera automaticamente um novo deploy de produção.

---

## 🧑‍💻 Projeto Freelance

Este projeto foi desenvolvido sob demanda para a empresa **MasterOcean Angola**, atendendo aos requisitos de:

- Identidade visual institucional
- Interface leve e moderna
- Suporte a dois idiomas
- Integração com e-mail
- Facilidade de atualização futura

---

## 📝 Licença

Este projeto é **privado** e de uso exclusivo da empresa contratante. Todos os direitos reservados a **MasterOcean Angola**.

---

## 🤝 Autor

**Sena — Desenvolvedor Front-End**

[LinkedIn](https://www.linkedin.com) • [GitHub](https://github.com/seu-usuario) • [Portfólio](https://seuportfolio.com)
