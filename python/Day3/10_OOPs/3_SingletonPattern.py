class Singleton(type):
    data = 10

    def __init__(cls, name, bases, attrs, **kwargs):
        super().__init__(name, bases, attrs)
        cls._instance = None

    def __call__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__call__(*args, **kwargs)
        return cls._instance


class MyClass(metaclass=Singleton):
    pass


m1 = MyClass()
m2 = MyClass()

print(m1 is m2)

m1.data = "Hi There"
print(m2.data)
