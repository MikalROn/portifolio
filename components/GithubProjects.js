import axios from 'axios';
import React, { useState, useEffect } from 'react';

function GithubProjects({ username }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    }

    fetchRepos();
  }, [username]);

  return (
    <div>
      <h3>Projetos no GitHub:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubProjects;
