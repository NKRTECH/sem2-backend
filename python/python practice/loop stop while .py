even_numbers=[]
keep_going= True
while keep_going:
    answer=input('would you like to contine ')
    if answer=='y':
        num1=int(input("Please add a number:"))
        if num1%2==0:
            even_numbers.append(num1)
            print(sorted(even_numbers))
#    else:
#        print(sorted(even_numbers))
    elif answer=='n':
        print(sorted(even_numbers))
        keep_going=False
        
        

