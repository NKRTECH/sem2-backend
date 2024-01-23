inp = input()
a = int(inp.split()[0])
b = int(inp.split()[1])
s=int(abs(b-a))
if s>=1 and s<=10:
    print('1')
elif s>10:
    if s%10==0:
        print(s/10)
    else:
        print(int(s/10) + 1)
elif s==0:
    print('0')