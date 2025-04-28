function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Form validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Format the body of the email
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Create mailto link with primary recipient, CC, subject and body
    const mailtoLink = `mailto:emanuele.colonna@uniba.it?cc=giovanna.castellano@uniba.it,gennaro.vessio@uniba.it&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client with the formatted email
    window.location.href = mailtoLink;
  }
