function sleep_tracker() {
    const hours_of_sleep = parseInt(document.querySelector("#hours_of_sleep").value);
    const sleep_quality = parseInt(document.querySelector("#sleep_quality").value);
    const time_of_day_wake = document.querySelector("#time_of_day_wake").value.toLowerCase();
    const response_p = document.querySelector("#response");
    let response = "";

    console.log(hours_of_sleep);

    if (hours_of_sleep >= 7 && hours_of_sleep <= 9) {
        response += "You slept a good amount of hours";
    } 
    else if (hours_of_sleep > 9) {
        response += "You slept too much";
    } 
    else if (hours_of_sleep < 7) {
        response += "You need more sleep time";
    } 
    else {
        response_p.textContent = "Input your hours of sleep!";
        return;
    }

    if (sleep_quality >= 7 && sleep_quality <= 10) {
        response += " AND your sleep quality is okay";
    } 
    else if (sleep_quality >= 4 && sleep_quality <= 6) {
        response += " AND your sleep quality is mediocre";
    } 
    else if (sleep_quality >= 1 && sleep_quality <= 3) {
        response += " AND your sleep quality is terrible";
    } 
    else {
        response_p.textContent = "Input your sleep quality!";
        return;
    }

    if (time_of_day_wake == "morning") {
        response += " AND you woke up at a good point in time.";
    }
    else if (time_of_day_wake == "noon" || time_of_day_wake == "afternoon") {
        response += " AND you woke up at a subpar point in time.";
    }
    else if (time_of_day_wake == "evening" || time_of_day_wake == "night") {
        response += " AND you woke up at a terrible point in time.";
    }
    else {
        response_p.textContent = "Input a valid time of day!";
        return;
    }

    response_p.textContent = response
}