temp = float(input())
if temp < 0:
    print("Freezing weather")
elif temp >= 0 and temp < 10:
    print("Very cold weather")
elif temp >= 10 and temp < 20:
    print("Cold weather")
elif temp >= 20 and temp < 30:
    print("Normal in temp")
elif temp >= 30 and temp < 40:
    print("It's hot")  # ******* note the "" and ' quotation uses.
elif temp >= 40:
    print("It's very hot")
