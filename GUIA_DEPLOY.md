# 🚀 Guia de Deploy - Nutricionista Ana Paula Nogueira

## Opções de Deploy (Grátis)

### 🏆 Opção 1: Vercel (Recomendado)
- ✅ Mais rápido e simples
- ✅ Otimizado para React/Vite
- ✅ Deploy automático do GitHub
- ✅ SSL grátis
- ✅ CDN global

### 🌐 Opção 2: Netlify
- ✅ Interface amigável
- ✅ Deploy de arraste e solte
- ✅ SSL grátis
- ✅ Formulários nativos

---

## 📋 Pré-requisitos

### 1. Conta no GitHub
Se ainda não tem:
1. Acesse [github.com](https://github.com)
2. Clique "Sign up"
3. Crie sua conta

### 2. Git Instalado
Verifique se tem Git:
```bash
git --version
```

Se não tiver, baixe em: [git-scm.com](https://git-scm.com/downloads)

---

## 🎯 MÉTODO 1: Deploy com Vercel (Mais Rápido)

### Passo 1: Criar Repositório no GitHub

#### 1.1 Inicializar Git no Projeto
Abra o terminal na pasta do projeto:

```bash
# Inicializar repositório
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit - Nutricionista Ana Paula Nogueira website"
```

#### 1.2 Criar Repositório no GitHub
1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `nutricionista-ana-paula`
3. Visibilidade: **Private** (recomendado)
4. **NÃO** marque "Add README"
5. Clique **"Create repository"**

#### 1.3 Conectar e Enviar Código
Copie os comandos que aparecem na tela do GitHub (similar a):

```bash
git remote add origin https://github.com/SEU_USUARIO/nutricionista-ana-paula.git
git branch -M main
git push -u origin main
```

**Importante:** Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

---

### Passo 2: Deploy na Vercel

#### 2.1 Criar Conta na Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize a Vercel no GitHub

#### 2.2 Importar Projeto
1. No dashboard da Vercel, clique **"Add New... → Project"**
2. Selecione o repositório `nutricionista-ana-paula`
3. Clique **"Import"**

#### 2.3 Configurar Build Settings
A Vercel detecta automaticamente Vite. Confirme:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

✅ Deixe como está e clique **"Deploy"**

#### 2.4 Adicionar Variáveis de Ambiente

**IMPORTANTE:** Antes do deploy funcionar 100%, adicione suas keys:

1. No projeto Vercel, vá em **"Settings" → "Environment Variables"**
2. Adicione cada variável:

```
VITE_EMAILJS_SERVICE_ID = service_mt461d9
VITE_EMAILJS_TEMPLATE_ID = template_lyu1toh
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID = template_ks3k3zl
VITE_EMAILJS_PUBLIC_KEY = ASuabRSjlmR9qEgxR
VITE_CALENDLY_LINK = https://calendly.com/mezzoldstudio/intro-call
GEMINI_API_KEY = AIzaSyDLPuxj0aTi_BamBuj1nrEuTS9merkn6H8
```

3. Para cada variável:
   - Cole o **Name** (ex: `VITE_EMAILJS_SERVICE_ID`)
   - Cole o **Value** (ex: `service_mt461d9`)
   - Marque: **Production**, **Preview**, **Development**
   - Clique **"Save"**

#### 2.5 Redesploy
1. Vá em **"Deployments"**
2. Clique nos 3 pontinhos do último deploy
3. Clique **"Redeploy"**
4. Aguarde o build (1-2 minutos)

#### 2.6 Seu Site Está no Ar! 🎉
Vercel gera um link tipo: `https://nutricionista-ana-paula.vercel.app`

---

## 🌐 MÉTODO 2: Deploy com Netlify

### Passo 1: Build Local
Primeiro, faça o build do projeto:

```bash
npm run build
```

Isso cria a pasta `dist` com os arquivos prontos.

### Passo 2: Deploy na Netlify

#### 2.1 Criar Conta
1. Acesse [netlify.com](https://netlify.com)
2. Clique **"Sign up"**
3. Escolha **"GitHub"** ou **"email"**

#### 2.2 Opção A: Deploy Manual (Arraste e Solte)

1. No dashboard Netlify, role até **"Want to deploy a new site without connecting to Git?"**
2. Arraste a pasta **`dist`** para a área indicada
3. Aguarde o upload
4. Seu site está no ar! 🎉

Link tipo: `https://random-name-123456.netlify.app`

#### 2.3 Opção B: Deploy do GitHub (Recomendado)

1. Clique **"Add new site → Import an existing project"**
2. Escolha **"Deploy with GitHub"**
3. Autorize Netlify
4. Selecione `nutricionista-ana-paula`
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Clique **"Deploy site"**

#### 2.4 Adicionar Variáveis de Ambiente

1. Vá em **"Site settings → Build & deploy → Environment"**
2. Clique **"Edit variables"**
3. Adicione todas as variáveis:

```
VITE_EMAILJS_SERVICE_ID = service_mt461d9
VITE_EMAILJS_TEMPLATE_ID = template_lyu1toh
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID = template_ks3k3zl
VITE_EMAILJS_PUBLIC_KEY = ASuabRSjlmR9qEgxR
VITE_CALENDLY_LINK = https://calendly.com/mezzoldstudio/intro-call
GEMINI_API_KEY = AIzaSyDLPuxj0aTi_BamBuj1nrEuTS9merkn6H8
```

4. Clique **"Save"**
5. Vá em **"Deploys"** e clique **"Trigger deploy"**

---

## 🎨 Personalizar Domínio

### Na Vercel:
1. **Settings → Domains**
2. Clique **"Add"**
3. Digite seu domínio (ex: `anapaulanogueira.com`)
4. Siga instruções para configurar DNS

### Na Netlify:
1. **Domain settings → Add custom domain**
2. Digite seu domínio
3. Siga instruções DNS

**DNS gratuito:** Use [Cloudflare](https://cloudflare.com) para gerenciar DNS

---

## ✅ Checklist Pré-Deploy

Antes de fazer deploy, verifique:

- [ ] Todas as API keys configuradas em `.env`
- [ ] Arquivo `.env` NÃO commitado (está no `.gitignore`)
- [ ] Site funciona localmente (`npm run dev`)
- [ ] Build funciona (`npm run build`)
- [ ] Formulário de contato testado
- [ ] Carrossel de notícias funcionando
- [ ] Google Maps exibindo localização
- [ ] Todas as imagens carregando
- [ ] Links externos funcionando

---

## 🐛 Troubleshooting

### Erro: "Build failed"
**Solução:**
```bash
# Teste o build localmente primeiro
npm run build

# Se funcionar local mas falhar no deploy:
# Verifique as variáveis de ambiente
```

### Erro: "EmailJS not working"
**Solução:**
- Verifique se todas as variáveis `VITE_EMAILJS_*` estão configuradas
- Confirme que começam com `VITE_`
- Redesploy após adicionar variáveis

### Erro: "Page not found (404)"
**Solução:**
- Na Vercel/Netlify, adicione arquivo `vercel.json` ou `_redirects`
- Já está configurado no projeto

### Site lento ou não carrega
**Solução:**
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Teste em aba anônima
- Aguarde 2-3 minutos após deploy

---

## 📊 Monitoramento Pós-Deploy

### Analytics (Opcional)
1. **Google Analytics:**
   - Crie conta em [analytics.google.com](https://analytics.google.com)
   - Adicione tracking code ao `index.html`

2. **Vercel Analytics:**
   - Já incluso gratuitamente
   - Veja em **Analytics** no dashboard

### Formulários
- Monitore emails recebidos
- Verifique se auto-reply está chegando
- Teste formulário no site ao vivo

### Performance
- Teste velocidade: [PageSpeed Insights](https://pagespeed.web.dev/)
- Objetivo: Score 90+ em mobile e desktop

---

## 🔄 Atualizações Futuras

Sempre que quiser atualizar o site:

### Com GitHub (Automático):
```bash
# Faça suas mudanças no código
git add .
git commit -m "Descrição da mudança"
git push

# Vercel/Netlify detecta e faz deploy automático!
```

### Manual (Netlify):
```bash
npm run build
# Arraste pasta dist/ para Netlify
```

---

## 🎯 Próximos Passos Após Deploy

1. ✅ Teste o site completo no link de produção
2. ✅ Envie teste no formulário de contato
3. ✅ Verifique se recebeu os 2 emails
4. ✅ Teste carrossel de notícias
5. ✅ Compartilhe link com amigos para feedback
6. ✅ Configure domínio próprio (opcional)
7. ✅ Configure Google Analytics (opcional)

---

## 📞 Suporte

**Documentação:**
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)

**Comunidade:**
- Discord Vercel: [vercel.com/discord](https://vercel.com/discord)
- Fórum Netlify: [answers.netlify.com](https://answers.netlify.com)

---

## 🎉 Resultado Final

Seu site estará disponível 24/7 com:
- ✅ HTTPS (SSL) automático
- ✅ CDN global (carregamento rápido)
- ✅ Deploys automáticos do GitHub
- ✅ Backup automático
- ✅ 99.9% uptime
- ✅ Grátis para sempre

**Link de produção:** `https://seu-site.vercel.app`

---

**Boa sorte com o deploy! 🚀**
