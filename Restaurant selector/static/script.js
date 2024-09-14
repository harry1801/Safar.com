document.addEventListener("DOMContentLoaded", function () {
    const recommendForm = document.getElementById("recommendForm");
    const recommendationsDiv = document.getElementById("recommendations");

    recommendForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(recommendForm);

        fetch("/recommend", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                recommendationsDiv.innerHTML = data.join("<br>");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
