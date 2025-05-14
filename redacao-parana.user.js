// ==UserScript==
// @name         Redação Paraná - Auto Preencher
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Simula digitação real no site Redação Paraná
// @author       Dioguinho-max
// @match        https://redacao.pr.gov.br/*
// @grant        none
// ==/UserScript==

(async function() {
  'use strict';
  const texto = `AQUI SEU TEXTO !!!!!!!!!!!!!!!!!!!!!!`;

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function waitForTextarea() {
    return new Promise(resolve => {
      const check = setInterval(() => {
        const textarea = document.querySelector('textarea');
        if (textarea) {
          clearInterval(check);
          resolve(textarea);
        }
      }, 500);
    });
  }

  const campo = await waitForTextarea();
  campo.focus();

  for (let char of texto) {
    campo.setRangeText(char, campo.selectionStart, campo.selectionEnd, 'end');
    campo.dispatchEvent(new KeyboardEvent('keydown', { key: char }));
    campo.dispatchEvent(new InputEvent('input', {
      bubbles: true,
      data: char,
      inputType: 'insertText'
    }));
    campo.dispatchEvent(new KeyboardEvent('keyup', { key: char }));
    await delay(20);
  }

  alert("Texto digitado com sucesso!");
})();
