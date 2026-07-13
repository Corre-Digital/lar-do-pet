# Deploy — Cloudflare Pages

App SPA (React + Vite), estático. Sem SSR, para não esbarrar no limite de CPU do tier free do Cloudflare.

## Configuração no Cloudflare Pages

- **Framework preset:** Vite (ou None)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 20 ou superior

## Fallback de SPA

O arquivo `public/_redirects` garante que todas as rotas caiam no `index.html`:

```
/*    /index.html   200
```

## Variáveis de ambiente

Quando a fundação de dados entrar (Supabase), configurar no painel do Cloudflare Pages:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Ver `.env.example`. Nunca commitar `.env`.

## Domínio

Planejado: a definir (padrão do ecossistema seria algo como `lardopet.corredigital.ong.br`, a confirmar com o Felipe).
