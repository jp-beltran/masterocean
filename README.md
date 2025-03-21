# 🐚 MasterOcean Angola - Website Institucional

![MasterOcean Logo](./src/assets/logo.svg)
![image](https://github.com/user-attachments/assets/4a095a48-e391-4eb5-a9bf-60531c82434f)


Website institucional da **MasterOcean Angola**, focado em apresentar as soluções da empresa nos setores de petróleo, gás, engenharia, logística e sustentabilidade.

---

## 📌 Índice

- [🧠 Sobre o projeto](#-sobre-o-projeto)
- [🚀 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [⚙️ Instalação](#️-instalação)
- [🌐 Estrutura de pastas](#-estrutura-de-pastas)
- [✉️ Envio de mensagens (Email SMTP)](#️-envio-de-mensagens-email-smtp)
- [📝 Licença](#-licença)

---

## 🧠 Sobre o projeto

Este site foi desenvolvido com foco em performance, escalabilidade e suporte multilíngue (**Português/Inglês**). Ele inclui:

- Componentes reutilizáveis com **React + TypeScript**
- Sistema de **internacionalização manual** via `Context API`
- Envio de mensagens via **formulário de contato integrado ao EmailJS ou SMTP**
- Totalmente responsivo e adaptado a ambientes corporativos

---

## 🚀 Tecnologias utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/) ou [NodeMailer](https://nodemailer.com/) (opcional via backend)
- [Vite](https://vitejs.dev/) (build tool)
- [Context API (React)](https://reactjs.org/docs/context.html)

---

## ⚙️ Instalação

### ✅ Pré-requisitos

- Node.js `>=18.x`
- NPM ou Yarn

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/masterocean-site.git

# Acesse o diretório
cd masterocean-site

# Instale as dependências
npm install
# ou
yarn

# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Estrutura de pastas

```
src/
├── assets/              # Imagens e Gifs
├── components/          # Componentes React (Header, Hero, Footer etc.)
├── context/             # LanguageContext.tsx (PT/EN)
├── App.tsx              # Composição principal dos componentes
├── main.tsx             # Entrada principal da aplicação
```

---

## ✉️ Envio de mensagens (Email SMTP)

### ✔️ Opção 1 – EmailJS (frontend)

Configure suas chaves e templates diretamente no formulário de contato (`Contact.tsx`):

```tsx
emailjs.send("service_xxx", "template_xxx", data, "publicKey_xxx");
```

### ✔️ Opção 2 – SMTP (recomendado)

Crie um backend com `Node.js + Nodemailer` e conecte o formulário ao seu endpoint `/send`. Veja mais no arquivo `smtp-server.ts` (exemplo incluído).

---

## 🌍 Suporte Multilíngue

O botão `PT/EN` no `Header` alterna entre os idiomas dinamicamente, afetando todos os componentes da página.

Exemplo:

```tsx
const { language, toggleLanguage } = useLanguage();

return (
  <button onClick={toggleLanguage}>
    {language === "pt" ? "EN" : "PT"}
  </button>
);
```

---

## 📝 Licença

Este projeto é **privado** e de uso exclusivo da empresa **MasterOcean Angola**. Todos os direitos reservados.
