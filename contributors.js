let pageNo = 1;

document.addEventListener('DOMContentLoaded', () => {
    const contributorsContainer = document.getElementById('contributors');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const pageNoBox = document.getElementById('pageNoBox');
  
    async function fetchContributors(page) {
      pageNo += page;
      try {
        const response = await fetch(`https://api.github.com/repos/apu52/Travel_Website/contributors?page=${pageNo}`);
        const contributors = await response.json();
        console.log(contributors.length)
        if(contributors.length == 0 || pageNo < 1) {
          return;
        }
        
        contributorsContainer.innerHTML = "";
        pageNoBox.innerText = pageNo;
        contributors.forEach(contributor => {
          const contributorCard = document.createElement('div');
          contributorCard.className = 'contributor-card';
  
          contributorCard.innerHTML = `
            <a href="${contributor.html_url}" target="_blank" rel="noopener noreferrer">
              <img src="${contributor.avatar_url}" alt="${contributor.login}">
            </a>
            <h2>${contributor.login}</h2>
            <p>Contributions: ${contributor.contributions}</p>
          `;
  
          contributorsContainer.appendChild(contributorCard);
        });
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    }
  
    fetchContributors(0);

    prevBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      fetchContributors(-1);
    })
    nextBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      fetchContributors(1);
    })
  });

  // dark mode 
  document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('themeToggle');
    const body = document.body;

    // Load saved dark mode preference from localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
      body.classList.add('dark-mode');
      toggleCheckbox.checked = true;
    } else {
      toggleCheckbox.checked = false;
    }

    toggleCheckbox.addEventListener('change', () => {
      if (toggleCheckbox.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
      }
    });
  });