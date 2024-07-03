document.getElementById("complaintForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const complaint = document.getElementById("complaint").value;

  // Display a simple response message
  document.getElementById("responseMessage").innerText = `Terima kasih, ${name}! Pengaduan Anda telah diterima.`;

  // Here you would typically send the data to the server
  // For example, using fetch or XMLHttpRequest:
  // fetch('/submit-complaint', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email, complaint }),
  // })
  // .then(response => response.json())
  // .then(data => {
  //     console.log('Success:', data);
  // })
  // .catch((error) => {
  //     console.error('Error:', error);
  // });
});
