function saveSurvey() {
    var surveyData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        rating: document.querySelector('input[name="rating"]:checked').value,
        comments: document.getElementById('comments').value
    };

    localStorage.setItem('surveyResponse', JSON.stringify(surveyData));
    alert('Survey response saved successfully!');
    document.getElementById('surveyForm').reset(); // Reset the form after saving
}
