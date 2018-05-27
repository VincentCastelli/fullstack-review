import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    {props.repos.map((repo, index) => {
      return <RepoListEntry repo={repo} key={index} />
    })}
  </div>
)

export default RepoList;