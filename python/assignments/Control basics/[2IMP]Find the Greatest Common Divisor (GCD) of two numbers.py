num1,num2 = input().split()
num1 = int(num1)
num2 = int(num2)
arr = []
x = 1
while x in range(100000):
    
    n = num1 % x
    m = num2 % x
    if n == 0 and m == 0:
        arr.append(x)
    x += 1
print(max(arr))    
