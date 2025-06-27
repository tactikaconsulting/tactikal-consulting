// Inicializa AOS (animaciones al hacer scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Opcional: mostrar alerta después de enviar formulario con Formspree
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        alert("✅ Mensaje enviado con éxito. Te responderemos pronto.");
        form.reset();
      } else {
        alert("⚠️ Hubo un error al enviar el mensaje. Intenta de nuevo.");
      }
    };
    xhr.send(data);
  });
}
