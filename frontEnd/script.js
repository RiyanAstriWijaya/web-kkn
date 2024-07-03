document.getElementById("complaintForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const complaint = document.getElementById("complaint").value;

  fetch("http://localhost:3000/api/complaints", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, complaint }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("responseMessage").innerText = data.message;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
