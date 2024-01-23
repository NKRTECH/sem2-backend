
countries=['france','germany','u.s.','poland','ireland']
countries[4]='denmark' #****** to update, we use = to assign thats why called as assigning operators.
print(countries)
countries[-1]='spain'  #******* for -1 it chooses last element
countries.insert(3,'ireland') #****** INSERT data by mentioning index and inputting string
print(countries)
countries.append('lithuania') #***** APPEND add element in list at the end 
print(countries)
countries.extend('nkr')  #******EXTEND inside () parentheses there is variable
print(countries)
countries.extend(['england','italy'])   #****** [] this bracket represent list
print(countries)
countries.remove('france')
print(countries)
#countries.remove('france')  #******* this data does not exist in countries list
print(countries)
countries.pop(3)  # POP removes data only by taking index number
print(countries)
countries.pop()  #******by default it removes the last data  , here it is italy
print(countries)
countries.append('spain')
print(countries)
print(countries.index('england')) #******* INDEX tells the index number of datA in the list
print(countries.count('spain')) #***COUNT tells the number of times a particular data repeated in the list
print(len(countries))
print(sorted(countries))


listnumbers=[3,12,45,52,74,36,64,58,487,562,3996]
print(len(listnumbers))
print(sorted(listnumbers))



tomscores = [19,14,13,20,19,16,17,11]
print(min(tomscores))
print(max(tomscores))
print(sum(tomscores))
sumscores=sum(tomscores)
total=len(tomscores)  #***** len fn calculate the length of the characters
print(total)
averagescores=sumscores/total
print(averagescores)