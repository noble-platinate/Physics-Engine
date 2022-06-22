class blocks:
    first = 0
    second = 0
    answer = 0
     
    # parameterized constructor
    def __init__(self,number, loc, acc, mass, iv =[0,0], forces ={}, pos_init =0, size = [15,15], bb=(-1)):
        self.no = number+1
        self.loc = loc
        self.acceleration = acc
        self.mass = mass
        self.initvelocity = iv
        self.forces = forces
        self.pos_init = pos_init
        self.size = size
        self.bb=bb
        
        
class bigblocks:
     
    # parameterized constructor
    def __init__(self, number=0, type=0, rangle=0, langle=0, block={}, rpulley=0, lpulley=0, cpulley=0, mass=0, size=[80, 80], force={}):
        self.no = number+1
        self.mass = mass #(-1 -> infinite/fixed)
        self.size = size 
        self.type = type #tr,tp
        self.force = force
        self.langle = langle #{degrees}
        self.rangle = rangle #{degrees}
        self.rpulley = rpulley
        self.lpulley = lpulley
        self.cpulley = cpulley
        self.block = block
        
class grounds:
    first = 0
    second = 0
    answer = 0
     
    # parameterized constructor
    def __init__(self,number, loc, pos_init, size, position='g' ):
        self.no = number+1
        self.loc = loc
        self.position=position #l,r,b,t
        self.pos_init = pos_init
        self.size = size
      
class pulleys:
    first = 0
    second = 0
    answer = 0
     
    # parameterized constructor
    def __init__(self, no, centre, radius, acc, bb, iv =[0,0], forces =[], pos_init =0):
        self.no = no + 1
        self.centre = centre
        self.radius = radius
        self.acceleration = acc
        self.initvelocity = iv
        self.forces = forces
        self.pos_init = pos_init
        self.bb = bb
        
class phystr:
    first = 0
    second = 0
    answer = 0
     
    # parameterized constructor
    def __init__(self, no, init_obj, final_obj, angle, str_no, obj_initialised =0, toc = "mm"  ):
        self.no = no
        self.init_obj = init_obj
        self.final_obj = final_obj
        self.angle = angle
        self.str_no = str_no
        self.obj_initialised = obj_initialised
        self.toc = toc

class normals:
    first = 0
    second = 0
    answer = 0
     
    # parameterized constructor
    def __init__(self, no, obj = [0,0], angle = 90, contains_grnd = 0):
        self.no = no+1
        self.obj = obj
        self.angle = angle
        self.contains_grnd = contains_grnd
