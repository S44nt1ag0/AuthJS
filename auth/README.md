# 🔐 Auth System

Um sistema de autenticação moderno construído com **Next.js 15** e **Auth.js (NextAuth)**.

## Preview

![novo1](https://github.com/user-attachments/assets/76f9e4ac-6972-4233-9330-638ae98c3c61)
![imageedit_5_2001798374](https://github.com/user-attachments/assets/0c8fb2fb-1a0c-43f5-a809-97524209d477)
![3](https://github.com/user-attachments/assets/b773de0b-99ea-4a8d-bb49-25e6a6cf7fa2)

## ✨ Features

- 🔑 Autenticação com credenciais
- 🎨 Interface moderna com Tailwind CSS
- 🛡️ Proteção de rotas
- 📱 Design responsivo
- ⚡ Performance otimizada

## 🚀 Como usar

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:
```env
AUTH_SECRET=sua_chave_secreta_aqui
```

### 3. Executar o projeto
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do projeto

```
auth/
├── app/
│   ├── dashboard/     # Página protegida
│   ├── login/         # Página de login
│   └── page.tsx       # Página inicial
├── components/        # Componentes reutilizáveis
├── auth.ts           # Configuração do Auth.js
└── README.md
```

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **Auth.js** - Autenticação
- **Tailwind CSS** - Estilização
- **TypeScript** - Tipagem estática

## 📝 Licença

MIT
