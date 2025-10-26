# Configuração do Claude Code

## ⚠️ AÇÃO URGENTE NECESSÁRIA

A chave API do Firecrawl foi exposta no repositório público e precisa ser **REVOGADA IMEDIATAMENTE**.

### Passos obrigatórios:

1. **Revogar a chave exposta:**
   - Acesse: https://firecrawl.dev/account (ou painel de configurações da API)
   - Localize a chave que começa com `fc-1009c72...`
   - Clique em "Revoke" ou "Delete"

2. **Gerar nova chave:**
   - No mesmo painel, gere uma nova API key
   - Copie a nova chave

3. **Configurar localmente:**
   ```bash
   # Copie o arquivo de exemplo
   cp .claude/settings.json.example .claude/settings.json

   # Edite o arquivo e adicione sua NOVA chave
   # Substitua "sua-chave-api-aqui" pela chave real
   ```

4. **Verificar segurança:**
   - O arquivo `.claude/settings.json` agora está no `.gitignore`
   - NUNCA faça commit de chaves API ou secrets
   - Use sempre `.example` para templates de configuração

## Estrutura de arquivos

```
.claude/
├── settings.json.example   # Template (versionado no Git)
├── settings.json           # Suas configurações (NÃO versionado)
└── settings.local.json     # Configurações locais (NÃO versionado)
```

## Segurança

✅ **SIM - Fazer commit:**
- `settings.json.example` (template sem chaves reais)
- `README.md` (documentação)

❌ **NÃO - Fazer commit:**
- `settings.json` (contém chaves reais)
- `settings.local.json` (configurações locais)
- Qualquer arquivo `.env`
- Arquivos `.key` ou `.pem`

## Configuração do Firecrawl

Após gerar a nova chave, edite `.claude/settings.json`:

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "fc-NOVA-CHAVE-AQUI"
      }
    }
  }
}
```

## Mais informações

- Documentação do Firecrawl: https://docs.firecrawl.dev/
- Claude Code: https://docs.claude.com/claude-code
