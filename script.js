let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function timeSec() {
    let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();

hours.innerText = h ? h>9 ? h : '0'+h : '00';
minutes.innerText = m ? m>9 ? m : '0'+m : '00';
seconds.innerText = s ? s>9 ? s : '0'+s : '00';
}

setInterval(timeSec, 1000);
timeSec();
