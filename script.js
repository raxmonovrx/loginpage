const form = document.querySelector(".form");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const show = document.querySelector(".show");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        name: "Farruxbek",
        lname: "Raxmonov",
        username: "raxmonovrx",
        password: "12345678",
    };
    const usernameValue = username.value;
    const passwordValue = password.value;
    const check =
        user.username === usernameValue && user.password === passwordValue;
    check
        ? alert("Hello FarruXbek. Welcome back 👋😉")
        : alert("Password or username is incorrect please try again! 😕🚫");
    e.target.reset();
});

show.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        show.innerHTML = "👀";
    } else {
        password.type = "password";
        show.innerHTML = "🤔";
    }
});
