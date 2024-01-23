#Taking the Input of number and k
num=input()
#Converting k into integer
k=int(input())
#setting maximum variable to zero
maxprod = 0
#start iterating  from starting to ending-k+1
for i in range(0,len(num)-k+1):
    ele = 1
    for x in range(i,i+k):
        ele *= int(num[x])
    if ele>maxprod:
        maxprod=ele
print(maxprod)
