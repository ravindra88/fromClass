# def calculate(x, y):
#     print(x+y)


# def calculate(*arr):
#     sum = 0
#     for num in arr:
#         sum += num
#     print(sum)


# calculate()
# calculate(2, 3)
# calculate(2, 3, 4)


# def printdata(**kwargs):
#     print(kwargs)
#     print(type(kwargs))

# printdata(id=1, name="Manish", city="Pune", arr=[1, 2, 3, 4])

def creator():
    def m1(a, b):
        return a+b

    def m2(a, b, c):
        return a+b+c

    def logic(*arr):
        if(len(arr) == 2):
            return m1(arr[0], arr[1])
        elif (len(arr) == 3):
            return m2(arr[0], arr[1], arr[2])
        else:
            raise Exception("No Implementation")

    return logic


calculate = creator()
# print(type(calculate))

# print(calculate(1, 2))
# print(calculate(1, 2, 3))
# print(calculate(1, 2, 3, 4))


def creator1(*arr):
    def m1(a, b):
        return a+b

    def m2(a, b, c):
        return a+b+c

    if(len(arr) == 2):
        return m1(arr[0], arr[1])
    elif (len(arr) == 3):
        return m2(arr[0], arr[1], arr[2])
    else:
        raise Exception("No Implementation")


print(creator1(1, 2))
print(creator1(1, 2, 3))