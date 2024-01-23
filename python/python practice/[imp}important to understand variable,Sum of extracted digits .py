"""'
number_1=int(input(''))
number_2=int(input(''))

number_1=int(number_1/10)
number_1=int(number_1%10)

number_2=int(number_2/10)
number_2=int(number_2%10)

if number_1<10 or number_2<10:
    print('Invalid number')
else:
    print(number_2 + number_1)   


"""

number_1 = int(input())
number_2 = int(input())

if number_1 < 10 or number_2 < 10:
    print("Invalid number")
else:
    number_1 = int(number_1 / 10)
    number_1 = int(number_1 % 10)

    number_2 = int(number_2 / 10)
    number_2 = int(number_2 % 10)
    print(number_2 + number_1)
