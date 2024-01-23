#
#
# word=input()
# list=[]
# list.extend(word)
# print(list)
# string=''.join(map(str,list))
# print(string)
"""
vowel=['a','e','i','o','u']
if 'a' in list: #or 'e' in list or 'i' in list or 'o' in list or 'u' in list: 
    print('a')
    """


word = input()
vowel = "aeiou"
for a in word:
    if a in vowel:
        print(a, end="")

# for vowel in word:
#    if vowel in vowel:
#        print(vowel,end='')
#
