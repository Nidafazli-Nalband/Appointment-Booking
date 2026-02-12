const timeSlotsContainer = document.getElementById("timeSlots");
const datePicker = document.getElementById("datePicker");
const bookBtn = document.getElementById("bookBtn");
const message = document.getElementById("message");

let selectedSlot = null;

// Generate time slots
const times = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM"
];

function generateSlots() {
  timeSlotsContainer.innerHTML = "";
  selectedSlot = null;

  times.forEach(time => {
    const div = document.createElement("div");
    div.classList.add("slot");
    div.textContent = time;

    div.addEventListener("click", () => {
      document.querySelectorAll(".slot").forEach(s => s.classList.remove("selected"));
      div.classList.add("selected");
      selectedSlot = time;
    });

    timeSlotsContainer.appendChild(div);
  });
}

datePicker.addEventListener("change", generateSlots);

bookBtn.addEventListener("click", () => {
  const date = datePicker.value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!date) {
    message.textContent = "Please select a date.";
    message.style.color = "red";
    return;
  }

  if (!selectedSlot) {
    message.textContent = "Please select a time slot.";
    message.style.color = "red";
    return;
  }

  if (!name || !email || !phone) {
    message.textContent = "Please fill all fields.";
    message.style.color = "red";
    return;
  }

  message.textContent = `Appointment booked on ${date} at ${selectedSlot}.`;
  message.style.color = "green";

  // Reset form
  document.querySelectorAll("input").forEach(input => input.value = "");
  timeSlotsContainer.innerHTML = "";
});
