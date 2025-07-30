---
title: Series
---

# Finite series

## Powers
$$
\sum_{k=1}^n k = \frac{n \cdot (n + 1)}{2}
$$

$$
\sum_{k=1}^n k^2 = \frac{n \cdot (n + 1) \cdot (2n + 1)}{6}
$$

$$
\sum_{k=1}^n k^3 = \frac{n^2 \cdot (n + 1)^2}{2^2}
$$

## Binomial coefficients

$$
\sum_{k=0}^n \binom{n}{k} = 2^n
$$

$$
\sum_{k=0}^n  \binom{n}{k}^2 = \binom{2n}{n}
$$

## Harmonic series

$$
1 + \frac{1}{2} + ... + \frac{1}{n} \approx \ln(n) + 0.5772
$$

# Infinite series
## Taylor series

$$
f(x) - f(x_k) = (x-x_k)\frac{\partial f}{\partial x}(x_k) + \frac{(x-x_k)^2}{2!}\frac{\partial^2 f}{\partial x^2}(x_k) +  ...
$$

::: tip
Using Taylor series, we can approximate functions like $e^x$, $\sin(x)$, $\cos(x)$, and $\ln(1+x)$ at $x_k=0$.
:::

## Riemann zeta function

$$
1 + \frac{1}{2^2} + \frac{1}{3^2} + ... = \zeta(2) = \frac{\pi^2}{6}
$$

$$
1 + \frac{1}{2^4} + \frac{1}{3^4} + ... = \zeta(4) = \frac{\pi^4}{45}
$$
