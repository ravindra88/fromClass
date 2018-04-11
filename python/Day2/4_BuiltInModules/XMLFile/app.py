# import xml.etree.ElementTree as ET

# data = ET.Element('data')
# items = ET.SubElement(data, 'items')
# item1 = ET.SubElement(items, 'item')
# item2 = ET.SubElement(items, 'item')
# item1.set('name','item1')
# item2.set('name','item2')
# item1.text = 'item1Data'
# item2.text = 'item2Data'

# tree = ET.ElementTree(data)
# tree.write("items.xml")
# print('File Write Completed...')

# ------------------------------------ Reading
import xml.etree.ElementTree as ET
tree = ET.parse('items.xml')
root = tree.getroot()

# print(root[0][1].attrib)
# print("\nAll Attributes")
# for elem in root:
#     for subelem in elem:
#         print(subelem.attrib)

print("\nAll data")
for elem in root:
    for subelem in elem:
        print(subelem.text)
