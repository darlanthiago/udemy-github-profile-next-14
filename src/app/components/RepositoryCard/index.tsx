import React from "react";
import styles from "./styles.module.scss";
import { GithubProfileRepoType } from "@/app/types/githubProfileType";

interface IRepository {
  repo: GithubProfileRepoType;
}

export default function RepositoryCard({ repo }: IRepository) {
  return (
    <div className={styles.container}>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
    </div>
  );
}
