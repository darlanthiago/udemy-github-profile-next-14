import Image from "next/image";
import React from "react";

import { GithubProfileType } from "@/app/types/githubProfileType";
import styles from "./styles.module.scss";

interface IProfileProps {
  isMyProfile?: boolean;
  profile?: GithubProfileType;
}

export default function UserProfile({ isMyProfile, profile }: IProfileProps) {
  return (
    <div className={styles.container}>
      <div className={styles["avatar-container"]}>
        <Image
          src={profile?.avatar_url}
          height={250}
          width={250}
          alt="Darlan Thiago"
        />
        {isMyProfile && <div>Meu perfil</div>}
      </div>
      <h1>{profile?.name}</h1>
      <span>{profile?.login}</span>
      <p>{profile?.bio}</p>
      <div className={styles["items-container"]}>
        <span>{profile?.company}</span>
        <span>{profile?.location}</span>
        <span>{profile?.email}</span>
        <span>{profile?.blog}</span>
      </div>
    </div>
  );
}
