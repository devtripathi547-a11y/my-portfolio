document.querySelectorAll('a[href="#"').forEach
(anchor => {
    anchor.addEventListener('click', function(e){
     e.preventDefault();
     document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
     });
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
   window.scrollY > 50 ?
   navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)':
   navbar.style.backgroundColor =  'rgba(10, 10, 10, 0.95)';
});
 function sendMessage() {
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let successBox = document.getElementById("successBox");

            if (name === "" || email === "" || message === "") {
                alert("Please fill all fields!");
                return;
            }

            // Simulated sending process
            successBox.style.display = "block";

            // Clear form
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }