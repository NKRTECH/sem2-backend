w=int(input())
x=int(input())
y=int(input())
z=int(input())
if w>x and w>y and w>z:
    print(w)
elif x>w and x>y and x>z:
    print(x)
elif y>w and y>x and y>z:
    print(y)
else:
   print(z)        
#elif z>w and z>x and z>y:
 #   print(z)