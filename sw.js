// Denne filen gjør ingenting mer enn å registrere seg selv.
// Det holder for at iPhone skal tillate "Legg til på Hjem-skjerm"
// som en fullverdig app. Du kan bygge ut offline-lagring her senere
// hvis du vil.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});
