score=int(input())
if score>=0 and score<=39:
    print('F')
elif score>=40 and score<=50:
    print('D')
elif score>=51 and score<=60:
    print('C')
elif score>=61 and score<=70:
    print('B')
elif score>=71 and score<=80:
    print('A')      
elif score>=81 and score<=100:
    print('S')
else:
    print('Invalid input')    