n = int(input())
arr = []
for i in range (n):
    x = int(input())  # in this it will only take upto n times
    arr.append(x)
    
for i in range (0,len(arr)):
        print(arr[i],end=',')