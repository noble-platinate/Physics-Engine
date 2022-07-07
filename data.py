from blocksclass import bigblocks

from phyeng import *

input_no = 1
inputarr = ["b1u000c1"]

weight = [30]
ext_force = [0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r']

b_size = [[20, 20]]
c_size = [150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 2
inputarr = ["b1u000b2", "b2u000c1"]

weight = [30, 40]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r']

b_size = [[20, 20], [20, 20]]
c_size = [150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 3
inputarr = ["b1u000b2", "b2u000b3", "b3u000c1"]

weight = [30, 40, 50]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 4 
inputarr = ["b1u000c1", "b1u270c2"]

weight = [20]
ext_force = [0, 5]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r']

b_size = [[20, 20]]
c_size = [150,150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 5 
inputarr = ["b1u000c1"]

weight = [20]
ext_force = [-5, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['b', 'r']

b_size = [[20, 20]]
c_size = [150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 6 
inputarr = ["c1u000tp10000u180b1", "mp1u000c2"]

weight = [20]
ext_force = [0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['b', 'r']

b_size = [[20, 20]]
c_size = [150,150]
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 7 
inputarr = ["b1u000tp10000u180b2", "mp1u000c1"]

weight = [30,50]
ext_force = [0, 0,0,0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['b', 'r', 'b', 'r']

b_size = [[20, 20], [20, 20]]
c_size = [150]
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 8 
inputarr = ["b1u000b2", "b2u000tp10000u180b3", "mp1u000c1"]

weight = [30, 40, 50]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150]
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=1, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 9 
inputarr = ["b1u000tp10000u180b2", "b2u180b3", "mp1u000c1"]

weight = [10,10,80]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['b', 'r', 'b', 'r', 'b', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150]
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 10 
inputarr = ["b1u000tp10000u180zp20000u000c1", "mp2u180b2", "mp1u000c2"]

weight = [10, 10]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r']

b_size = [[20, 20], [20, 20]]
c_size = [150, 150]
p_radius = [15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 11 
inputarr = ["b1u000tp10000u180zp20000u000c1", "mp2u180b2", "mp1u000c2"]

weight = [10, 40]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r']

b_size = [[20, 20], [20, 20]]
c_size = [150, 150]
p_radius = [15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 12 
inputarr = ["b1u000b2", "b2u000tp10000u180zp20000u000c1",
            "mp2u180b3", "mp1u000c2"]

weight = [10, 10, 20]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150, 150]
p_radius = [15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 13 
inputarr = ["b1u000tp10000u180zp20000u000c1",
            "mp2u180b2", "b2u180b3", "mp1u000c2"]

weight = [20, 5, 5]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150, 150]
p_radius = [15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 14 
inputarr = ["b1u000tp10000u180mp2", "b2u000tp20000u180b3", "mp1u000c1"]

weight = [20, 10, 40]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150]
p_radius = [15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 15 
inputarr = ["b1u000tp10000u180mp2", "b2u000tp20000u180b3", "mp1u000c1"]

weight = [20, 40, 10]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150]
p_radius = [15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 16 
inputarr = ["b1u000tp10000u180zp20000u000tp30000u180b2",
            "mp2u180b3", "mp1u000c1", "mp3u000c2"]

weight = [10, 10, 40]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150,150]
p_radius = [15, 15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 17 
inputarr = ["b1u000tp10000u180zp20000u000tp30000u180b2",
            "mp2u180b3", "mp1u000c1", "mp3u000c2"]

weight = [40, 40, 20]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150,150]
p_radius = [15, 15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 18 
inputarr = ["b1u000tp10000u180zp20000u000tp30000u180b2",
            "mp2u180b3", "mp1u000c1", "mp3u000c2"]

weight = [10, 50, 20]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150,150]
p_radius = [15, 15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 19 
inputarr = ["b1u000tp10000u180zp20000u000tp30000u180b2",
            "mp2u180b3", "mp1u000c1", "mp3u000c2"]

weight = [10, 50, 40]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20], [20, 20], [20, 20]]
c_size = [150,150]
p_radius = [15, 15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 20 
inputarr = ["b1n1090c1"]

weight = [20]
ext_force = [0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[20, 20]]
c_size = [150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 21 
inputarr = ["b1n1090c1", "b1u090c2"]

weight = [20]
ext_force = [0, -10]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[20, 20]]
c_size = [150,150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 22 
inputarr = ["b1n1090c1"]

weight = [10]
ext_force = [5, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[20, 20]]
c_size = [150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 23 
inputarr = ["b1n1090c1", "b1u090c2"]

weight = [10]
ext_force = [2, -5]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[20, 20]]
c_size = [150, 150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 24 
inputarr = ["b1n1090c1","b1n2180c2"]

weight = [10]
ext_force = [0,5]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[20, 20]]
c_size = [150, 150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 25 
inputarr = ["b1n1090c1","b1n2180c2"]

weight = [10]
ext_force = [2,5]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[20, 20]]
c_size = [150, 150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 26 
inputarr = ["b1n1090c1", "b2n2090b1"]

weight = [20, 10]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30], [20, 20]]
c_size = [150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 27 
inputarr = ["b1n1090c1", "b1u090c2", "b2n2090b1"]

weight = [20, 10]
ext_force = [0, -5, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30], [20, 20]]
c_size = [150, 150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 28 
inputarr = ["b1n1090c1", "b2n2090b1"]

weight = [20, 10]
ext_force = [0, 0, -20, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30], [20, 20]]
c_size = [150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 29 
inputarr = ["b1n1090c1", "b1n2180c2", "b2n3090b1"]

weight = [20, 10]
ext_force = [0, 5, -20, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30], [20, 20]]
c_size = [150,150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 30 
inputarr = ["b1n1090c1", "b2n2090b1", "b3n3090b2"]

weight = [20, 10, 30]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[40,40],[30, 30], [20, 20]]
c_size = [150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 31 
inputarr = ["b1n1090c1"]

weight = [10]
ext_force = [0, 5]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30]]
c_size = [150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 32 
inputarr = ["b1n1090c1", "b1u270c2", "b1u090b2", "b2n2090c3"]

weight = [20,30]
ext_force = [0, 0, 0, 5]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30], [30, 30]]
c_size = [150,150,150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 33 
inputarr = ["b1n1090c1", "b1u090b2", "b2n2090c2", "b2u090b3", "b3n3090c3"]

weight = [20,20,30]
ext_force = [0, 0, 0, 0, 0, 7]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30], [30, 30], [30, 30]]
c_size = [150,150,150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 34 
inputarr = ["b1n1090B", "b1u090tp19000u180b2"]

weight = [40,10]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r']

b_size = [[30, 30], [25, 25]]
c_size = []
p_radius = [15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={"1": [1, "c", [0, 0]]},
               rpulley=1, lpulley=0, cpulley=0, mass=-1, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 35 
inputarr = ["b1u270c1", "b1n1090B", "b1u090tp19000u180b2"]

weight = [40,10]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r']

b_size = [[30, 30], [25, 25]]
c_size = [150]
p_radius = [15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={"1": [1, "c", [0, 0]]},
               rpulley=1, lpulley=0, cpulley=0, mass=-1, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 36 
inputarr = ["b1u000tp10090u000b2", "b2n1090B", "b2u090tp29000u180b3"]

weight = [40,10,20]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[25, 25], [30,30],[25, 25]]
c_size = []
p_radius = [15,15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={"1": [2, "c", [0, 0]]},
               rpulley=2, lpulley=1, cpulley=0, mass=-1, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 37 
inputarr = ["b1u270c1", "b1n1090B", "b1u090b2", "b2n2090B", "b2u0000tp19000u180b3"]
weight = [20,30,40]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30,30],[30,30],[25,25]]
c_size = [150]
p_radius = [15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={"1": [1, "c", [-20, 0]], "2": [2, "c", [20, 0]]},
               rpulley=1, lpulley=0, cpulley=0, mass=-1, size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 38 
inputarr = ["b1u000tp10090u090b2", "b2n1090B", "b2u090b3", "b3n2090B", "b3u090tp29000u180b4"]
weight = [20, 30, 40, 50]
ext_force = [0, 0, 0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r', 't', 'r']

b_size = [[25,25],[30,30],[30,30],[25,25]]
c_size = []
p_radius = [15,15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={"1": [2, "c", [-20, 0]], "2": [3, "c", [20, 0]]},
               rpulley=2, lpulley=1, cpulley=0, mass=-1, size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 39 
inputarr = ["c1u090tp10000u270b1", "b1n1090B", "mp1u090tp29000u180b2"]

weight = [30, 40]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30], [25, 25]]
c_size = [50]
p_radius = [15, 30]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={"1": [1, "c", [-30, 0]]},
               rpulley=2, lpulley=0, cpulley=0, mass=(-1), size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 40 
inputarr = ["c1u090tp10000u270b1", "b1n1090c2", "mp1u090b2","b2n2090c3"]

weight = [30, 40]
ext_force = [0, 0, 0, 10]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30],[60,60]]
c_size = [50,150,150]
p_radius = [15, 30]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 41 
inputarr = ["b1n1090c1","b1u090tp10000u270b2","b2n2090c2","mp1u090c3"]

weight = [30, 40]
ext_force = [0, -10, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[90, 90],[30, 30]]
c_size = [150,150,50]
p_radius = [15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 42 
inputarr = ["b1n1090c1","b1u090tp10000u270b2","b2n2090c2","mp1u090b3","b3n3090c3"]

weight = [30, 40,50]
ext_force = [0, -10, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[90, 90],[30, 30],[60, 60]]
c_size = [150,150,150]
p_radius = [15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 43 
inputarr = ["b1n1090c1","b1u090mp1","c1u270tp10000u090b2","b2n2090c2"]

weight = [30, 40]
ext_force = [0, 0, 0, 5]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[60, 60],[90, 90]]
c_size = [200,200]
p_radius = [15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 44 
inputarr = ["b1n1090c1","b1u090mp1","c1u270tp10000u090b2","b2n2090c2"]

weight = [30, 40]
ext_force = [0, -4, 0, 10]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[60, 60],[90, 90]]
c_size = [200,200]
p_radius = [15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 45 
inputarr = ["b1u000tp10000u180b2", "b2n1090b3", "b3n2090c1","mp1u090c2"]

weight = [50, 30,50]
ext_force = [0, 0, 0, 0,0,0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[20, 20],[20, 20],[30,30]]
c_size = [150,150]
p_radius = [15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 46 
inputarr = ["b1n1090c1", "b1u090mp1", "c1u270tp10000u090b2", "b2n2090c2","b2u090c3"]

weight = [30, 40]
ext_force = [0, -5, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[60, 60], [90, 90]]
c_size = [200, 200,90]
p_radius = [15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 47 
inputarr = ["b1n1090c1","b1n2180b2","b2n3090c2","b2n4180c3"]

weight = [30, 40]
ext_force = [0, 5, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30], [40, 40]]
c_size = [150, 150 ,150]
p_radius = []

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 48 
inputarr = ["b1n1090c1","b1n2180b2","b2n3090c2","b2n4180c3"]

weight = [30, 40]
ext_force = [0, 15, -10, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30], [40, 40]]
c_size = [150, 150 ,150]
p_radius = []

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 51 
inputarr = ["b1u000tp10000u180mp2","b2u000tp20000u180c1","mp1u000c2"]

weight = [30, 40]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[20, 20], [25, 25]]
c_size = [50,150]
p_radius = [30,15]

bb = bigblocks(number=1, type="tp", rangle=0, langle=0, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[0.1, 0.1])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 52 
inputarr = ["b1n1090c1", "b1u090b2", "b2n2090c2"]

weight = [20, 30]
ext_force = [0, 0, 0, 5]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30], [30, 30]]
c_size = [150, 150]
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 53 
inputarr = ["b1u180c1","b1u000tp10090u090b2", "b2n1090B", "b2u090tp29000u180b3"]

weight = [10,20,50]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'l', 't', 'r', 't', 'r']

b_size = [[25, 25], [30,30], [25, 25]]
c_size = [150]
p_radius = [15,15]

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={"1": [2, "c", [0, 0]]},
               rpulley=2, lpulley=1, cpulley=0, mass=-1, size=[120, 120])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 54 
inputarr = ["b1n1135B"]

weight = [30]
ext_force = [0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30]]
c_size = []
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={"1": [1, "l", [-50, -50]]},
               rpulley=0, lpulley=0, cpulley=0, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 55 
inputarr = ["b1n1135B", "b1u045tp14500u180b2"]

weight = [30, 50]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30], [30, 30]]
c_size = [150]
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={"1": [1, "l", [-50, -50]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 56 
inputarr = ["b1n1135B", "b1u045tp14500u180b2"]

weight = [50, 30]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30], [30, 30]]
c_size = [150]
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={"1": [1, "l", [-50, -50]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 57 
inputarr = ["b1n1135B", "b2n2045b1","b2n3135B"]

weight = [30, 50]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30], [40, 40]]
c_size = []
p_radius = []

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={"1": [1, "l", [-30, -30]], "2": [2, "l", [40, 40]]},
               rpulley=0, lpulley=0, cpulley=0, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 58 
