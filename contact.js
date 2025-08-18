const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    message.textContent="Thank you, your message has been sent.";
    message.classList.add('visible-message');
    form.reset();
  } else {
    message.textContent="Something went wrong, please try again.";
    message.classList.add('visible-message');
    message.style.color = 'red';
  }

  message.classList.add('show');

  setTimeout(() => 
    {
        message.classList.remove('show');
    }, 4000);
});