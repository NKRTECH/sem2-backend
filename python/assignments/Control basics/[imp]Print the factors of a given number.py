num = int(input())
n = 1
while n<=num:
    if num % n == 0:
        print(n, end=',')
    n += 1