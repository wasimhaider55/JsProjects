setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    //   rotation formula for Date() object
    hRotations = 30 * hTime + mTime / 2;
    mRotations = 6 * mTime;
    sRotations = 6 * sTime;

    hours.style.transform = `rotate(${hRotations}deg)`;
    minutes.style.transform = `rotate(${mRotations}deg)`;
    seconds.style.transform = `rotate(${sRotations}deg)`;

}, 1000)