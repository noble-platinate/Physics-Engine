inputarr = ["b1u000c1"]
inputarr = ["b1u000b2","b2u000c1"]
inputarr = ["b1u000b2","b2u000b3","b3u000c1"]
inputarr = ["b1u000c1","b1u270c2"]
inputarr = ["b1u000c1"]
inputarr = ["c1u000tp10000u180b1","mp1u000c2"]
inputarr = ["b1u000tp10000u180b2","mp1u000c1"]
inputarr = ["b1u000b2","b2u000tp10000u180b3","mp1u000c1"]
inputarr = ["b1u000tp10000u180b2","b2u180b3","mp1u000c1"]
inputarr = ["b1u000tp10000u180zp20000u000c1","mp2u180b2","mp1u000c1"]
inputarr = ["b1u000tp10000u180zp20000u000c1","mp2u180b2","mp1u000c1"]
inputarr = ["b1u000b2","b2u000tp10000u180zp20000u000c1","mp2u180b3", "mp1u000c2"]
inputarr = ["b1u000tp10000u180zp20000u000c1","mp2u180b2", "b2u180b3","mp1u000c2"]
inputarr = ["b1u000tp10000u180mp2","b2u000tp20000u180b3","mp1u000c1"]
inputarr = ["b1u000tp10000u180mp2","b2u000tp20000u180b3","mp1u000c1"]
inputarr = ["b1u000tp10000u180zp20000u000tp30000u180b2","mp2u180b3","mp1u000c1","mp3u000c2"]
inputarr = ["b1u000tp10000u180zp20000u000tp30000u180b2","mp2u180b3","mp1u000c1","mp3u000c2"]
inputarr = ["b1u000tp10000u180zp20000u000tp30000u180b2","mp2u180b3","mp1u000c1","mp3u000c2"]
inputarr = ["b1u000tp10000u180zp20000u000tp30000u180b2","mp2u180b3","mp1u000c1","mp3u000c2"]
inputarr = ["b1n1090c1"]
inputarr = ["b1n1090c1","b1u090c2"]
inputarr = ["b1n1090c1"]
inputarr = ["b1n1090c1","b1u090c2"]
inputarr = ["b1n1090c1","b1n2180c2"]
inputarr = ["b1n1090c1","b1n2180c2"]
inputarr = ["b1n1090c1","b2n2090b1"]
inputarr = ["b1n1090c1","b1u090c2","b2n2090b1"]
inputarr = ["b1n1090c1","b2n2090b1"]
inputarr = ["b1n1090c1","b1n2180c2","b2n3090b1"]
inputarr = ["b1n1090c1", "b1n2000c2", "b2n3090b1", "b3n4090b2"]
inputarr = ["b1n1090c1"]
inputarr = ["b1n1090c1","b1u270c2","b1u090b2","b2n2090c1"]
inputarr = ["b1n1090c1","b1u090b2","b2n2090c1","b2u090b3","b3n3090c1"]

input_no = 34
level = 0
inputarr = ["b1n1090B", "b1u090tp19000u180b2"]

rpulley = 1
lpulley = 0
block = {1: [1, "c", [0, 0]]}
mass = -1

weight = [40, 10]
ext_force = [0, 0, 0, 0]
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

input_no = 35
level = 0
inputarr = ["b1u270c1", "b1n1090B", "b1u090tp19000u180b2"]

rpulley = 1
lpulley = 0
block = {1: [1, "c", [0, 0]]}
mass = -1

weight = [40, 10]
ext_force = [0, 0, 0, 0]
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

input_no = 36
level = 1
inputarr = ["b1u000tp10090u090b2", "b2n1090B", "b2u090tp29000u180b3"]

rpulley = 2
lpulley = 1
block = {1: [2, "c", [0, 0]]}
mass = -1

weight = [40, 30, 10]
ext_force = [0, 0, 0, 0, 0, 0]
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

input_no = 360
level = 1
inputarr = ["b1u180c1", "b1u000tp10090u090b2",
            "b2n1090B", "b2u090tp29000u180b3"]

rpulley = 2
lpulley = 1
block = {1: [2, "c", [0, 0]]}
mass = -1

weight = [40, 30, 10]
ext_force = [0, 0, 0, 0, 0, 0]
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

input_no = 37
level = 0
inputarr = ["b1u270c1", "b1n1090B", "b1u090b2",
            "b2n2090B", "b2u0000tp19000u180b3"]

rpulley = 1
lpulley = 0
block = {1: [1, "c", [-30, 0]], 2: [2, "c", [30, 0]]}
mass = -1

weight = [40, 30, 10]
ext_force = [0, 0, 0, 0, 0, 0]
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

input_no = 38
level = 1
inputarr = ["b1u000tp10090u090b2", "b2n1090B",
            "b2u090b3", "b3n2090B", "b3u090tp29000u180b4"]

rpulley = 2
lpulley = 1
block = {1: [2, "c", [-30, 0]], 2: [3, "c", [30, 0]]}
mass = -1

weight = [40, 30, 20, 10]
ext_force = [0, 0, 0, 0, 0, 0, 0, 0]
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r', 't', 'r']

input_no = 55
level = 1
inputarr = ["b1n1135B", "b1u045tp14500u180b2"]

weight = [30, 40]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r', 't', 'r']

b_size = [[30, 30], [30, 30]]
c_size = [150]
p_radius = [15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={"1": [1, "l", [-50, -50]]},
               rpulley=0, lpulley=0, cpulley=1, mass=(-1), size=[200, 200])

input_no = 39
level = 1
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

input_no = 100
level = 0
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


input_no = 8
level = 0
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

input_no = 10
level = 0
inputarr = ["b1u000tp10000u180zp20000u000c1", "mp2u180b2", "mp1u000c2"]

weight = [30, 40]
ext_force = [0, 0, 0, 0]  # y,x format
# position of force on block in diagram
dir_ext_force = ['t', 'r', 't', 'r']

b_size = [[20, 20], [20, 20]]
c_size = [150, 150]
p_radius = [15, 15]

bb = bigblocks(number=1, type="tr", rangle=90, langle=45, block={},
               rpulley=0, lpulley=0, cpulley=0, mass=0, size=[120, 120])

input_no = 1
level = 0
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

input_no = 2
level = 0
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

input_no = 3
level = 0
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

input_no = 4
level = 0
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

input_no = 5
level = 0
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


input_no = 6
level = 0
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


input_no = 7
level = 0
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


input_no = 8
level = 0
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


input_no = 9
level = 0
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


input_no = 10
level = 0
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


vinput_no = 11
level = 0
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


input_no = 12
level = 0
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
