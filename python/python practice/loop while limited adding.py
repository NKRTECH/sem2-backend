#count=0                      # ******it will start performing from 0.....********
#while count<5:             #*****here it will execute operations upto 5 (    5-0=5, 5 times only  )*********
#    print(count)            #*****it will start printing  from 0.....***********
#    count+=1           # ******it will start executing operations from 0 and add 1 after that upto 5 times.*******
# *************************************************************************************


   
# *******************************************   
#count=0                     # ******it will start executing operations from 0.....************
#while count<4:             #*****here it will execute upto 4( 4-0=4, 4 times  )....*************
#    count+=1                  # ******it will add 1 everytime upto 4 times.....***********   
#    print(count)          #*****it will start printing  from 1.....*********** 
#    


#*******continuos code specific number of times.....**********
even_numbers=[]
count=1               # ******it will start executing operations from 1.....************

while count<4:     #*****here it will execute upto 4   (  4-1=3, only 3 times  )....*************
    num1=int(input(f"{count}. Please add a number:"))   #*****here it will give serial number starting from 1******
    if num1%2==0:
        even_numbers.append(num1)
    count+=1                     #********we did not put 'count' under 'if' because
    #                            it would only add +1 when the input number will be even    
    #                         but here it will add +1 does not matter whether it is even or not.******
    
print(sorted(even_numbers))

    