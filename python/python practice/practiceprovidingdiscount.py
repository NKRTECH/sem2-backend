
quantity = int(input("How many will you order?"))
cost = quantity * 50
membership = input("What is your membership?")

if cost >= 500 and membership == "new":  # ************** same as not cost<500
    discount = (cost / 100) * 15  # cost*0.15
    print(f"The cost is:{cost}-{int(discount)} discount")
    print(f"You need to pay: {cost-discount}")
elif cost >= 200 or membership == "vip":
    discount = (cost / 100) * 5  # cost*0.05
    print(f"The cost is:{cost}-{int(discount)} discount")
    print(f"You need to pay: {cost-discount}")
else:
    print(f"The cost is:{cost}")
