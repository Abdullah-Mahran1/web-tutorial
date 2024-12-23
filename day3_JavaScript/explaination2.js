// the code shuold link to explaination.html, 
// if a form is submitted, the form data should be displayed in the console and the text "You submitted a review" should be displayed on the page.
// The submit button should be disabled after the form is submitted.
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reviewForm');
    const submitButton = document.getElementById('submitButton');
    const resultText = document.getElementById('resultText');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log(formObject);

        resultText.textContent = 'You submitted a review';
        submitButton.disabled = true;
    });
});