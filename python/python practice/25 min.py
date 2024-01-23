gender = str(input("enter your gender(in small letters)\n"))
if gender == "male":
    age = float(input("enter the age to know more\n"))

    if age < 15:
        print("you have not hitted puberty.")
    elif age >= 15:
        print("you have hitted the puberty.")
    print("***DONT TAKE IT AS FACTUAL***")

elif gender == "female":
    age = float(input("enter the age to know more\n"))

    if age < 14:
        print("you have not hitted the puberty.")

    elif age >= 14:
        print("you have hitted the puberty.")
    print("***DONT TAKE IT AS FACTUAL***")

else:
    print("INFORMATION NOT AVAILAIBLE IN MY DATABASE")
