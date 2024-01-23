l=float(input('enter the length of the quadrilateral: '))
b=float(input('enter the breadth of the quadrilateral: '))
o=input('enter the quadrilateral-square or rectangle:')
if o=='square':
    print('area of the square: ',l*b)
elif o=='rectangle':
    print('area of the rectangle: ',l*b)
else:
    print('choose from the given quadrilateral')        