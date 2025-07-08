---
title: Martingales and Random Walk
---
# Martingales and Random Walk

## Filtration
A filtration is a sequence of $\sigma$-algebras $\mathcal{F}_t$ that represents the information available up to time $t$. It is used to model the evolution of information over time.
For a stochastic process $X_t$, the filtration $\mathcal{F}_t$ can be defined as $\mathcal{F}_t \equiv (X_0=x_0, X_1=x_1, ... , X_t=x_t)$

## Martingale
A stochastic process $X_t$ is a martingale with respect to a filtration $\mathcal{F}_t$ if:
1. $E[|X_t|] < \infty$ for all $t$ (the expected value is finite).
2. $E[X_t|\mathcal{F}_s] = X_s$ with $s < t$/

::: info
Simply put, martingale property implies that the best prediction of the expectation of the future value is the current value, given all past information.
:::

## Random Walk
Random walk is a _discrete stochastic process_ $S_t$ given by $S_t = \sum_{i=1}^{t}$ $X_i$, where $X_i$ are independent and identically distributed (i.i.d.) random variables with mean $E[X_i] = 0$ and variance $\sigma^2 = E[X_i^2] < \infty$. The process starts at $S_0 = 0$. The $E[X_i]=0$ is not a requirement for random walk, but it is a commonly used condition.

### Simple random walk
If $X_t$ takes values $+1$ and $-1$ with probabilities $p$ and $1-p$, respectively, then the random walk is called a simple random walk. The expected value of the position at time $t$ is given by: