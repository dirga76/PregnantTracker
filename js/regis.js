const button = document.getElementById("register");
const name = document.getElementById("name");
const age = document.getElementById("age");
const born = document.getElementById("born");
const pregnancy = document.getElementById("pregnancy");
const city = document.getElementById("city");
const email = document.getElementById("email");
const password = document.getElementById("password");

button.addEventListener("click", async () => {
  const response = await fetch(
    "https://mother-journey-be.vercel.app/users/register",
    {
      method: "POST",
      body: {
        name: name.value,
        age: age.value,
        born: born.value,
        pregnancy: pregnancy.value,
        city: city.value,
        email: email.value,
        password: password.value,
      },
    }
  );
  const data = await response.json();
  console.log(name.value);
});
