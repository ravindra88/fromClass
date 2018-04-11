# def hello():
#     print('Hello World')


# hello()


# def add(x, y):
#     return x+y


# print(add(2, 3))


# # def add(x, y, z):
# #     return x+y+z

# # print(add(1, 2, 3))


# def addAll(numbers):
#     sum = 0
#     for i in numbers:
#         sum += i
#     return sum


# print(addAll([1, 2, 3, 4, 5]))


# def Process(numbers, callback):
#     results = []
#     for i in numbers:
#         results.append(callback(i))
#     return results


# def add2(number):
#     return number + 2


# def mult2(number):
#     return number * 2


# print(Process([1, 2, 3, 4, 5], add2))
# print(Process([1, 2, 3, 4, 5], mult2))

# def greetings(msg, name):
#     return msg + " " + name


# print(greetings("Good Morning,", "Manish"))
# print(greetings("Good Morning,", "Abhijeet"))
# print(greetings("Good Morning,", "Ramakant"))

def greetings(msg):
    def greet(name):
        return msg + " " + name
    return greet


# mGreet = greetings("Good Morning,")
# print(mGreet("Manish"))
# print(mGreet("Abhijeet"))
# print(mGreet("Ramakant"))


def Converter(toUnit, factor, offset=0):
    def logic(input):
        print(str((offset+input)*factor) + " " + toUnit)
    return logic


milesToKm = Converter('km', 1.60936)
pndstoKg = Converter('kg', 0.45460)
ftoc = Converter('deg C', 0.5556, -32)

milesToKm(10)
pndstoKg(2.5)
ftoc(98)
