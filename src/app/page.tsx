import Link from "next/link";
import RepositoryCard from "./components/RepositoryCard";
import UserProfile from "./components/UserProfile";
import styles from "./page.module.scss";
import {
  GithubProfileRepoType,
  GithubProfileType,
} from "./types/githubProfileType";

export default async function Home() {
  const reponse = await fetch("https://api.github.com/users/darlanthiago");
  const data: GithubProfileType = await reponse.json();

  const reponseRepos = await fetch(
    "https://api.github.com/users/darlanthiago/repos"
  );
  const dataRepos: GithubProfileRepoType[] = await reponseRepos.json();

  return (
    <main className={styles.main}>
      <UserProfile isMyProfile profile={data} />
      <div>
        <Link href="/search-users">
          <button className="btn--green">Encontrar usuários</button>
        </Link>
        <div className={styles["projects-container"]}>
          {dataRepos.slice(0, 6).map((repo) => (
            <RepositoryCard repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
