let totalJobsList = [];
let interviewJobsList = [];
let rejectedJobsList = [];

const cardSection = document.getElementById('card-section');
const jobContainer = document.getElementById('jobs-container');
const allJobs = document.querySelectorAll('.card-all');

const interviewSection = document.getElementById('interview-section');
const rejectedSection = document.getElementById('rejected-section');
const allJobsSection = document.querySelector('.all-jobs-section');
const noJobsInterview = document.getElementById('no-jobs-interview');
const noJobsRejected = document.getElementById('no-jobs-rejected');

const allFilterButton = document.getElementById('all-filter-btn');
const interviewFilterButton = document.getElementById('interview-filter-btn');
const rejectedFilterButton = document.getElementById('rejected-filter-btn');

const calculateCount = () => {
     document.querySelector('.total-job-num').innerText = cardSection.children.length;
     document.querySelector('.interview-job-num').innerText = interviewJobsList.length;
     document.querySelector('.rejected-job-num').innerText = rejectedJobsList.length;
}
calculateCount();

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
     rejectedJobsList = rejectedJobsList.filter(item => item.cardTitle !== jobsData.cardTitle);
     cardParent.querySelector('.apply-btn').innerText = 'interview';
     renderInterview();
     calculateCount();
     renderRejected();
   } else if (e.target.classList.contains('rejected-btn')) {
     const cardParent = e.target.parentNode.parentNode;
     const cardTitle = cardParent.querySelector('.card-title').innerText;
     const cardTitleText = cardParent.querySelector('.card-title-text').innerText;
     const cardP = cardParent.querySelector('.card-p').innerText;
     const cardDes = cardParent.querySelector('.card-des').innerText;

     const jobsData = {
          cardTitle,
          cardTitleText,
          cardP,
          status: 'rejected',
          cardDes,
     }
     const isDataExists = rejectedJobsList.find(item => item.cardTitle === jobsData.cardTitle); 
     if (!isDataExists) {
          rejectedJobsList.push(jobsData);
     }
     interviewJobsList = interviewJobsList.filter(item => item.cardTitle !== jobsData.cardTitle);
     cardParent.querySelector('.apply-btn').innerText = 'rejected';
     renderRejected();
     calculateCount();
     renderInterview();
   } else if (e.target.closest('.delete-btn')) {
     const parentCard = e.target.closest('.card-all');
     const cardTitle = parentCard.querySelector('.card-title').innerText;
     interviewJobsList = interviewJobsList.filter(item => item.cardTitle !== cardTitle)
     rejectedJobsList = rejectedJobsList.filter(item => item.cardTitle !== cardTitle)
     parentCard.remove();
     calculateCount();
     interviewJobsList();
     rejectedJobsList();
   }
});

const renderInterview = () => {
     interviewSection.innerHTML = '';
     for (let iJobs of interviewJobsList) {
          const div = document.createElement('div');
     div.classList.add('card-all', 'bg-white', 'my-5', 'rounded-lg', 'p-3', 'space-y-5');
     div.innerHTML = `
     <div class="flex justify-between items-center">
                    <div>
                    <h2 class="card-title font-semibold">${iJobs.cardTitle}</h2>
                    <h4 class="card-title-text text-sm">${iJobs.cardTitleText}</h4>
                    </div>
                    <div>
                        <button class="delete-btn bg-gray-100 flex justify-center items-center p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
                        <i class="fa-solid fa-delete-left text-gray-600"></i>
                        </button>
                    </div>
                    </div>
                    <div class="card-p flex gap-2 text-sm">
<p class="card-p-1 text-[#64748B]">${iJobs.cardP}</p>
                    </div>
                    <button class="apply-btn uppercase bg-[#EEF4FF] py-1 px-3 text-[#002C5C]">${iJobs.status}</button>
                    <p class="card-des text-sm">${iJobs.cardDes}</p>
                    <div class="flex gap-2">
                        <button class="interview-btn btn btn-accent btn-outline uppercase btn-sm">interview</button>
                        <button class="rejected-btn btn uppercase btn-secondary btn-outline btn-sm">rejected</button>
                    </div>
     `
     interviewSection.appendChild(div);
     }
}
const renderRejected = () => {
     rejectedSection.innerHTML = '';
     for (let rJobs of rejectedJobsList) {
          const div = document.createElement('div');
     div.classList.add('card-all', 'bg-white', 'my-5', 'rounded-lg', 'p-3', 'space-y-5');
     div.innerHTML = `
     <div class="flex justify-between items-center">
                    <div>
                    <h2 class="card-title font-semibold">${rJobs.cardTitle}</h2>
                    <h4 class="card-title-text text-sm">${rJobs.cardTitleText}</h4>
                    </div>
                    <div>
                        <button class="delete-btn bg-gray-100 flex justify-center items-center p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
                        <i class="fa-solid fa-delete-left text-gray-600"></i>
                        </button>
                    </div>
                    </div>
                    <div class="card-p flex gap-2 text-sm">
<p class="card-p-1 text-[#64748B]">${rJobs.cardP}</p>
                    </div>
                    <button class="apply-btn uppercase bg-[#EEF4FF] py-1 px-3 text-[#002C5C]">${rJobs.status}</button>
                    <p class="card-des text-sm">${rJobs.cardDes}</p>
                    <div class="flex gap-2">
                        <button class="interview-btn btn btn-accent btn-outline uppercase btn-sm">interview</button>
                        <button class="rejected-btn btn uppercase btn-secondary btn-outline btn-sm">rejected</button>
                    </div>
     `
     rejectedSection.appendChild(div);
     }
}

const filterToggle = (id) => {
   if (id === 'interview-filter-btn') {
        interviewSection.classList.remove('hidden');
        allJobsSection.classList.add('hidden');
        rejectedSection.classList.add('hidden');

        interviewFilterButton.classList.add('btn-primary');
        rejectedFilterButton.classList.remove('btn-primary');
        allFilterButton.classList.remove('btn-primary');

        if (interviewJobsList.length === 0) {
          noJobsInterview.classList.remove('hidden');
        } else {
          noJobsInterview.classList.add('hidden');
        }

   } else if (id === 'rejected-filter-btn') {
        rejectedSection.classList.remove('hidden');
        interviewSection.classList.add('hidden');
        allJobsSection.classList.add('hidden');

        rejectedFilterButton.classList.add('btn-primary');
        interviewFilterButton.classList.remove('btn-primary');
        allFilterButton.classList.remove('btn-primary');

        if (rejectedJobsList.length === 0) {
          noJobsRejected.classList.remove('hidden');
        } else {
          noJobsRejected.classList.add('hidden');
        }

   } else {
        rejectedSection.classList.add('hidden');
        interviewSection.classList.add('hidden');
        allJobsSection.classList.remove('hidden');

        allFilterButton.classList.add('btn-primary');
        rejectedFilterButton.classList.remove('btn-primary');
        interviewFilterButton.classList.remove('btn-primary');
   }
}