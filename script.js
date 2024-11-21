// script.js
function sendmail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: ocument.getElementById("email_id").value,
    message: ocument.getElementById("message").value,
  };
}
emailjs
  .send("service_03o13xb", "template_9kbh3uc", params)
  .then(function (res) {
    alert("succes!" + res.status);
  });
