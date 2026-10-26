# Hero Full-Screen (100vh) com Ondas Fluidas e Menu Integrado Dinâmico

Transformação da seção Hero para ocupar 100% da altura da tela (100vh) com uma nova animação abstrata e interativa de ondas fluidas e luz líquida, indicador interativo de rolagem suave e barra de navegação integrada transparente que revela fundo branco apenas ao rolar a página.

### Decisões Confirmadas & Resumo

> [!IMPORTANT]
> Decisões refinadas e alinhadas com as respostas do usuário:
> - **Estilo de Animação**: Ondas fluidas multicamadas e gradientes de luz líquida, com caustics sutis e interação fluida ao movimento do cursor/touch.
> - **Ocupação e Scroll**: Altura total de 100vh (`100dvh`), perfeitamente centralizada verticalmente, com botão indicador de scroll que desliza suavemente até a seção seguinte (`#servicos`).
> - **Integração do Menu (Navbar)**: Totalmente transparente e integrado sobre a Hero no topo, transicionando suavemente para fundo branco translúcido (`bg-white/95 backdrop-blur-md`) e borda sutil ao rolar a página (`scrollY > 20`).

---

## 1. Visão Geral & Conceito Principal

- **O que faz**: Proporciona uma primeira impressão de alto impacto e sofisticação para a Zaytek. O visitante é recebido por uma tela imersiva de 100vh com gradientes líquidos em tons de ciano/teal e azul-marinho profundo que ondulam organicamente e respondem ao ponteiro do mouse. O menu superior flutua de forma invisível/integrada e só ganha corpo sólido e legibilidade clara quando a navegação pelo restante do site se inicia.
- **Público-Alvo**: Clientes e tomadores de decisão corporativos que buscam sites institucionais, sistemas e automações de alta tecnologia.
- **Valor Agregado**: Eleva a percepção de valor da marca para nível premium, elimina distrações estáticas e garante fluidez de navegação.

---

## 2. Experiência do Usuário & Design Visual

### Fluxos do Usuário

1. **Chegada na Página (Estado Topo 0px)**:
   - O usuário visualiza a Hero em tela cheia (100vh/100dvh), com headline, badges e botões alinhados à esquerda.
   - O menu superior está integrado de maneira invisível com a Hero: sem fundo sólido, logo em tom contrastante adaptado e links claros.
   - O fundo executa uma animação contínua e suave de ondas sinusoidais fluidas sobrepostas gerando gradientes de luz líquida e bioluminescência sutil.
   - No rodapé da Hero, um indicador sutil convida o usuário a explorar o conteúdo.
2. **Interação com o Fundo**:
   - Movimentos do cursor e toques em dispositivos móveis geram perturbações fluidas suaves, atraindo feixes de luz líquida com amortecimento inercial (`lerp`).
3. **Clique no Indicador de Rolagem**:
   - Ao clicar no indicador (ou rolar manualmente), a página desliza suavemente até a seção de Serviços (`#servicos`).
4. **Comportamento da Navbar ao Rolar**:
   - Assim que o scroll ultrapassa 20px, a barra de navegação ganha animação de transição (`transition-all duration-300`), ativando o fundo branco com desfoque de vidro (`bg-white/95 backdrop-blur-md border-b border-[rgba(35,82,95,0.12)] shadow-xs`), adaptando o logotipo e os links de texto para máxima legibilidade.

### Identidade Visual & Paleta de Cores

- **Fundo Hero**: `#0B191D` (Obsidian Marinho Profundo), com gradientes líquidos de ciano `#4FD1C5`, teal `#23525F`, esmeralda suave `#3ec5b9` e azul marinho `#0E2830`.
- **Tipografia**: Fontes modernas sans-serif em escala geométrica com alinhamento rigoroso à esquerda, balanceamento de linhas (`text-wrap: balance`) e espaçamento refinado.
- **Navbar Integrada**:
  - *Estado Topo*: `bg-transparent border-transparent`, logotipo branco nítido (`brightness-0 invert`), links em branco fosco `text-white/85 hover:text-white`.
  - *Estado Scrolled*: `bg-white/95 backdrop-blur-md border-b border-[rgba(35,82,95,0.12)]`, logotipo escuro original da marca, links em cinza ardósia `text-[#4A6068] hover:text-[#112A32]`.

---

## 3. Decisões Técnicas & Trade-Offs

- **Canvas 2D com Otimização de Ondas Senoidais & Shaders Geométricos**:
  - *Abordagem*: Em vez de bibliotecas pesadas de simulação física que degradam a bateria de smartphones, utilizamos canvas 2D nativo com superposição de ondas harmônicas fluidas e gradientes radiais dinâmicos acelerados por hardware via `requestAnimationFrame`.
  - *Benefício*: 60 FPS garantidos, leveza (<5KB sem dependências extras), alta definição com suporte a `devicePixelRatio`.
- **100dvh para Dispositivos Móveis**:
  - *Abordagem*: Uso de `h-[100dvh]` e `min-h-[100dvh]` para evitar que a barra de endereços do Safari/Chrome no iOS e Android oculte botões ou quebre a diagramação.
- **Detecção de Rota & Scroll na Navbar**:
  - *Abordagem*: A navbar detecta se está na página principal (`/` ou `#hero`) ou em páginas internas (como `/solucoes/*`). Se estiver em página interna, mantém o fundo legível; se estiver na Hero principal, permanece transparente até haver scroll.

---

## 4. Arquitetura Técnica & Diagrama de Componentes

```
┌──────────────────────────────────────────────────────────────┐
│ Window Scroll Event / Resize Observer                        │
└──────────────────────────────┬───────────────────────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
┌─────────────────────────┐           ┌────────────────────────┐
│  Navbar (Fixed Top)     │           │  Hero Section (100dvh) │
│  - scrolled: boolean    │           │  - Left-aligned Copy   │
│  - isHomeHero: boolean  │           │  - Dynamic CTA buttons │
│  - Transparent -> White │           │  - Scroll-down trigger │
└─────────────────────────┘           └───────────┬────────────┘
                                                  │
                                                  ▼
                                      ┌────────────────────────┐
                                      │ FluidLiquidBackground  │
                                      │ - Canvas 2D Engine     │
                                      │ - Multi-layer waves    │
                                      │ - Liquid light nodes   │
                                      │ - Pointer disturbance  │
                                      └────────────────────────┘
```

### Mapeamento de Estados e Ações

- `Navbar.tsx`:
  - Hook `useScroll`: monitora `window.scrollY > 20`.
  - Estado `isOverHero`: verifica se está no topo da Hero na página inicial.
  - Alternância de classes CSS para transição suave de cor do texto, logo e fundo.
- `Hero.tsx`:
  - Contêiner de altura completa `h-[100dvh] flex flex-col justify-center`.
  - Botão interativo `scrollDownTrigger` com rolagem suave (`window.scrollTo` ou `scrollIntoView({ behavior: 'smooth' })`).
- `FluidLiquidBackground.tsx`:
  - Renderiza curvas fluidas contínuas com gradientes lineares e radiais móveis que reagem com amortecimento inercial à posição do mouse ou touch.
