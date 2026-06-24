# Site pessoal — Davi Lucena

Site pessoal estático (one-page), bilíngue **PT/EN**, hospedado no **GitHub Pages**
sob o domínio próprio [davilucena.com](https://davilucena.com).

> **Histórico:** a versão anterior era gerada em R Markdown com o pacote
> [`postcards`](https://github.com/seankross/postcards). Em 2026 o site foi
> reescrito em **HTML + CSS puro** para eliminar a dependência de R, ter controle
> total de layout e permitir edição direta — sem etapa de compilação. Os arquivos
> R antigos ficaram preservados em [`legacy/`](legacy/).

## Estrutura

```
.
├── index.html          # Conteúdo do site (todas as seções, PT e EN no mesmo HTML)
├── assets/
│   ├── styles.css      # Estilos — tema claro, variáveis CSS no topo do arquivo
│   └── script.js       # Alternância de idioma + ano automático no rodapé
├── dv.jpg              # Foto / favicon / imagem de preview social
├── CNAME               # Domínio próprio do GitHub Pages (davilucena.com)
├── legacy/             # Versão antiga em R Markdown (postcards), apenas arquivo
└── README.md
```

Não há build: o que está no repositório é exatamente o que vai ao ar.

## Como editar

| O que mudar | Onde |
|---|---|
| Textos, datas, experiências, formação | [`index.html`](index.html) |
| Cores, espaçamentos, fontes | Variáveis `:root` no topo de [`assets/styles.css`](assets/styles.css) |
| Comportamento (idioma, rodapé) | [`assets/script.js`](assets/script.js) |
| Foto | substitua `dv.jpg` (mantenha o nome) |

### Conteúdo bilíngue

Cada trecho traduzível aparece duas vezes no HTML, marcado por classe:

```html
<span class="lang-pt">Sobre</span><span class="lang-en">About</span>
```

O CSS mostra apenas o idioma ativo conforme o atributo `data-lang` em `<html>`.
O botão no topo alterna PT/EN e salva a preferência no navegador (`localStorage`).
**Ao adicionar conteúdo novo, lembre de incluir as duas versões.**

## Desenvolvimento local

É só abrir o `index.html` no navegador. Para servir igual à produção:

```bash
python3 -m http.server 8000   # depois acesse http://localhost:8000
```

## Publicação (GitHub Pages)

O site é servido da branch configurada em **Settings → Pages** do repositório
`dvluc/site`. Qualquer push para essa branch publica automaticamente.

```bash
git add -A
git commit -m "atualiza conteúdo do site"
git push
```

O arquivo `CNAME` mantém o domínio `davilucena.com` apontado para o GitHub Pages
(o DNS do domínio deve ter um registro `CNAME`/`ALIAS` para `dvluc.github.io`).
