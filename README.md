# Site pessoal — Davi Lucena

Site pessoal estático (one-page), bilíngue **PT/EN**, hospedado no **GitHub Pages**
em [dvluc.github.io/site](https://dvluc.github.io/site/).

> **Histórico:** a versão anterior era gerada em R Markdown com o pacote
> [`postcards`](https://github.com/seankross/postcards). Em 2026 o site foi
> reescrito em **HTML + CSS puro** para eliminar a dependência de R, ter controle
> total de layout e permitir edição direta — sem etapa de compilação. Os arquivos
> R antigos ficaram preservados em [`legacy/`](legacy/).

## Seções

`Sobre` · `Formação` (graduação e pós) · `Experiência` (linha do tempo) ·
`Publicações & produção` (artigos, capítulos e outras produções).

O conteúdo foi extraído do **Currículo Lattes** (fonte autoritativa), disponível
para download em `assets/curriculo-lattes-davi-lucena.pdf` e vinculado ao
[perfil Lattes](http://lattes.cnpq.br/1520113162103673) e ao
[ORCID](https://orcid.org/0000-0002-1858-4222).

## Estrutura

```
.
├── index.html          # Conteúdo do site (todas as seções, PT e EN no mesmo HTML)
├── assets/
│   ├── styles.css      # Estilos — tema, variáveis CSS no topo do arquivo
│   ├── script.js       # Idioma + ano no rodapé + revelação ao rolar
│   └── curriculo-lattes-davi-lucena.pdf   # CV completo (download)
├── dv.jpg              # Foto / favicon / imagem de preview social
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
`dvluc/site` e fica disponível em <https://dvluc.github.io/site/>. Qualquer push
para essa branch publica automaticamente.

```bash
git add -A
git commit -m "atualiza conteúdo do site"
git push
```

Por ser uma _project page_ (`/site/`), todos os caminhos de arquivos no HTML são
**relativos** (`assets/...`, `dv.jpg`) — não use caminhos iniciados em `/`.
