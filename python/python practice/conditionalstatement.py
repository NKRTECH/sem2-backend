condition = True
if condition:
    print("it is true.")
else:
    print("it is false.")

condition = False
if condition:
    print("it is true.")
else:
    print("it is false.")

hours = int(input("how many hours passed from the last time you ate?"))
if hours >= 5:
    cash = int(input("how much money do you have?"))
    if cash >= 10:  # this is called nested} if condition, under if condition.....
        print("order some food now")
    else:
        print("sorry no food for you today.")
elif hours >= 3:
    print("you better start cooking now.")
else:
    print("keep working")
