---
title: Random variables
---

## Random variable
A random variable is a function that maps outcomes of a sample space to real numbers. It can be discrete or continous.

## Distribution function
With every random variable X, we can associate a cumulative distribution function (cdf) $F_X(x) = P(X \leq x)$.

::: tip  $F_X(x)$ is a cdf iff:
1. $\lim_{x \to 0} F_X(x) = 0$ and $\lim_{x \to \infty} F_X(x) = 1$
2. $F_X(x)$ is non-decreasing.
3. $F_X(x)$ is right-continuous.
:::

::: info Indentically distributed random variables
Random variables $X$ and $Y$ are identically distributed if $F_X(x) = F_Y(x)$ for all $x$.
:::

## Probability density (mass) function
The probability density function (pdf) or mass function (pmf) for a random variable $X$ is given by:
- $f_X(x) = P(X=x)$
- $f_X(x) = \frac{d}{dx}F_X(x)$ for continuous random variables.
