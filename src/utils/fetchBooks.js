// src/utils/fetchBooks.js
const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRktNIr4BfHBMPw28TCd1FvU7Y5Upby3GVJZIyePj9AbTpLpIiHdu5pY6X7SXztqM2MUXtg1fZqSpnI/pub?output=csv';

export default function fetchBooks() {
  return fetch(sheetURL)
    .then((res) => res.text())
    .then((csv) => {
      const lines = csv.split('\n').slice(1); // Ignora a primeira linha que é o cabeçalho
      return lines.map((line) => {
        const [id, title, author, description, link] = line.split(',');
        return { id, title, author, description, link };
      });
    });
}
