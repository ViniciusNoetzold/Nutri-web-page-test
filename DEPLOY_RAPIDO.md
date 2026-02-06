# 🚀 Deploy Rápido - Comandos Essenciais

## ✅ Pré-Deploy Checklist

```bash
# 1. Teste o build localmente
npm run build

# 2. Visualize o build
npm run preview

# 3. Teste formulário e todas funcionalidades
```

---

## 📦 Método 1: Vercel (Recomendado)

### Deploy Rápido (Sem Git)

```bash
# Instale Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy (responda as perguntas)
vercel

# Deploy para produção
vercel --prod
```

### Deploy com GitHub

```bash
# Inicializar Git
git init
git add .
git commit -m "Initial commit"

# Criar repo no GitHub e conectar
git remote add origin https://github.com/SEU_USUARIO/nutricionista-ana-paula.git
git branch -M main
git push -u origin main

# Depois:
# 1. Vá em vercel.com
# 2. Clique "Import Project"
# 3. Selecione seu repositório
# 4. Adicione variáveis de ambiente
# 5. Deploy!
```

---

## 🌐 Método 2: Netlify

### Deploy Manual

```bash
# 1. Faça build
npm run build

# 2. Vá em netlify.com
# 3. Arraste pasta dist/ para Deploy
```

### Deploy CLI

```bash
# Instale Netlify CLI
npm i -g netlify-cli

# Faça login
netlify login

# Deploy
netlify deploy

# Deploy produção
netlify deploy --prod
```

---

## 🔑 Variáveis de Ambiente para Adicionar

**Copie e cole no Vercel/Netlify:**

```
VITE_EMAILJS_SERVICE_ID=service_mt461d9
VITE_EMAILJS_TEMPLATE_ID=template_lyu1toh
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_ks3k3zl
VITE_EMAILJS_PUBLIC_KEY=ASuabRSjlmR9qEgxR
VITE_CALENDLY_LINK=https://calendly.com/mezzoldstudio/intro-call
GEMINI_API_KEY=AIzaSyDLPuxj0aTi_BamBuj1nrEuTS9merkn6H8
```

---

## ✅ Pós-Deploy

```bash
# Teste seu site:
# - Formulário de contato
# - Carrossel de notícias
# - Google Maps
# - Todos os links
```

---

## 🔄 Atualizar Site

```bash
# Com Git:
git add .
git commit -m "Atualização"
git push

# Deploy automático! 🎉
```

**Guia completo:** Veja `GUIA_DEPLOY.md`
