function updateTime() {
    // Get the current date and time
    const now = new Date();

    // Array of weekday names
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    // Get the current hours, minutes, and weekday
    let hours = now.getUTCHours(); // Get the time in UTC
    let minutes = now.getUTCMinutes();
    const day = weekdays[now.getUTCDay()]; // Get the current day of the week in UTC

    // Format minutes and hours to always be two digits
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    // Combine them into a string
    const timeString = `${hours}:${minutes} UTC ${day}`;

    // Insert the timeString into the element with id "realTime"
    document.getElementById('realTime').innerText = timeString;
}

// Update the time immediately when the page loads
updateTime();

// Update the time every minute
setInterval(updateTime, 60000);
