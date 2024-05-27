setInterval(() => {
    let now = new Date;
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");
    let text = document.querySelector(".text");
    hRotate = 30*h+(m/2);
    mRotate = 6*m+s/10;
    sRotate = 6*s;
    hour.style.transform = `rotate(${hRotate}deg)`;
    minute.style.transform = `rotate(${mRotate}deg)`;
    second.style.transform = `rotate(${sRotate}deg)`;
    text.innerText = `Current Time : ${h}:${m}:${s}`;
}, 0);