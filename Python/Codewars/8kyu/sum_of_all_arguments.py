https://www.codewars.com/kata/540c33513b6532cd58000259/train/python
# Description

# Write a function that finds the sum of all its arguments.

# eg:

# sum_args(1, 2, 3) # => 6
# sum_args(8, 2) # => 10
# sum_args(1, 2, 3, 4, 5) # => 15

# TIPS:

# ruby/python : http://lmgtfy.com/?q=Ruby+splat+operator

# JS/Coffeescript : http://lmgtfy.com/?q=Javascript+arguments+variable

# C: https://www.geeksforgeeks.org/variadic-functions-in-c/
# Fundamentals


# My solution
def sum_args(*args):
    return sum(args)
  
def sum_args(*args):
  sum = 0
  for arg in args:
    sum += arg
  return sum


# other solution
sum_args = lambda *x:sum(x)


# learning curve: we can use lambda function to define an anonymous function with any number of arguments but only one expression with Python. This is similar to arrow functions in javascript
# these get passed as arguments to higher order functions, but are used sparingly for readibility.
