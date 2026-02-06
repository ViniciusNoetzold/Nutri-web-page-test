# 🔄 Como Atualizar o Site Após Deploy

## 📝 Processo de Atualização (3 Passos)

Sempre que você fizer mudanças no código e quiser publicar:

### **Passo 1: Salvar Mudanças Localmente**
```bash
# Adiciona todos os arquivos modificados
git add .

# Cria um "checkpoint" com descrição do que mudou
git commit -m "Descrição da mudança"
```

**Exemplos de mensagens de commit:**
- `git commit -m "Atualizado telefone de contato"`
- `git commit -m "Adicionadas novas fotos de produtos"`
- `git commit -m "Corrigido erro no formulário"`
- `git commit -m "Atualizado endereço no mapa"`

### **Passo 2: Enviar para GitHub**
```bash
git push
```

### **Passo 3: Deploy Automático! ✨**
- **Vercel/Netlify detectam automaticamente**
- **Fazem build e deploy em 1-2 minutos**
- **Seu site é atualizado!**

---

## 🎯 Fluxo Completo de Atualização

```bash
# Exemplo prático:

# 1. Faça suas mudanças no código (edite arquivos)

# 2. Salve no Git
git add .
git commit -m "Atualizada seção de serviços"

# 3. Envie para produção
git push

# 4. Aguarde 1-2 minutos
# 5. Seu site está atualizado! 🎉
```

---

## ⚡ Atalho Rápido (Um Comando)

```bash
# Adiciona, commita e envia de uma vez
git add . && git commit -m "Sua mensagem aqui" && git push
```

**Exemplo:**
```bash
git add . && git commit -m "Atualizado horário de atendimento" && git push
```

---

## 🔍 Verificar Status Antes de Enviar

```bash
# Ver quais arquivos foram modificados
git status

# Ver diferenças no código
git diff
```

---

## 📊 Acompanhar Deploy

### Na Vercel:
1. Vá em [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique no seu projeto
3. Veja em **"Deployments"**
4. Status: Building → Ready ✅

### Na Netlify:
1. Vá em [app.netlify.com](https://app.netlify.com)
2. Clique no seu site
3. Veja em **"Deploys"**
4. Status: Building → Published ✅

---

## 🚨 Problemas Comuns

### "Nothing to commit"
**Causa:** Você não salvou os arquivos ou não fez mudanças

**Solução:**
```bash
# Salve os arquivos no editor primeiro (Ctrl+S)
# Depois tente novamente
git add .
git commit -m "Sua mensagem"
```

### "Please tell me who you are"
**Causa:** Git não sabe seu nome/email

**Solução:**
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

### "Failed to push"
**Causa:** Conflito ou falta permissão

**Solução:**
```bash
# Puxe as mudanças remotas primeiro
git pull

# Depois envie
git push
```

---

## 💡 Dicas Importantes

### ✅ SEMPRE faça antes de enviar:
1. **Teste localmente** (`npm run dev`)
2. **Verifique se funciona** (clique em tudo)
3. **Commit com mensagem clara**
4. **Push para produção**

### ⚠️ NUNCA faça:
- ❌ Commit do arquivo `.env` (já está no .gitignore)
- ❌ Commit da pasta `node_modules` (já está no .gitignore)
- ❌ Push sem testar localmente

---

## 📅 Tipos Comuns de Atualização

### 1. Atualizar Texto/Conteúdo
```bash
# Edite o arquivo
# Exemplo: src/components/About.jsx

git add .
git commit -m "Atualizada descrição sobre a nutricionista"
git push
```

### 2. Trocar Imagens
```bash
# Substitua a imagem em public/ ou src/assets/

git add .
git commit -m "Atualizadas fotos da clínica"
git push
```

### 3. Mudar Cores/Estilo
```bash
# Edite src/index.css ou tailwind.config.js

git add .
git commit -m "Alteradas cores do tema"
git push
```

### 4. Adicionar Nova Seção
```bash
# Crie novo componente ou edite existente

git add .
git commit -m "Adicionada seção de depoimentos"
git push
```

### 5. Corrigir Bug
```bash
# Corrija o código

git add .
git commit -m "Corrigido erro no botão de contato"
git push
```

---

## 🔄 Reverter Mudanças (Se Errou)

### Antes do Commit:
```bash
# Desfazer mudanças em arquivo específico
git checkout -- nome-do-arquivo.jsx

# Desfazer todas as mudanças
git reset --hard
```

### Depois do Push:
```bash
# Voltar para commit anterior
git revert HEAD
git push
```

---

## 📱 Workflow Diário Recomendado

**Manhã:**
```bash
git pull  # Baixa últimas mudanças (se trabalhar em múltiplos lugares)
```

**Durante o dia:**
```bash
# Faça mudanças
# Teste localmente
# Salve
```

**Ao finalizar:**
```bash
git add .
git commit -m "Descrição do que fez hoje"
git push
```

---

## ⏱️ Tempo de Deploy

| Plataforma | Tempo Médio |
|------------|-------------|
| Vercel     | 30s - 1min  |
| Netlify    | 1 - 2min    |

**Depois do push, aguarde 1-2 minutos e acesse seu site para ver as mudanças!**

---

## 🎓 Comandos Essenciais - Cola Rápida

```bash
# Ver status
git status

# Adicionar tudo
git add .

# Salvar com mensagem
git commit -m "Sua mensagem"

# Enviar para produção
git push

# Ver histórico
git log --oneline

# Baixar mudanças
git pull
```

---

## ✅ Checklist de Atualização

- [ ] Fiz as mudanças no código
- [ ] Testei localmente (npm run dev)
- [ ] Verifiquei que está tudo funcionando
- [ ] Salvei todos os arquivos (Ctrl+S)
- [ ] `git add .`
- [ ] `git commit -m "mensagem clara"`
- [ ] `git push`
- [ ] Aguardei 1-2 minutos
- [ ] Testei no site publicado
- [ ] Tudo funcionando! 🎉

---

## 🆘 Precisa de Ajuda?

**Git não funciona?**
- Verificar se Git está instalado: `git --version`
- Reinstalar: [git-scm.com](https://git-scm.com)

**Deploy não atualiza?**
1. Verifique se push foi bem-sucedido
2. Veja logs no Vercel/Netlify
3. Limpe cache do navegador (Ctrl+Shift+Delete)

**Esqueci minha mensagem de commit?**
- Sempre use mensagens descritivas!
- Ajuda a lembrar o que mudou depois

---

**Resumo em 3 comandos:**
```bash
git add .
git commit -m "Descreva sua mudança"
git push
```

**Pronto! Seu site atualiza automaticamente! 🚀**
