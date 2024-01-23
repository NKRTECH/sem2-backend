#Taking the Input of number and k
num,k=input().split()
#Converting k into integer
k=int(k)
arr = []
#setting maximum variable to zero
maximum=0

#start iterating  from starting to ending-k+1
for i in range(0,len(num)-k+1):

    #string slicing and conversion to integer
    d=int(num[i:i+k])
    arr.append(d)
    #setting the maximum number
    # maximum=max(maximum,d)
print(arr)
#Print the maximum number
print(max(arr))