// Se quita script en linea del index.html y se mueve a un archivo separado para evitar error de script en linea por csp.
(function () {
  if ('caches' in window) {
    caches.keys().then(names => {
      names.forEach(name => {
        caches.delete(name);
      });
    });
  }

  window.history.forward(1);
})();
