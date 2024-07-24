import React from 'react';
import Button from 'components/common/Button';
import clsx from 'clsx';

import styles from './Buttons.module.css';

class Buttons extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleclick = e => {
    // console.log(e.target.id);
    const id = e.target.id;
    if (id === 'good') {
      //   console.log(this.state.good);
      this.setState({ ...this.state, [id]: this.state.good + 1 });
    }
    if (id === 'neutral') {
      //   console.log(this.state.good);
      this.setState({ ...this.state, [id]: this.state.neutral + 1 });
    }
    if (id === 'bad') {
      //   console.log(this.state.good);
      this.setState({ ...this.state, [id]: this.state.bad + 1 });
    }
    // console.log(this.state);
  };

  render() {
    const totalVotes = this.state.good + this.state.neutral + this.state.bad;
    const goodVotes = this.state.good;

    return (
      <div className={styles.appContainer}>
        <h1>Please leave feedback</h1>

        <div className={styles.buttonsContainer}>
          <Button
            id="good"
            variant="prim"
            type="button"
            handleclick={this.handleclick}
          >
            Good
          </Button>
          <Button
            id="neutral"
            variant="sec"
            type="button"
            handleclick={this.handleclick}
          >
            Neutral
          </Button>
          <Button
            id="bad"
            variant="third"
            type="button"
            handleclick={this.handleclick}
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
            <p className={clsx(styles.common, styles.good)}>
              Good: {this.state.good}
            </p>
            <p className={clsx(styles.common, styles.neutral)}>
              Neutral: {this.state.neutral}
            </p>
            <p className={clsx(styles.common, styles.bad)}>
              Bad: {this.state.bad}
            </p>
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
}

Buttons.propTypes = {};

export default Buttons;
