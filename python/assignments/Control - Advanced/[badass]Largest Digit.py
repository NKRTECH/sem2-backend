s,d =input().split()
s = int(s)
d = int(d)
stri = ''
if s in range(1,37) and d in range(1,5):
    if s<d or s>9*d:
        print(-1)
    elif s in range(1,10) and d in range(1,5):
            zero = '0'*(d-1)
            s = str(s)
            print(int(s+zero))
    elif s in range(10,37) and d in range(1,5):
        for i in range(d):
            stri += str(9)
            
                        
else:
     print(-1)        
     