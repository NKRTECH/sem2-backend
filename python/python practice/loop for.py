# even_numbers=[]
#
# for count in range(3,6):           #****** it will execute operation (6-3=3) 3 times******
#    num1=int(input(f'{count}. Please add a number:'))
#    if num1%2==0:
#        even_numbers.append(num1)
# print(sorted(even_numbers))

# ***** by using 'for loop' we dont have to add 'count+=1' to maintain the loop ********
even_numbers = []

for n in range(1, 6):  # ****** it will execute operation (6-1=5) 5 times******
    num1 = int(input(f"{n}. Please add a number:"))
    if num1 % 2 == 0:
        even_numbers.append(num1)
print(sorted(even_numbers))
