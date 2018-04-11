from pprint import pprint as pp
import os
import glob

r1 = {os.path.realpath(p): os.stat(p).st_size for p in glob.glob('*.py')}

pp(r1);
