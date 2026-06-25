# CLAUDE.md — Site pessoal de Davi Lucena

Contexto do projeto para sessões do Claude Code. Leia antes de editar.

## O que é

Site pessoal **one-page**, estático, **bilíngue PT/EN**, de Davi Miranda Lucena de
Avelar (gestor público federal — Coordenador-Geral de Integração Acadêmica da CAPES).

- **No ar em:** https://dvluc.github.io/site/ (GitHub Pages — *project page*)
- **Repositório:** `dvluc/site` (branch de publicação: `master`)
- **Sem domínio próprio.** Não criar `CNAME` (já foi removido). A URL é a do github.io.

## Tecnologia (e por que)

HTML + CSS + JS **puro**, **sem build e sem framework**. O que está no repositório é
exatamente o que vai ao ar. Versão anterior era em R Markdown (pacote `postcards`);
foi abandonada para remover a dependência de R e ganhar controle de layout. Os
arquivos R antigos estão arquivados em [`legacy/`](legacy/) — não usar.

## Estrutura

```
index.html        # Todo o conteúdo (PT e EN no mesmo arquivo)
assets/
  styles.css      # Estilos. Tokens de tema no :root (topo do arquivo)
  script.js       # Idioma (PT/EN) + ano + revelação ao rolar
  dv.jpg          # Foto (também favicon e preview social) — na raiz, não em assets
  cartao-visita.jpeg              # Cartão de visita CAPES (download)
  curriculo-lattes-davi-lucena.pdf # CV completo (download)
.nojekyll         # OBRIGATÓRIO — desliga o Jekyll no GitHub Pages
legacy/           # Versão antiga em R (NÃO usar)
```

## Sistema bilíngue (importante)

Cada texto traduzível aparece **duas vezes**, marcado por classe:

```html
<span class="lang-pt">Sobre</span><span class="lang-en">About</span>
```

O CSS mostra só o idioma ativo via `[data-lang]` no `<html>` (PT é o padrão).
O botão no topo alterna e salva em `localStorage`. **Toda adição de conteúdo precisa
das duas versões** (PT e EN). Na navegação, os labels usam `data-pt`/`data-en`.

## Seções (ordem) e como editar

`Hero` → `Destaques` → `01 Sobre` → `02 Formação` → `03 Experiência` →
`04 Portfólio` → `05 Publicações` → rodapé.

- **Conteúdo / textos / datas:** editar direto em `index.html`.
- **Cores, fontes, espaçamento:** variáveis no `:root` de `assets/styles.css`.
- **Adicionar item ao Portfólio:** copiar um bloco `<article class="work-card">` na
  seção `#portfolio` (tipo, título, link, descrição PT+EN). Portfólio = produtos/ações
  públicos; **sem ano** nos cards (decisão do dono).
- **Adicionar publicação:** copiar um `<article class="pub">` em `#publicacoes`, com
  o link de acesso `<a class="access">` (PT "Ler artigo/capítulo ↗" / EN "Read…").
- **Cargo atual:** fica no card escuro em destaque (`.hl-feature`) e no topo da
  linha do tempo. É a informação mais importante — manter em evidência.

## Princípios de design e conteúdo (preferências do dono)

- **É um site profissional:** informações **profissionais têm precedência**; as
  **acadêmicas são complementares** (vêm depois / menos destaque).
- Layout **clean, sutil e elegante**, mas com elementos gráficos — nada de cara de
  "currículo duro". Tom editorial (serif `Newsreader` nos títulos, `Inter` no corpo).
- Não listar disciplinas de forma solta; textos devem ter conexão e foco em gestão
  pública. Evitar realçar "teorias da justiça" no topo (é complementar).
- Afirmações de cargo/datas vêm do **Currículo Lattes** (fonte autoritativa) — ver
  PDF em `assets/`. Não inventar dados; na dúvida, perguntar.

## Publicação (deploy)

GitHub Pages serve da branch **`master`, pasta raiz `/ (root)`**, com **Jekyll
desligado** (`.nojekyll`). Configuração em Settings → Pages → "Deploy from a branch",
Branch `master`, Folder `/ (root)`.

Fluxo: editar → commit em `master` → `git push origin master` → Pages reconstrói
sozinho (~1 min). Caminhos no HTML devem ser **relativos** (`assets/...`), nunca
começar com `/` (é project page sob `/site/`).

```bash
git add -A && git commit -m "..." && git push origin master
```

Verificar no ar:
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://dvluc.github.io/site/assets/styles.css
```

### Gotchas de deploy
- **Auth:** o push usa HTTPS + **Personal Access Token** (guardado no `osxkeychain`).
  Não há `gh` CLI nem chave SSH nesta máquina. O Claude **não consegue dar push**
  sozinho (sem credencial em sessão) — o push final é feito pelo dono no Terminal.
- **Não remover `.nojekyll`** — sem ele o Pages tenta rodar Jekyll e o build falha.
- `.DS_Store` é ignorado (`.gitignore`); não commitar.

## Convenções de código

- 2 espaços de indentação. Comentários de seção em maiúsculas no HTML
  (`<!-- ===== Hero ===== -->`).
- SVGs inline: ícones de traço usam `.ico`/`.hl-ico`/`.work-ico` (stroke); ícones de
  marca (LinkedIn, GitHub, ORCID) usam `.bi` (fill currentColor; ORCID tem verde fixo).
- Animação `.reveal` depende de `.js` no `<html>` — sem JS, conteúdo aparece normal.
