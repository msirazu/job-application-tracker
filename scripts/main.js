const totalJobs = [];
const interviewJobs = [];
const rejectedJobs = [];

const interviewButton = document.querySelector('.interview-btn');
const rejectedButton = document.querySelector('.rejected-btn');
const cardSection = document.getElementById('card-section');
const allJobs = document.querySelectorAll('.card-all');
const interviewSection = document.getElementById('interview-section');
   const rejectedSection = document.getElementById('rejected-section');
   const allJobsSection = document.querySelector('.all-jobs-section');
   const allFilterButton = document.getElementById('all-filter-btn');
    const interviewFilterButton = document.getElementById('interview-filter-btn');
    const rejectedFilterButton = document.getElementById('rejected-filter-btn');

document.querySelector('.total-job-num').innerText = allJobs.length;
document.querySelector('.interview-job-num').innerText = interviewJobs.length;
document.querySelector('.rejected-job-num').innerText = rejectedJobs.length;

cardSection.addEventListener('click', (e) => {
   console.log(e.target.parentNode)
   const card = e.target.parentNode.parentNode;
    // const jobsData = {
    //     title: 
    // }
});

const getJobsData = (data) => {

}

const filterToggle = (id) => {
   if (id === 'interview-filter-btn') {
        interviewSection.classList.remove('hidden');
        allJobsSection.classList.add('hidden');
        rejectedSection.classList.add('hidden');

        interviewFilterButton.classList.add('btn-primary');
        rejectedFilterButton.classList.remove('btn-primary');
        allFilterButton.classList.remove('btn-primary');

   } else if (id === 'rejected-filter-btn') {
        rejectedSection.classList.remove('hidden');
        interviewSection.classList.add('hidden');
        allJobsSection.classList.add('hidden');

        rejectedFilterButton.classList.add('btn-primary');
        interviewFilterButton.classList.remove('btn-primary');
        allFilterButton.classList.remove('btn-primary');

   } else {
        rejectedSection.classList.add('hidden');
        interviewSection.classList.add('hidden');
        allJobsSection.classList.remove('hidden');

        allFilterButton.classList.add('btn-primary');
        rejectedFilterButton.classList.remove('btn-primary');
        interviewFilterButton.classList.remove('btn-primary');
   }
}