n = int(input())
x=0
y=0
for i in range(1,n+1):
    x += i
s1 = x**2
#print(s1)
for j in range(1,n+1):
    y += j**2
s2 = y    
#print(s2)    
print(abs(s2-s1))