import React, { useState } from 'react';
import Button from 'components/common/Button';
import clsx from 'clsx';

import styles from './Buttons.module.css';

function Buttons() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleclick(e) {
    // console.log(e.target.id);
    const id = e.target.id;
    if (id === 'good') {
      //   console.log(good);

      setGood(good + 1);
    }
    if (id === 'neutral') {
      //   console.log(neutral);

      setNeutral(neutral + 1);
    }
    if (id === 'bad') {
      //   console.log(good);

      setBad(bad + 1);
    }
  }

  const totalVotes = good + neutral + bad;
  const goodVotes = good;

  return (
    <div className={styles.appContainer}>
      <h1>Please leave feedback</h1>

      <div className={styles.buttonsContainer}>
        <Button
          id="good"
          variant="prim"
          type="button"
          handleclick={handleclick}
        >
          Good
        </Button>
        <Button
          id="neutral"
          variant="sec"
          type="button"
          handleclick={handleclick}
        >
          Neutral
        </Button>
        <Button
          id="bad"
          variant="third"
          type="button"
          handleclick={handleclick}
        >
          Bad
        </Button>
      </div>

      <h2>Statistics</h2>
      {totalVotes === 0 && (
        <p className={clsx(styles.common, styles.noFeedback)}>
          No feedback given
        </p>
      )}

      {totalVotes > 0 && (
        <div className={styles.statisticsContainer}>
          <p className={clsx(styles.common, styles.good)}>Good: {good}</p>
          <p className={clsx(styles.common, styles.neutral)}>
            Neutral: {neutral}
          </p>
          <p className={clsx(styles.common, styles.bad)}>Bad: {bad}</p>
          <p className={clsx(styles.common, styles.total)}>
            Total: {totalVotes}
          </p>
          <p className={clsx(styles.common, styles.feedback)}>
            Positive feedback: {Math.ceil((goodVotes * 100) / totalVotes)}%
          </p>
        </div>
      )}
    </div>
  );
}

export default Buttons;
