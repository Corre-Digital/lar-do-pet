# Lar do Pet

> A tranquilidade de saber que tudo está bem.

Marketplace que conecta tutores a cuidadores verificados (petsitters) que cuidam do pet **na casa do próprio dono** durante as ausências, com monitoramento em tempo real (o "Momento do Cuidado": foto com horário, localização e confirmação de medicação). Serviços: cuidado no lar, banho, tosa, veterinário domiciliar, passeador e adestrador.

Projeto de produto de um aluno (Brendon) do curso de Gestão de Produtos da Corre Digital. A documentação de produto e marca fica no vault (`vault-corre-digital/11 - Lar do Pet`).

## Stack

- **React 19 + Vite + TypeScript** (SPA)
- **Tailwind CSS** com os tokens da marca (teal, âmbar, dourado, creme) em `tailwind.config.js`
- **shadcn/ui** (padrão cva mais `@/lib/utils`) e **lucide-react** para ícones
- Deploy em **Cloudflare Pages** (SPA estático, sem SSR, para não esbarrar no limite de CPU do tier free)

## Rodar localmente

```bash
npm install
npm run dev
```

App em `http://localhost:5173`.

## Build e deploy

```bash
npm run build     # tsc -b mais vite build, gera dist/
npm run preview   # serve o build localmente
```

Deploy no Cloudflare Pages: build command `npm run build`, output `dist`. O arquivo `public/_redirects` faz o fallback de SPA (`/* /index.html 200`). Ver `docs/DEPLOY.md`.

## Estrutura

```
public/           favicon e _redirects (SPA)
src/
  components/ui/  componentes shadcn (Button)
  lib/            utils (cn)
  App.tsx         landing inicial
  index.css       Tailwind mais base da marca
tailwind.config.js  tokens de cor e tipografia da marca
```

## Marca

Paleta e tipografia vêm do guia de marca no Figma e do doc de design system no vault. Fontes: Quicksand (títulos, classe `font-display`) e Nunito (corpo, `font-sans`), ambas arredondadas. O botão primário é teal e vira âmbar no hover, conforme a marca.

## Status

Fundação (kickoff 2026-07-13). Landing inicial com a marca. Próximos passos: auth (Supabase), busca de cuidador, perfil do cuidador e o fluxo do "Momento do Cuidado".
