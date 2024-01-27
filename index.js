function sendMail() {
    var params = {
      name: document.getElementById("exampleInputName").value,
      email: document.getElementById("exampleInputEmail2").value,
      message: document.getElementById("exampleInputMessage").value,
    };
  
    const serviceID = "service_hi7jvka";
    const templateID = "template_2mu6atu";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("exampleInputName").value = "";
          document.getElementById("exampleInputEmail2").value = "";
          document.getElementById("exampleInputMessage").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

// Modal JS

const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector("#close-btn");
const subscribeBtn = document.querySelector("#news-subscribe");
const form = document.querySelector("#modal-form");

function openModal() {
  modalContainer.style.display = "flex";
}

function closeModal() {
  modalContainer.style.display = "none";
}

// Function to handle form submission (you can customize this)
function subscribe(e) {
  e.preventDefault();
  const emailInput = document.querySelector("#modal-email").value;
  // You can add your logic to handle the form submission here
  // alert("Email subscribed: "+emailInput);
  closeModal();
}

form.addEventListener("submit", subscribe)
// closeBtn.addEventListener("click", closeModal);

// Open the modal as soon as the page loads
window.onload = openModal();