let totalJobsList = [];
let interviewJobsList = [];
let rejectedJobsList = [];

const cardSection = document.getElementById('card-section');
const jobContainer = document.getElementById('jobs-container');
const allJobs = document.querySelectorAll('.card-all');
const interviewSection = document.getElementById('interview-section');
const rejectedSection = document.getElementById('rejected-section');
const allJobsSection = document.querySelector('.all-jobs-section');
const allFilterButton = document.getElementById('all-filter-btn');
const interviewFilterButton = document.getElementById('interview-filter-btn');
const rejectedFilterButton = document.getElementById('rejected-filter-btn');

document.querySelector('.total-job-num').innerText = allJobs.length;
document.querySelector('.interview-job-num').innerText = interviewJobsList.length;
document.querySelector('.rejected-job-num').innerText = rejectedJobsList.length;

jobContainer.addEventListener('click', (e) => {
   
   if (e.target.classList.contains('interview-btn')) {
     const cardParent = e.target.parentNode.parentNode;
     const cardTitle = cardParent.querySelector('.card-title').innerText;
     const cardTitleText = cardParent.querySelector('.card-title-text').innerText;
     const cardP = cardParent.querySelector('.card-p').innerText;
     const cardDes = cardParent.querySelector('.card-des').innerText;

     const jobsData = {
          cardTitle,
          cardTitleText,
          cardP,
          status: 'interview',
          cardDes,
     }
     const isDataExists = interviewJobsList.find(item => item.cardTitle === jobsData.cardTitle); 
     if (!isDataExists) {
          interviewJobsList.push(jobsData);
     }
   }
});

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