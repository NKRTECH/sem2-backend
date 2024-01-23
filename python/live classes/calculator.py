num1=float(input('enter number 1: '))
num2=float(input('enter number 2: '))
operator=input('enter the operator from +,-,*,/: ')
if operator== '+':
    sum=num1+num2
    print(sum)
elif operator=='-' :
    subtract=num1-num2
    print(subtract)
elif operator=='*':
    multiply=num2*num1
    print(multiply)
elif operator=='/':
    divide=num2/num1
    print('number2/number1: ',divide)
else:
    print('PLEASE ENTER A VALID OPERATOR')            