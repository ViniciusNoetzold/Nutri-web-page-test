# 📚 Documentação Completa - Website Nutricionista Ana Paula Nogueira

## 🎯 Visão Geral

Website profissional e moderno para a Nutricionista Ana Paula Nogueira, focado em fornecer informações sobre serviços de nutrição, educação em saúde e facilitar o contato com pacientes.

---

## 🛠️ Tecnologias e Ferramentas

### Framework e Bibliotecas Core

#### **React 18+**
- Framework JavaScript para construção de interfaces de usuário
- Componentes reutilizáveis e state management
- Hooks personalizados e otimização de performance

#### **Vite**
- Build tool moderna e rápida
- Hot Module Replacement (HMR) para desenvolvimento ágil
- Otimização automática de bundle para produção

#### **React Router DOM**
- Roteamento client-side
- Navegação entre páginas sem reload
- Suporte a URLs amigáveis

### UI/UX e Animações

#### **Framer Motion**
- Animações fluidas e profissionais
- Transições entre páginas
- Micro-interações nos componentes
- Efeitos de scroll e hover
- Animações do carrossel de notícias

#### **Tailwind CSS**
- Framework CSS utility-first
- Design system customizado:
  - Paleta de cores Sage green e Slate gray
  - Tipografia responsiva
  - Grid system flexível
- Classes personalizadas para componentes

#### **Lucide React**
- Biblioteca de ícones SVG moderna
- Ícones escaláveis e customizáveis
- Mais de 50 ícones utilizados no site

### Integrações de API

