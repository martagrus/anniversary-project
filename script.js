let $year, $days, $hours, $minutes, $weddingDate, $today, $timeDiff, $hoursDiff, $daysDiff, $minutesDiff, $time;

main = () => {
    prepareElements();
    settingDates();
    printElements();
}

prepareElements = () => {
    $year = document.getElementById('year');
    $days = document.getElementById('days');
    $hours = document.getElementById('hours');
    $minutes = document.getElementById('minutes');
    $weddingDate = new Date(2018,06,30,16,0,0);
    $today = new Date();
}

settingDates = () => {
    $timeDiff = $today - $weddingDate;
    $daysDiff = Math.floor($timeDiff / (1000*60*60*24));
    $hoursDiff = Math.floor($timeDiff / (1000*60*60));
    $minutesDiff = Math.floor($timeDiff / (1000*60));
    $time = $today.getFullYear() - $weddingDate.getFullYear();
}

printElements = () => {
    if ($today === new Date(2020,06,30)) {
        $year.innerHTML = $time;
    } else {
        $year.innerHTML = $time - 1
    }

    $days.innerHTML = $daysDiff;
    $hours.innerHTML = $hoursDiff;
    $minutes.innerHTML = $minutesDiff;
}

document.addEventListener('DOMContentLoaded', main);