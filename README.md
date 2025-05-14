# Redação Paraná - Desbloqueio de Colagem com Tampermonkey

Este repositório contém um script para o Tampermonkey que permite colar/redigir automaticamente textos no campo de redação do site [Redação Paraná](https://redacao.pr.gov.br/), contornando os bloqueios de colagem impostos pela plataforma.

---

## 📁 Arquivos do repositório

- `redacao-parana.user.js`: script Tampermonkey que simula digitação real letra por letra.
- `README.md`: instruções completas de uso para computador e celular.
- `LICENSE`: licença MIT.

---

## 🖥️ Instruções para PC (Windows, Linux, macOS)

### 1. Instalar o Tampermonkey

- Acesse: [https://www.tampermonkey.net/](https://www.tampermonkey.net/)
- Escolha a versão para seu navegador (Chrome, Firefox, Edge, Opera) e instale a extensão.

### 2. Instalar o script

- Baixe o arquivo `redacao-parana.user.js` clicando com o botão direito e escolhendo "Salvar link como...".
- Ou clique [aqui para instalar diretamente](https://raw.githubusercontent.com/SEU_USUARIO/redacao-parana-unblocker/main/redacao-parana.user.js) (Tampermonkey precisa estar instalado).
- O Tampermonkey abrirá uma tela de instalação automática. Clique em **Instalar**.

### ⚠️ Importante: personalize sua redação

- Antes de usar, abra o script `redacao-parana.user.js` num editor de texto.
- Procure pela linha:
  ```javascript
  const texto = `AQUI SEU TEXTO !!!!!!!!!!!!!!!!!!!!!!`;
  ```
- Substitua `AQUI SEU TEXTO !!!!!!!!!!!!!!!!!!!!!!` pela sua redação completa.
- Salve o arquivo e reimporte no Tampermonkey se necessário.

### 3. Usar

- Acesse o site [Redação Paraná](https://redacao.pr.gov.br/).
- Aguarde alguns segundos após a página carregar.
- O script começará a digitar automaticamente a redação no campo apropriado.

---

## 📱 Instruções para CELULAR (Android)

### 1. Instalar o navegador Kiwi

- Acesse a Play Store e instale o **Kiwi Browser**: [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser)

### 2. Instalar o Tampermonkey no Kiwi

- No Kiwi, acesse: [https://chrome.google.com/webstore/](https://chrome.google.com/webstore/)
- Pesquise por "Tampermonkey" e instale normalmente como no PC.

### 3. Instalar o script

- Acesse este repositório pelo Kiwi.
- Clique no link direto para o script: [Instalar script](https://raw.githubusercontent.com/SEU_USUARIO/redacao-parana-unblocker/main/redacao-parana.user.js)
- O Tampermonkey abrirá a tela de instalação. Clique em **Instalar**.

### ⚠️ Personalize sua redação

- Antes de instalar, edite o script e substitua o texto `AQUI SEU TEXTO !!!!!!!!!!!!!!!!!!!!!!` pela sua redação.
- No celular, isso pode ser feito com um editor de texto antes de importar.

### 4. Usar

- Acesse o site Redação Paraná normalmente no Kiwi.
- O script entrará em ação automaticamente após o carregamento da página.

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
