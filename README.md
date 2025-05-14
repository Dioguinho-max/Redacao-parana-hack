# Redação Paraná - Desbloqueio de Colagem com Bookmarklet

Este repositório contém um **bookmarklet** (atalho de favorito) que permite colar/redigir automaticamente textos no campo de redação do site [Redação Paraná](https://redacao.pr.gov.br/), contornando os bloqueios de colagem impostos pela plataforma.

---

## 📁 Arquivos do repositório

- `README.md`: instruções completas de uso para computador e celular.
- `LICENSE`: licença MIT.

---

## 🖥️ Instruções para PC (Windows, Linux, macOS)

### 1. Criar o bookmarklet

- Copie o código abaixo (em uma única linha):

```javascript
javascript:(async()=>{const texto=`AQUI SEU TEXTO !!!!!!!!!!!!!!!!!!!!!!`;function d(ms){return new Promise(r=>setTimeout(r,ms))}function w(){return new Promise(r=>{const i=setInterval(()=>{const t=document.querySelector('textarea');if(t){clearInterval(i);r(t)}},500)})}const campo=await w();campo.focus();for(let c of texto){campo.setRangeText(c,campo.selectionStart,campo.selectionEnd,'end');campo.dispatchEvent(new KeyboardEvent('keydown',{key:c}));campo.dispatchEvent(new InputEvent('input',{bubbles:true,data:c,inputType:'insertText'}));campo.dispatchEvent(new KeyboardEvent('keyup',{key:c}));await d(20)}alert('Texto digitado com sucesso!');})();
```

### 2. Adicionar aos favoritos

- No navegador, crie um novo favorito (Ctrl+D ou clique na estrela).
- No campo "Nome", coloque algo como: `Liberar Redação`.
- No campo "URL", cole o código acima.
- Salve o favorito.

### ⚠️ Personalize sua redação

- Substitua `AQUI SEU TEXTO !!!!!!!!!!!!!!!!!!!!!!` pela sua redação completa (entre crases ` `).
- Tudo deve estar em uma única linha.

### 3. Usar

- Acesse o site [Redação Paraná](https://redacao.pr.gov.br/).
- Clique no favorito criado.
- O script começará a digitar automaticamente a redação no campo apropriado.

---

## 📱 Instruções para CELULAR (Android)

> Infelizmente, a maioria dos navegadores móveis não aceita bookmarklets nativamente. Porém, no **Kiwi Browser**, você pode seguir estas etapas:

### 1. Instalar o Kiwi Browser

- Acesse a Play Store e instale o [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser).

### 2. Digitar o código manualmente no console (opcional avançado)

- No Kiwi, acesse o site Redação Paraná.
- Digite `chrome://inspect/#devices` em outro navegador e use o modo de inspeção remoto para colar o código via console — ou use a opção de copiar o bookmarklet para a barra de favoritos caso habilitada.

---

## ⚠️ Avisos

- O script simula digitação real e é projetado para ser indetectável pelos bloqueios do site.
- Use com responsabilidade. O objetivo é facilitar a experiência de digitação, não cometer fraudes.
- Após a digitação, você pode revisar o texto normalmente.

---

## 🚀 Exemplo de como fica a digitação

O script escreve caractere por caractere, simulando um humano digitando, com espaço entre letras, uso de eventos `input`, `keydown`, e `keyup`, o que garante que o site reconheça o conteúdo como válido.

---

## 🌐 Repositório mantido por: Dioguinho-max

Licença: [MIT](./LICENSE)

Se tiver dúvidas ou quiser contribuir, abra uma issue ou fork no GitHub!
