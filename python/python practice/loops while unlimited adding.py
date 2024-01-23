#*******simple coding describes the concept of loop***********
'''
even_numbers=[]                            
num1=int(input("Please add a number:"))
num2=int(input('Please add a number:')) 
if num1%2==0:
        even_numbers.append(num1)
if num2%2==0:
        even_numbers.append(num2)       

        print(sorted(even_numbers))    
'''
even_numbers=[]
while True:
    num1=int(input("Please add a number:"))
    if num1%2==0:
        even_numbers.append(num1)
    
        print(sorted(even_numbers))