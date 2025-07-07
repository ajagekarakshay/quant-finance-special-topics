---
title: Markov Chains
---

# Markov Chains
A Markov chain is a sequence of random variables (a.k.a stochastic process) denoted by $X_0, X_1,...,X_t$ with the Markov property that the future state depends only on the current state and not on the past states. $X_k$ is a random variable representing the state at time $k$.
Formally, this is expressed as:
$$
P(X_{k+1}|X_k, X_{k-1}, ..., X_0) = P(X_{k+1}|X_k)
$$

## Transition Matrix
Markov chain can be represented by a transition matrix $P=\{p_{ij}\}$, where $p_{ij}$ is the probability of transitioning from state $i$ to state $j$. The sum of each row in the transition matrix must equal 1.
::: tip
The probability of path $P(X_1 = s_1, X_2 = s_2...X_n = s_n|X_0=s_0) = p_{s_0,s_1} \cdot p_{s_1,s_2}...\cdot p_{s_{n-1},s_n}$
:::

## States
- _Recurrent state_ :
- _Transient state_ :.
- _Absorbing state_ : State $i$ is absorbing if it is impossible to leave this state ($p_{ii}=1$, $p_{ij}=0$).

## Stationary Distribution
The vector $\pi = (\pi_i)_{i \in S}$ is a stationary distribution of a Markov chain if the following holds:
1. $P \cdot \pi = \pi$
2. $\sum_{i \in S} \pi_i = 1$
3. $\pi_i \geq 0$

As a stationary distribution satisfies $P \cdot \pi=\pi$, $pi$ is an eigenvector of $P$ with eigenvalue 1 (largest eigenvalue).

## Absorption Probability
For an absorption state $s$, the probability to reach this state from state $i$ is given by: $a_i$. We can compute the absorption probabilities by solving the following system of equations:
1. $a_s = 1$ (if we are in the absorbing state, we are already there)
2. $a_i = \sum_{j=1}a_i \cdot p_{ij}$ (for all transient states $i$). This is equivalent to dot product of vector $a$ and row $i$ of transition matrix $P$.
3. $a_i = 0$ (for other absorbing states $i$). This means that we cannot reach the $i$'th absorbing state from absorption state $s$.
