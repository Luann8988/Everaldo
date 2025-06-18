  
  // oiii o comentario aqui e mais facil
  /// muinto facil everaldo 
  /// Boa noite

  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    alert('Obrigado por se candidatar!! Seu formulário foi enviado com sucesso.');
    
    form.reset(); 
  });

