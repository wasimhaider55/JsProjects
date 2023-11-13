const endDate = "14 November 2023 04:00 PM";
document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const different = (end - now) / 1000;
    if (different < 0) return;

    input[0].value = (Math.floor(different / 3600 / 24));
    input[1].value = (Math.floor((different / 3600) % 24));
    input[2].value = (Math.floor((different / 60) % 60));
    input[3].value = (Math.floor((different % 60)));
}

clock();

setInterval(
    () => {
        clock()
    }, 100

)





