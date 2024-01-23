'''
decimal1 = float(input())
decimal1= int(decimal1*10)
decimal1=decimal1%10
print(decimal1)
'''
decimal1 = float(input())
decimal1= int(decimal1*10)
decimal1=decimal1%10

decimal2 = float(input())
decimal2= int(decimal2*10)
decimal2=decimal2%10

if decimal1>decimal2:
    print(decimal1)
elif decimal2>decimal1:
    print(decimal2)
elif decimal2==decimal1:
    print('The numbers are equal') 