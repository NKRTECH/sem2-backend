# Use print() to print to the console
Rows, Columns = input().split()    
# Initializing the matrix  
matrix = []  
  
# For user input  
for i in range(int(Rows)):  # This for loop is to arrange rows  
    r = []  
    n = 1
    for j in range(int(Columns)):  # This for loop is to arrange columns  
        r.append(n)  
    matrix.append(r)
print(matrix)  
  
# Printing the matrix given by user  
for i in range(int(Rows)):  
    for j in range(int(Columns)):  
        print(matrix[i][j], end=" ")  
    print()