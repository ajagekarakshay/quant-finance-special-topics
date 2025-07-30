---
title: Theory
---

# Probability theory

## Counting

Selecting $k$ elements from $n$ elements can be done in the following number of ways:

|          | Without replacement | With replacement |
|----------|----------|----------|
| Ordered  | $n \cdot (n-1) \cdot ...(n-k+1)$   | $n^k$   |
|Unordered | $\binom{n}{k}$   | $\binom{n+k-1}{k}$  |

## Conditional Probability

Conditional probability is used when we are in a position to update the sample space based on new information.
$$
P(A|B) = \frac{P(A, B)}{P(B)} = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

## Bayes' Theorem
Let $A_1, A_2, ..., A_n$ be mutually exclusive events that cover the entire sample space $A$. Then for any event $B$,
$$
P(A_i|B) = \frac{P(B|A_i) \cdot P(A_i)}{\sum_{j=1}P(B|A_j) \cdot P(A_j)}
$$

::: tip
The odds form of Bayes' theorem can be also be written as: posterior odds is equal to likelihood ratio times prior odds.
$$
\frac{P(A_i|B)}{P(A_{i}^c|B)} = \frac{P(B|A_i)}{P(B|A_{i}^c)} \cdot \frac{P(A_i)}{P(A_{i}^c)}
$$
:::

## Survival Probability
The survival probability is the probability that a random variable $X$ is greater than a certain value $x$, denoted as $P(X > x)$.

## Expected Value
The expected value of a function $g(X)$ over a random variable $X \sim f_X$ is defined as:
$$
E[g(X)] = \int_{-\infty}^{\infty} g(x) \cdot f_X(x) \, dx
$$
