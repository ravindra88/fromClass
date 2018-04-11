# L - Local
# E - Enclosing
# G - Global
# B - BuiltIn

# x = 10

# def show():
#     x = 1000
#     print("Inside, x: ", x)

# show()
# print("Outside, x: ", x)

# Global Access
# x = 10

# def show():
#     global x
#     x = 1000
#     print("Inside, x: ", x)

# show()
# print("Outside, x: ", x)

# Enclosed
# x = 10

# def check():
#     global x
#     x = 0
#     def show():
#         x = 1000
#         print("Show - Inside, x: ", x)
#     show()
#     print("check - Inside, x: ", x)

# check()
# print("Outside, x: ", x)

# x = 10

# def check():
#     x = 0
#     def show():
#         nonlocal x
#         x = 1000
#         print("Show - Inside, x: ", x)
#     show()
#     print("check - Inside, x: ", x)

# check()
# print("Outside, x: ", x)

# BuiltIn


def len(in_var):
    print('called my len() function')
    return "Nothing"
    # l = 0
    # for i in in_var:
    #     l += 1
    # return l


def aFunc(inp):
    length_var = len(inp)
    print('Input variable is of length', length_var)


aFunc('Hello World!')
