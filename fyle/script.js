
function openpopup(){
   document.getElementsByClassName("popup")[0].style.display="flex";
//    document.getElementsByClassName("container")[0].classList.add("blur");
}
const email = document.getElementById('email').value;
const firstName = document.getElementById('fname').value;
const lastName = document.getElementById('lname').value;
const termsChecked = document.getElementById('terms-checkbox').checked;

// Prepare the data to be sent
const data = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    termsChecked: termsChecked
};
function pophandler(){
    document.getElementsByClassName("popup")[0].style.display="none";
    fetch('https://getform.io/f/nbdopzea', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Form submission failed!');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            // Remove 'selected' class from all cards
            cards.forEach(c => {
                c.classList.remove("selected");
            });

            // Add 'selected' class to clicked card
            card.classList.add("selected");
            if(card.getAttribute("id")==='b'){
                document.getElementById("image").setAttribute("src","./images/b.png");
            }
            if(card.getAttribute("id")==='c'){
                document.getElementById("image").setAttribute("src","./images/c.png");
            }
            if(card.getAttribute("id")==='a'){
                document.getElementById("image").setAttribute("src","./images/a.png");
            }

        });
    });
});

