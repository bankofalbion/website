const inviteButton = document.getElementById("inviteButton");

if (inviteButton) {
  inviteButton.addEventListener("click", (event) => {
    event.preventDefault();
    inviteButton.classList.add("clicked");

    window.setTimeout(() => {
      inviteButton.classList.remove("clicked");
    }, 250);
  });
}
