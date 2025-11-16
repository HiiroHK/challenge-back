# Codi Cash

### 📅 **PLANEJAMENTO SEMANAL – PROJETO CODI CASH**

---

### ✅ **Semana 1 (29/04 a 05/05) – Kickoff e Setup**

- Estudo completo do desafio e requisitos
- Definir stack (React + TailwindCSS recomendado)
- Criar repositório no GitHub com README inicial ( https://github.com/codiacademy/ChallengeVII-noite-rio-branco-segundas)
- Setup do projeto com Vite.js
- Instalar e configurar TailwindCSS
- Definir estrutura de pastas: `components/`, `pages/`, `services/`, `assets/`
- Criar roteamento básico com React Router DOM
- Criar layout inicial (Header, Sidebar)

> Entregável: Projeto inicial com estrutura, navegação e layout básico no GitHub
> 

---

### ✅ **Semana 2 (06/05 a 12/05) – Módulo de Dashboard**

- Criar os componentes de **cards de KPIs**
- Implementar **gráficos (Chart.js ou Recharts)**
- Estrutura para filtros (semana, mês, ano)
- Dados mockados para visualização
- Responsividade do dashboard

> Entregável: Dashboard funcional e responsivo com dados mockados
> 

---

### ✅ **Semana 3 (13/05 a 19/05) – Módulo de Vendas (Parte 1)**

- Criar formulário de cadastro de venda
    - Nome do curso
    - Tipo do curso ( online ou presencial )
    - Cliente (nome, e-mail, telefone)
    - Valor bruto, descontos, impostos, comissões
    - Cálculo automático do valor final
- Validação de campos

> Entregável: Formulário funcional com estados controlados e feedback visual
> 

---

### ✅ **Semana 4 (20/05 a 26/05) – Módulo de Vendas (Parte 2)**

- Criar lista de vendas cadastradas (mockadas)
- Adicionar filtros por período e tipo de curso
- Estilização responsiva da tabela
- Modais para edição/visualização de venda (opcional)

> Entregável: Tabela de vendas funcional com filtros e dados mockados
> 

---

### ✅ **Semana 5 (27/05 a 02/06) – Módulo de Gastos (Parte 1)**

- Criar formulário para cadastro de despesas fixas e variáveis
- Definir categorias e estrutura do formulário
- Validação e feedback visual

> Entregável: Formulário de cadastro de despesas com categorização
> 

---

### ✅ **Semana 6 (03/06 a 09/06) – Módulo de Gastos (Parte 2)**

- Lista de gastos com filtros por categoria
- Edição e exclusão de lançamentos
- Histórico de gastos
- Layout mobile responsivo

> Entregável: Tabela de gastos com filtros e ações completas
> 

---

### ✅ **Semana 7 (10/06 a 16/06) – Gráficos e Visualizações**

- Gráfico comparativo de receitas e despesas
- Gráfico de pizza para distribuição de gastos
- Aplicar filtros por intervalo de tempo e categorias

> Entregável: Tela de visualização gráfica com dados mockados
> 

---

### ✅ **Semana 8 (17/06 a 23/06) – Experiência do Usuário (UX)**

- Refino visual da interface (cores, espaçamento, ícones)
- Adicionar modais de confirmação
- Feedbacks visuais: erro, sucesso, carregamento
- Testar acessibilidade e navegação mobile

> Entregável: Interface refinada com feedbacks visuais
> 

---

### ✅ **Semana 9 (24/06 a 30/06) – Deploy e Documentação**

- Subir projeto na Vercel ou Netlify
- Escrever README com instruções de uso e instalação
- Documentar estrutura de componentes
- Testar o sistema em diferentes tamanhos de tela

> Entregável: Link de deploy funcionando + documentação no GitHub
> 

---

### ✅ **Semana 10 (01/07 a 11/07) – Apresentação Final**

- Gravar vídeo (pitch) demonstrando o projeto (ou preparar slides)
- Revisar todos os pontos do desafio
- Realizar pequenos ajustes com base em feedback
- Enviar entregáveis finais

> Entregável: Apresentação gravada + link do projeto + repositório completo
> 

---

### 📁 Sugestão de Estrutura de Pastas

```jsx

src/
│
├── components/        → Componentes reutilizáveis
├── pages/             → Páginas principais (Dashboard, Vendas, Gastos, etc.)
├─-----─ api/          → Configurações de API futura
├── utils/             → Funções auxiliares (ex: formatação de moeda)
├── assets/            → Ícones, imagens
├── styles/            → Arquivos CSS globais se necessário
└── App.jsx

```

---

### ✅ Dicas Gerais

- Use bibliotecas como:
    - **Recharts** para gráficos
    - **React Hook Form** ou **Zod** para validação de formulários
    - **Heroicons ou Lucide** para ícones
- Trabalhe com **dados simulados (JSON)** para MVP
- Utilize **componentes genéricos reutilizáveis** (Input, Button, Modal)
- Mantenha o código limpo, use ESLint e Prettier
- Faça **commits frequentes e bem descritos**
