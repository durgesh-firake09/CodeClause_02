$("#timer").hide();
$("#stopwatch").hide();
$("#go").click(function () {
    let cat = $('#option').val();
    if (cat == 'default') {
        $("#timer").hide();
        $("#stopwatch").hide();
    }
    else if (cat == "Timer") {
        $("#timer").show();
        $("#stopwatch").hide();
    }
    else {
        $("#stopwatch").show();
        $("#timer").hide();
    }
})

$('#stop').hide()
let stopped = 0;
let reset = 0;
$('#stop').click(function () {
    stopped = 1;
    $('#start').show()
    $('#stop').hide()
})
$('#reset').click(function () {
    reset = 1;
    stopped = 0;
    $('#start').show()
    $('#stop').hide()
    document.getElementById('display').innerText = '00:00:00';
})
$('#start').click(function () {
    stopped = 0; reset = 0;
    $('#start').hide();
    $('#stop').show();
    var interval = setInterval(() => {
        if (stopped == 1) {
            // $('#start').show()
            clearInterval(interval);
        }
        if (reset == 1) {
            setTimeout(() => {
                // stopped=0;
                document.getElementById('display').innerText = '00:00:00';
            }, 100);
            clearInterval(interval);
        }
        var time = document.getElementById('display').innerText;
        var timeArray = time.split(':');
        var hour = timeArray[0];
        var minute = timeArray[1];
        var second = timeArray[2];
        second++;
        if (second == 60) {
            second = 0;
            minute++;
            if (minute == 60) {
                minute = 0;
                hour++;
            }
        }
        if (second < 10) {
            second = '0' + Number(second);
        }
        if (minute < 10) {
            minute = '0' + Number(minute);
        }
        if (hour < 10) {
            hour = '0' + Number(hour);
        }

        // $('#display').text(hour + ':' + minute + ':' + second);
        document.getElementById('display').innerText = hour + ':' + minute + ':' + second;
    }, 1000);
})








$('#startt').hide()
$('#stopt').hide()
$('#resett').hide()
$('#timer-display-timet').hide()


$('#sett').click(function () {
    let settime = ($('#displayt').text()).split(':')
    let hour = document.getElementById('hourst').value
    let minute = document.getElementById('minutest').value
    let second = document.getElementById('secondst').value
    if (second < 10) {
        second = '0' + Number(second);
    }
    if (minute < 10) {
        minute = '0' + Number(minute);
    }
    if (hour < 10) {
        hour = '0' + Number(hour);
    }
    console.log(hour);
    let totaltime = Number(hour) * 60 * 60 + Number(minute) * 60 + Number(second);
    console.log(totaltime);


    $('#startt').show()
    $('#stopt').show()
    $('#resett').show()
    $('#timer-display-timet').show()
    $('#sett').hide()
    $('#displayt').text(hour + ":" + minute + ":" + second)

let stoppedt=0;
    let interval = setInterval(() => {
        if (stoppedt == 1) {
            clearInterval(interval)
        }
        stoppedt = 0;
        if (totaltime == 0) {
            $('#startt').hide()
            $('#stopt').hide()
            $('#resett').hide()
            $('#timer-display-timet').hide()
            $('#sett').show()
            clearInterval(interval)
        }
        totaltime--;
        let hour = Math.floor(totaltime / 3600);
        let minute = Math.floor((totaltime % 3600) / 60);
        let second = Math.floor((totaltime % 3600) % 60);
        console.log(hour, minute, second);
        if (second < 10) {
            second = '0' + Number(second);
        }
        if (minute < 10) {
            minute = '0' + Number(minute);
        }
        if (hour < 10) {
            hour = '0' + Number(hour);
        }
        $('#displayt').text(hour + ":" + minute + ":" + second)
    }, 1000);
})


$('#stopt').click(function () {
    stoppedt = 1;
    $('#startt').hide()
    $('#stopt').hide()
    $('#resett').hide()
    $('#timer-display-timet').hide()
    $('#sett').show()
})
