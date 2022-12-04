# Project Euler 064 - Odd Period Square Roots

All square roots are periodic when written as continued fractions.

For example, let us consider &radic;23.

It can be seen that the sequence is repeating.

For conciseness, we use the notation &radic;23 = [4;(1,3,1,8)], to indicate that the
block (1,3,1,8) repeats indefinitely.

Exactly four continued fractions, for N &le; 13, have an odd period.

How many continued fractions for N &le; n have an odd period?

Information at [Project Euler 064](https://projecteuler.net/problem=64)

## UX

**User Stories**

As a user, I expect the function `oddPeriodSqrts(13)` to return a number.

As a user, I expect the function `oddPeriodSqrts(500)` to return 83.

As a user, I expect the function `oddPeriodSqrts(1000)` to return 152.

As a user, I expect the function `oddPeriodSqrts(5000)` to return 690.

As a user, I expect the function `oddPeriodSqrts(10000)` to return 1322.

User Stories on function `oddPeriodSqrts(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 064](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-64-odd-period-square-roots)

**Information Architecture**

The function `oddPeriodSqrts(n)` returns a number, where n is a number.