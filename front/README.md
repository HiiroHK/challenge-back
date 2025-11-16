# Codi Cash

![Status do Projeto: Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

<img src="./.github/Logo.png"/>

O **Codi Cash** é um dashboard de controle financeiro desenvolvido pelo time **Codi Devs RB** (turma noturna da unidade Codi Academy Rio Branco) como parte do Codi Challenge Frontend de 2025. A aplicação permite o gerenciamento completo de despesas, vendas, equipe e folha de pagamento de forma intuitiva e eficiente.

---

### 📋 Tabela de Conteúdos

1.  [Sobre o Projeto](#-sobre-o-projeto)
2.  [Funcionalidades](#-funcionalidades)
3.  [Demonstração](#-demonstração)
4.  [Tecnologias](#-tecnologias)
5.  [Como Rodar o Projeto](#-como-rodar-o-projeto)
6.  [Estrutura de Pastas](#-estrutura-de-pastas)
7.  [Contribuição](#-contribuição)
8.  [Licença](#-licença)
9.  [Contribuidores](#-contribuidores)

---

### 🎯 Sobre o Projeto

Este projeto foi criado para solucionar a necessidade de um controle financeiro centralizado e de fácil visualização para as franquias da Codi Academy. Com o Codi Cash, gestores podem tomar decisões mais assertivas baseadas em dados claros e atualizados sobre as finanças da empresa.

### ✨ Funcionalidades

- ✅ **Dashboard Principal**: Visualização rápida dos principais indicadores financeiros.
- ✅ **Controle de Gastos**: Adicione, edite e categorize todas as despesas.
- ✅ **Controle de Vendas**: Registre vendas e acompanhe a receita.
- ✅ **Gerenciamento de Equipe**: Administre os membros da equipe e suas funções.
- ✅ **Folha de Pagamento**: Calcule e gerencie os salários da equipe.
- 🚧 Banco de Dados _(em desenvolvimento)_

### 🚀 Tecnologias

- [![React](https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
- [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
- [![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
- [![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

### ⚡ Como Rodar o Projeto

#### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- Um gerenciador de pacotes como [NPM](https://www.npmjs.com/).

#### Passo a passo

```bash
# Clone este repositório
$ git clone [https://github.com/CodiChallange/CodiChallange.git](https://github.com/CodiChallange/CodiChallange.git)

# Acesse a pasta do projeto
$ cd CodiChallange

# Instale as dependências
$ npm install

# Inicie o servidor do banco de dados (em um terminal)
$ npm run mock

# Inicie o servidor de desenvolvimento (em outro terminal)
$ npm run dev

# O servidor iniciará na porta 5173. Acesse http://localhost:5173
```

#Login
$ Email: teste@teste.com
$ Senha: 123456

## 📂 Estrutura de Pastas

O projeto está estruturado da seguinte forma:

```
├── mock/
│   ├── db.json/
├── node_modules/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CodiStore/
│   │   ├── Courses/
│   │   ├── Dashboard/
│   │   ├── Expenses/
│   │   ├── Reports/
│   │   ├── Sales/
│   │   ├── Settings/
│   │   ├── Team/
│   │   ├── ui/
│   ├── http/
│   ├── lib/
│   ├── Pages/
│   │   ├── CodiStore/
│   │   ├── Courses/
│   │   ├── Dashboard/
│   │   ├── Expenses/
│   │   ├── Login/
│   │   ├── Reports/
│   │   ├── Sales/
│   │   ├── Settings/
│   │   ├── Team/
│   ├── Routes/
│   ├── services/
│   │   ├── api/
│   ├── App.tsx/
│   ├── index.css/
│   └── main.tsx
│   .gitignore
└── ...
```

## 🙌 Contribuição

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será muito apreciada!

**1.** Faça um fork do projeto.
**2.** Crie uma nova branch `(git checkout -b feature/sua-feature)`.
**3.** Faça o commit das suas alterações `(git commit -m 'feat: Adiciona sua feature')`.
**4.** Envie para a branch original `(git push origin feature/sua-feature)`.
**5.** Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE.md para mais detalhes. (EDITAR/FAZER)

## 💜 Contribuidores

Feito com muito empenho pela equipe **Codi Devs RB**, composta por:

> • [Eduardo Hill](https://github.com/EduardoHill) • [Gabriel Souza](https://github.com/HiiroHK) • [Hellisson Roberto](https://github.com/HelissonRobertoSilva08) • [Jander Figueiredo](https://github.com/Janderff) • [Lucas Crisostomo](https://github.com/cr1sostomo) • [Max Honório](https://github.com/maxhonorio) • [Raila Guia](https://github.com/railaguia) • [Vanessa Samuel](https://github.com/vanessamuels)