#### **EmailJS**
- Serviço para envio de emails via JavaScript
- Formulário de contato funcional
- Sistema de auto-resposta para clientes
- Variáveis de ambiente:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`

#### **Google Gemini API**
- Inteligência artificial para verificação de notícias
- Análise de conteúdo científico
- Variável de ambiente: `GEMINI_API_KEY`

#### **RSS2JSON**
- Conversão de feeds RSS em JSON
- Busca de notícias científicas de:
  - Harvard Health
  - PubMed/NCBI
- Contorna limitações de CORS

#### **Calendly**
- Agendamento de consultas online
- Integração via link personalizado
- Variável: `VITE_CALENDLY_LINK`

---

## 📄 Estrutura de Páginas

### 🏠 **Home Page** (`/`)
Página principal agregando todas as seções do site:
- Hero Section (chamada para ação)
- Sobre a Nutricionista
- Serviços oferecidos
- Depoimentos de clientes
- Notícias científicas diárias
- Formulário de contato
- Footer com links

### 📋 **Páginas de Serviços**

#### **Controle de Peso** (`/servicos/controle-de-peso`)
- Abordagem personalizada
- Métodos baseados em evidências
- Planos alimentares customizados
- FAQ específico sobre emagrecimento

#### **Nutrição Esportiva** (`/servicos/nutricao-esportiva`)
- Performance atlética
- Recuperação muscular
- Suplementação orientada
- Planejamento para competições

#### **Saúde Intestinal** (`/servicos/saude-intestinal`)
- Microbioma
- Probióticos e prebióticos
- Problemas digestivos
- Nutrição para o intestino

#### **Equilíbrio Hormonal** (`/servicos/equilibrio-hormonal`)
- PCOS e endometriose
- Menopausa e andropausa
- Tireóide
- Nutrição para hormônios

---

## 🎨 Componentes Principais

### **Header**
- Navegação principal
- Logo da marca
- Menu responsivo (mobile-friendly)
- Links para seções

### **Hero**
- Banner de destaque
- Call-to-action (CTA)
- Imagem de background
- Texto motivacional

### **About**
- Informações sobre a nutricionista
- Formação e especialidades
- Filosofia de trabalho
- Foto profissional

### **Services**
- Grid de 4 cards de serviços
- Ícones representativos
- Descrições resumidas
- Links para páginas dedicadas
- **Navegação:** Cards clicáveis com React Router

### **Testimonials**
- Carrossel de depoimentos
- Avaliações de clientes
- Sistema de estrelas
- Fotos e nomes (com emojis)
- **6 depoimentos** traduzidos para português

### **DailyNewsSection** ⭐
Sistema avançado de notícias científicas com:

#### Funcionalidades:
- ✅ **Carrossel automático** (7 segundos por artigo)
- ✅ **Controles manuais** (anterior/próximo)
- ✅ **Pause/Play** para auto-rotação
- ✅ **Botão "Buscar novas notícias"** com animação
- ✅ **Badge "Verificado"** com animação pulsante
- ✅ **Toast notification** ao atualizar
- ✅ **Fallback inteligente** quando API falha
- ✅ **Logs no console** para debug

#### Fontes de Notícias:
- Harvard Health (RSS feed)
- PubMed/NCBI (RSS feed)
- **6 notícias estáticas** de qualidade como fallback:
  1. Microbioma Intestinal e Controle de Peso
  2. Dieta Mediterrânea e Saúde Cardiovascular
  3. Proteínas Vegetais vs Animais
  4. Jejum Intermitente e Metabolismo
  5. Vitamina D e Sistema Imunológico
  6. Ômega-3 e Saúde Cerebral

#### Sistema de Filtros:
- Filtra apenas artigos relevantes sobre nutrição
- Palavras-chave: nutrition, diet, food, vitamin, protein, etc.
- Remove duplicatas
- Sorteia artigos diferentes a cada refresh

### **Contact**
- Formulário completo com validação
- Campos:
  - Nome completo
  - Email
  - Telefone (opcional)
  - Objetivo de saúde (dropdown)
  - Mensagem
- **Dropdown traduzido** com opções:
  - Perda de peso
  - Ganho de massa muscular
  - Saúde digestiva
  - Equilíbrio hormonal
  - Nutrição esportiva
  - Outro
- Integração com EmailJS
- Auto-resposta automática
- Feedback visual de envio

### **Footer**
- Links para serviços (clicáveis)
- Informações de contato
- Email: contato@anapaulanogueira.com
- Redes sociais
- Copyright

### **ScrollToTop**
- Componente utilitário
- Reseta scroll ao trocar de página
- Melhora UX na navegação

---

## 🎯 Funcionalidades Principais

### ✅ **Navegação Suave**
- Transições animadas entre páginas
- Scroll automático para o topo
- Links internos funcionais
- URLs amigáveis

### ✅ **Responsividade**
- Design mobile-first
- Breakpoints: mobile, tablet, desktop
- Grid system adaptativo
- Imagens otimizadas

### ✅ **SEO Otimizado**
- Meta tags configuradas
- Títulos e descrições únicas
- Estrutura semântica HTML5
- Performance otimizada

### ✅ **Acessibilidade**
- Contraste adequado de cores
- Textos alternativos em imagens
- Navegação por teclado
- ARIA labels onde necessário

### ✅ **Performance**
- Lazy loading de componentes
- Otimização de imagens
- Code splitting automático
- Bundle size otimizado

---

## 🔒 Segurança e Configuração

### **Variáveis de Ambiente**
Arquivo `.env` configurado com:

```env
# EmailJS (Frontend)
VITE_EMAILJS_SERVICE_ID=service_mt461d9
VITE_EMAILJS_TEMPLATE_ID=template_lyu1toh
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_ks3k3zl
VITE_EMAILJS_PUBLIC_KEY=ASuabRSjlmR9qEgxR
VITE_CALENDLY_LINK=https://calendly.com/mezzoldstudio/intro-call

# Google Gemini API (Backend/Scripts)
GEMINI_API_KEY=*********** (protegida)

# GitHub Actions (Automação)
# GITHUB_TOKEN=(adicionar em GitHub Secrets)
```

### **Proteção de Dados**
- ✅ `.env` no `.gitignore`
- ✅ Chaves API não expostas em código
- ✅ Separação frontend/backend
- ✅ Variáveis `VITE_*` para frontend (públicas)
- ✅ Variáveis sem prefixo para backend (privadas)

---

## 📦 Dependências do Projeto

### **Produção**
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "framer-motion": "^10.x",
  "lucide-react": "^0.x",
  "@emailjs/browser": "^4.x",
  "rss-parser": "^3.x",
  "dotenv": "^16.x"
}
```

### **Desenvolvimento**
```json
{
  "vite": "^5.x",
  "tailwindcss": "^3.x",
  "postcss": "^8.x",
  "autoprefixer": "^10.x",
  "@vitejs/plugin-react": "^4.x"
}
```

---

## 🎨 Design System

### **Paleta de Cores**

#### Cores Primárias (Sage Green)
- `sage-50`: #f6f8f6 (backgrounds claros)
- `sage-100`: #e8ede8
- `sage-400`: #7fa67f (hovers)
- `sage-500`: #5d8a5d (principal)
- `sage-600`: #4a6e4a (destaque)

