year = int(input())
if year % 4 == 0:
    if year % 100 == 0 and year % 400 == 0:
        print("leap year")
    elif year % 100 == 0:
        print("Not leap year")
    elif year % 4 == 0:
        print("leap year")

else:
    print("Not leap year")