inputarr = ["b1n1135B", "b1u045tp14545u135b2","b2n2045B"]

weight = [30, 50]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30], [30, 30]]
c_size = []
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=45, langle=45, block={"1": [1, "l", [0, 0]], "2": [2, "r", [0, 0]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 59 
inputarr = ["b1n1120B", "b1u030tp16030u150b2","b2n2030B"]

weight = [50, 30]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30], [30, 30]]
c_size = []
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=60, langle=30, block={"1": [1, "l", [0, 0]], "2": [2, "r", [0, 0]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 60 
inputarr = ["b1n1135B", "b1u045tp14500u180b2"]

weight = [30, 50]
ext_force = [-5, -5, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['b', 'l', 't', 'r', 't', 'r']

b_size = [[30, 30], [25, 25]]
c_size = []
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={"1": [1, "l", [-50, -50]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 61 
inputarr = ["b1n1135B", "b2n2045b1", "b2n3135B", "b2u045tp14500u180b3"]

weight = [20, 50, 10]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['b', 'l', 't', 'r', 't', 'r']

b_size = [[40, 40], [30, 30], [25, 25]]
c_size = []
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={"1": [1, "l", [-20, -20]], "2": [2, "l", [15, 15]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 62 
inputarr = ["b1n1135B", "b2n2045b1", "b2n3135B", "b2u045tp14545u135b3","b3n4045B"]

weight = [20, 50, 10]
ext_force = [0, 0, 0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['b', 'l', 't', 'r', 't', 'r']

b_size = [[40, 40], [30, 30], [30, 30]]
c_size = []
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=45, langle=45, block={"1": [1, "l", [-20, -20]], "2": [2, "l", [15, 15]], "3": [3, "r", [0, 0]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 64 
inputarr = ["b1u000c1","b1u300c2"]
weight = [20]
ext_force = [0, 5]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r', 't', 'r']

b_size = [[30,30]]
c_size = [150,150]
p_radius = []

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 65 
inputarr = ["b1u000c1","b1u300c2"]
weight = [20]
ext_force = [-20, 5]  # y,x format
# position of force on block in diagram
dir_ext_force = ['b', 'r', 't', 'r', 't', 'r', 't', 'r']

b_size = [[30,30]]
c_size = [150,150]
p_radius = []

bb = bigblocks(number=1, type="tp", rangle=90, langle=90, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 68 
inputarr = ["b1n1135B", "b1u045tp14500u180zp20000u000c1", "mp2u180b2"]

weight = [30, 60]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30], [30, 30]]
c_size = [150]
p_radius = [15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={"1": [1, "l", [-50, -50]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 69 
inputarr = ["b1n1135B", "b1u045tp14500u180zp20000u000tp30000u180b2", "mp2u180c1","mp3u000c1"]

weight = [30, 60]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30], [25, 25]]
c_size = [150,150]
p_radius = [15, 15,15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={"1": [1, "l", [-50, -50]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)

input_no = 70 
inputarr = ["c1u090tp10000u270b1", "b1n1090c2", "mp1u090b2", "b2n2090c3"]

weight = [10, 10]
ext_force = [0, 0, 0, 10]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30], [60, 60]]
c_size = [50,150,150]
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={"1": [1, "l", [-50, -50]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=0)
func(input_no,inputarr,weight,ext_force,dir_ext_force,b_size,c_size,p_radius,bb,level=1)