#### Cores Secundárias (Slate Gray)
- `slate-100`: #f1f5f9
- `slate-400`: #94a3b8
- `slate-600`: #475569
- `slate-800`: #1e293b (textos)

#### Cores de Ação
- Verde: Success states
- Azul: Links e hovers
- Amarelo: Avisos
- Vermelho: Erros

### **Tipografia**
- Font Family: System fonts (sans-serif)
- Tamanhos: 
  - Títulos: 2xl, 3xl, 4xl, 5xl
  - Corpo: base, lg
  - Small: sm, xs
- Pesos: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### **Espaçamento**
- Grid: 4px base unit
- Containers: max-width com padding responsivo
- Seções: py-12 a py-20

### **Animações**
- Duração padrão: 300ms
- Easing: ease-in-out
- Hover: scale(1.05)
- Transições suaves em todos os interativos

---

## 📊 Estrutura de Arquivos

```
nutri-web-page-test/
├── public/
│   ├── news-data.json          # Dados de notícias
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx         # Formulário + EmailJS
│   │   ├── DailyNewsSection.jsx # Sistema de notícias
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ScrollToTop.jsx     # Utilitário
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── WeightManagement.jsx
│   │   ├── SportsNutrition.jsx
│   │   ├── GutHealth.jsx
│   │   └── HormonalBalance.jsx
│   ├── App.jsx                 # Roteamento principal
│   ├── main.jsx                # Entry point
│   └── index.css               # Styles globais
├── .env                        # Variáveis de ambiente
├── .gitignore
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Scripts Disponíveis

### **Desenvolvimento**
```bash
npm run dev
# Inicia servidor de desenvolvimento na porta 5173
# Hot reload automático
```

### **Build de Produção**
```bash
npm run build
# Gera build otimizado na pasta dist/
# Minificação e tree-shaking automáticos
```

### **Preview de Produção**
```bash
npm run preview
# Visualiza build de produção localmente
```

### **Atualizar Notícias** (Manual)
```bash
npm run news:update
# Executa script de busca de notícias
# Atualiza public/news-data.json
```

---

## 🐛 Correções e Melhorias Implementadas

### **Bugs Corrigidos**
- ✅ CSS typo em `GutHealth.jsx` (justify-center)
- ✅ Erro ortográfico em `HormonalBalance.jsx` (Trabalhamos)
- ✅ Cards de serviço agora são clicáveis
- ✅ Scroll to top nas páginas de serviço
- ✅ Data "Invalid Date" nas notícias (corrigido)

### **Traduções Completas**
- ✅ Todo o conteúdo em português (PT-BR)
- ✅ Dropdown do formulário traduzido
- ✅ Depoimentos traduzidos
- ✅ Referências "Dr. Sarah Green" → "Ana Paula Nogueira"
- ✅ Email: contato@anapaulanogueira.com

### **Melhorias de UX**
- ✅ Botão "Buscar notícias" com spinner animado
- ✅ Toast notification verde ao atualizar
- ✅ Sistema de fallback inteligente
- ✅ Logs detalhados no console
- ✅ Tratamento de erros da API

---

## 📈 Próximos Passos Sugeridos

### **Deploy e Hospedagem**
- [ ] Deploy no Vercel ou Netlify
- [ ] Configurar domínio personalizado
- [ ] SSL/HTTPS automático
- [ ] CDN para assets

### **Analytics e SEO**
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Meta tags Open Graph
- [ ] Schema.org markup

### **Funcionalidades Futuras**
- [ ] Blog de nutrição
- [ ] Calculadora de IMC
- [ ] Área do cliente (login)
- [ ] Receitas saudáveis
- [ ] E-book para download

### **Integrações**
- [ ] Newsletter (Mailchimp)
- [ ] Chat online (WhatsApp Business)
- [ ] Sistema de pagamentos
- [ ] CRM integrado

---

## 📞 Suporte e Contato

**Desenvolvedor:** Equipe de Desenvolvimento
**Data de Criação:** Fevereiro 2026
**Versão:** 1.0.0
**Status:** ✅ Produção

---

## 📝 Notas Importantes

1. **Chaves API:** Nunca commitar arquivo `.env` no Git
2. **Build:** Sempre testar build de produção antes de deploy
3. **Performance:** Monitorar lighthouse score regularmente
4. **Conteúdo:** Atualizar notícias e depoimentos periodicamente
5. **Backup:** Manter backup do código e configurações

---

**Última Atualização:** 06 de Fevereiro de 2026
