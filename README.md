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

**Getting Started**

Enter a whole number between 13 and 10000 (without leading zeros) and select the Submit Button.  You will see the number of continued fractions for N less than or equal to the number entered that have an odd period, unless you have made an invalid input.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 13 or greater than 10000
- Including leading zeros such as 013
- Entering a number, but it is not an integer

As a user, if I select the Reset Button, I can clear the information or start again.

As a user, I expect the function `oddPeriodSqrts(13)` to return a number.

As a user, I expect the function `oddPeriodSqrts(500)` to return 83.

As a user, I expect the function `oddPeriodSqrts(1000)` to return 152.

As a user, I expect the function `oddPeriodSqrts(5000)` to return 690.

As a user, I expect the function `oddPeriodSqrts(10000)` to return 1322.

User Stories on function `oddPeriodSqrts(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 064](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-64-odd-period-square-roots)

**Information Architecture**

The function `oddPeriodSqrts(n)` returns a number, where n is a number.

## Features

Allows the user to enter a number, in order to get the number of continued fractions for N less than or equal to that number that have an odd period.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.3 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-064) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)