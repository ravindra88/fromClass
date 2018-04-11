import pypyodbc

connection = pypyodbc.connect('Driver={SQL Server};'
                                'Server=.\\SqlExpress;'
                                'Database=ShoppingCart;'
                                'uid=sa;pwd=sa;')

cursor = connection.cursor()
SqlCommand = "SELECT * from ShoppingCartItems"

cursor.execute(SqlCommand)
results = cursor.fetchall()

print(results)

connection.close()