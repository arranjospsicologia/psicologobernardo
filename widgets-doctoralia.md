# Widgets Doctoralia - Bernardo Carielo

**Data:** 25 de outubro de 2025
**Perfil:** https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria

---

## 1. Widget Padrão (Standard com Opinião)

**Descrição:**
Widget padrão com foto, nome do profissional, botão "agendar consulta", e um espaço curto com uma opinião, mais botão "ver todas as opiniões (65)".

**Código HTML:**
```html
<a id="zl-url" class="zl-url" href="https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria" rel="nofollow" data-zlw-doctor="bernardo-carielo-macedo-de-oliveira-pinto" data-zlw-type="big" data-zlw-opinion="true" data-zlw-hide-branding="true" data-zlw-saas-only="false" data-zlw-a11y-title="Widget de marcação de consultas médicas">Bernardo Carielo Macedo de Oliveira Pinto - Doctoralia.com.br</a><script>!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");</script>
```

**Parâmetros:**
- `data-zlw-type="big"` - Tipo do widget (grande)
- `data-zlw-opinion="true"` - Exibe opinião
- `data-zlw-hide-branding="true"` - Oculta marca Doctoralia
- `data-zlw-saas-only="false"` - Configuração SaaS

**Uso recomendado:**
- Homepage (após seção "Sobre" ou antes do FAQ)
- Página "Sobre"
- Sidebar de páginas de conteúdo

---

## 2. Widget com Calendário (Agendamento Direto)

**Descrição:**
Widget com foto, nome do profissional, botões para aba entre agendas e agenda com horários ocupados e disponíveis para agendar uma sessão com o profissional. O texto diz: "Clique em uma data que melhor lhe atenda e marque uma consulta. Você irá receber uma confirmação por email."

**Código HTML:**
```html
<a id="zl-url" class="zl-url" href="https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria" rel="nofollow" data-zlw-doctor="bernardo-carielo-macedo-de-oliveira-pinto" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false" data-zlw-a11y-title="Widget de marcação de consultas médicas">Bernardo Carielo Macedo de Oliveira Pinto - Doctoralia.com.br</a><script>!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");</script>
```

**Parâmetros:**
- `data-zlw-type="big_with_calendar"` - Tipo do widget (grande com calendário)
- `data-zlw-opinion="false"` - Não exibe opinião
- `data-zlw-hide-branding="true"` - Oculta marca Doctoralia
- `data-zlw-saas-only="false"` - Configuração SaaS

**Uso recomendado:**
- Página dedicada "Agendar Consulta"
- Landing pages de conversão
- Seção de CTA na homepage (alternativa ao WhatsApp)

**Observação:**
Este widget permite agendamento direto via calendário, mostrando horários disponíveis e ocupados em tempo real.

---

## 3. Widget Certificado (Social Proof)

**Descrição:**
Widget chamado "certificado", com o texto automatizado de acordo com as opiniões do Doctoralia:

```
100%
Pacientes satisfeitos
com o serviço do(a) especialista
65 opiniões
```

**Código HTML:**
```html
<a id="zl-url" class="zl-url" href="https://www.doctoralia.com.br/bernardo-carielo-macedo-de-oliveira-pinto/psicologo/vitoria" rel="nofollow" data-zlw-doctor="bernardo-carielo-macedo-de-oliveira-pinto" data-zlw-type="certificate" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false" data-zlw-a11y-title="Widget de marcação de consultas médicas">Bernardo Carielo Macedo de Oliveira Pinto - Doctoralia.com.br</a><script>!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");</script>
```

**Parâmetros:**
- `data-zlw-type="certificate"` - Tipo do widget (certificado)
- `data-zlw-opinion="false"` - Não exibe opinião
- `data-zlw-hide-branding="true"` - Oculta marca Doctoralia
- `data-zlw-saas-only="false"` - Configuração SaaS

**Uso recomendado:**
- Sidebar de todas as páginas
- Próximo à seção "Sobre"
- Footer (antes do footer principal)
- Badge de confiança em páginas de conversão

**Observação:**
Este widget atualiza automaticamente com base nas avaliações recebidas no Doctoralia. Funciona como social proof (prova social) para aumentar credibilidade.

---

## Estratégia de Implementação

### Opção 1: Homepage com Social Proof
```html
<!-- Após seção "Sobre" -->
<section class="avaliacao-doctoralia section">
  <div class="container">
    <h2>O que dizem meus pacientes</h2>
    <!-- Widget #1: Padrão com Opinião -->
  </div>
</section>
```

### Opção 2: Sidebar com Certificado
```html
<!-- Em páginas de blog e conteúdo -->
<aside class="sidebar">
  <!-- Widget #3: Certificado -->
</aside>
```

### Opção 3: Página de Agendamento Dedicada
```html
<!-- Página: /agendar-consulta.html -->
<section class="agendamento section">
  <div class="container">
    <h1>Agende sua Consulta</h1>
    <!-- Widget #2: Com Calendário -->
  </div>
</section>
```

---

## Configurações Importantes

### Data Attributes Explicados

| Atributo | Valores | Descrição |
|----------|---------|-----------|
| `data-zlw-type` | `big`, `big_with_calendar`, `certificate` | Define o tipo de widget |
| `data-zlw-opinion` | `true`, `false` | Exibe ou oculta opinião no widget |
| `data-zlw-hide-branding` | `true`, `false` | Oculta ou mostra marca Doctoralia |
| `data-zlw-saas-only` | `true`, `false` | Configuração para versão SaaS |

### Script de Carregamento

Todos os widgets usam o mesmo script de carregamento:
```javascript
//platform.docplanner.com/js/widget.js
```

**Importante:**
- O script só precisa ser carregado uma vez por página
- Se usar múltiplos widgets na mesma página, o script será compartilhado
- Widget é responsivo e se adapta a mobile/tablet/desktop

---

## CSS Personalizado (Opcional)

Para estilizar os widgets e integrar melhor ao design do site:

```css
/* Container do widget */
.zl-url {
  display: block;
  margin: 2rem 0;
}

/* Seção com widget */
.avaliacao-doctoralia {
  background-color: var(--secondary-color);
  padding: 3rem 0;
}

.avaliacao-doctoralia h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--black);
}

/* Widget certificado na sidebar */
aside .zl-url {
  margin: 1.5rem 0;
  text-align: center;
}
```

---

## Próximos Passos

1. **Escolher widgets prioritários:**
   - [ ] Widget #1 (Padrão) na homepage
   - [ ] Widget #3 (Certificado) na sidebar do blog
   - [ ] Widget #2 (Calendário) em página dedicada

2. **Implementar:**
   - [ ] Adicionar HTML nas páginas selecionadas
   - [ ] Testar responsividade
   - [ ] Verificar carregamento correto

3. **Monitorar:**
   - [ ] Conversões via widget
   - [ ] Impacto no tempo de carregamento
   - [ ] Feedback dos usuários

---

## Observações Finais

- **65 opiniões:** Atualmente você tem 65 avaliações no Doctoralia
- **100% satisfação:** Taxa de satisfação excelente
- **Atualização automática:** Widgets atualizam conforme novas avaliações
- **SEO:** Links têm `rel="nofollow"` por padrão (não passam PageRank)

**Recomendação SEO:**
Mesmo usando widgets Doctoralia, mantenha também:
- Schema markup de avaliações próprio (já implementado)
- Processo de migração de avaliações para Google My Business
- Widgets são complementares, não substitutos da estratégia de SEO local
