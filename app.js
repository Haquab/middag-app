// Registrerer service worker (kreves for "ordentlig app"-følelse på iPhone)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

// Eksempel: sånn lagrer du data lokalt på telefonen, uten server.
// localStorage tar bare imot tekst, så bruk JSON.stringify/parse
// for lister og objekter.

function hentKjoleskap() {
  const data = localStorage.getItem("kjoleskap");
  return data ? JSON.parse(data) : [];
}

function lagreKjoleskap(liste) {
  localStorage.setItem("kjoleskap", JSON.stringify(liste));
}

// Bare et eksempel du kan fjerne:
console.log("Innhold i kjøleskapet:", hentKjoleskap());
