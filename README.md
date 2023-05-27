# LuckyNumber-
As per a numerology logic, a person's lucky number is the single digit sum calculated from his birthdate.

For example, if the birthdate is 31052022

Lucky Number is 
- 31052022 --> 3 + 1 + 0 + 5 + 2 + 0 + 2 + 2 = 15 
   - 15 has 2 digits, hence continue next iteration to calculate sum of digits of 15.
- 15 --> 1 + 5 = 6
   - 6 is a single digit value, hence, the lucky number is **6**.

Write a JavaScript program that calculates single digit sum for the given date value.

```
Output: Your Lucky Number is 6
```

The solution for this challenge should be written in `c2-submission.js` file.

The file is located inside the folder `c2-lucky-number`.

##### Tasks

- Declare and initialize variables to store date `31052022`.
- Set up `do...while` loop that iterates till the sum is greater than 10
- Inside `do...while` loop, set up `while` loop that calculates sum of digits of the date value stored.
   - if the sum is greater than 10, `do...while` loop repeats with the sum of digits value as the new value for the `while loop`.
- Display the sum (which is the lucky number), after `do...while` loop terminates
