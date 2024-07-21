import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./twitterFollowCard";

const users = [
  { name: "Jesus", userName: "jesus", isFollowing: false },
  { name: "Jose", userName: "jose", isFollowing: false },
  { name: "Michel", userName: "michel", isFollowing: true },
  { name: "Rosa", userName: "rosa", isFollowing: true },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { name, userName, isFollowing } = user;
        return (
          <TwitterFollowCard
        key={userName}
          name={name}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
