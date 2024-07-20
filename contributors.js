document.addEventListener('DOMContentLoaded', () => {
    const contributorsContainer = document.getElementById('contributors');
  
    async function fetchContributors() {
      try {
        const response = await fetch('https://api.github.com/repos/apu52/Travel_Website/contributors');
        const contributors = await response.json();
  
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
  
    fetchContributors();
  });
  