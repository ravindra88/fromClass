# class Vehicle:
#     def __init__(self, id, make):
#         self._id = id
#         self._make = make

#     def start(self):
#         return "Vehicle with id: {}, make: {}, started....".format(self._id, self._make)

# class FourWheeler(Vehicle):
#     def __init__(self, id=1, make="Honda", model="Civic"):
#         super().__init__(id, make)
#         self._model = model

#     def start(self):
#         return super().start() + ", model is: {}".format(self._model)

# # v1 = Vehicle(7, "Ford")
# # print(v1.start())

# v1 = FourWheeler(7, "Ford", "Mustang")
# print(v1.start())

# v2 = FourWheeler()
# print(v2.start())

class First(object):
    def __init__(self):
        print("first")

class Second(object):
    def __init__(self):
        print("second")

class Third(First, Second):
    def __init__(self):
        super(Third, self).__init__()
        print("that's it")