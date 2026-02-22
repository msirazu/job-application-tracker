const totalJobs = [];
const interviewJobs = [];
const rejectedJobs = [];

const interview = document.querySelector('.interview-btn');
const rejected = document.querySelector('.rejected-btn');
const cardSection = document.getElementById('card-section');

document.querySelector('.total-job-num').innerText = totalJobs.length;
document.querySelector('.interview-job-num').innerText = interviewJobs.length;
document.querySelector('.rejected-job-num').innerText = rejectedJobs.length;

cardSection.addEventListener('click', (e) => {
    const target = e.target;
});