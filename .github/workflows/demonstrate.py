import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import scipy as sp


def digit_divisible_by_n(n):
  "Write a function for the first n digits divisible by n."
  
  number_of_digit = len(str(n))
  print(number_of_digit)
  
  if (n%number_of_digit) != 0:
      return False
  current_number = n
  for i in range(number_of_digit,0,-1):
    current_number = current_number // 10
    print(current_number)
    if current_number%i != 0:
      print(f"The digit is not divisible by {i}")
      return False
      
  print("Success, the first n digits are divisible by n.")
  return True
  
  
n = 174
digit_divisible_by_n(n)