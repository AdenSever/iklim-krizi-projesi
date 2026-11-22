document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const city = document.getElementById("city").value;

    document.getElementById("result").innerHTML =
        "🌍 Preparing weather analysis for " + city + "...";
});
