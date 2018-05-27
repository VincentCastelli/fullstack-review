import React from 'react';

const RepoListEntry = (props) => (
  <div>
    <div>{props.repo.name}</div>
    <div>{props.repo.description}</div>
    <div>{props.repo.stargazers_count}</div>
    <div>{props.repo.watchers_count}</div>
    <div>{props.repo.created_at}</div>
  </div>
)

export default RepoListEntry;