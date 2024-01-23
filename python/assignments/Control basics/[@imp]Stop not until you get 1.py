arr = []
while True:
    x = int(input())
    arr.append(x)
    if x == 1:
        break
print(f'{max(arr)} {min(arr)}')


