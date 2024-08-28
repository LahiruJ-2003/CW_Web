function submitForm() {
    const userName = document.getElementById('name');
    const email = document.getElementById('email');
    const ratings = document.getElementsByName('rating');
    const ratings2 = document.getElementsByName('rating2');
    const reason = document.getElementById('reason');
    const reason2 = document.getElementById('reason2'); 
    const selectElement = document.getElementById("que3ans");
    const popupMsg = document.getElementById("success");

   
    const nameValidate = /^[ A-Za-z]*$/;
    
    if (!userName.value.match(nameValidate)) {
        alert("Name cannot contain numbers or symbols"); 
        return;
    }

    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(emailValidate)){
        alert("Enter a valid email");
        return;
    }
    
 
    function rating() {
        for (var i = 0; i < ratings.length; i++) {
            if (ratings[i].checked) {
                return ratings[i].value;
            }
        }
    }

    function rating2() {
        for (var i = 0; i < ratings2.length; i++) {
            if (ratings2[i].checked) {
                return ratings2[i].value;
            }
        }
    }


    var que1_rating = rating();
    var que2_rating2 = rating2();
    var sendMail = "mailto:kisal.20221778@iit.ac.lk?subject=Customer feedback&body="
        + encodeURIComponent("Customer Name: " + userName.value 
            + "\n\nEmail: " + email.value
            + "\n\nRating for the Website: " + que1_rating
            + "\n\nReason for the rating: " + reason.value  
            + "\n\nFound what you were looking for: " + que2_rating2
            + "\n\nWhat customer needs: " + reason2.value
            + "\n\nDevice using: " + selectElement.value
        );

    popupMsg.style.display = 'block'

    window.location.href = sendMail;
}


