# Use print() to print to the console
Rows, Columns = input().split()    
# Initializing the matrix  
example_matrix = []  
r = []  
n = 1
# For user input  
for i in range(int(Rows)):  # This for loop is to arrange rows  
    
    for j in range(int(Columns)):  # This for loop is to arrange columns  
        r.append(n)  
    example_matrix.append(r)  
  
# Printing the matrix given by user  
for i in range(int(Rows)):  
    for j in range(int(Columns)):  
        print(example_matrix[i][j], end=" ")  
    print()  