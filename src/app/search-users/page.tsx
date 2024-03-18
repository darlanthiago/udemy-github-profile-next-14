"use client";

import React, { useState } from "react";
import Image from "next/image";

import UserProfile from "@/app/components/UserProfile";
import RepositoryCard from "@/app/components/RepositoryCard";

import NotFoundImage from "@/app/assets/not-found.svg";

import styles from "./styles.module.scss";
import {
  GithubProfileRepoType,
  GithubProfileType,
} from "../types/githubProfileType";
import Loading from "../components/Loading";
export default function SearchUsers() {
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState<GithubProfileType | null>(null);
  const [repos, setRepos] = useState<GithubProfileRepoType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearchUser() {
    if (!searchInput) {
      setUser(null);
      return;
    }

    try {
      setIsLoading(true);

      const reponse = await fetch(
        `https://api.github.com/users/${searchInput}`
      );
      const data: GithubProfileType = await reponse.json();

      const reponseRepos = await fetch(
        `https://api.github.com/users/${data.login}/repos`
      );
      const dataRepos: GithubProfileRepoType[] = await reponseRepos.json();

      setUser(data);
      setRepos(dataRepos);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles["main-search"]}>
        <div>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="btn--green"
            type="button"
            onClick={handleSearchUser}
          >
            Buscar
          </button>
        </div>
      </div>
      <div className={styles["main-body"]}>
        {isLoading ? (
          <Loading />
        ) : user?.name ? (
          <>
            <UserProfile profile={user} />
            <div className={styles["projects-container"]}>
              {repos.slice(0, 6).map((repo) => (
                <RepositoryCard key={repo.id} repo={repo} />
              ))}
            </div>
          </>
        ) : (
          <div className={styles["not-found"]}>
            <Image src={NotFoundImage} alt="not found" />
            <h3>Nenhum usuário foi encontrado</h3>
          </div>
        )}
      </div>
    </main>
  );
}
