// Registrerer service worker (kreves for "ordentlig app"-følelse på iPhone)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

// Eksempel: sånn lagrer du data lokalt på telefonen, uten server.
// localStorage tar bare imot tekst, så bruk JSON.stringify/parse
// for lister og objekter.

function test() {
  return 0;
}


