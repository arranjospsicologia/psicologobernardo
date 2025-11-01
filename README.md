# Psicólogo Bernardo Carielo - Site Oficial

Site profissional do psicólogo Bernardo Carielo (CRP 16/5527), especializado em Abordagem Centrada na Pessoa (ACP).

## 🌐 Site

**URL:** [psicologobernardo.com.br](https://psicologobernardo.com.br)

## 📋 Sobre

Psicoterapia com a Abordagem Centrada na Pessoa em Vitória/ES.
- Atendimento presencial em Jardim da Penha - Vitória - ES
- Atendimento online para todo o Brasil e brasileiros no exterior
- Terapia individual, de casal e grupos terapêuticos

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas
- JavaScript vanilla (ES6+)
- Node.js (scripts de automação)
- Cheerio (parsing HTML)
- Schema.org (SEO estruturado)
- Google Analytics
- Font Awesome (ícones)
- Widgets: Doctoralia e Google Reviews

## 📁 Estrutura do Projeto

```
/
├── index.html                 # Página principal
├── sobre.html                 # Sobre o psicólogo
├── blog.html                  # Blog com sistema de busca e filtros
├── contato.html               # Página de contato
├── agendar-consulta.html      # Página de agendamento
├── 404.html                   # Página de erro
├── politica-privacidade.html  # Política de privacidade
├── termos-uso.html            # Termos de uso
├── sitemap.xml                # Mapa do site
├── robots.txt                 # Instruções para crawlers
│
├── assets/                    # Recursos estáticos
│   ├── css/
│   │   └── style.css          # Estilos principais
│   ├── js/
│   │   └── main.js            # JavaScript principal
│   └── images/                # Imagens otimizadas
│       └── blog/              # Imagens dos posts
│
├── servicos/                  # Landing pages de serviços
│   ├── psicoterapia-individual.html
│   ├── terapia-de-casal.html
│   ├── terapia-online.html
│   ├── grupos-e-rodas.html
│   ├── laudos-psicologicos.html
│   └── supervisao-profissional.html
│
├── posts/                     # Artigos do blog (HTML)
│
├── scripts/                   # Scripts de automação
│   └── update-blog.js         # Atualização automática do blog
│
├── docs/                      # Documentação adicional
│
├── package.json               # Dependências Node.js
├── README.md                  # Este arquivo
├── BLOG-README.md             # Documentação do sistema de blog
└── ESPECIFICACOES-IMAGENS.md  # Guia de imagens
```

## 🚀 Recursos

### Design e UX
- ✅ Design responsivo (mobile-first)
- ✅ Navegação intuitiva com menu dropdown
- ✅ Animações suaves e transições
- ✅ Botão flutuante do WhatsApp

### Blog
- ✅ Sistema de busca em tempo real
- ✅ Filtros por tags (dropdown moderno)
- ✅ Paginação inteligente (6 posts por página)
- ✅ Atualização automatizada via script Node.js
- ✅ 5 categorias principais: ACP, Ansiedade, Autoconhecimento, Masculinidades, Saúde Mental

### SEO e Performance
- ✅ SEO otimizado com Schema.org markup
- ✅ Meta tags completas (Open Graph, Twitter Cards)
- ✅ Sitemap XML atualizado
- ✅ Lazy loading de imagens
- ✅ Performance otimizada
- ✅ Acessibilidade (WCAG AA)

### Integrações
- ✅ Google Analytics
- ✅ Widgets de avaliações (Doctoralia)
- ✅ Google Reviews
- ✅ WhatsApp Business

## 🔧 Desenvolvimento

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install
```

### Scripts Disponíveis

```bash
# Atualizar blog automaticamente
npm run update-blog
```

Este script:
- Lê todos os posts da pasta `/posts`
- Extrai metadados (título, data, tags, etc.)
- Organiza posts por data (mais recente primeiro)
- Atualiza `blog.html` com busca, filtros e paginação
- Gera sistema de tags automaticamente

Ver [BLOG-README.md](BLOG-README.md) para documentação completa do sistema de blog.

### Adicionando um Novo Post

1. Crie um arquivo HTML na pasta `/posts` seguindo a estrutura dos posts existentes
2. Inclua meta tags e Schema.org markup
3. Execute `npm run update-blog`
4. Verifique o resultado em `blog.html`

Consulte [BLOG-README.md](BLOG-README.md) para detalhes sobre estrutura de posts e tags.

## 📚 Documentação Adicional

- **[BLOG-README.md](BLOG-README.md)** - Sistema de gerenciamento do blog
- **[ESPECIFICACOES-IMAGENS.md](ESPECIFICACOES-IMAGENS.md)** - Guia de otimização de imagens
- **[docs/](docs/)** - Documentação técnica adicional

## 🌟 Páginas de Serviços

Cada serviço possui uma landing page otimizada:

1. **Psicoterapia Individual** - Atendimento personalizado
2. **Terapia de Casal** - Relacionamentos e comunicação
3. **Terapia Online** - Atendimento remoto
4. **Grupos e Rodas de Conversa** - Espaços coletivos
5. **Laudos Psicológicos** - Avaliações técnicas
6. **Supervisão Profissional** - Para psicólogos

## 📞 Contato

- **WhatsApp:** (27) 99833-1228
- **Email:** contato@arranjospsicologia.com.br
- **Instagram:** [@bcarielo](https://instagram.com/bcarielo)
- **Facebook:** [/bcarielo](https://facebook.com/bcarielo)

## 📄 Licença

© 2025 Bernardo Carielo. Todos os direitos reservados.

---

**CRP:** 16/5527
**Localização:** Rua Darcy Grijó, 50 - Sala 409, Jardim da Penha, Vitória - ES
