---
title: Characteristic functions
---
# Characteristic function
A real-valued random variable $X$ with a pdf $f_X(x)$ can be completely defined by its characteristic function $\phi_X(t)$, which is defined as:
$$
\phi_X(t) = E[e^{itX}] = \int_{-\infty}^{\infty} e^{itx} f_X(x) \, dx
$$
where $i$ is the imaginary unit and $t$ is a real number.

Characteristic function provides a way to analyze the distribution of a random variable in the frequency domain (Fourier transform with sign reversal), and can be good alternative route to analytical results compared to using pdf or cdf.

::: tip
In addition to univariate distributions, characteristic functions can also be defined for multivariate distributions.
:::

## Properties of characteristic function
1. **Uniqueness**: There is a one-to-one correspondence between cumulative distribution functions and characteristic functions.
The pdf $f_X(x)$ can be recovered from the characteristic function $\phi_X(t)$ by the inverse transform:
$$
f_X(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-itx} \phi_X(t) \, dt
$$

2. **Continuity**: $\phi_X(t)$ is continuous for all $t$.

3. **Convex combination**: The convex combination of characteristic functions is also a characteristic function. $\sum_{i} \alpha_i \cdot \phi_i(t)$ with $\sum_{i} \alpha_i = 1$ and $\alpha_i \geq 0$ is also a characteristic function.

4. **Multiplication**: The product of finite characteristic functions is also a characteristic function.

::: info Sum of independent random variables
If $X$ and $Y$ are independent random variables, then:
$$
\phi_{X+Y}(t) = \phi_X(t) \cdot \phi_Y(t)
$$
:::

5. For a real number $a$, $\phi_{aX}(t) = \phi_X(at)$.

## Generating moments from characteristic function

As $\phi_X(t)$ can be written as a Taylor series expansion for $e^{itX}$:
$$
\phi_X(t) = E[e^{itX}]
= \sum_{n=0}^{\infty} \frac{(it)^n}{n!} E[X^n] = 1 + itE[X] - \frac{t^2E[X^2]}{2} + \ldots
$$
To get the $n$'th moment of $X$, we can differentiate the characteristic function $n$ times and evaluate it at $t=0$:
$$
E[X^n] = \left. \frac{d^n}{dt^n} \phi_X(t) \right|_{t=0}
$$

## Moment generating function
