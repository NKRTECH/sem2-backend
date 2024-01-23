a = int(input())
arr = list(map(int,input().split()))[:a]#by [:a] we stop taking input to a certain times
n = max(arr)
m = min(arr)
i=arr.index(n)
j=arr.index(m)
arr[i],arr[j] = arr[j],arr[i]
for x in arr:
    print(x,end=" ")
    