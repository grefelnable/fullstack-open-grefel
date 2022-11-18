import { useState } from "react";

const MostVotes = (props) => {
  const { highestVotes, mostVotesAnecdote, anecdotes } = props;

  if (highestVotes === 0) {
    return (
      <div>
        <p>start voting.</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotesAnecdote]}</p>
      <p>
        has {highestVotes} {highestVotes === 1 ? "vote" : "votes"}.
      </p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // random number
  const randomIndex = () => {
    let number = Math.floor(Math.random() * anecdotes.length);
    return setSelected(number);
  };
  // votes
  const voteAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    return setVotes(copy);
  };
  // highest votes
  const highestVotes = Math.max(...votes);
  const mostVotesAnecdote = votes.indexOf(highestVotes);

  return (
    <div>
      <h2>Anecdote of the day!</h2>
      <p>{anecdotes[selected]}</p>
      <p>
        has {votes[selected]} {votes[selected] <= 1 ? "vote" : "votes"}.
      </p>
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={randomIndex}>next anecdote</button>
      <MostVotes
        highestVotes={highestVotes}
        anecdotes={anecdotes}
        mostVotesAnecdote={mostVotesAnecdote}
      />
    </div>
  );
};

export default App;
