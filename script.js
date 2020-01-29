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
    $weddingDate = new Date(2018,05,30,16,0,0);
    $today = new Date();
    $anniversary = new Date(2020,05,30)
}

settingDates = () => {
    $timeDiff = $today - $weddingDate;
    $daysDiff = Math.floor($timeDiff / (1000*60*60*24));
    $hoursDiff = Math.floor($timeDiff / (1000*60*60));
    $minutesDiff = Math.floor($timeDiff / (1000*60));
    $time = $today.getFullYear() - $weddingDate.getFullYear();
}

printElements = () => {
    if ($today === $anniversary || $today > $anniversary) {
        $year.innerHTML = $time;
    } else {
        $year.innerHTML = $time - 1
    }

    $days.innerHTML = $daysDiff;
    $hours.innerHTML = $hoursDiff;
    $minutes.innerHTML = $minutesDiff;
}

document.addEventListener('DOMContentLoaded', main);