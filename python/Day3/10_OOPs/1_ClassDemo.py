# class Employee:
#     pass

# print(Employee)
# e = Employee()
# print(type(e))

# print(type(Employee))

# class Employee:
#     def display(self):
#         print(self)

# e = Employee()

# e.display()
# Employee.display(e)


# class Employee:
#     def __init__(self, id):
#         self._id = id

#     def display(self):
#         print(self)

#     def getId(self):
#         return self._id


# e1 = Employee(1)
# print(e1.getId())

# class Employee:
#     def __init__(self, id):
#         if not (id[3:].isdigit() and int(id[3:]) <= 9999):
#             raise ValueError("Invalid Id Format '{}'".format(id))
#         self._id = id

#     def display(self):
#         print(self)

#     def getId(self):
#         return self._id[3:]


# e1 = Employee("SYN0001")
# print(e1.getId())
