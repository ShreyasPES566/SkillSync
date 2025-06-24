  const form = document.querySelector(".login_form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Email:", email);
    console.log("Password:", password);
  });