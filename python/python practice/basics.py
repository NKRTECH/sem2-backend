character_name = "NAYAN"
character_age = "30"
print("There once was a man," + character_name)
print("he was " + character_age + " years old.")
print("He really liked the name " + character_name + ".")
name = input("WHAT IS YOUR NAME?\n")
count = str(len(name))

print("your name has " + count + " characters.")
variable = print((122 / 2))
print(type(variable))
x = 100
x += 3
print(x)
x /= 10

"""
age=int(input("enter age: ")) #integers
#if-elif-else
if age>10 and age<15:
    print("children")
elif age>=18:
    print("adult")
else:
    print("not eligible")

#loops
for i in range(1,47):
    print(i,end=" ")
    
print()

i=1
while i<47:
    print(i,end=" ")
    i=i+1
"""

# priority order for calculation parentheses> */'/'  > +/-
# (whichever comes first from left side)
# print(2*(4+3)-10+30/3)
x = 10
x += 3
print(x)

x /= 2
# print(x)
# print(x==6)
# print(x==6.5)
# print(x!=5)
# print(x>6)
# print(x>=6.5)
#
y = int(input())
print(round(y / 3))  # it rounds up the number.
print(y // 3)  # i find it similar.


backpack = ["pencil", "pen", "notebook", "textbook", "pen", "highlighter", "pen"]
numPen = backpack.count("pen")

print(numPen)
