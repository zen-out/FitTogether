import React from "react";
function LeaderboardRow({ user }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-2">{user.position}</div>
          <div className="col-6">{user.name}</div>
          <div className="col-2">{user.points}</div>
          <div className="col-2">- {user.link} </div>
        </div>
      </div>
    </div>
  );
}

const users = [
  {
    id: 5,
    position: 5,
    name: "Lesley",
    points: 5,
    link: "/lesley",
  },
  {
    id: 1,
    position: 1,
    name: "Robert",
    points: 35,
    link: "/robert",
  },
  {
    id: 2,
    position: 2,
    name: "Brittany",
    points: 25,
    link: "/brittany",
  },
  {
    id: 3,
    position: 3,
    name: "Kelly",
    points: 20,
    link: "/kelly",
  },
  {
    id: 4,
    position: 4,
    name: "Ryan",
    points: 15,
    link: "/ryan",
  },
];
const LeaderboardPage = () => {
  const orderedUsers = users.sort(
    (a, b) => parseFloat(b.points) - parseFloat(a.points)
  );
  return (
    <div>
      <h1>Leaderboard page</h1>
      {orderedUsers.map((user, index) => {
        return (
          <LeaderboardRow
            key={user.id}
            id={user.id}
            user={user}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default LeaderboardPage;
