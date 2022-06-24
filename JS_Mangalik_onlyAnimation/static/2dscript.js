import * as THREE from "three";

        const scene = new THREE.Scene()
        //******************************************SHIVAM CODE STARTS */      
        /**
                * Lights
                **/

        // Add a point light with #fff color, .7 intensity, and 0 distance
        var light = new THREE.PointLight(0xffffff, 1, 0);
        // Specify the light's position
        light.position.set(1, 1, 100);
        // Add the light to the scene
        scene.add(light)//this is the 2D script
        /// sheersha code end for text
        var step = "fbd"; // motion -> fbd -> constraint
        var substep = 1; // for fbd it goes from 1 to n_b + n_p , for contraint 1 to n_s
        var subsubstep = 0// 1 and 2 - used only for contraint , signifies the ends
       
        var uselessvar = 0.55
        
        

        //var loader = new THREE.JSONLoader();
        //alldata =  fetch("D:/Mangalik_Mitra/Engphile_Labs_Internship/Project/src/alldata14.json").then(results=> results.json() ).then(console.log);
        var alld_question_no = "39"
        var day_no = "3"
        //const alldata = require("D:/Mangalik_Mitra/Engphile_Labs_Internship/Project/src/Day"+day_no+"/problem"+alld_question_no + ".json");
        //const alldata = require("D:/Mangalik_Mitra/Engphile_Labs_Internship/Project/src/Day1_Day2/alldata"+alld_question_no + ".json");
        //const alldata = require("D:/Mangalik_Mitra/Engphile_Labs_Internship/Project/src/test_problems/all_"+alld_question_no + ".json");
        //const alldata = require("D:/Mangalik_Mitra/Engphile_Labs_Internship/Project/src/alls/all_dick_"+alld_question_no + ".json");
        const alldata = require("D:/Mangalik_Mitra/Engphile_Labs_Internship/Project/src/new/all_dick_"+alld_question_no + ".json");

        //console.log(alldata);
        const blockdata = alldata["block dick"];
        const pulleydata = alldata["pulley dick"]
        const stringdata = alldata["string dick"]
        const ceilingdata = alldata["ceiling dick"]
        const normaldata = alldata["normal dick"]
        

        var n_b = Object.keys(blockdata).length;
        var n_p = Object.keys(pulleydata).length;
        const n_s = Object.keys(stringdata).length;
        var n_c = Object.keys(ceilingdata).length;
        var n_n = Object.keys(normaldata).length;
        //console.log(n_s);
        var i;
        var j;

        var c;
        var b;

        //has to be deleted immediately after Akshat corrects his files
        if (alld_question_no >= 54 && alld_question_no <= 62) {
            for (b = 1; b < n_b + 1; b++) {
                var inc_ang = blockdata[b]["angle of incline"] 
                if (inc_ang > 0) {
                    blockdata[b].acceleration[0] = blockdata[b].acceleration[1]*Math.cos(inc_ang*Math.PI/180)
                    blockdata[b].acceleration[1] = blockdata[b].acceleration[1]*Math.sin(inc_ang*Math.PI/180) 
                }
            }
        }


        var block_normals = new Array(n_b);
        for (i = 1; i < n_b + 1; i++) {
            block_normals[i - 1] = 0;

        }

        for (c = 1; c < n_n + 1; c++) {

            if (normaldata[c].objects[0][0] == "b") {
                    
                block_normals[normaldata[c].objects[0][1] - 1] = block_normals[normaldata[c].objects[0][1] - 1] + 1;

            }
            if (normaldata[c].objects[1][0] == "b") {
                    
                block_normals[normaldata[c].objects[1][1] - 1] = block_normals[normaldata[c].objects[1][1] - 1] + 1;

            }
        }

        var k
        var block_angle = []

        for (k = 1; k < n_b + 1; k++)
            block_angle.push(0);

        //mangalik bigblock code starts
        //debugger
        if (alld_question_no > 33) {

            var bigblockdata = alldata["bigblock dick"]
            
            var meshbb;
            var bb_ini_pos_x;
            var bb_ini_pos_y;
        
            if (bigblockdata["mass"] != 0) {

                var ic
                for (ic = 1; ic < n_p + 1; ic++) {
                    if (pulleydata[ic].acceleration == 0) {
                        pulleydata[ic].acceleration = [0, 0]
                    }
                }
                const material_bb = new THREE.MeshBasicMaterial({color: 0x009900})
                if (bigblockdata["type"] == "tp") {

                    var x_size = bigblockdata.size[0] / 15
                    var y_size = bigblockdata.size[1] / 15
                    var rpulley = bigblockdata.rpulley
                    var lpulley = bigblockdata.lpulley
                    if (rpulley == 0) {
                        if (lpulley == 0) {
                            x_size = bigblockdata.size[0] / 15;
                        }
                        else {
                            var left_loc = (pulleydata[lpulley].centre[0] - 150) / 15
                            var mid_loc = (blockdata[bigblockdata.block[1][0]].loc[0] - 150)/15 + bigblockdata.block[1][2][0]/15
                            x_size = 2*(mid_loc - left_loc)
                        }
                    }
                    else {
                        if (lpulley == 0) {
                            var right_loc = (pulleydata[rpulley].centre[0] - 150) / 15
                            var mid_loc = (blockdata[bigblockdata.block[1][0]].loc[0] - 150)/15 + bigblockdata.block[1][2][0]/15
                            x_size = 2*(right_loc - mid_loc)
                        }
                        else {
                            var left_loc = (pulleydata[lpulley].centre[0] - 150) / 15
                            var right_loc = (pulleydata[rpulley].centre[0] - 150) / 15
                            x_size = (right_loc - left_loc)
                        }
                    }

                    
                    meshbb = new THREE.Mesh(
                        new THREE.BoxGeometry(x_size, y_size, bigblockdata.size[1] / 10000), 
                        material_bb);
           
                    var blocloc_x = (blockdata[bigblockdata.block[1][0]].loc[0] - 150)/15
                    var blocloc_y = (blockdata[bigblockdata.block[1][0]].loc[1] - 150)/15

                    //bigblockdata.block[1][2][0/20]

                    meshbb.position.x = blocloc_x + bigblockdata.block[1][2][0]/15 //- blockdata[1].size[0]/15
                    meshbb.position.y = blocloc_y + bigblockdata.block[1][2][1]/15 - y_size/2//- bigblockdata.size[1] / 15
                
                    camera_avg_x = camera_avg_x + meshbb.position.x
                    camera_avg_y = camera_avg_y + meshbb.position.y
                    num_of_obj = num_of_obj + 1 
                
                    bb_ini_pos_x = meshbb.position.x//(bigblockdata.loc[0] - 150) / 20;
                    bb_ini_pos_y = meshbb.position.y//(bigblockdata.loc[1] - 150) / 20;
                
                }
                else if (bigblockdata["type"] == "tr") {
                    const shape_tr = new THREE.Shape();

                    var cpulley = bigblockdata.cpulley
                    if (cpulley != 0) {
                        var ploc_x = (pulleydata[cpulley].centre[0] - 150) /15
                        var ploc_y = (pulleydata[cpulley].centre[1] - 150) /15
                    }
                    const length_tr = 4
                    const langle = Math.PI * (bigblockdata.langle/180)
                    const rangle = Math.PI * (bigblockdata.rangle/180)

                    const blocloc_x = (blockdata[bigblockdata.block[1][0]].loc[0] - 150)/15 + Math.sin(langle)*blockdata[bigblockdata.block[1][0]].size[0]/30
                    const blocloc_y = (blockdata[bigblockdata.block[1][0]].loc[1] - 150)/15 - Math.cos(langle)*blockdata[bigblockdata.block[1][0]].size[0]/30
                    
                    const left_mid_x = blocloc_x + bigblockdata.block[1][2][0]/15 //+ //M*blockdata[bigblockdata.block[1][0]].size[0]
                    const left_mid_y = blocloc_y - bigblockdata.block[1][2][1]/15
                    //debugger
                    const left_side = length_tr/Math.sin(langle);
                    
                    const perp_x = left_mid_x + Math.cos(langle)*left_side/2
                    const perp_y = left_mid_y - Math.sin(langle)*left_side/2

                    const right_side = length_tr/Math.sin(rangle)


                    const x_tr = ploc_x
                    const y_tr = ploc_y;

                    var dist = Math.pow (Math.pow((left_mid_x - ploc_x), 2) + Math.pow((left_mid_y - ploc_y), 2), 0.5)
                    var po2x = ploc_x - 3*Math.cos(langle)*dist 
                    var po2y = ploc_y - 3*Math.sin(langle)*dist
                    var po3y = po2y
                    var po3x = ploc_x + (ploc_y - po2y)/Math.tan(rangle)
                    
                    var y_range = po3y
                    var median_x;
                    var median_y;
            

                    shape_tr.moveTo(x_tr, y_tr);
                    shape_tr.lineTo(po2x, po2y);
                    shape_tr.lineTo(po3x, po2y);

            
                    median_x = x_tr + po2x + po3x
                    median_y = y_tr + po2y + po3y
                    median_x = median_x / 3;
                    median_y = median_y / 3;
            
                    camera_avg_x = camera_avg_x + median_x
                    camera_avg_y = camera_avg_y + median_y
                    num_of_obj = num_of_obj + 1 

                    const TriangleGeometry = new THREE.ShapeGeometry(shape_tr);

                    const material_tr = new THREE.MeshBasicMaterial( { color: 0x009900 } );
                    meshbb = new THREE.Mesh( TriangleGeometry, material_tr ) ;
            
                    bb_ini_pos_x = 0;
                    bb_ini_pos_y = 0;
                
                    var m;

                    var n_b_b = Object.keys(bigblockdata.block).length;
                    
                    for (m = 1; m < n_b_b + 1; m++) {
                        var a = bigblockdata.block[m][1];
                        if (a == "l")
                            block_angle[bigblockdata.block[m][0] - 1] = langle;
                        else
                            block_angle[bigblockdata.block[m][0] - 1] = -rangle;
                    }
                
                }
        
                if (!step.includes("constraint"))
                    scene.add(meshbb);
                if (step == "constraint" && (subsubstep == -1 ||subsubstep == 0))
                    scene.add(meshbb);
            }
        }
            //mangalik bigblock code ends

        //n_p =0
        var meshk = new Array(n_b);
        var meshpl = new Array(n_c);
        var block_ini_pos_x = new Array(n_b);
        var block_ini_pos_y = new Array(n_b);
        var pulley_ini_pos_x = new Array(n_p);
        var pulley_ini_pos_y = new Array(n_p);
        var text_loc_x = new Array(n_b);
        var text_loc_y = new Array(n_b);
        var acc_arrow_to
        var acc_arrow_from
        var acc_arrow_direction
        
        //added by mangalik
        var normal_from //added by mangalik
        var normal_to //added by mangalik
        
        //added by mangalik on 14th June
        var force_line_x = new Array(n_b)
        var force_line_y = new Array(n_b)
        var force_cone_x = new Array(n_b)
        var force_cone_y = new Array(n_b)
        var force_line_x_ini_pos_x = new Array(n_b)
        var force_line_x_ini_pos_y = new Array(n_b)
        var force_line_y_ini_pos_x = new Array(n_b)
        var force_line_y_ini_pos_y = new Array(n_b)
        var force_cone_x_ini_pos_x = new Array(n_b)
        var force_cone_x_ini_pos_y = new Array(n_b)
        var force_cone_y_ini_pos_x = new Array(n_b)
        var force_cone_y_ini_pos_y = new Array(n_b)

        var acc_arrow_length
        var acc_arrowHelper = new Array(n_b + n_p)
        var acc_cone = new Array(n_b + n_p)
        const geometryc = new THREE.ConeGeometry(0.1, 0.2, 32);
        const materialc = new THREE.MeshBasicMaterial({ color: 0xffffff });

        //var camera_shift // shifts the force arrows to look central //added by mangalik

        var clr = [0xff0000, 0xffff00, 0x0000ff, 0x00ff00]

        var camera_avg_x = 0 //added by mangalik
        var num_of_obj = 0 //added by mangalik
        var camera_avg_y = 0 //added by mangalik

        for (i = 1; i < n_b + 1; i++) {

            
            //const material = new THREE.MeshNormalMaterial()
            const materialx = new THREE.MeshBasicMaterial({color: clr[(i-1)%4]}) //added by mangalik
            //const material2 = new THREE.MeshMatcapMaterial()
            //materialx.map = texture
            //materialx.color = new THREE.Color(clr[i - 1])
            meshk[i - 1] = new THREE.Mesh(
                new THREE.BoxGeometry(blockdata[i].size[0] / 15, blockdata[i].size[0] / 15, blockdata[i].size[1] / 10000), //added by mangalik
                materialx); //where does the division by 15 come from?
            //debugger
            if (!step.includes("constraint") || (step == "constraint" && (subsubstep == 0 || subsubstep == -1))) {
                //scene.add(meshk[i - 1])
                scene.add(meshk[i-1])

            }
            if (step == "constraint" && (stringdata[substep]["first obj type"] == "<class 'blocksclass.blocks'>" || stringdata[substep]["second obj type"] == "<class 'blocksclass.blocks'>")) {
                if (stringdata[substep]["first obj type"] == "<class 'blocksclass.blocks'>") {
                    if (stringdata[substep]["first obj"] == i) {
                        scene.add(meshk[i - 1])
                    }
                }
                if (stringdata[substep]["second obj type"] == "<class 'blocksclass.blocks'>") {
                    if (stringdata[substep]["second obj"] == i) {
                        scene.add(meshk[i - 1])
                    }
                }
            }

            meshk[i - 1].position.x = (blockdata[i].loc[0] - 150) / 15; // where do these positions come from?
            meshk[i - 1].position.y = (blockdata[i].loc[1] - 150) / 15;
            meshk[i - 1].rotation.z = block_angle[i - 1]
            
            camera_avg_x = camera_avg_x + meshk[i - 1].position.x //added by mangalik
            camera_avg_y = camera_avg_y + meshk[i - 1].position.y //added by mangalik
            num_of_obj = num_of_obj + 1 //added by mangalik
            //meshk[i - 1].position.z = -0.5
            block_ini_pos_x[i - 1] = meshk[i - 1].position.x;
            block_ini_pos_y[i - 1] = meshk[i - 1].position.y;
            text_loc_x[i - 1] = meshk[i - 1].position.x + 0.8 * blockdata[i].textloc
            text_loc_y[i - 1] = meshk[i - 1].position.y

            // added arrdir key in the json file to help determine arrow direction, made the textloc key 2D
            // accomodated the arrow position change with size of the block
            // this is an approximation, I do not know how it will fit in with any random JSON
            var xacc = blockdata[i].acceleration[0] //added by mangalik
            var yacc = blockdata[i].acceleration[1] //added by mangalik
            
            if (block_angle[i - 1] == 0) {
                acc_arrow_to = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y, 0) //added by mangalik
                acc_arrow_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y, 0) //added by mangalik
            
                // mangalik code starts
                if (xacc > 0) {
                    acc_arrow_to.x = acc_arrow_to.x + (blockdata[i].size[0]/15)*0.5
                    acc_arrow_from.x = acc_arrow_from.x - (blockdata[i].size[0]/15)*0.5

                        acc_arrow_to.y = acc_arrow_from.y + (blockdata[i].size[0]/15)*0.85

                    acc_arrow_from.y = acc_arrow_to.y
                }
                else if (xacc < 0) {
                    acc_arrow_to.x = acc_arrow_to.x - (blockdata[i].size[0]/15)*0.5
                    acc_arrow_from.x = acc_arrow_from.x + (blockdata[i].size[0]/15)*0.5

                    acc_arrow_to.y = acc_arrow_from.y + (blockdata[i].size[0]/15)*0.85

                    acc_arrow_from.y = acc_arrow_to.y
                }
                else if (yacc > 0) {
                    acc_arrow_to.y = acc_arrow_to.y + (blockdata[i].size[0]/15)*0.5
                    acc_arrow_from.y = acc_arrow_from.y - (blockdata[i].size[0]/15)*0.5
                
                    if (blockdata[i].loc[0] >= 165)
                        acc_arrow_to.x = acc_arrow_from.x + (blockdata[i].size[0]/15)*0.85
                    else
                        acc_arrow_to.x = acc_arrow_from.x - (blockdata[i].size[0]/15)*0.85
                    acc_arrow_from.x = acc_arrow_to.x
                }
                else if (yacc < 0){
                    acc_arrow_to.y = acc_arrow_to.y - (blockdata[i].size[0]/15)*0.5
                    acc_arrow_from.y = acc_arrow_from.y + (blockdata[i].size[0]/15)*0.5

                    if (blockdata[i].loc[0] >= 165)
                        acc_arrow_to.x = acc_arrow_from.x + (blockdata[i].size[0]/15)*0.85
                    else
                        acc_arrow_to.x = acc_arrow_from.x - (blockdata[i].size[0]/15)*0.85
                    acc_arrow_from.x = acc_arrow_to.x
                }
            }
            else if (xacc != 0 && yacc != 0) {
                
                var l = blockdata[i].size[0]/30
                var lr2 = l*Math.pow(2, 0.5)

                var arr_len = 1.5*l
                var arr_ang = Math.atan(Math.abs(yacc/xacc));

                if (xacc < 0 && yacc < 0) {
                    acc_arrow_from = new THREE.Vector3(meshk[i - 1].position.x - l*Math.sin(arr_ang) - lr2*Math.cos(3*Math.PI/4 - arr_ang), meshk[i - 1].position.y + l*(Math.cos(arr_ang)) +lr2*(Math.sin(3*Math.PI/4 - arr_ang)) , 0) //added by mangalik
                    acc_arrow_to = new THREE.Vector3(acc_arrow_from.x - arr_len*Math.cos(arr_ang), acc_arrow_from.y - arr_len*Math.sin(arr_ang));
                }
                else if (xacc > 0 && yacc > 0) {
                    acc_arrow_to = new THREE.Vector3(meshk[i - 1].position.x - l*Math.sin(arr_ang) - lr2*Math.cos(3*Math.PI/4 - arr_ang), meshk[i - 1].position.y + l*(Math.cos(arr_ang)) +lr2*(Math.sin(3*Math.PI/4 - arr_ang)) , 0) //added by mangalik
                    acc_arrow_from = new THREE.Vector3(acc_arrow_to.x - arr_len*Math.cos(arr_ang), acc_arrow_to.y - arr_len*Math.sin(arr_ang));
                }
                else if (xacc > 0 && yacc < 0) { 
                    arr_ang = Math.PI/2 - arr_ang
                    acc_arrow_from = new THREE.Vector3(meshk[i - 1].position.x + l*Math.cos(arr_ang) + lr2*Math.cos(Math.PI/4 + arr_ang), meshk[i - 1].position.y + l*(Math.sin(arr_ang)) + lr2*Math.sin(Math.PI/4 + arr_ang) , 0) //added by mangalik
                    acc_arrow_to = new THREE.Vector3(acc_arrow_from.x + arr_len*Math.sin(arr_ang), acc_arrow_from.y - arr_len*Math.cos(arr_ang));
                }
                else if (xacc < 0 && yacc > 0) { 
                    arr_ang = Math.PI/2 - arr_ang
                    acc_arrow_to = new THREE.Vector3(meshk[i - 1].position.x + l*Math.cos(arr_ang) + lr2*Math.cos(Math.PI/4 + arr_ang), meshk[i - 1].position.y + l*(Math.sin(arr_ang)) + lr2*Math.sin(Math.PI/4 + arr_ang) , 0) //added by mangalik
                    acc_arrow_from = new THREE.Vector3(acc_arrow_to.x + arr_len*Math.sin(arr_ang), acc_arrow_to.y - arr_len*Math.cos(arr_ang));
                }
                //var arr_ang = Math.atan(Math.abs(yacc/xacc));
                //acc_arrow_to = new THREE.Vector3(meshk[i - 1].position.x - xdir*ydir*(l)*Math.sin(arr_ang), meshk[i - 1].position.y + (l/2)*(ydir*Math.cos(arr_ang) + 1/Math.sin(arr_ang)) , 0) //added by mangalik
                //acc_arrow_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y, 0) //added by mangalik


            }
            else {
                acc_arrow_to = new THREE.Vector3(meshk[i - 1].position.x + l*Math.cos(arr_ang) + lr2*Math.cos(Math.PI/4 + arr_ang), meshk[i - 1].position.y + l*(Math.sin(arr_ang)) + lr2*Math.sin(Math.PI/4 + arr_ang) , 0) //added by mangalik
                acc_arrow_from = new THREE.Vector3(acc_arrow_to.x + arr_len*Math.sin(arr_ang), acc_arrow_to.y - arr_len*Math.cos(arr_ang));
            }
            //mangalik code ends

            var arr_points = []

            arr_points.push(acc_arrow_from)
            arr_points.push(acc_arrow_to)

            const acc_geometry = new THREE.BufferGeometry().setFromPoints(arr_points)
            var acc_mat = new THREE.MeshBasicMaterial({ color: clr[(i-1)%4] })

            var acc_line = new THREE.Line(acc_geometry, acc_mat);
            //acc_arrow_direction = acc_arrow_to.clone().sub(acc_arrow_from);
            //acc_arrow_length = acc_arrow_direction.length();
            //acc_arrowHelper[i - 1] = new THREE.ArrowHelper(acc_arrow_direction.normalize(), acc_arrow_from, acc_arrow_length, clr[i - 1]); //colour added by mangalik
            acc_cone[i - 1] = new THREE.Mesh(geometryc, materialx);


            //acc_cone[i - 1].position.x = meshk[i - 1].position.x + (blockdata[i].size[0]/15)*blockdata[i].textloc[0] + (blockdata[i].size[0]/15)*0.5 * blockdata[i].arrdir[0];
            //acc_cone[i - 1].position.y = meshk[i - 1].position.y + (blockdata[i].size[0]/15)*blockdata[i].textloc[1] + 0.5 * (blockdata[i].size[0]/15)*blockdata[i].arrdir[1];
            acc_cone[i - 1].position.x = acc_arrow_to.x //added by mangalik               //meshk[i - 1].position.x + (blockdata[i].size[0]/15)*blockdata[i].textloc[0] + (blockdata[i].size[0]/15)*0.5 * blockdata[i].arrdir[0];
            acc_cone[i - 1].position.y = acc_arrow_to.y //added by mangalik                //meshk[i - 1].position.y + (blockdata[i].size[0]/15)*blockdata[i].textloc[1] + 0.5 * (blockdata[i].size[0]/15)*blockdata[i].arrdir[1];


            //mangalik code starts

            // fixing the position of the arrowhead, also the direction it faces
            if (block_angle[i - 1] == 0) {

                if (blockdata[i].acceleration[1] > 0) {
                    //acc_cone[i - 1].position.y = meshk[i - 1].position.y + 0.5;
                }
                if (blockdata[i].acceleration[1] < 0) {
                    //acc_cone[i - 1].position.y = meshk[i - 1].position.y - 0.5;
                    acc_cone[i - 1].rotation.z = Math.PI
                }
                if (blockdata[i].acceleration[0] > 0) {
                    //acc_cone[i - 1].position.x = meshk[i - 1].position.x + 0.5;
                    acc_cone[i - 1].rotation.z = -Math.PI/2
                }
                if (blockdata[i].acceleration[0] < 0) {
                    //acc_cone[i - 1].position.x = meshk[i - 1].position.x - 0.5;
                    acc_cone[i - 1].rotation.z = Math.PI/2
                }
            }
            else if (xacc < 0 && yacc < 0) {
                acc_cone[i - 1].rotation.z = block_angle[i - 1] + Math.PI/2 
            }
            else if (xacc > 0 && yacc > 0) {
                acc_cone[i - 1].rotation.z = block_angle[i - 1] - Math.PI/2 
            }
            else if (xacc < 0 && yacc > 0) {
                acc_cone[i - 1].rotation.z = block_angle[i - 1] + Math.PI/2
            }
            else if (xacc > 0 && yacc < 0) {
                acc_cone[i - 1].rotation.z = block_angle[i - 1] - Math.PI/2
            }
            if ((blockdata[i].acceleration[0] != 0) || (blockdata[i].acceleration[1] != 0)) {
                if ((step == "constraint" && (subsubstep == 0 || subsubstep == -1)) || (step == "motion") || (step == "fbd")){
                    scene.add(acc_line)
                    scene.add(acc_cone[i - 1])
                }
            }

            // the normal forces
            var norm_clr = [0xffa500, 0x00ffff, 0xff00ff, 0xc0c0c0]
            for (j = 0; j < n_n; j++){
                
                if (normaldata[j + 1].objects[0] == "b"+i || normaldata[j + 1].objects[1] =="b" +i) {
                //camera_shift = 0//-(meshk[i - 1].position.x - 1.5) *0.11
                    var camera_shift_y = 0//-(blockdata[i].loc[1] - 174)*0.007
                    if (blockdata[i].loc[1] <= 174)
                        camera_shift_y = 0
                    var currentnormal = normaldata[j + 1]
                
                    var norm_angle = currentnormal.angle;
                    var cone_angle
                    var normal_length = (blockdata[i].size[0])/15//length of normal proportional to magnitude
                    var normal_points = []

                    if (currentnormal.objects[1] == ("b"+i)){
                        normal_from = new THREE.Vector3(meshk[i - 1].position.x - Math.cos(norm_angle)*blockdata[i].size[0] / 30, meshk[i - 1].position.y - Math.sin(norm_angle)*blockdata[i].size[0] / 30, 0.00073)
                        normal_to = new THREE.Vector3(normal_from.x + normal_length*Math.cos(norm_angle), normal_from.y + normal_length*Math.sin(norm_angle), 0.00073)
                        cone_angle = norm_angle - 1.57;

                        //normal_from.x = normal_from.x + camera_shift 
                        //normal_to.x = normal_to.x + camera_shift
                        normal_from.y = normal_from.y + camera_shift_y 
                        normal_to.y = normal_to.y + camera_shift_y
                        /*if (Math.abs(norm_angle-1.57) < 0.1) {
                        
                            normal_from.x = normal_from.x + (1)/8
                            normal_to.x = normal_to.x + (1)/8
                        }
                        if (norm_angle == 0) {
                        
                            normal_from.y = normal_from.y - (1)/8
                            normal_to.y = normal_from.y
                        }
                        if (norm_angle == 3.14) {
                        
                            normal_from.y = normal_from.y + (1)/8
                            normal_to.y = normal_from.y
                        }*/
                        normal_from.x = normal_from.x + 1/8*Math.cos(norm_angle - Math.PI/2)
                        normal_to.x = normal_to.x + 1/8*Math.cos(norm_angle - Math.PI/2)
                        normal_from.y = normal_from.y + 1/8*Math.sin(norm_angle - Math.PI/2)
                        normal_to.y = normal_to.y + 1/8*Math.sin(norm_angle - Math.PI/2)

                    }
                    if (currentnormal.objects[0] == ("b"+i)){
                        normal_from = new THREE.Vector3(meshk[i - 1].position.x + Math.cos(norm_angle)*blockdata[i].size[0] / 30, meshk[i - 1].position.y + Math.sin(norm_angle)*blockdata[i].size[0] / 30, 0.00073)
                        normal_to = new THREE.Vector3(normal_from.x - normal_length*Math.cos(norm_angle), normal_from.y - normal_length*Math.sin(norm_angle), 0.00073)
                        cone_angle = norm_angle + 1.57

                        //normal_from.x = normal_from.x + camera_shift 
                        //normal_to.x = normal_to.x + camera_shift
                        //normal_from.y = normal_from.y + camera_shift_y 
                        //normal_to.y = normal_to.y + camera_shift_y
                        /*
                        if (Math.abs(norm_angle-1.57) < 0.1){
                      
                            normal_from.x = normal_from.x - 1/8
                            normal_to.x = normal_to.x - 1/8
                        }
                        if (norm_angle == 0) {
               
                            normal_from.y = normal_from.y + (1)/8
                            normal_to.y = normal_from.y
                        }
                        if (norm_angle == 3.14) {
                      
                            normal_from.y = normal_from.y - (1)/8
                            normal_to.y = normal_from.y
                        }*/
                        normal_from.x = normal_from.x + 1/8*Math.cos(norm_angle + Math.PI / 2)
                        normal_to.x = normal_to.x + 1/8*Math.cos(norm_angle + Math.PI / 2)
                        normal_from.y = normal_from.y + 1/8*Math.sin(norm_angle + Math.PI / 2)
                        normal_to.y = normal_to.y + 1/8*Math.sin(norm_angle + Math.PI / 2)
                    }
    
                    //acc_arrow_direction = normal_to.clone().sub(normal_from);
                    //acc_arrow_length = acc_arrow_direction.length();
                
                    //var normal_helper = new THREE.ArrowHelper(acc_arrow_direction.normalize(), normal_from, acc_arrow_length, 0xffffff);
                    const material_norm = new THREE.MeshBasicMaterial({color: 'white'})
                    var normal_cone = new THREE.Mesh(geometryc, material_norm);
                
                    //approx
                    normal_cone.position.x = normal_to.x;
                    normal_cone.position.y = normal_to.y;
                    normal_cone.position.z = 0
                
                
                    normal_cone.rotation.z = cone_angle;
                
                    normal_points.push(normal_from, normal_to)

                    var normal_geometry = new THREE.BufferGeometry().setFromPoints(normal_points);

                    var normal_line = new THREE.Line(normal_geometry, material_norm)

                    const materialch = new THREE.MeshBasicMaterial()
                    materialch.color = new THREE.Color(0xffffff)
                    //materialfbd.transparent = true
                    //materialfbd.opacity = 0.8
                    var normal_chotasphere = new THREE.Mesh(
                        new THREE.SphereGeometry(0.08, 16, 16),
                        materialch
                    )
                
                    normal_chotasphere.position.x = normal_from.x;
                    normal_chotasphere.position.y = normal_from.y;
                    normal_chotasphere.position.z = 0

                    if (step == "fbd" && substep == i && (subsubstep == -200 || subsubstep == j+1)) {
                        scene.add(normal_chotasphere);
                    }
        
                    if (step == "fbd" && substep == i && ((subsubstep > j+1 && subsubstep < block_normals[i - 1] + 1) || subsubstep == 100)) {
                    
                        scene.add(normal_chotasphere);
                        scene.add(normal_line);
                        scene.add(normal_cone);
                    }
                }
            }


            //external force code starts

            if (block_angle[i - 1] == 0) {
                if (blockdata[i].forces.y[0] != 0) {
                    if (blockdata[i].forces.y[0] > 0) {
                        if (blockdata[i].forces.y[1] == "t") {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y + blockdata[i].size[0]/30, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y + (7*blockdata[i].size[0]/60), 0);
                        }
                        else {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y - 7*blockdata[i].size[0]/60, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y - (blockdata[i].size[0]/30), 0);
                        }
                        var force_ang = 0
                    }
                    else {
                        if (blockdata[i].forces.y[1] == "t") {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y + 7*blockdata[i].size[0]/60, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y + (blockdata[i].size[0]/30), 0);
                        }
                        else {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y - blockdata[i].size[0]/30, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y - (7*blockdata[i].size[0]/60), 0);
                        }
                        var force_ang = Math.PI
                    }
                    
                    ext_force_from.x = ext_force_from.x - 0.1
                    ext_force_to.x = ext_force_to.x - 0.1
                    var setfy = []

                    setfy.push(ext_force_from)
                    setfy.push(ext_force_to)

                    var material_force = new THREE.MeshBasicMaterial({color: 'white'})
                    var force_geometry = new THREE.BufferGeometry().setFromPoints(setfy);

                    //var force_line = new THREE.Line(force_geometry, material_force)
                    force_line_y[i - 1] = new THREE.Line(force_geometry, material_force) //14th June

                    force_line_y_ini_pos_x[i - 1] = force_line_y[i - 1].position.x
                    force_line_y_ini_pos_y[i - 1] = force_line_y[i - 1].position.y

                    //var force_cone = new THREE.Mesh(geometryc, material_force);
                    force_cone_y[i - 1] = new THREE.Mesh(geometryc, material_force); //14th June

                        //approx
                    force_cone_y[i - 1].position.x = ext_force_to.x; //14th June
                    force_cone_y[i - 1].position.y = ext_force_to.y; //14th June
                    force_cone_y[i - 1].rotation.z = force_ang //14th June
                    
                    force_cone_y_ini_pos_x[i - 1] = force_cone_y[i - 1].position.x
                    force_cone_y_ini_pos_y[i - 1] = force_cone_y[i - 1].position.y

                    if (step == "fbd" && subsubstep == 100 && substep == i) {
                        scene.add(force_line_y[i - 1]) //14th June
                        scene.add(force_cone_y[i - 1]) //14th June
                    }
                    //14th June Starts
                    if (step == "motion") {
                        
                        scene.add(force_line_y[i - 1])
                        scene.add(force_cone_y[i - 1])
                    }
                    //14th June ends
                    
                }
                if (blockdata[i].forces.x[0] != 0) {
                    if (blockdata[i].forces.x[0] > 0) {
                        if (blockdata[i].forces.x[1] == "r") {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x + blockdata[i].size[0]/30, meshk[i - 1].position.y, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x + (7*blockdata[i].size[0]/60), meshk[i - 1].position.y, 0);
                        }
                        else {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x - 7*blockdata[i].size[0]/60, meshk[i - 1].position.y, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x - (blockdata[i].size[0]/30), meshk[i - 1].position.y, 0);
                        }
                        var force_ang = -Math.PI/2
                    }
                    else {
                        if (blockdata[i].forces.x[1] == "r") {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x + 7*blockdata[i].size[0]/60, meshk[i - 1].position.y, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x + (blockdata[i].size[0]/30), meshk[i - 1].position.y, 0);
                        }
                        else {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x - blockdata[i].size[0]/30, meshk[i - 1].position.y, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x - (7*blockdata[i].size[0]/60), meshk[i - 1].position.y, 0);
                        }
                        var force_ang = Math.PI/2
                    }

                    ext_force_from.y = ext_force_from.y - 0.1
                    ext_force_to.y = ext_force_to.y - 0.1
                    var setfy = []

                    setfy.push(ext_force_from)
                    setfy.push(ext_force_to)

                    var material_force = new THREE.MeshBasicMaterial({color: 'white'})
                    var force_geometry = new THREE.BufferGeometry().setFromPoints(setfy);

                    force_line_x[i - 1] = new THREE.Line(force_geometry, material_force) //14th June

                    force_line_x_ini_pos_x[i - 1] = force_line_x[i - 1].position.x
                    force_line_x_ini_pos_y[i - 1] = force_line_x[i - 1].position.y

                    force_cone_x[i - 1] = new THREE.Mesh(geometryc, material_force); //14th June
                    
                        //approx
                    force_cone_x[i - 1].position.x = ext_force_to.x; //14th June
                    force_cone_x[i - 1].position.y = ext_force_to.y; //14th June
                    force_cone_x[i - 1].rotation.z = force_ang //14th June

                    force_cone_x_ini_pos_x[i - 1] =  force_cone_x[i - 1].position.x
                    force_cone_x_ini_pos_y[i - 1] =  force_cone_x[i - 1].position.y

                    if (step == "fbd" && subsubstep == 100 && substep == i) {
                        scene.add(force_line_x[i - 1]) //14th June
                        scene.add(force_cone_x[i - 1]) //14th June
                    }

                    //14th June Starts
                    if (step == "motion") {
                        scene.add(force_line_x[i - 1])
                        scene.add(force_cone_x[i - 1])
                    }
                    //14th June ends
                }
            }
            else {
                if (blockdata[i].forces.y[0] != 0) {
                    if (blockdata[i].forces.y[0] > 0) {
                        if (blockdata[i].forces.y[1] == "t") {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x - Math.sin(block_angle[i - 1])*blockdata[i].size[0]/30, meshk[i - 1].position.y + Math.cos(block_angle[i - 1])*blockdata[i].size[0]/30, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x - Math.sin(block_angle[i - 1])*(7*blockdata[i].size[0]/60), meshk[i - 1].position.y + Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), 0);
                        }
                        else {
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x + Math.sin(block_angle[i - 1])*blockdata[i].size[0]/30, meshk[i - 1].position.y - Math.cos(block_angle[i - 1])*blockdata[i].size[0]/30, 0);
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x + Math.sin(block_angle[i - 1])*(7*blockdata[i].size[0]/60), meshk[i - 1].position.y - Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), 0);
                        }
                        var force_ang = block_angle[i - 1]
                    }
                    else {
                        if (blockdata[i].forces.y[1] == "t") {
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x - Math.sin(block_angle[i - 1])*blockdata[i].size[0]/30, meshk[i - 1].position.y + Math.cos(block_angle[i - 1])*blockdata[i].size[0]/30, 0);
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x - Math.sin(block_angle[i - 1])*(7*blockdata[i].size[0]/60), meshk[i - 1].position.y + Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), 0);
                        }
                        else {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x + Math.sin(block_angle[i - 1])*blockdata[i].size[0]/30, meshk[i - 1].position.y - Math.cos(block_angle[i - 1])*blockdata[i].size[0]/30, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x + Math.sin(block_angle[i - 1])*(7*blockdata[i].size[0]/60), meshk[i - 1].position.y - Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), 0);
                        }
                        var force_ang = block_angle[i - 1] + Math.PI
                    }
                    
                    ext_force_from.x = ext_force_from.x - 0.1*Math.cos(block_angle[i - 1])
                    ext_force_to.x = ext_force_to.x - 0.1*Math.cos(block_angle[i - 1])
                    ext_force_from.y = ext_force_from.y - 0.1*Math.sin(block_angle[i - 1])
                    ext_force_to.y = ext_force_to.y - 0.1*Math.sin(block_angle[i - 1])

                    var setfy = []

                    setfy.push(ext_force_from)
                    setfy.push(ext_force_to)

                    var material_force = new THREE.MeshBasicMaterial({color: 'white'})
                    var force_geometry = new THREE.BufferGeometry().setFromPoints(setfy);

                    //var force_line = new THREE.Line(force_geometry, material_force)
                    force_line_y[i - 1] = new THREE.Line(force_geometry, material_force) //14th June

                    force_line_y_ini_pos_x[i - 1] = force_line_y[i - 1].position.x
                    force_line_y_ini_pos_y[i - 1] = force_line_y[i - 1].position.y

                    //var force_cone = new THREE.Mesh(geometryc, material_force);
                    force_cone_y[i - 1] = new THREE.Mesh(geometryc, material_force); //14th June

                        //approx
                    force_cone_y[i - 1].position.x = ext_force_to.x; //14th June
                    force_cone_y[i - 1].position.y = ext_force_to.y; //14th June
                    force_cone_y[i - 1].rotation.z = force_ang //14th June
                    
                    force_cone_y_ini_pos_x[i - 1] = force_cone_y[i - 1].position.x
                    force_cone_y_ini_pos_y[i - 1] = force_cone_y[i - 1].position.y

                    if (step == "fbd" && subsubstep == 100 && substep == i) {
                        scene.add(force_line_y[i - 1]) //14th June
                        scene.add(force_cone_y[i - 1]) //14th June
                    }
                    //14th June Starts
                    if (step == "motion") {
                        
                        scene.add(force_line_y[i - 1])
                        scene.add(force_cone_y[i - 1])
                    }
                    //14th June ends   
                }
                if (blockdata[i].forces.x[0] != 0) {
                    if (blockdata[i].forces.x[0] > 0) {
                        if (blockdata[i].forces.x[1] == "r") {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x + Math.cos(block_angle[i - 1])*blockdata[i].size[0]/30, meshk[i - 1].position.y + Math.sin(block_angle[i - 1])*blockdata[i].size[0]/30, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x + Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), meshk[i - 1].position.y + Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), 0);
                        }
                        else {
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x - Math.cos(block_angle[i - 1])*blockdata[i].size[0]/30, meshk[i - 1].position.y - Math.sin(block_angle[i - 1])*blockdata[i].size[0]/30, 0);
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x - Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), meshk[i - 1].position.y - Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), 0);
                        }
                        var force_ang = -Math.PI/2 + block_angle[i - 1]
                    }
                    else {
                        if (blockdata[i].forces.x[1] == "r") {
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x + Math.cos(block_angle[i - 1])*blockdata[i].size[0]/30, meshk[i - 1].position.y + Math.sin(block_angle[i - 1])*blockdata[i].size[0]/30, 0);
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x + Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), meshk[i - 1].position.y + Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), 0);
                        }
                        else {
                            var ext_force_from = new THREE.Vector3(meshk[i - 1].position.x - Math.cos(block_angle[i - 1])*blockdata[i].size[0]/30, meshk[i - 1].position.y - Math.sin(block_angle[i - 1])*blockdata[i].size[0]/30, 0);
                            var ext_force_to = new THREE.Vector3(meshk[i - 1].position.x - Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), meshk[i - 1].position.y - Math.cos(block_angle[i - 1])*(7*blockdata[i].size[0]/60), 0);
                        }
                        var force_ang = Math.PI/2 + block_angle[i - 1]
                    }

                    ext_force_from.y = ext_force_from.y - Math.cos(block_angle[i - 1])*0.1
                    ext_force_to.y = ext_force_to.y - Math.cos(block_angle[i - 1])*0.1
                    ext_force_from.x = ext_force_from.x + Math.sin(block_angle[i - 1])*0.1
                    ext_force_to.x = ext_force_to.x + Math.sin(block_angle[i - 1])*0.1

                    var setfy = []

                    setfy.push(ext_force_from)
                    setfy.push(ext_force_to)

                    var material_force = new THREE.MeshBasicMaterial({color: 'white'})
                    var force_geometry = new THREE.BufferGeometry().setFromPoints(setfy);

                    force_line_x[i - 1] = new THREE.Line(force_geometry, material_force) //14th June

                    force_line_x_ini_pos_x[i - 1] = force_line_x[i - 1].position.x
                    force_line_x_ini_pos_y[i - 1] = force_line_x[i - 1].position.y

                    force_cone_x[i - 1] = new THREE.Mesh(geometryc, material_force); //14th June
                    
                        //approx
                    force_cone_x[i - 1].position.x = ext_force_to.x; //14th June
                    force_cone_x[i - 1].position.y = ext_force_to.y; //14th June
                    force_cone_x[i - 1].rotation.z = force_ang //14th June

                    force_cone_x_ini_pos_x[i - 1] =  force_cone_x[i - 1].position.x
                    force_cone_x_ini_pos_y[i - 1] =  force_cone_x[i - 1].position.y

                    if (step == "fbd" && subsubstep == 100 && substep == i) {
                        scene.add(force_line_x[i - 1]) //14th June
                        scene.add(force_cone_x[i - 1]) //14th June
                    }

                    //14th June Starts
                    if (step == "motion") {
                        scene.add(force_line_x[i - 1])
                        scene.add(force_cone_x[i - 1])
                    }
                    //14th June ends
                }

            }
            //external force code ends

            //mangalik code ends
        }
        
        if (alld_question_no == 31 || alld_question_no == 32 || alld_question_no == 33)
            var geometrypl = new THREE.PlaneGeometry(20, 1.7);
        else 
            var geometrypl = new THREE.PlaneGeometry(1.7, 1.7)

        
        const materialpl = new THREE.MeshBasicMaterial({
            color: 0x964B00, side:
                THREE.DoubleSide
        });
        var x;
        for (x = 1; x < n_c + 1; x++) {




            meshpl[x - 1] = new THREE.Mesh(geometrypl, materialpl);


            //where does the -150/20 come from?
            meshpl[x - 1].position.x = (ceilingdata[x].loc[0] - 150) / 15;
            meshpl[x - 1].position.y = (ceilingdata[x].loc[1] - 150) / 15; // +1 why?
            
            
            //meshpl[x - 1].position.z = -0.84;
            if ((step == "constraint" && (subsubstep == 0 || subsubstep == -1)) || (step == "motion") || (step == "fbd")) {
                scene.add(meshpl[x - 1])
            }
            if (step == "constraint" && (stringdata[substep]["first obj type"] == "<class 'blocksclass.grounds'>" || stringdata[substep]["second obj type"] == "<class 'blocksclass.grounds'>")) {
                if (stringdata[substep]["first obj type"] == "<class 'blocksclass.grounds'>") {
                    if (stringdata[substep]["first obj"] == x) {
                        scene.add(meshpl[x - 1])
                    }
                }
                if (stringdata[substep]["second obj type"] == "<class 'blocksclass.grounds'>") {
                    if (stringdata[substep]["second obj"] == x) {
                        scene.add(meshpl[x - 1])
                    }
                }
            }

            //mangalik code starts
            var horiz;

            if (ceilingdata[x].position == "t" || ceilingdata[x].position == "b")
                horiz = 1
            else
                horiz = 0

            
                //if (ceilingdata[x].loc[1] > 200)
                  //  meshpl[x - 1].rotation.x = Math.PI/1.5
                //else
                  //  meshpl[x - 1].rotation.x = Math.PI/2//1.57
                if (ceilingdata[x].position == "t") {
                    meshpl[x - 1].position.y = meshpl[x - 1].position.y + 1
                    meshpl[x - 1].rotation.x = Math.PI/1.5
                }
                else if (ceilingdata[x].position == "b") {
                    meshpl[x - 1].position.y = meshpl[x - 1].position.y
                    meshpl[x - 1].rotation.x = Math.PI/2
                }
                else if (ceilingdata[x].position == "l")
                    meshpl[x - 1].rotation.y = Math.PI/1.65
                else
                    meshpl[x - 1].rotation.y = -Math.PI/1.85
            
            //meshpl[x - 1].rotation.x = 3.14 / 1.5
            //debugger

            //mangalik code ends
        }
        var usevarx = 0

        var usevary = 0
        

        const materialx = new THREE.MeshNormalMaterial()
        const materialy = new THREE.MeshNormalMaterial()
        //materialx.map = texture
        //materialy.map = texture
        materialx.color = new THREE.Color(0x00ff00)
        materialy.color = new THREE.Color(0x00ff00)
        //const materialrdm = new THREE.MeshNormalMaterial()
        var rdm1
        rdm1 = new THREE.Mesh(
            new THREE.BoxGeometry(0.3, 0.3, 0.3),
            materialx
        )
        rdm1.position.x = -1

        var rdm2
        rdm2 = new THREE.Mesh(
            new THREE.BoxGeometry(0.25, 0.25, 0.25),
            materialy
        )
        rdm2.position.x = -1
        rdm2.position.y = 0.25
        //scene.add( rdm2)
        //scene.add( rdm1)

        var rdm3
        const materialrdm1 = new THREE.MeshBasicMaterial()
        materialrdm1.color = new THREE.Color(0x0000ff)
        materialrdm1.transparent = true
        materialrdm1.opacity = 0.8
        rdm3 = new THREE.Mesh(
            new THREE.BoxGeometry(0.25, 0.05, 0.25),
            materialrdm1
        )
        rdm3.position.x = -1
        rdm3.position.y = 0.14
        //scene.add( rdm3)



        var meshp = new Array(n_p);
        //var clr = [ 0xff0000, 0xffff00, 0x0088ff, 0x00ff00]  
        for (i = 1; i < n_p + 1; i++) {

            const materialp = new THREE.MeshNormalMaterial()
            //const materialx = new THREE.MeshStandardMaterial()
            //const material2 = new THREE.MeshMatcapMaterial()
            //materialp.map = texture
            //materialp.color = new THREE.Color(clr[i-1])
            meshp[i - 1] = new THREE.Mesh(
                new THREE.CylinderGeometry(pulleydata[i].radius / 15, pulleydata[i].radius / 15, 0.03, 32),
                materialp
            )
            //debugger
            if (!step.includes("constraint") || (step == "constraint" && (subsubstep == 0 || subsubstep == -1))) {
                scene.add(meshp[i - 1])
            }
            if (step == "constraint" && (stringdata[substep]["first obj type"] == "<class 'blocksclass.pulleys'>" || stringdata[substep]["second obj type"] == "<class 'blocksclass.pulleys'>")) {
                if (stringdata[substep]["first obj type"] == "<class 'blocksclass.pulleys'>") {
                    if (stringdata[substep]["first obj"] == i) {
                        scene.add(meshp[i - 1])
                    }


                }
                if (stringdata[substep]["second obj type"] == "<class 'blocksclass.pulleys'>") {
                    if (stringdata[substep]["second obj"] == i) {
                        scene.add(meshp[i - 1])
                    }
                }
            }
            meshp[i - 1].rotation.x = 1.57
            meshp[i - 1].position.x = (pulleydata[i].centre[0] - 150) / 15;
            meshp[i - 1].position.y = (pulleydata[i].centre[1] - 150) / 15;

            //mangalik code starts
            camera_avg_x = camera_avg_x + meshp[i - 1].position.x //added by mangalik
            camera_avg_y = camera_avg_y + meshp[i - 1].position.y
            num_of_obj = num_of_obj + 1
            //mangalik code ends


            pulley_ini_pos_x[i - 1] = meshp[i - 1].position.x;
            pulley_ini_pos_y[i - 1] = meshp[i - 1].position.y;

            acc_arrow_to = new THREE.Vector3(meshp[i - 1].position.x + 1.05, meshp[i - 1].position.y + 0.5, 0)
            acc_arrow_from = new THREE.Vector3(meshp[i - 1].position.x + 1.05, meshp[i - 1].position.y - 0.5, 0)


            acc_arrow_direction = acc_arrow_to.clone().sub(acc_arrow_from);
            acc_arrow_length = acc_arrow_direction.length();
            acc_arrowHelper[i + n_b - 1] = new THREE.ArrowHelper(acc_arrow_direction.normalize(), acc_arrow_from, acc_arrow_length, clr[i - 1]);
            acc_cone[i + n_b - 1] = new THREE.Mesh(geometryc, materialx);


            acc_cone[i + n_b - 1].position.x = meshp[i - 1].position.x + 1.05;

            //mangalik code starts
            if (pulleydata[i].acceleration[1] > 0) {
                acc_cone[i + n_b - 1].position.y = meshp[i - 1].position.y + 0.5;
            }

            else if (pulleydata[i].acceleration[1] < 0) {
                acc_cone[i + n_b - 1].position.y = meshp[i - 1].position.y - 0.5;
                acc_cone[i + n_b - 1].rotation.z = Math.PI
            }

            
            else if (pulleydata[i].acceleration[0] > 0) {
                acc_cone[i + n_b - 1].position.x = meshp[i - 1].position.x + 0.5;
                acc_cone[i + n_b - 1].rotation.z = -Math.PI/2
            }

            else if (pulleydata[i].acceleration[0] < 0) {
                acc_cone[i + n_b - 1].position.x = meshp[i - 1].position.x - 0.5;
                acc_cone[i + n_b - 1].rotation.z = Math.PI
            }
            

            if (pulleydata[i].acceleration[1] != 0) {
                if ((step == "constraint" && (subsubstep == 0 || subsubstep == -1)) || (step == "motion") || (step == "fbd")) {
                    scene.add(acc_cone[i + n_b - 1])
                    scene.add(acc_arrowHelper[i + n_b - 1])
                }
            }
            //mangalik code ends
        }

        //console.log( meshp[0].position.y )

        // Object
        //const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3)
        //const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        //const mesh = new THREE.Mesh(geometry, material)

        //const material = new THREE.MeshBasicMaterial( { map: texture })
        const material = new THREE.MeshNormalMaterial()
        //const material = new THREE.MeshBasicMaterial()
        //material.map = texture
        material.color = new THREE.Color(0xff0000)

        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.3, 0.3, 0.3),
            material
        )

        const material4 = new THREE.LineBasicMaterial({ color: 0xff00ff }); // pink
        const material5 = new THREE.LineBasicMaterial({ color: 0xff0000 }); // yellow
        //const material4 = new THREE.LineBasicMaterial( { color: 0x00ff00 } ); // lime
        const material6 = new THREE.LineBasicMaterial({ color: 0xffffff }); // white

        var line_materials = [material4, material5, material6, material6, material6]



        const material2 = new THREE.MeshBasicMaterial({color: 'red'})
        //const material2 = new THREE.MeshMatcapMaterial()
        //material2.map = texture
        //material2.color = new THREE.Color(0xff0000)
        //material2.metcap = texture

        //material.metalness = 0.45
        //material.roughness = 0.65
        const mesh1 = new THREE.Mesh(
            new THREE.BoxGeometry(0.3, 0.3, 0.3),
            material2
        )
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)


        const pointLight = new THREE.PointLight(0xffffff, 0.5)
        pointLight.position.x = 1
        pointLight.position.y = 0
        pointLight.position.z = 2
        //scene.add(pointLight)





        /*const mesh1 = new THREE.Mesh(
            new THREE.BoxGeometry(0.3, 0.3, 0.3),
            new THREE.MeshBasicMaterial({ map: texture })
        )*/
        //scene.add( cylinder );
        //cylinder.position.y = 2
        //cylinder.position.x = 0.2
        //cylinder.rotation.x= 1.57


        //scene.add( cylinder );
        mesh1.position.x = 0.4
        /*
        mesh1.position.z = -1
        mesh1.position.x = 1
        //mesh.position.y = 0
        */
        //mesh.rotation.y = 1
        //debugger


        /*this has been commented out by mangalik and implemented later as data regarding for which subsubstep sphere should arrive wasn't there
        
        var spherefbd = []

        for (i = 1; i < n_b + 1; i++) {

            //const material = new THREE.MeshNormalMaterial()
            const materialfbd = new THREE.MeshBasicMaterial()
            //const materialfbd = new THREE.MeshMatcapMaterial()

            materialfbd.color = new THREE.Color(0xffffff)
            materialfbd.transparent = true
            materialfbd.opacity = 0.3
            spherefbd[i - 1] = new THREE.Mesh(
                new THREE.SphereGeometry(0.9*blockdata[i].size[0]/15, 16, 16), //approx
                materialfbd
            )

            spherefbd[i - 1].position.x = meshk[i - 1].position.x;
            spherefbd[i - 1].position.y = meshk[i - 1].position.y;
            if (step == "fbd" && substep == i && subsubstep >= blockdata[i].forces.length) {
                scene.add(spherefbd[i - 1])
            }
        }*/

        /*for (i = 1; i < n_p + 1; i++) {

            //const material = new THREE.MeshNormalMaterial()
            const materialfbd = new THREE.MeshBasicMaterial()
            //const materialfbd = new THREE.MeshMatcapMaterial()

            materialfbd.color = new THREE.Color(0xffffff)
            materialfbd.transparent = true
            materialfbd.opacity = 0.3
            spherefbd[i - 1 + n_b] = new THREE.Mesh(
                new THREE.SphereGeometry(1.2, 16, 16),
                materialfbd
            )

            spherefbd[i - 1 + n_b].position.x = meshp[i - 1].position.x;
            spherefbd[i - 1 + n_b].position.y = meshp[i - 1].position.y;
            if (step == "fbd" && substep == i + n_b) {
                scene.add(spherefbd[i - 1 + n_b])
            }

        }*/

        //mesh[0].intersect( spherefbd[0] );
        //meshintersect = cube_three_bsp.toMesh( material4 );

        //scene.add( meshintersect)

        
        
        


        const material3 = new THREE.MeshBasicMaterial()
        //material.map = texture
        material3.color = new THREE.Color(0xaaaa00)

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.35, 16, 16),
            material3
        )
        sphere.position.x = 1


        //scene.add(mesh)
        //scene.add(mesh1,sphere)

        // Sizes
        const sizes = {
            width: 500,
            height: 450
        }

        //const axesHelper = new THREE.AxesHelper(2)
        //scene.add(axesHelper)



        // Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
        //const camera = new THREE.OrthographicCamera(- 2, 2, 2, - 2, 0.1, 100)
        const aspectRatio = sizes.width / sizes.height
        //const camera = new THREE.OrthographicCamera(- 2 * aspectRatio, 2 * aspectRatio, 2, - 2, 0.1, 100)
        camera.position.z = 14;
        //if (alld_question_no == 3 || alld_question_no == 13)
          //  camera.position.z = 11
        //added by mangalik
        camera.position.x = camera_avg_x/ num_of_obj
        camera.position.y = camera_avg_y/ num_of_obj
        //added by mangalik

        scene.add(camera)
        // FLOOR

        //camera.lookAt( mesh.position)

        /// Renderer
        const canvas = document.querySelector('.webgl')
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
           // alpha: false
         })
        renderer.setSize(sizes.width, sizes.height)

        //renderer.setClearColorHex( 0x000000, 1 );
        //renderer.render(scene, camera)

        //let time = Date.now()
        //onst elapsedTime = clock.getElapsedTime()


        //const pt2
        //var angle
        //const geometryline
        //var secondobj
        //var linestr
        //line.geometry.verticesNeedUpdate = true  
        //console.log(line.position)

        const kpt = [];
        /*for( i=1; i < n_s; i++ )
        {
               
               
        kpt.push( new THREE.Vector3( meshk[stringdata[1].first obj - 1].position.x, meshk[stringdata[1].first obj - 1].position.y, meshk[stringdata[1].first obj - 1].position.z )  )
        const secondobj = meshp[ stringdata[1].second obj - 1 ]
        var angle = 3.14- stringdata[1].angle
        const pt2 =  new THREE.Vector3( secondobj.position.x + secondobj.geometry.radiusTop* Math.cos(angle), secondobj.position.x + secondobj.geometry.radiusTop* Math.sin(angle), secondobj.position.z  )
        kpt.push( pt2 );
        const geometryline = new THREE.BufferGeometry().setFromPoints( kpt );
           
        const linestr = new THREE.Line( geometryline, material4 );
        scene.add( linestr )*/



        //}

        //console.log(stringdata[1])
        var pt1
        var pt2
        var secondobj
        var firstobj
        var angle
        var points = []
        var strpart
        var linestr = []
        var endpos = []
        var strpt_acc_y = []
        var endpt_acc_y = []
        //var endpos_second =[]
        //console.log(meshk)

        for (i = 1; i < n_s + 1; i++) {
            strpart = stringdata[i];
            //debugger
            //console.log( stringdata[i])

            // added by mangalik, the condition to draw string when 1 is ground, 2 is block
            if (strpart["first obj type"] == "<class 'blocksclass.grounds'>" && strpart["second obj type"] == "<class 'blocksclass.blocks'>") {
                
                
                if (Math.abs(strpart.angle-Math.PI/2) < 0.01 || Math.abs(strpart.angle+Math.PI/2) < 0.01 || Math.abs(strpart.angle-3*Math.PI/2) < 0.01){
                    pt2 = new THREE.Vector3(meshk[stringdata[i]["second obj"] - 1].position.x, meshk[stringdata[i]["second obj"] - 1].position.y, meshk[stringdata[i]["second obj"] - 1].position.z)
                    pt1 = new THREE.Vector3(meshpl[stringdata[i]["first obj"] - 1].position.x, meshk[stringdata[i]["second obj"] - 1].position.y, meshk[stringdata[i]["second obj"] - 1].position.z)
                }
                else if (Math.abs(strpart.angle-Math.PI) < 0.01 || Math.abs(strpart.angle) < 0.01){
                    pt2 = new THREE.Vector3(meshk[stringdata[i]["second obj"] - 1].position.x, meshk[stringdata[i]["second obj"] - 1].position.y, meshk[stringdata[i]["second obj"] - 1].position.z)
                    pt1 = new THREE.Vector3(meshk[stringdata[i]["second obj"] - 1].position.x, meshpl[stringdata[i]["first obj"] - 1].position.y, meshk[stringdata[i]["second obj"] - 1].position.z)
                }
                
                points[i - 1] = []
                endpos[i - 1] = []
                //console.log(pt1)
                //console.log(pt2)
                //pt1.y = pt1.y + 0.7
                //the if-elses can and should be replaced by some angle data to be asked from the JSON-maker
                if (pt2.y < pt1.y) {
                    pt2.y = pt2.y + blockdata[stringdata[i]["second obj"]].size[0] / 22 // box k aadhe size ka karo
                }
                if (pt2.y > pt1.y) {
                    pt2.y = pt2.y - blockdata[stringdata[i]["second obj"]].size[0] / 22 // box k aadhe size ka karo
                }
                if (pt1.x > pt2.x)
                    pt2.x = pt2.x + blockdata[stringdata[i]["second obj"]].size[0] / 25
                if (pt1.x < pt2.x)
                    pt2.x = pt2.x - blockdata[stringdata[i]["second obj"]].size[0] / 22

                points[i - 1].push(pt1)
                points[i - 1].push(pt2)
                
                const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);

                endpos[i - 1].push(pt1)
                endpos[i - 1].push(pt2)
                
                linestr[i - 1] = new THREE.Line(geometry4, line_materials[strpart["str no"] - 1]);
                if (!step.includes("constraint") || (step == "constraint" && subsubstep <= 0)) {
                    scene.add(linestr[i - 1])
                }
                if (step == "constraint" && i == substep) {
                    scene.add(linestr[i - 1])
                }
            }

            // added by mangalik, the condition to draw string when 1 is block, 2 is ceiling.ground
            if (strpart["first obj type"] == "<class 'blocksclass.blocks'>" && strpart["second obj type"] == "<class 'blocksclass.grounds'>") {
                
                pt1 = new THREE.Vector3(meshk[strpart["first obj"] - 1].position.x + Math.sin(strpart.angle)*blockdata[strpart["first obj"]].size[0]/30, meshk[strpart["first obj"] - 1].position.y + Math.cos(strpart.angle)*blockdata[strpart["first obj"]].size[0]/30, 0)
                pt2 = new THREE.Vector3(meshk[strpart["first obj"] - 1].position.x + Math.sin(strpart.angle)*blockdata[strpart["first obj"]].size[0]/5, meshk[strpart["first obj"] - 1].position.y + Math.cos(strpart.angle)*blockdata[strpart["first obj"]].size[0]/5, 0)

                if (block_angle[strpart["first obj"] - 1] == 0) {
                if (Math.abs(strpart.angle-Math.PI/2) < 0.01 || Math.abs(strpart.angle+Math.PI/2) < 0.01 || Math.abs(strpart.angle-3*Math.PI/2) < 0.01){
                    pt1 = new THREE.Vector3(meshk[stringdata[i]["first obj"] - 1].position.x, meshk[stringdata[i]["first obj"] - 1].position.y, meshk[stringdata[i]["first obj"] - 1].position.z)
                    pt2 = new THREE.Vector3(meshpl[stringdata[i]["second obj"] - 1].position.x, meshk[stringdata[i]["first obj"] - 1].position.y, meshk[stringdata[i]["first obj"] - 1].position.z)
                }
                else if (Math.abs(strpart.angle-Math.PI) < 0.01 || Math.abs(strpart.angle) < 0.01){
                    pt1 = new THREE.Vector3(meshk[stringdata[i]["first obj"] - 1].position.x, meshk[stringdata[i]["first obj"] - 1].position.y, meshk[stringdata[i]["first obj"] - 1].position.z)
                    pt2 = new THREE.Vector3(meshk[stringdata[i]["first obj"] - 1].position.x, meshpl[stringdata[i]["second obj"] - 1].position.y, meshk[stringdata[i]["first obj"] - 1].position.z)
                }
                }
                
                //pt1 = new THREE.Vector3(meshk[strpart["first obj"] - 1].position.x + Math.sin(strpart.angle)*blockdata[strpart["first obj"]].size[0]/30, meshk[strpart["first obj"] - 1].position.y + Math.cos(strpart.angle)*blockdata[strpart["first obj"]].size[0]/30, 0)
                //pt2 = new THREE.Vector3(meshk[strpart["first obj"] - 1].position.x + Math.sin(strpart.angle)*blockdata[strpart["first obj"]].size[0]/5, meshk[strpart["first obj"] - 1].position.y + Math.cos(strpart.angle)*blockdata[strpart["first obj"]].size[0]/5, 0)
                points[i - 1] = []
                endpos[i - 1] = []
                //console.log(pt1)
                //console.log(pt2)
                //pt1.y = pt1.y + 0.7
                //the if-elses can and should be replaced by some angle data to be asked from the JSON-maker
                if (block_angle[strpart["first obj"] - 1] == 0) {
                if (pt1.y < pt2.y) {
                    pt1.y = pt1.y + blockdata[stringdata[i]["first obj"]].size[0] / 30 // box k aadhe size ka karo
                }
                if (pt2.y < pt1.y) {
                    pt1.y = pt1.y - blockdata[stringdata[i]["first obj"]].size[0] / 30 // box k aadhe size ka karo
                }
                if (pt1.x < pt2.x)
                    pt1.x = pt1.x + blockdata[stringdata[i]["first obj"]].size[0] / 30
                if (pt1.x > pt2.x)
                    pt1.x = pt1.x - blockdata[stringdata[i]["first obj"]].size[0] / 30
                }
                points[i - 1].push(pt1)
                points[i - 1].push(pt2)
                
                const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);

                endpos[i - 1].push(pt1)
                endpos[i - 1].push(pt2)
                
                linestr[i - 1] = new THREE.Line(geometry4, line_materials[strpart["str no"] - 1]);
                if (!step.includes("constraint") || (step == "constraint" && subsubstep <= 0)) {
                    scene.add(linestr[i - 1])
                }
                if (step == "constraint" && i == substep) {
                    scene.add(linestr[i - 1])
                }
            }

            //added by mangalik, some conditions to draw horizontal string, but this is not perfect will have to change for inclined conditions
            if (strpart["first obj type"] == "<class 'blocksclass.blocks'>" && strpart["second obj type"] == "<class 'blocksclass.pulleys'>") {
                pt1 = new THREE.Vector3(meshk[stringdata[i]["first obj"] - 1].position.x, meshk[stringdata[i]["first obj"] - 1].position.y, meshk[stringdata[i]["first obj"] - 1].position.z)
                points[i - 1] = []
                endpos[i - 1] = []

                points[i - 1].push(pt1);
                angle = Math.PI - stringdata[i].angle
                secondobj = meshp[stringdata[i]["second obj"] - 1]

                if (strpart["toc"] != "mm")
                    pt2 = new THREE.Vector3(secondobj.position.x + secondobj.geometry.parameters.radiusTop * Math.cos(angle), secondobj.position.y + secondobj.geometry.parameters.radiusTop * Math.sin(angle), secondobj.position.z)
                else
                    pt2 = new THREE.Vector3(secondobj.position.x, secondobj.position.y, secondobj.position.z)
                    //console.log( pt2 )
                points[i - 1].push(pt2);

                if (block_angle[strpart["first obj"] - 1] == 0) {
                    if (Math.abs(pt1.y-pt2.y) < Math.abs(pt1.x-pt2.x))
                        pt2.y = pt1.y;
                    else
                        pt2.x = pt1.x;
                }

                const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);

                if (block_angle[strpart["first obj"] - 1] == 0) {
                    if (pt1.y < pt2.y) {
                        pt1.y = pt1.y + blockdata[stringdata[i]["first obj"]].size[0] / 30 //0.6 // box k aadhe size ka karo
                    }
                    else if (pt2.y < pt1.y) {
                        pt1.y = pt1.y - blockdata[stringdata[i]["first obj"]].size[0] / 30 // 0.6 // box k aadhe size ka karo
                    }
                    else if (pt2.x < pt1.x) {
                        pt1.x = pt1.x - blockdata[stringdata[i]["first obj"]].size[0] / 30
                    }
                    else if (pt2.x > pt1.x) {
                        pt1.x = pt1.x + blockdata[stringdata[i]["first obj"]].size[0] / 30
                    }

                    endpos[i - 1].push(pt1)
                    endpos[i - 1].push(pt2)
                }
                else {
                    pt1.x = pt1.x + Math.cos(block_angle[strpart["first obj"] - 1])*blockdata[stringdata[i]["first obj"]].size[0] / 30
                    pt1.y = pt1.y + Math.sin(block_angle[strpart["first obj"] - 1])*blockdata[stringdata[i]["first obj"]].size[0] / 30
                    endpos[i - 1].push(pt1)
                    endpos[i - 1].push(pt2)
                }
                


                linestr[i - 1] = new THREE.Line(geometry4, line_materials[strpart["str no"] - 1]);
                if (!step.includes("constraint") || (step == "constraint" && subsubstep <= 0)) {
                    scene.add(linestr[i - 1])
                }
                if (step == "constraint" && i == substep) {
                    scene.add(linestr[i - 1])
                }
            }
            
            //debugger
            //added by mangalik, some conditions to draw horizontal string, but this is not perfect will have to change for inclined conditions
            if (strpart["second obj type"] == "<class 'blocksclass.blocks'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                angle = Math.PI - stringdata[i].angle
                firstobj = meshp[stringdata[i]["first obj"] - 1]
                //console.log( firstobj)
                if (strpart["toc"] != "mm") {
                    pt1 = new THREE.Vector3(firstobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(angle), firstobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(angle), firstobj.position.z)
                }
                else {
                    pt1 = new THREE.Vector3(firstobj.position.x, firstobj.position.y, firstobj.position.z)

                }
                points[i - 1] = []
                points[i - 1].push(pt1);

                pt2 = new THREE.Vector3(meshk[stringdata[i]["second obj"] - 1].position.x, meshk[stringdata[i]["second obj"] - 1].position.y, 0)

                //console.log( pt2 )
                points[i - 1].push(pt2);

                pt2.x = pt2.x + Math.sin(Math.PI + strpart.angle)*blockdata[strpart["first obj"]].size[0]/30 //16th June
                pt2.y = pt2.y + Math.cos(Math.PI + strpart.angle)*blockdata[strpart["first obj"]].size[0]/30 //16th June

                endpos[i - 1] = []
                endpos[i - 1].push(pt1)
                endpos[i - 1].push(pt2)
                /*
                if (Math.abs(pt1.y-pt2.y) < Math.abs(pt1.x-pt2.x))
                    pt2.y = pt1.y;
                else
                    pt2.x = pt1.x;*/

                const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);
                /*
                if (pt2.y < pt1.y) {
                    pt2.y = pt2.y + blockdata[stringdata[i]["second obj"]].size[0] / 30 //0.6 // box k aadhe size ka karo
                }
                else if (pt1.y < pt2.y) {
                    pt2.y = pt2.y - blockdata[stringdata[i]["second obj"]].size[0] / 30 //0.6 // box k aadhe size ka karo
                }
                else if (pt2.x < pt1.x) {
                    pt2.x = pt2.x + blockdata[stringdata[i]["second obj"]].size[0] / 30
                }
                else if (pt2.x > pt1.x) {
                    pt2.x = pt2.x - blockdata[stringdata[i]["second obj"]].size[0] / 30
                }*/
                
                


                linestr[i - 1] = new THREE.Line(geometry4, line_materials[strpart["str no"] - 1]);
                if (!step.includes("constraint") || (step == "constraint" && subsubstep <= 0)) {
                    scene.add(linestr[i - 1])
                }
                if (step == "constraint" && i == substep) {
                    scene.add(linestr[i - 1])
                }
            }

            //added by mangalik, some conditions to draw horizontal string, but this is not perfect will have to change for inclined conditions
            if (strpart["second obj type"] == "<class 'blocksclass.blocks'>" && strpart["first obj type"] == "<class 'blocksclass.blocks'>") {
                angle = Math.PI/2 - stringdata[i].angle

                if (Math.abs(stringdata[i].angle - Math.PI/2) < 0.01)
                    angle = 0;
                else if (Math.abs(stringdata[i].angle - Math.PI) < 0.01)
                    angle = -Math.PI/2;
                else if (Math.abs(stringdata[i].angle - 0) < 0.01)
                    angle = Math.PI/2;   

                firstobj = meshk[stringdata[i]["first obj"] - 1]
                //console.log(firstobj)
                pt1 = new THREE.Vector3(meshk[stringdata[i]["first obj"] - 1].position.x, meshk[stringdata[i]["first obj"] - 1].position.y, meshk[stringdata[i]["first obj"] - 1].position.z)
                points[i - 1] = []
                //points[i - 1].push(pt1);

                pt2 = new THREE.Vector3(meshk[stringdata[i]["second obj"] - 1].position.x, meshk[stringdata[i]["second obj"] - 1].position.y, meshk[stringdata[i]["second obj"] - 1].position.z)

                pt1.x = pt1.x + Math.cos(angle)*blockdata[stringdata[i]["first obj"]].size[0] / 30
                pt2.x = pt2.x - Math.cos(angle)*blockdata[stringdata[i]["second obj"]].size[0] / 30
                pt1.y = pt1.y + Math.sin(angle)*blockdata[stringdata[i]["first obj"]].size[0] / 30
                pt2.y = pt2.y - Math.sin(angle)*blockdata[stringdata[i]["second obj"]].size[0] / 30
                //console.log(pt2)
                //points[i - 1].push(pt2);
                //const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);
                /*
                if (Math.abs(pt1.y - pt2.y) > Math.abs(pt1.x - pt2.x)) {

                    if (pt2.y < pt1.y) {
                        pt2.y = pt2.y + blockdata[stringdata[i]["second obj"]].size[0] / 30 //0.6 // box k aadhe size ka karo
                        pt1.y = pt1.y - blockdata[stringdata[i]["first obj"]].size[0] / 30 //0.6 
                    }
                    if (pt1.y < pt2.y) {
                        pt2.y = pt2.y - blockdata[stringdata[i]["second obj"]].size[0] / 30 //0.6 // box k aadhe size ka karo
                        pt1.y = pt1.y + blockdata[stringdata[i]["first obj"]].size[0] / 30 //0.6
                    }
                }  
                else { 
                // added conditions for x-direction
                    if (pt2.x < pt1.x){
                        pt2.x = pt2.x + blockdata[stringdata[i]["second obj"]].size[0] / 30 //0.6
                        pt1.x = pt1.x - blockdata[stringdata[i]["first obj"]].size[0] / 30 //0.6
                    }
                    if (pt2.x > pt1.x){
                        pt2.x = pt2.x - blockdata[stringdata[i]["second obj"]].size[0] / 30 //0.6
                        pt1.x = pt1.x + blockdata[stringdata[i]["first obj"]].size[0] / 30 //0.6
                    }
                }
                */
                points[i - 1].push(pt1);
                points[i - 1].push(pt2);
                const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);
                endpos[i - 1] = []
                endpos[i - 1].push(pt1)
                endpos[i - 1].push(pt2)
                
                
                linestr[i - 1] = new THREE.Line(geometry4, line_materials[strpart["str no"] - 1]);
                //scene.add(linestr[i-1]);
                if (!step.includes("constraint") || (step == "constraint" && subsubstep <= 0)) {
                    scene.add(linestr[i - 1])
                }
                if (step == "constraint" && i == substep) {
                    scene.add(linestr[i - 1])
                }
            }

            //added by mangalik, this needs two angles, specifically to draw problem 63
            if (strpart["second obj type"] == "<class 'blocksclass.pulleys'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                angle = Math.PI - stringdata[i].angle
                firstobj = meshp[stringdata[i]["first obj"] - 1]
                secondobj = meshp[stringdata[i]["second obj"] - 1]
                //console.log( firstobj)
                if (strpart["toc"][0] == "m") {
                    pt1 = new THREE.Vector3(meshp[stringdata[i]["first obj"] - 1].position.x, meshp[stringdata[i]["first obj"] - 1].position.y, meshp[stringdata[i]["first obj"] - 1].position.z)
                }
                else if (strpart["toc"][0] == "z") 
                    pt1 = new THREE.Vector3(firstobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(Math.PI - angle), firstobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(Math.PI - angle), firstobj.position.z)
                else 
                    pt1 = new THREE.Vector3(firstobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(angle), firstobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(angle), firstobj.position.z)
                points[i - 1] = []
                points[i - 1].push(pt1);

                if (strpart["toc"][1] == "m") {
                    pt2 = new THREE.Vector3(meshp[stringdata[i]["second obj"] - 1].position.x, meshp[stringdata[i]["second obj"] - 1].position.y, meshp[stringdata[i]["second obj"] - 1].position.z)
                }
                else if (strpart["toc"][1] == "t")
                    pt2 = new THREE.Vector3(secondobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(angle), secondobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(angle), secondobj.position.z)
                else
                    pt2 = new THREE.Vector3(secondobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(Math.PI - angle), secondobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(Math.PI - angle), secondobj.position.z)

                //console.log( pt2 )
                points[i - 1].push(pt2);
                const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);


                endpos[i - 1] = []
                endpos[i - 1].push(pt1)
                endpos[i - 1].push(pt2)
                


                linestr[i - 1] = new THREE.Line(geometry4, line_materials[strpart["str no"] - 1]);
                if (!step.includes("constraint") || (step == "constraint" && subsubstep <= 0)) {
                    scene.add(linestr[i - 1])
                }
                if (step == "constraint" && i == substep) {
                    scene.add(linestr[i - 1])
                }
            }

            //added by mangalik, angled cases not perfected
            if (strpart["second obj type"] == "<class 'blocksclass.grounds'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                
                
                angle = Math.PI - stringdata[i].angle
                
                //the following condition has to be removed in the long run when questions 10 through 13 are corrected
                if (alld_question_no >= 10 && alld_question_no <= 13)
                    angle = Math.PI - angle
                
                
                secondobj = meshpl[stringdata[i]["second obj"] - 1]
                firstobj = meshp[stringdata[i]["first obj"] - 1]
                console.log( firstobj)
                pt2 = new THREE.Vector3(secondobj.position.x, secondobj.position.y, secondobj.position.z)

                console.log(Math.sin(angle))
                
                if (strpart["toc"] == "zm") {
                    pt1 = new THREE.Vector3(meshp[stringdata[i]["first obj"] - 1].position.x + firstobj.geometry.parameters.radiusTop * Math.cos(Math.PI - angle), meshp[stringdata[i]["first obj"] - 1].position.y + firstobj.geometry.parameters.radiusTop * Math.sin(Math.PI - angle), meshp[stringdata[i]["second obj"] - 1].position.z)
                }
                if (strpart["toc"] == "mm") {
                    //debugger
                    pt1 = new THREE.Vector3(meshp[stringdata[i]["first obj"] - 1].position.x, meshp[stringdata[i]["first obj"] - 1].position.y, meshp[stringdata[i]["first obj"] - 1].position.z)
                }
                if (strpart["toc"] == "tm") {
                    pt1 = new THREE.Vector3(meshp[stringdata[i]["first obj"] - 1].position.x + firstobj.geometry.parameters.radiusTop * Math.cos(angle), meshp[stringdata[i]["first obj"] - 1].position.y + firstobj.geometry.parameters.radiusTop * Math.sin(Math.PI - angle), meshp[stringdata[i]["second obj"] - 1].position.z)
                }
                
                points[i - 1] = []
                points[i - 1].push(pt1);

                //console.log( pt2 )
                points[i - 1].push(pt2);
                const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);


                endpos[i - 1] = []
                endpos[i - 1].push(pt1)
                endpos[i - 1].push(pt2)
                


                linestr[i - 1] = new THREE.Line(geometry4, line_materials[strpart["str no"] - 1]);
                if (!step.includes("constraint") || (step == "constraint" && subsubstep <= 0)) {
                    scene.add(linestr[i - 1])
                }
                if (step == "constraint" && i == substep) {
                    scene.add(linestr[i - 1])
                }
            }
        }
        
        //console.log(linestr[0])
        //debugger
        /*const points1 =[]
        points1.push( new THREE.Vector3( 0.4,2,0) );
        points1.push( new THREE.Vector3( 0.4, 0 ,0 ) );
        const geometry5 = new THREE.BufferGeometry().setFromPoints( points1 );
           
        const line1 = new THREE.Line( geometry5, material4 );
        scene.add( line1 )*/

        //some variables added by mangalik
        var realpts_x = []
        var realpts_y = []
        var j
        var k
        var slope
        var intercept
        var centre_x
        var centre_y
        var radius
        var alpha
        var beta
        var gamma
        var discriminant
        var x1, x2, y1, y2
        var intersection_x
        var intersection_y
        var intersection_y2
        var ip_x = new Array(n_b + n_p); // intersection points
        var ip_y = new Array(n_b + n_p); // intersection points y coordinate

        var a_ang_list = new Array(n_b + n_p);

        var a_from
        var a_to
        var arrow_from = new Array(n_b + n_p); //new THREE.Vector3( 0, 0.9, 0 );
        var arrow_to = new Array(n_b + n_p);//new THREE.Vector3( 0, 0.9+0.7, 0 );
        var cone = [];
        var arrowHelper = [];
        var arrow_direction;
        var arrow_length


        // finding the cutting points
        //some conditions added by mangalik
        for (i = 0; i < n_b; i++) {
            //console.log(meshk[i])
            realpts_x[i] = []
            realpts_y[i] = []
            ip_x[i] = [];
            ip_y[i] = [];
            
            arrow_from[i] = [];
            arrow_to[i] = [];
            //debugger;
            for (j = 0; j < linestr.length; j++) {

                var endpt1 = [];
                var endpt2 = [];
                if ((stringdata[j + 1]["first obj type"] == "<class 'blocksclass.blocks'>" && (stringdata[j + 1]["first obj"] - 1) == i) ||
                    (stringdata[j + 1]["second obj type"] == "<class 'blocksclass.blocks'>" && (stringdata[j + 1]["second obj"] - 1) == i)) {
                    slope = (linestr[j].geometry.attributes.position.array[1] - linestr[j].geometry.attributes.position.array[4]) / (linestr[j]
                        .geometry.attributes.position.array[0] - linestr[j].geometry.attributes.position.array[3])
                    //console.log(linestr)
                    // debugger
                    var a_fr_dis = 0.9*Math.pow(blockdata[i+1].size[0], 0.8)/ Math.pow(15, 0.8); //what is the radious of the fbd circle?
                    var a_ang = Math.atan (slope)

                    if (block_angle[i] != 0) {

                        intersection_x = meshk[i].position.x + a_fr_dis*Math.cos(a_ang)
                        intersection_y = meshk[i].position.y + a_fr_dis*Math.sin(a_ang);

                        ip_x[i].push(intersection_x)
                        ip_y[i].push(intersection_y)
                        a_ang_list[i] = (a_ang);
                        a_from = new THREE.Vector3(intersection_x, intersection_y, 0);
                        a_to = new THREE.Vector3(intersection_x + 0.7*Math.cos(a_ang), intersection_y + 0.7*Math.sin(a_ang), 0)

                        arrow_from[i].push(a_from)
                        arrow_to[i].push(a_to)

                    }
                    else {
                    
                        if (Math.abs(slope) > 100) {
                            intersection_x = (linestr[j].geometry.attributes.position.array[0] + linestr[j].geometry.attributes.position.array[3]) / 2;
                            if ((stringdata[j + 1]["first obj"] - 1 == i) && stringdata[j + 1]["first obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[4] > linestr[j].geometry.attributes.position.array[1])) {
                                intersection_y = meshk[i].position.y + 0.9*Math.pow(blockdata[i+1].size[0],0.8)/Math.pow(15, 0.8) //(blockdata[i+1].size[0]/15-0.1)
                                a_to = new THREE.Vector3(intersection_x, intersection_y + 0.7, 0);
                            }
                            if ((stringdata[j + 1]["first obj"] - 1 == i) && stringdata[j + 1]["first obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[4] < linestr[j].geometry.attributes.position.array[1])) {
                                intersection_y = meshk[i].position.y - 0.9*Math.pow(blockdata[i+1].size[0],0.8)/Math.pow(15, 0.8) //(blockdata[i+1].size[0]/15-0.1)
                                a_to = new THREE.Vector3(intersection_x, intersection_y - 0.7, 0);
                            }
                            if ((stringdata[j + 1]["second obj"] - 1 == i) && stringdata[j + 1]["second obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[4] > linestr[j].geometry.attributes.position.array[1])) {
                                intersection_y = meshk[i].position.y - 0.9*Math.pow(blockdata[i+1].size[0],0.8)/Math.pow(15, 0.8) //(blockdata[i+1].size[0]/15-0.1)
                                a_to = new THREE.Vector3(intersection_x, intersection_y - 0.7, 0);
                            }
                            if ((stringdata[j + 1]["second obj"] - 1 == i) && stringdata[j + 1]["second obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[1] > linestr[j].geometry.attributes.position.array[4])) {
                                intersection_y = meshk[i].position.y + 0.9*Math.pow(blockdata[i+1].size[0],0.8)/Math.pow(15, 0.8) //(blockdata[i+1].size[0]/15-0.1)
                                a_to = new THREE.Vector3(intersection_x, intersection_y + 0.7, 0);
                            }
    
    
                            ip_x[i].push(intersection_x)
                            ip_y[i].push(intersection_y)
                            a_from = new THREE.Vector3(intersection_x, intersection_y, 0);
    
                            arrow_from[i].push(a_from)
                            arrow_to[i].push(a_to)
                        }
                        if (Math.abs(slope) < 100){
                            intersection_y = (linestr[j].geometry.attributes.position.array[1] + linestr[j].geometry.attributes.position.array[4]) / 2;
                            if ((stringdata[j + 1]["first obj"] - 1 == i) && stringdata[j + 1]["first obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[3] > linestr[j].geometry.attributes.position.array[0])) {
                                intersection_x = meshk[i].position.x + 0.9*Math.pow(blockdata[i+1].size[0],0.8)/Math.pow(15, 0.8) //(blockdata[i+1].size[0]/15-0.1)
                                a_to = new THREE.Vector3(intersection_x + 0.7, intersection_y, 0);
                            }
                            if ((stringdata[j + 1]["first obj"] - 1 == i) && stringdata[j + 1]["first obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[3] < linestr[j].geometry.attributes.position.array[0])) {
                                intersection_x = meshk[i].position.x - 0.9*Math.pow(blockdata[i+1].size[0],0.8)/Math.pow(15, 0.8) //(blockdata[i+1].size[0]/15-0.1)
                                a_to = new THREE.Vector3(intersection_x - 0.7, intersection_y, 0);
                            }
                            if ((stringdata[j + 1]["second obj"] - 1 == i) && stringdata[j + 1]["second obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[3] > linestr[j].geometry.attributes.position.array[0])) {
                                intersection_x = meshk[i].position.x - 0.9*Math.pow(blockdata[i+1].size[0],0.8)/Math.pow(15, 0.8) //(blockdata[i+1].size[0]/15-0.1)
                                a_to = new THREE.Vector3(intersection_x - 0.7, intersection_y, 0);
                            }
                            if ((stringdata[j + 1]["second obj"] - 1 == i) && stringdata[j + 1]["second obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[0] > linestr[j].geometry.attributes.position.array[3])) {
                                intersection_x = meshk[i].position.x + 0.9*Math.pow(blockdata[i+1].size[0],0.8)/Math.pow(15, 0.8) //(blockdata[i+1].size[0]/15-0.1)
                                a_to = new THREE.Vector3(intersection_x + 0.7, intersection_y, 0);
                            }
    
    
                            ip_x[i].push(intersection_x)
                            ip_y[i].push(intersection_y)
                            a_from = new THREE.Vector3(intersection_x, intersection_y, 0);
    
                            arrow_from[i].push(a_from)
                            arrow_to[i].push(a_to)
                        }
                    }
                }
            }
        }


        //mangalik code starts
        var spherefbd = []
        for (i = 1; i < n_b + 1; i++) {

            //const material = new THREE.MeshNormalMaterial()
            const materialfbd = new THREE.MeshBasicMaterial()
            //const materialfbd = new THREE.MeshMatcapMaterial()

            materialfbd.color = new THREE.Color(0xffffff)
            materialfbd.transparent = true
            materialfbd.opacity = 0.3
            spherefbd[i - 1] = new THREE.Mesh(
                new THREE.SphereGeometry(0.9*Math.pow(blockdata[i].size[0],0.8)/Math.pow(15, 0.8), 16, 16), //approx
                materialfbd
            )

            spherefbd[i - 1].position.x = meshk[i - 1].position.x;
            spherefbd[i - 1].position.y = meshk[i - 1].position.y;
            
            if (step == "fbd" && substep == i && subsubstep == -100)
                scene.add(spherefbd[i - 1]);
            if (step == "fbd" && substep == i && subsubstep >= block_normals[i - 1]+1 && ip_x[i - 1].length > 0 && subsubstep != 100) {
                scene.add(spherefbd[i - 1])
            }
        }
        
        for (i = 1; i < n_p + 1; i++) {

            //const material = new THREE.MeshNormalMaterial()
            const materialfbd = new THREE.MeshBasicMaterial()
            //const materialfbd = new THREE.MeshMatcapMaterial()

            materialfbd.color = new THREE.Color(0xffffff)
            materialfbd.transparent = true
            materialfbd.opacity = 0.3
            spherefbd[i - 1 + n_b] = new THREE.Mesh(
                new THREE.SphereGeometry(1.2, 16, 16),
                materialfbd
            )

            spherefbd[i - 1 + n_b].position.x = meshp[i - 1].position.x;
            spherefbd[i - 1 + n_b].position.y = meshp[i - 1].position.y;
            if (step == "fbd" && substep == i + n_b && subsubstep != 100) {
                scene.add(spherefbd[i - 1 + n_b])
            }

        }
        //mangalik code ends

        //some conditions added by mangalik
        //cutting points for pulley
        for (i = 0; i < n_p; i++) {

            ip_x[i + n_b] = [];
            ip_y[i + n_b] = [];
            arrow_from[i + n_b] = [];
            arrow_to[i + n_b] = [];
            
            //debugger;
            for (j = 0; j < linestr.length; j++) {

                intersection_x=0;
                intersection_y=0;
                var endpt2 = [];
                if ((stringdata[j + 1]["first obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["first obj"] - 1) == i) ||
                    (stringdata[j + 1]["second obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["second obj"] - 1) == i)) {
                    slope = (linestr[j].geometry.attributes.position.array[1] - linestr[j].geometry.attributes.position.array[4]) / (linestr[j]
                        .geometry.attributes.position.array[0] - linestr[j].geometry.attributes.position.array[3])
                    //console.log(linestr)
                    var checker = 1
                    
                    if (stringdata[j + 1]["first obj type"] == "<class 'blocksclass.blocks'>") {
                        if (block_angle[stringdata[j + 1]["first obj"] - 1] == 0) {
                            checker = 0;
                        }
                    }
                    if (stringdata[j + 1]["second obj type"] == "<class 'blocksclass.blocks'>") {
                        if (block_angle[stringdata[j + 1]["second obj"] - 1] == 0) {
                            checker = 0;
                        }
                    }
                    var a_angp = Math.atan (slope);
                    a_ang_list[i + n_b] = a_angp
                    if (alld_question_no <= 33 || bigblockdata.mass == 0 || bigblockdata.type == "tp" || checker == 0) {

                        if (Math.abs(slope) > 100) {
                            intersection_x = (linestr[j].geometry.attributes.position.array[0] + linestr[j].geometry.attributes.position.array[3]) / 2;
                            if (stringdata[j + 1]["second obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["second obj"] - 1) == i) {
                                if (linestr[j].geometry.attributes.position.array[1] > linestr[j].geometry.attributes.position.array[4]) {
                                    intersection_y = meshp[i].position.y + Math.pow(1.2 * 1.2 - Math.pow(intersection_x - meshp[i].position.x, 2), 0.5);
                                    a_to = new THREE.Vector3(intersection_x, intersection_y + 0.7, 0);
                                }
                                if (linestr[j].geometry.attributes.position.array[4] > linestr[j].geometry.attributes.position.array[1]) {
                                    intersection_y = meshp[i].position.y - Math.pow(1.2 * 1.2 - Math.pow(intersection_x - meshp[i].position.x, 2), 0.5);

                                    a_to = new THREE.Vector3(intersection_x, intersection_y - 0.7, 0);
                                }
                            }
                            if (stringdata[j + 1]["first obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["first obj"] - 1) == i) {
                                if (linestr[j].geometry.attributes.position.array[1] > linestr[j].geometry.attributes.position.array[4]) {
                                    intersection_y = meshp[i].position.y - Math.pow(1.2 * 1.2 - Math.pow(intersection_x - meshp[i].position.x, 2), 0.5);
                                    a_to = new THREE.Vector3(intersection_x, intersection_y - 0.7, 0);
                                }
                                if (linestr[j].geometry.attributes.position.array[4] > linestr[j].geometry.attributes.position.array[1]) {
                                    intersection_y = meshp[i].position.y + Math.pow(1.2 * 1.2 - Math.pow(intersection_x - meshp[i].position.x, 2), 0.5);
                                    a_to = new THREE.Vector3(intersection_x, intersection_y + 0.7, 0);
                                }
                            }
                        
                            ip_x[i + n_b].push(intersection_x)
                            ip_y[i + n_b].push(intersection_y)

                            a_from = new THREE.Vector3(intersection_x, intersection_y, 0);

                            arrow_from[i + n_b].push(a_from)
                            arrow_to[i + n_b].push(a_to)
                        }

                        if (Math.abs(slope) < 100) {
                            intersection_y = (linestr[j].geometry.attributes.position.array[1] + linestr[j].geometry.attributes.position.array[4]) / 2;
                            if (stringdata[j + 1]["second obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["second obj"] - 1) == i) {
                                if (linestr[j].geometry.attributes.position.array[0] > linestr[j].geometry.attributes.position.array[3]) {
                                    intersection_x = meshp[i].position.x + Math.pow(1.2 * 1.2 - Math.pow(intersection_y - meshp[i].position.y, 2), 0.5);
                                    a_to = new THREE.Vector3(intersection_x+0.7, intersection_y, 0);
                                }
                                if (linestr[j].geometry.attributes.position.array[3] > linestr[j].geometry.attributes.position.array[0]) {
                                    intersection_x = meshp[i].position.x - Math.pow(1.2 * 1.2 - Math.pow(intersection_y - meshp[i].position.y, 2), 0.5);

                                    a_to = new THREE.Vector3(intersection_x-0.7, intersection_y, 0);
                                }
                            }
                            if (stringdata[j + 1]["first obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["first obj"] - 1) == i) {
                                if (linestr[j].geometry.attributes.position.array[0] > linestr[j].geometry.attributes.position.array[3]) {
                                    intersection_x = meshp[i].position.x - Math.pow(1.2 * 1.2 - Math.pow(intersection_y - meshp[i].position.y, 2), 0.5);
                                    a_to = new THREE.Vector3(intersection_x-0.7, intersection_y, 0);
                                }
                                if (linestr[j].geometry.attributes.position.array[3] > linestr[j].geometry.attributes.position.array[0]) {
                                    intersection_x = meshp[i].position.x + Math.pow(1.2 * 1.2 - Math.pow(intersection_y - meshp[i].position.y, 2), 0.5);
                                    a_to = new THREE.Vector3(intersection_x+0.7, intersection_y, 0);
                                }
                            }
                            ip_x[i + n_b].push(intersection_x)
                            ip_y[i + n_b].push(intersection_y)

                            a_from = new THREE.Vector3(intersection_x, intersection_y, 0);

                            arrow_from[i + n_b].push(a_from)
                            arrow_to[i + n_b].push(a_to)
                        }
                    } 
                    else {
                        var dis_from_p = Math.pow(1.2 * 1.2 - Math.pow(pulleydata[i + 1].radius / 15, 2), 0.5)
                        if (stringdata[j + 1]["second obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["second obj"] - 1) == i) {
                            intersection_x = linestr[j].geometry.attributes.position.array[3] - dis_from_p*Math.cos(a_angp);
                            intersection_y = linestr[j].geometry.attributes.position.array[4] - dis_from_p*Math.sin(a_angp);

                            ip_x[i + n_b].push(intersection_x)
                            ip_y[i + n_b].push(intersection_y)
                            //debugger
                            a_from = new THREE.Vector3(intersection_x, intersection_y, 0);
                            a_to = new THREE.Vector3(a_from.x - 0.7*Math.cos(a_angp), a_from.y - 0.7*Math.sin(a_angp), 0)

                            arrow_from[i + n_b].push(a_from)
                            arrow_to[i + n_b].push(a_to)
                        }
                        else if (stringdata[j + 1]["first obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["first obj"] - 1) == i) {
                            intersection_x = linestr[j].geometry.attributes.position.array[0] - dis_from_p*Math.cos(a_angp);
                            intersection_y = linestr[j].geometry.attributes.position.array[1] - dis_from_p*Math.sin(a_angp);

                            ip_x[i + n_b].push(intersection_x)
                            ip_y[i + n_b].push(intersection_y)
                            //debugger
                            a_from = new THREE.Vector3(intersection_x, intersection_y, 0);
                            a_to = new THREE.Vector3(a_from.x - 0.7*Math.cos(a_angp), a_from.y - 0.7*Math.sin(a_angp), 0)

                            arrow_from[i + n_b].push(a_from)
                            arrow_to[i + n_b].push(a_to)
                        }
                    }
                    
                }



                // intercept = linestr[j].geometry.attributes.position.array[1] - slope * linestr[j].geometry.attributes.position.array[0]
                // centre_x = meshk[i].position.x
                // centre_y = meshk[i].position.y
                // radius = spherefbd[i].geometry.parameters.radius

                // alpha = slope * slope + 1
                // beta = (-2 * centre_x ) + ( -2 * slope * centre_y ) + 2* slope * intercept
                // gamma = Math.pow(centre_x,2) + Math.pow( centre_y,2) + Math.pow( intercept,2) - Math.pow( radius,2) - ( 2* intercept* centre_y)

                // discriminant = Math.sqrt(Math.pow(beta,2) - 4* alpha * gamma  )
                // x1 = (- beta + discriminant )/ ( 2* alpha )
                // x2 = (- beta - discriminant )/ ( 2* alpha )

                // y1 = slope * x1 + intercept
                // y2 = slope * x2 + intercept

                // endpt1[0] = linestr[j].geometry.attributes.position.array[0]
                // endpt1[1] = linestr[j].geometry.attributes.position.array[1]

                // endpt2[0] = linestr[j].geometry.attributes.position.array[3]
                // endpt2[1] = linestr[j].geometry.attributes.position.array[4]

                // var dis1_pt1 = Math.sqrt( Math.pow(x1-endpt1[0], 2) + Math.pow(y1-endpt1[1], 2)  )
                // var dis2_pt1 = Math.sqrt( Math.pow(x1-endpt2[0], 2) + Math.pow(y1-endpt2[1], 2)  )

                // var dis1_pt2 = Math.sqrt( Math.pow(x2-endpt1[0], 2) + Math.pow(y2-endpt1[1], 2)  )
                // var dis2_pt2 = Math.sqrt( Math.pow(x2-endpt2[0], 2) + Math.pow(y2-endpt2[1], 2)  )

                // var dis_line = Math.sqrt( Math.pow(endpt1[0]-endpt2[0], 2) + Math.pow( endpt1[1] -endpt2[1], 2)  )

                // if( (dis1_pt1 < dis_line) &&  (dis2_pt1 < dis_line) )
                // {
                //     realpts_x[i][j] = x1
                //     realpts_y[i][j] = y1
                // }
                // else
                // {
                //     realpts_x[i][j] = x2
                //     realpts_y[i][j] = y2
                // }
                // if( realpts_x[i][j] < 10000)
                // {
                // console.log( realpts_x[i][j])
                // }

            }
        }


        //the following part also has some things added by mangalik
        //debugger
        var chotasphere = []
        var mg_cone
        var mg_points
        var mg_material = new THREE.MeshBasicMaterial({color: 'white'})

        var cs_count = 0;
        for (i = 1; i < n_b + 1; i++) {
            //debugger
            //console.log(blockdata[i])
            mg_cone = new THREE.Mesh(geometryc, materialx)

            var mg_length_1 = blockdata[i].size[0]/13 // length of mg
            //var mg_cone_shift = 0.11601* Math.pow(blockdata[i].size[0], 0.46)/ Math.pow(15, 0.46)
            //camera_shift = 0//-(meshk[i - 1].position.x - 1.5) *0.11
            var camera_shift_y = 0//-(meshk[i - 1].position.y - 1.5)*0.5

            var mg_shift_checker = 0

            for (j = 0; j < ip_x[i - 1].length; j++) {
                
                if (block_angle[i - 1] == 0) {
                    if (-ip_y[i - 1][j] + meshk[i - 1].position.y > 0.1)
                        mg_shift_checker = 1;
                }

                const materialch = new THREE.MeshBasicMaterial()
                materialch.color = new THREE.Color(0xffffff)
                //materialfbd.transparent = true
                //materialfbd.opacity = 0.8
                chotasphere[cs_count] = new THREE.Mesh(
                    new THREE.SphereGeometry(0.1, 16, 16),
                    materialch
                )

                chotasphere[cs_count].position.x = ip_x[i - 1][j];
                chotasphere[cs_count].position.y = ip_y[i - 1][j];

                arrow_direction = arrow_to[i - 1][j].clone().sub(arrow_from[i - 1][j]);
                arrow_length = arrow_direction.length();
                arrowHelper[cs_count] = new THREE.ArrowHelper(arrow_direction.normalize(), arrow_from[i - 1][j], arrow_length, 0xffffff);
                cone[cs_count] = new THREE.Mesh(geometryc, materialc);


                cone[cs_count].position.x = arrow_to[i - 1][j].x; //changed from ip to arrow_to 
                cone[cs_count].position.y = arrow_to[i - 1][j].y;//ip_y[i-1][j] + 0.5;

                //added conditions for x-direction
                if (block_angle[i - 1] == 0) {
                    if (-arrow_to[i - 1][j].y + arrow_from[i - 1][j].y > 0.1) {
                        cone[cs_count].rotation.z = Math.PI
                    }
                    else if (-arrow_to[i - 1][j].x + arrow_from[i - 1][j].x > 0.1) {
                        cone[cs_count].rotation.z = Math.PI/2
                    }
                    else if (arrow_to[i - 1][j].x - arrow_from[i - 1][j].x > 0.1) {
                        cone[cs_count].rotation.z = -Math.PI/2
                    }
                }
                else {
                    cone[cs_count].rotation.z = block_angle[i - 1] - Math.PI/2
                }

                if (step == "fbd" && substep == i && (subsubstep == -100 || subsubstep == j + 1 + block_normals[i - 1])) {
                    scene.add(chotasphere[cs_count]);
                    /*if (subsubstep != -100) {
                        //audio = new Audio(fbdi_audio[i - 1])
                        // audio.play();
                        let player = document.getElementById('radio');
                        player.pause()
                        player.src = fbdintersection_bq;
                        player.play()

                    }
                    if (subsubstep == -100) {
                        //audio = new Audio(fbdi_audio[i - 1])
                        // audio.play();
                        let player = document.getElementById('radio');
                        player.pause()
                        player.src = fbdi_audio[i - 1];
                        player.play()
                        if (answerClicked > 0 && iscorrect == 1) {

                            let player = document.getElementById('radio');
                            player.pause()
                            player.src = fbdi_audio_after[i - 1];
                            player.play()
                        }
                    }*/

                }

                if (step == "fbd" && substep == i && (subsubstep > j + 1 + block_normals[i - 1] || subsubstep == 100)) {
                    
                    scene.add(chotasphere[cs_count]);
                    scene.add(arrowHelper[cs_count]);
                    scene.add(cone[cs_count]);
                    
                    /*if (subsubstep == 100) {
                        //audio = new Audio(fbdf_audio[i - 1])
                        //  audio.play();
                        let player = document.getElementById('radio');
                        player.pause()
                        player.src = fbdf_audio[i - 1];
                        player.play()
                    }*/
                }
                cs_count = cs_count + 1;
            }

            mg_points = []

            var mg_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y, 0.00073);
            var mg_to = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y - mg_length_1, 0.00073);

            if (mg_shift_checker == 1) {
                mg_to.x = mg_to.x + 1/6;
                mg_from.x = mg_to.x;
            }

            mg_points.push(mg_from)
            mg_points.push(mg_to)

            const mg_geometry = new THREE.BufferGeometry().setFromPoints(mg_points);

            //var mg_direction = mg_to.clone().sub(mg_from);
            //var mg_length = mg_direction.length();
            //var mg_arrow_direction = arrow_to[meshk[i - 1].position.x][meshk[i - 1].position.y - 1].clone().sub(arrow_from[meshk[i - 1].position.x][meshk[i - 1].position.y]);
            //var mg_arrow_length = mg_direction.length();
            //var mg_arrowHelper = new THREE.ArrowHelper(mg_direction.normalize(), mg_from, mg_length, 0xffffff);//0x0A9EFF

            var mg_line = new THREE.Line(mg_geometry, mg_material);

            mg_cone.position.x = mg_to.x; //changed from meshk[i - 1].position.x;
            mg_cone.position.y = mg_to.y //+ mg_cone_shift; //changed from meshk[i - 1].position.y - 1.43;
            mg_cone.position.z = 0
            // if (arrow_to[i - 1][j].y < arrow_from[i - 1][j].y) {
            mg_cone.rotation.z = Math.PI
            //}


            if (step == "fbd" && substep == i && (subsubstep > j + 1 + block_normals[i - 1] || subsubstep == 100)) {                 
                scene.add(mg_line)
                scene.add(mg_cone)
            }

        }

        //the following part has a lot of changes made by mangalik
        const materialcs_cu = new THREE.MeshBasicMaterial()
        materialcs_cu.color = new THREE.Color(0xffffff)
        var cs_cu = new Array(2)
        var cs_cu_more = new Array(2)
        // constraint understanding code begins
        if (step == "constraint Understanding") {
            var velocity_cu = [subsubstep[0] / 10, subsubstep[1] / 10]
            /*if (substep == 1)
                velocity_cu = [0, subsubstep[1]/10]
            if (substep == 2)
                velocity_cu = [0, -subsubstep[1]/10]
            if (substep == 3)
                velocity_cu = [subsubstep[0]/10, 0]
            if (substep == 4)
                velocity_cu = [-subsubstep[0]/10, 0]

            if (substep >= 11 && substep <= 16)
                velocity_cu[0] = -velocity_cu[0];

            if ((substep >= 8 && substep <= 10) || (substep >= 14 && substep <= 16))
                velocity_cu[1] = -velocity_cu[1];
            */

            var velocity_cu_more = [velocity_cu[0], velocity_cu[1]]
            if (substep > 4 && substep % 3 == 2)
                velocity_cu_more = [0, velocity_cu[1]]
            else if (substep > 4 && substep % 3 == 0)
                velocity_cu_more = [velocity_cu[0], 0]
            //     var velocity_cu_more = [ subsubstep/10,0 ]    

            //if (step )

            cs_cu[0] = new THREE.Mesh(
                new THREE.SphereGeometry(0.14, 16, 16),
                materialcs_cu
            )

            cs_cu_more[0] = new THREE.Mesh(
                new THREE.SphereGeometry(0.14, 16, 16),
                materialcs_cu
            )

            cs_cu[0].position.x = -0.3
            cs_cu[0].position.y = 0

            cs_cu_more[0].position.x = -0.3
            cs_cu_more[0].position.y = -2

            scene.add(cs_cu[0])
            if (substep > 4 && substep % 3 != 1) {
                scene.add(cs_cu_more[0])
            }

            cs_cu[1] = new THREE.Mesh(
                new THREE.SphereGeometry(0.14, 16, 16),
                materialcs_cu
            )

            cs_cu_more[1] = new THREE.Mesh(
                new THREE.SphereGeometry(0.14, 16, 16),
                materialcs_cu
            )

            cs_cu[1].position.x = 4
            cs_cu[1].position.y = 0

            scene.add(cs_cu[1])

            cs_cu_more[1].position.x = 4
            cs_cu_more[1].position.y = -2

            if (substep > 4 && substep % 3 != 1) {
                scene.add(cs_cu_more[1])
            }


            var points_cu = []
            var linestr_cu
            var pt1_cu
            var pt2_cu

            var points_cu_more = []
            var linestr_cu_more
            var pt1_cu_more
            var pt2_cu_more




            pt1_cu = new THREE.Vector3(cs_cu[0].position.x, cs_cu[0].position.y, cs_cu[0].position.z)
            pt2_cu = new THREE.Vector3(cs_cu[1].position.x, cs_cu[1].position.y, cs_cu[1].position.z)
            // console.log( pt2 )
            points_cu.push(pt1_cu);
            points_cu.push(pt2_cu)
            const geometry_cu = new THREE.BufferGeometry().setFromPoints(points_cu);
            linestr_cu = new THREE.Line(geometry_cu, line_materials[2]);
            scene.add(linestr_cu)

            pt1_cu_more = new THREE.Vector3(cs_cu_more[0].position.x, cs_cu_more[0].position.y, cs_cu_more[0].position.z)
            pt2_cu_more = new THREE.Vector3(cs_cu_more[1].position.x, cs_cu_more[1].position.y, cs_cu_more[1].position.z)
            // console.log( pt2 )
            points_cu_more.push(pt1_cu_more);
            points_cu_more.push(pt2_cu_more)
            const geometry_cu_more = new THREE.BufferGeometry().setFromPoints(points_cu_more);
            linestr_cu_more = new THREE.Line(geometry_cu_more, line_materials[2]);
            if (substep > 4 && substep % 3 != 1) {
                scene.add(linestr_cu_more)
            }



            var arrow_to_cu0 = new THREE.Vector3(cs_cu[0].position.x + velocity_cu[0] / Math.abs(velocity_cu[0]), cs_cu[0].position.y - 0.3, 0)
            var arrow_from_cu0 = new THREE.Vector3(cs_cu[0].position.x, cs_cu[0].position.y - 0.3, 0)
            var arrow_direction_cu0 = arrow_to_cu0.clone().sub(arrow_from_cu0);
            var arrow_length_cu0 = arrow_direction_cu0.length();
            var arrowHelper_cu0 = new THREE.ArrowHelper(arrow_direction_cu0.normalize(), arrow_from_cu0, arrow_length_cu0, 0xffffff);
            var cone_cu0 = new THREE.Mesh(geometryc, materialx);

            cone_cu0.position.x = cs_cu[0].position.x + 0.9 * velocity_cu[0] / Math.abs(velocity_cu[0])


            cone_cu0.position.y = cs_cu[0].position.y - 0.3;
            cone_cu0.rotation.z = -Math.PI/ 2 * velocity_cu[0] / Math.abs(velocity_cu[0])



            var arrow_to_cu0_more = new THREE.Vector3(cs_cu_more[0].position.x + velocity_cu_more[0] / Math.abs(velocity_cu_more[0]), cs_cu_more[0].position.y - 0.3, 0)
            var arrow_from_cu0_more = new THREE.Vector3(cs_cu_more[0].position.x, cs_cu_more[0].position.y - 0.3, 0)
            var arrow_direction_cu0_more = arrow_to_cu0_more.clone().sub(arrow_from_cu0_more);
            var arrow_length_cu0_more = arrow_direction_cu0_more.length();
            var arrowHelper_cu0_more = new THREE.ArrowHelper(arrow_direction_cu0_more.normalize(), arrow_from_cu0_more, arrow_length_cu0_more, 0xffffff);
            var cone_cu0_more = new THREE.Mesh(geometryc, materialx);




            cone_cu0_more.position.x = cs_cu_more[0].position.x + 0.9 * + velocity_cu_more[0] / Math.abs(velocity_cu_more[0])


            cone_cu0_more.position.y = cs_cu_more[0].position.y - 0.3;
            cone_cu0_more.rotation.z = -Math.PI/ 2 * + velocity_cu_more[0] / Math.abs(velocity_cu_more[0])

            scene.add(cone_cu0)
            scene.add(arrowHelper_cu0)

            if (substep > 4 && substep % 3 != 1) {
                scene.add(cone_cu0_more)
                scene.add(arrowHelper_cu0_more)
            }

            var arrow_to_cu1 = new THREE.Vector3(cs_cu[1].position.x + velocity_cu[1] / Math.abs(velocity_cu[1]), cs_cu[1].position.y - 0.3, 0)
            var arrow_from_cu1 = new THREE.Vector3(cs_cu[1].position.x, cs_cu[1].position.y - 0.3, 0)


            var arrow_direction_cu1 = arrow_to_cu1.clone().sub(arrow_from_cu1);
            var arrow_length_cu1 = arrow_direction_cu1.length();
            var arrowHelper_cu1 = new THREE.ArrowHelper(arrow_direction_cu1.normalize(), arrow_from_cu1, arrow_length_cu1, 0xffffff);
            var cone_cu1 = new THREE.Mesh(geometryc, materialx);


            cone_cu1.position.x = cs_cu[1].position.x + 0.9 * velocity_cu[1] / Math.abs(velocity_cu[1])


            cone_cu1.position.y = cs_cu[1].position.y - 0.3;
            cone_cu1.rotation.z = -Math.PI/ 2 * velocity_cu[1] / Math.abs(velocity_cu[1])

            scene.add(cone_cu1)
            scene.add(arrowHelper_cu1)

            var arrow_to_cu1_more = new THREE.Vector3(cs_cu_more[1].position.x + velocity_cu_more[1] / Math.abs(velocity_cu_more[1]), cs_cu_more[1].position.y - 0.3, 0)
            var arrow_from_cu1_more = new THREE.Vector3(cs_cu_more[1].position.x, cs_cu_more[1].position.y - 0.3, 0)


            var arrow_direction_cu1_more = arrow_to_cu1_more.clone().sub(arrow_from_cu1_more);
            var arrow_length_cu1_more = arrow_direction_cu1_more.length();
            var arrowHelper_cu1_more = new THREE.ArrowHelper(arrow_direction_cu1_more.normalize(), arrow_from_cu1_more, arrow_length_cu1_more, 0xffffff);
            var cone_cu1_more = new THREE.Mesh(geometryc, materialx);


            cone_cu1_more.position.x = cs_cu_more[1].position.x + 0.9 * velocity_cu_more[1] / Math.abs(velocity_cu_more[1])


            cone_cu1_more.position.y = cs_cu_more[1].position.y - 0.3;
            cone_cu1_more.rotation.z = -Math.PI/ 2 * velocity_cu_more[1] / Math.abs(velocity_cu_more[1])

            if (substep > 4 && substep % 3 != 1){
                scene.add(cone_cu1_more)
                scene.add(arrowHelper_cu1_more)
            }



        }


        //the following part has a lot of changes made by mangalik
        // constraint understanding code ends
        if (step == "constraint") {
            var cs_cons = []

            var cone_constraint = new Array(2 * n_s);
            var line_constraint = new Array(n_s)
            var geometry_cons;
            var cs_count_cons = 0;

            for (i = 1; i < n_s + 1; i++) {
                for (j = 0; j < 2; j++) {

                    const materialch = new THREE.MeshBasicMaterial()
                    materialch.color = new THREE.Color(0xffffff)
                    //materialfbd.transparent = true
                    //materialfbd.opacity = 0.8
                    cs_cons[cs_count_cons] = new THREE.Mesh(
                        new THREE.SphereGeometry(0.1, 16, 16),
                        materialch
                    )

                    cs_cons[cs_count_cons].position.x = endpos[i - 1][j].x;
                    cs_cons[cs_count_cons].position.y = endpos[i - 1][j].y;
                
                    if (step == "constraint" && substep == i && (subsubstep == j + 1 || subsubstep == 100)) {
                        scene.add(cs_cons[cs_count_cons]);
                    }

                    // debugger
                    cone_constraint[cs_count_cons] = new THREE.Mesh(geometryc, materialc);


                    cone_constraint[cs_count_cons].position.x = endpos[i - 1][j].x;
                    cone_constraint[cs_count_cons].position.y = endpos[i - 1][j].y;

                    if (stringdata[i]["str no"] == substep && subsubstep == 0 && step == "constraint") {
                        scene.add(cone_constraint[cs_count_cons]);

                    
                        if (j == 1) {
                            /*
                            
                            if (-endpos[i - 1][j].y + endpos[i - 1][j - 1].y > 0.1) {
                                cone_constraint[cs_count_cons].rotation.z = 3.14
                            }
                            else if (endpos[i - 1][j].y - endpos[i - 1][j - 1].y > 0.1) {
                                cone_constraint[cs_count_cons - 1].rotation.z = 3.14
                            }
                            else if (-endpos[i - 1][j].x + endpos[i - 1][j - 1].x > 0.1) {
                                cone_constraint[cs_count_cons].rotation.z = 1.57
                                cone_constraint[cs_count_cons - 1].rotation.z = -1.57
                            }
                            else if (endpos[i - 1][j].x - endpos[i - 1][j - 1].x > 0.1) {
                                cone_constraint[cs_count_cons].rotation.z = -1.57
                                cone_constraint[cs_count_cons - 1].rotation.z = 1.57
                            }*/

                            //var sl = (endpos[i - 1][j].y - endpos[i - 1][j - 1])/(endpos[i - 1][j].x - endpos[i - 1][j - 1].x);

                            var ang_sl = Math.atan((endpos[i - 1][j].y - endpos[i - 1][j - 1].y)/(endpos[i - 1][j].x - endpos[i - 1][j - 1].x));

                            if (Math.abs(ang_sl - Math.PI / 2) < 0.01 || Math.abs(ang_sl + Math.PI/2) < 0.01) {
                                
                                if (endpos[i - 1][j - 1].y < endpos[i - 1][j].y) {
                                    cone_constraint[cs_count_cons - 1].rotation.z = Math.PI
                                    cone_constraint[cs_count_cons].rotation.z = 0
                                }
                                else {
                                    cone_constraint[cs_count_cons - 1].rotation.z = 0
                                    cone_constraint[cs_count_cons].rotation.z = Math.PI
                                }
                            }
                            else if (Math.abs(ang_sl) < 0.01) {
                                //debugger
                                if (endpos[i - 1][j - 1].x < endpos[i - 1][j].x) {
                                    cone_constraint[cs_count_cons - 1].rotation.z = Math.PI/2
                                    cone_constraint[cs_count_cons].rotation.z = -Math.PI/2
                                }
                                else {
                                    cone_constraint[cs_count_cons - 1].rotation.z = -Math.PI/2
                                    cone_constraint[cs_count_cons].rotation.z = Math.PI/2
                                }
                            }
                            else {
                                //debugger
                                if (ang_sl > 0) {
                                    if (endpos[i - 1][j - 1].y < endpos[i - 1][j].y) {
                                        cone_constraint[cs_count_cons].rotation.z = 3*Math.PI/2 - ang_sl
                                        cone_constraint[cs_count_cons - 1].rotation.z = Math.PI/2 - ang_sl
                                    }
                                    else {
                                        cone_constraint[cs_count_cons].rotation.z = 3*Math.PI/2 - ang_sl
                                        cone_constraint[cs_count_cons - 1].rotation.z = Math.PI/2 - ang_sl
                                    }
                                }
                                else {
                                    if (endpos[i - 1][j - 1].y < endpos[i - 1][j].y) {
                                        cone_constraint[cs_count_cons].rotation.z = ang_sl + Math.PI
                                        cone_constraint[cs_count_cons - 1].rotation.z = ang_sl
                                    }
                                    else {
                                        cone_constraint[cs_count_cons].rotation.z = ang_sl
                                        cone_constraint[cs_count_cons - 1].rotation.z = Math.PI + ang_sl
                                    }
                                }
                            }
                        }
                        /*
                        var ang = endpos[i - 1][2]
                        if (ang == 0)
                            ang = Math.PI
                        if (j == 1) 
                            ang = ang + Math.PI;
                        cone_constraint[cs_count_cons].rotation.z = ang*/
                    }

                    cs_count_cons = cs_count_cons + 1;

                }

                geometry_cons = new THREE.BufferGeometry().setFromPoints(endpos[i - 1]);





                line_constraint[i - 1] = new THREE.Line(geometry_cons, material6);
                if (stringdata[i]["str no"] == substep && subsubstep == 0 && step == "constraint") {
                    scene.add(line_constraint[i - 1])
                }


            }
        }
        
        //the following part might have some changes by mangalik
        for (i = 1; i < n_p + 1; i++) {
            for (j = 0; j < ip_x[i + n_b - 1].length; j++) {

                const materialch = new THREE.MeshBasicMaterial()
                materialch.color = new THREE.Color(0xffffff)
                //materialfbd.transparent = true
                //materialfbd.opacity = 0.8
                chotasphere[cs_count] = new THREE.Mesh(
                    new THREE.SphereGeometry(0.1, 16, 16),
                    materialch
                )

                chotasphere[cs_count].position.x = ip_x[i + n_b - 1][j];
                chotasphere[cs_count].position.y = ip_y[i + n_b - 1][j];

                arrow_direction = arrow_to[i + n_b - 1][j].clone().sub(arrow_from[i + n_b - 1][j]);
                arrow_length = arrow_direction.length();
                arrowHelper[cs_count] = new THREE.ArrowHelper(arrow_direction.normalize(), arrow_from[i + n_b - 1][j], arrow_length, 0xffffff);
                cone[cs_count] = new THREE.Mesh(geometryc, materialc);


                cone[cs_count].position.x = arrow_to[i - 1 + n_b][j].x;
                //cone[cs_count].position.y = ip_y[i-1+n_b][j] - 0.5;  

                cone[cs_count].position.y = arrow_to[i + n_b - 1][j].y;//ip_y[i-1][j] + 0.5;
                if (alld_question_no <= 33 || bigblockdata.mass == 0 || bigblockdata.type == "tp") {
                    if (-arrow_to[i + n_b - 1][j].y + arrow_from[i + n_b - 1][j].y > 0.1) {
                        cone[cs_count].rotation.z = Math.PI
                    }
                    if (-arrow_to[i + n_b - 1][j].x + arrow_from[i + n_b - 1][j] > 0.1) {
                        cone[cs_count].rotation.z = Math.PI/2
                    }
                    if (arrow_to[i + n_b - 1][j].x - arrow_from[i + n_b - 1][j].x > 0.1) {
                        cone[cs_count].rotation.z = -Math.PI/2
                    }
                }
                else {
                    cone[cs_count].rotation.z = Math.PI/2 + a_ang_list[i + n_b - 1]
                }
                //cone[cs_count].rotation.z = 3.14  

                if (step == "fbd" && substep == i + n_b && (subsubstep == -100 || subsubstep == j + 1)) {
                    scene.add(chotasphere[cs_count]);
                    /*if (subsubstep != -100) {
                        //audio = new Audio(fbdi_audio[i - 1])
                        // audio.play();
                        let player = document.getElementById('radio');
                        player.pause()
                        player.src = fbdintersection_bq;
                        player.play()

                    }
                    if (subsubstep == -100) {
                        //audio = new Audio(fbdi_audio[i - 1])
                        // audio.play();
                        let player = document.getElementById('radio');
                        player.pause()
                        player.src = fbdi_audio[i + n_b - 1];
                        player.play()
                        if (answerClicked > 0 && iscorrect == 1) {

                            let player = document.getElementById('radio');
                            player.pause()
                            player.src = fbdi_audio_after[i + n_b - 1];
                            player.play()
                        }
                    }*/
                }





                if (step == "fbd" && substep == i + n_b && (subsubstep > j + 1 || subsubstep == 100)) {
                    scene.add(chotasphere[cs_count]);
                    scene.add(arrowHelper[cs_count]);
                    scene.add(cone[cs_count]);

                    /*if (subsubstep == 100) {
                        //audio = new Audio(fbdi_audio[i - 1])
                        // audio.play();
                        let player = document.getElementById('radio');
                        player.pause()
                        player.src = fbdf_audio[i + n_b - 1];
                        player.play()
                    }*/

                }
                cs_count = cs_count + 1;




            }


        }



        //the following part has a lot of changes made by mangalik
        //debugger
        //console.log(realpts)
        const clock = new THREE.Clock()
        var animation_on = 1;
        var line_pos;
        var line_size;
        var Time_tillnow = 0;
        var time_main;
        //debugger
        const tick = () => {
            // Update objects


            //console.log(line.geometry.attributes.position.array)

            //points.push( new THREE.Vector3( 1, 0, 0 ) );
            const elapsedTime = clock.getElapsedTime()

            //line.geometry.attributes.position.needsUpdate = true;
            //line.geometry.attributes.position.array[4] = elapsedTime*0.5;

            //line1.geometry.attributes.position.needsUpdate = true;
            //line1.geometry.attributes.position.array[4] = -elapsedTime*0.5;
            //line.geometry.attributes.position.array[4] = elapsedTime*0.5
            //console.log(line.geometry.attributes.position.array)
            //mesh.position.y = elapsedTime*0.5
            //mesh1.position.y =- elapsedTime*0.5

            // line ka size agar zero approach kar raha to start again wala code hai - abhi ek hi line ke liye likha hai
            // need to do for all lines

            if (step == "motion" || step.includes("constraint")) {
                for (i = 1; i < n_s + 1; i++) {
                    
                    line_pos = linestr[i - 1].geometry.attributes.position.array;
                    line_size = ((line_pos[0] - line_pos[3]) ** 2 + (line_pos[1] - line_pos[4]) ** 2 + (line_pos[2] - line_pos[5]) ** 2) ** 0.5;

                    if (line_size < 1) {
                        animation_on = 0;
                    }
                }

                for (i = 1; i < n_b + 1; i++) {
                    if (meshk[i - 1].position.x > camera.position.x + 100 || meshk[i - 1].position.x < camera.position.x - 100) {
                        animation_on = 0;
                        break;
                    }
                    if (meshk[i - 1].position.y > camera.position.y + 100 || meshk[i - 1].position.y < camera.position.y - 100) {
                        animation_on = 0;
                        break;
                    }
                    if (block_angle[i - 1] != 0) {
                        /*if (meshk[i - 1].position.x > x_tr || meshk[i - 1].position.x < x_tr) {
                            animation_on = 0;
                            break;
                        }*/
                        if (meshk[i - 1].position.y < y_range) {
                            animation_on = 0;
                            break;
                        }
                    }
                }

                if (animation_on == 0) {
                    for (i = 1; i < n_b + 1; i++) {

                        meshk[i - 1].position.x = block_ini_pos_x[i - 1];
                        meshk[i - 1].position.y = block_ini_pos_y[i - 1];

                        if (blockdata[i].forces.x[0] != 0) {
                            force_line_x[i - 1].position.x = force_line_x_ini_pos_x[i - 1];
                            force_line_x[i - 1].position.y = force_line_x_ini_pos_y[i - 1];

                            force_cone_x[i - 1].position.x = force_cone_x_ini_pos_x[i - 1];
                            force_cone_x[i - 1].position.y = force_cone_x_ini_pos_y[i - 1];
                        }
                        if (blockdata[i].forces.y[0] != 0) {
                            force_line_y[i - 1].position.x = force_line_y_ini_pos_x[i - 1];
                            force_line_y[i - 1].position.y = force_line_y_ini_pos_y[i - 1];

                            force_cone_y[i - 1].position.x = force_cone_y_ini_pos_x[i - 1];
                            force_cone_y[i - 1].position.y = force_cone_y_ini_pos_y[i - 1];
                        }

                        Time_tillnow = elapsedTime


                    }
                    for (i = 1; i < n_p + 1; i++) {

                        meshp[i - 1].position.x = pulley_ini_pos_x[i - 1];
                        meshp[i - 1].position.y = pulley_ini_pos_y[i - 1];

                        Time_tillnow = elapsedTime


                    }

                    /*
                    if (bigblockdata.mass != 0) {
                        meshbb.position.x = bb_ini_pos_x;
                        meshbb.position.y = bb_ini_pos_y;
                    }
                    */

                    animation_on = 1;
                }

                for (i = 1; i < n_b + 1; i++) {

                    time_main = elapsedTime - Time_tillnow;

                    if (step == "motion" || (step == "constraint" && subsubstep == -1)) {
                        meshk[i - 1].position.x = meshk[i - 1].position.x + 0.5 * (blockdata[i].acceleration[0]) * time_main * time_main / 5000;
                        meshk[i - 1].position.y = meshk[i - 1].position.y + 0.5 * (blockdata[i].acceleration[1]) * time_main * time_main / 5000;

                        //14th June starts
                        if (blockdata[i].forces.x[0] != 0) {
                            force_line_x[i - 1].position.x = force_line_x[i - 1].position.x + 0.5 * (blockdata[i].acceleration[0]) * time_main * time_main / 5000;
                            force_line_x[i - 1].position.y = force_line_x[i - 1].position.y + 0.5 * (blockdata[i].acceleration[1]) * time_main * time_main / 5000;

                            force_cone_x[i - 1].position.x = force_cone_x[i - 1].position.x + 0.5 * (blockdata[i].acceleration[0]) * time_main * time_main / 5000;
                            force_cone_x[i - 1].position.y = force_cone_x[i - 1].position.y + 0.5 * (blockdata[i].acceleration[1]) * time_main * time_main / 5000;
                        }
                        if (blockdata[i].forces.y[0] != 0) {
                            force_line_y[i - 1].position.x = force_line_y[i - 1].position.x + 0.5 * (blockdata[i].acceleration[0]) * time_main * time_main / 5000;
                            force_line_y[i - 1].position.y = force_line_y[i - 1].position.y + 0.5 * (blockdata[i].acceleration[1]) * time_main * time_main / 5000;

                            force_cone_y[i - 1].position.x = force_cone_y[i - 1].position.x + 0.5 * (blockdata[i].acceleration[0]) * time_main * time_main / 5000;
                            force_cone_y[i - 1].position.y = force_cone_y[i - 1].position.y + 0.5 * (blockdata[i].acceleration[1]) * time_main * time_main / 5000; 
                        }
                        //14th June ends
                    }

                    if (step == "constraint" && (stringdata[substep]["first obj type"] == "<class 'blocksclass.blocks'>" || stringdata[substep]["second obj type"] == "<class 'blocksclass.blocks'>")) {
                        if (stringdata[substep]["first obj type"] == "<class 'blocksclass.blocks'>") {
                            if (stringdata[substep]["first obj"] == i && (subsubstep == 1 || subsubstep == 100)) {
                                meshk[i - 1].position.x = meshk[i - 1].position.x + 0.5 * (blockdata[i].acceleration[0]) * time_main * time_main / 5000;
                                meshk[i - 1].position.y = meshk[i - 1].position.y + 0.5 * (blockdata[i].acceleration[1]) * time_main * time_main / 5000;
                            }
                        }

                        if (stringdata[substep]["second obj type"] == "<class 'blocksclass.blocks'>") {
                            if (stringdata[substep]["second obj"] == i && (subsubstep == 2 || subsubstep == 100)) {
                                meshk[i - 1].position.x = meshk[i - 1].position.x + 0.5 * (blockdata[i].acceleration[0]) * time_main * time_main / 5000;
                                meshk[i - 1].position.y = meshk[i - 1].position.y + 0.5 * (blockdata[i].acceleration[1]) * time_main * time_main / 5000;
                            }
                        }
                    }
                }

                // constraint understanding code starts
                if (step == "constraint Understanding") {
                    var points_cu
                    cs_cu[0].position.x = cs_cu[0].position.x + velocity_cu[0] * (elapsedTime - Time_tillnow) / 200
                    cs_cu[1].position.x = cs_cu[1].position.x + velocity_cu[1] * (elapsedTime - Time_tillnow) / 200

                    linestr_cu.geometry.attributes.position.needsUpdate = true;
                    linestr_cu.geometry.attributes.position.array[0] = cs_cu[0].position.x
                    linestr_cu.geometry.attributes.position.array[3] = cs_cu[1].position.x
                    var line_pos_cu
                    var line_size_cu
                    line_pos_cu = linestr_cu.geometry.attributes.position.array;
                    line_size_cu = line_pos_cu[3] - line_pos_cu[0];

                    

                    //lower line
                    cs_cu_more[0].position.x = cs_cu_more[0].position.x + velocity_cu_more[0] * (elapsedTime - Time_tillnow) / 200
                    cs_cu_more[1].position.x = cs_cu_more[1].position.x + velocity_cu_more[1] * (elapsedTime - Time_tillnow) / 200

                    linestr_cu_more.geometry.attributes.position.needsUpdate = true;    
                    linestr_cu_more.geometry.attributes.position.array[0] = cs_cu_more[0].position.x
                    linestr_cu_more.geometry.attributes.position.array[3] = cs_cu_more[1].position.x
                    var line_pos_cu_more
                    var line_size_cu_more
                    line_pos_cu_more = linestr_cu_more.geometry.attributes.position.array;
                    line_size_cu_more = line_pos_cu_more[3] - line_pos_cu_more[0];

                    if (line_size_cu < 0.5 || line_size_cu > 10 || cs_cu[1].position.x > 9) {
                        cs_cu[0].position.x = -0.3
                        cs_cu[1].position.x = 4
                        Time_tillnow = elapsedTime
                    }
                    if (line_size_cu_more < 0.5 || line_size_cu_more > 10 || cs_cu_more[1].position.x > 9) {
                        cs_cu_more[0].position.x = -0.3
                        cs_cu_more[1].position.x = 4
                    Time_tillnow = elapsedTime
                    }
                }

                // constraint understanding code ends

                for (i = 1; i < n_p + 1; i++) {

                    time_main = elapsedTime - Time_tillnow;

                    if (step == "motion" || (step == "constraint" && subsubstep == -1)) {
                        meshp[i - 1].position.x = meshp[i - 1].position.x + 0.5 * (pulleydata[i].acceleration[0]) * time_main * time_main / 5000;
                        meshp[i - 1].position.y = meshp[i - 1].position.y + 0.5 * (pulleydata[i].acceleration[1]) * time_main * time_main / 5000;
                    }

                    if (step == "constraint" && (stringdata[substep]["first obj type"] == "<class 'blocksclass.pulleys'>" || stringdata[substep]["second obj type"] == "<class 'blocksclass.pulleys'>")) {
                        if (stringdata[substep]["first obj type"] == "<class 'blocksclass.pulleys'>") {
                            if (stringdata[substep]["first obj"] == i && (subsubstep == 1 || subsubstep == 100)) {
                                meshp[i - 1].position.x = meshp[i - 1].position.x + 0.5 * (pulleydata[i].acceleration[0]) * time_main * time_main / 5000;
                                meshp[i - 1].position.y = meshp[i - 1].position.y + 0.5 * (pulleydata[i].acceleration[1]) * time_main * time_main / 5000;
                            }
                        }

                        if (stringdata[substep]["second obj type"] == "<class 'blocksclass.pulleys'>") {
                            if (stringdata[substep]["second obj"] == i && (subsubstep == 2 || subsubstep == 100)) {
                                meshp[i - 1].position.x = meshp[i - 1].position.x + 0.5 * (pulleydata[i].acceleration[0]) * time_main * time_main / 5000;
                                meshp[i - 1].position.y = meshp[i - 1].position.y + 0.5 * (pulleydata[i].acceleration[1]) * time_main * time_main / 5000;
                            }
                        }


                    }



                }

                /*
                if (bigblockdata.mass != 0) {
                    time_main = elapsedTime - Time_tillnow;
                    if (step == "motion" || (step == "constraint" && subsubstep == -1)) {
                        meshbb.position.x = meshbb.position.x + 0.5 * (bigblockdata.acceleration[0]) * time_main * time_main / 5000;
                        meshbb.position.y = meshbb.position.y + 0.5 * (bigblockdata.acceleration[1]) * time_main * time_main / 5000;
                    }
                }
                */

                cs_count_cons = 0
                for (i = 1; i < n_s + 1; i++) {

                    strpart = stringdata[i];

                    //if( line_size < 0 )
                    //console.log( strpart["first obj type"])
                    if (strpart["first obj type"] == "<class 'blocksclass.blocks'>" && strpart["second obj type"] == "<class 'blocksclass.pulleys'>") {
                        linestr[i - 1].geometry.attributes.position.needsUpdate = true;
                        linestr[i - 1].geometry.attributes.position.array[1] = meshk[stringdata[i]["first obj"] - 1].position.y
                        linestr[i - 1].geometry.attributes.position.array[0] = meshk[stringdata[i]["first obj"] - 1].position.x
                        
                        //added conditions for line change in both directions
                        if (Math.abs(strpart["angle"] - Math.PI) < 0.01 || Math.abs(strpart["angle"] < 0.01))
                            linestr[i - 1].geometry.attributes.position.array[4] = meshp[stringdata[i]["second obj"] - 1].position.y
                        if (Math.abs(strpart["angle"] - Math.PI/2) < 0.01 || Math.abs(strpart["angle"] + Math.PI/2) < 0.01)
                            linestr[i - 1].geometry.attributes.position.array[3] = meshp[stringdata[i]["second obj"] - 1].position.x
                        //linestr[i - 1].geometry.attributes.position.array[4] = meshp[stringdata[i]["second obj"] - 1].position.y

                        if (step == "constraint"){
                        cs_cons[cs_count_cons].position.x = linestr[i - 1].geometry.attributes.position.array[0] + Math.sin(strpart.angle)*blockdata[stringdata[i]["first obj"]].size[0]/30
                        cs_cons[cs_count_cons].position.y = linestr[i - 1].geometry.attributes.position.array[1] + Math.cos(strpart.angle)*blockdata[stringdata[i]["first obj"]].size[0]/30;

                        cs_count_cons = cs_count_cons + 2
                        }
                    }

                    if (strpart["second obj type"] == "<class 'blocksclass.blocks'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                        linestr[i - 1].geometry.attributes.position.needsUpdate = true;
                        linestr[i - 1].geometry.attributes.position.array[3] = meshk[stringdata[i]["second obj"] - 1].position.x
                        linestr[i - 1].geometry.attributes.position.array[4] = meshk[stringdata[i]["second obj"] - 1].position.y
                        
                        angle = Math.PI - stringdata[i].angle
                        firstobj = meshp[stringdata[i]["first obj"] - 1]
                        //console.log( firstobj)
                        if (strpart["toc"] == "tm") {
                            pt1 = new THREE.Vector3(firstobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(angle), firstobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(angle), firstobj.position.z)
                            
                        }
                        else if (strpart["toc"] == "zm") {
                            pt1 = new THREE.Vector3(firstobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(Math.PI - angle), firstobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(Math.PI - angle), firstobj.position.z)
                        }
                        else {
                            pt1 = new THREE.Vector3(firstobj.position.x, firstobj.position.y, firstobj.position.z)
                        }
                        linestr[i - 1].geometry.attributes.position.array[0] = pt1.x
                        linestr[i - 1].geometry.attributes.position.array[1] = pt1.y
                        /*
                        if (Math.abs(strpart["angle"] - Math.PI) < 0.01 || Math.abs(strpart["angle"] < 0.01))
                            linestr[i - 1].geometry.attributes.position.array[1] = meshp[stringdata[i]["first obj"] - 1].position.y
                        if (Math.abs(strpart["angle"] - Math.PI/2) < 0.01 || Math.abs(strpart["angle"] + Math.PI/2) < 0.01)
                            linestr[i - 1].geometry.attributes.position.array[0] = meshp[stringdata[i]["first obj"] - 1].position.x
                            */
                        //linestr[i - 1].geometry.attributes.position.array[1] = meshp[stringdata[i]["first obj"] - 1].position.y
                        if (step == "constraint"){
                        cs_cons[cs_count_cons].position.x = linestr[i - 1].geometry.attributes.position.array[0]
                        cs_cons[cs_count_cons].position.y = linestr[i - 1].geometry.attributes.position.array[1];

                        cs_cons[cs_count_cons + 1].position.x = linestr[i - 1].geometry.attributes.position.array[3] + Math.sin(Math.PI + strpart.angle)*blockdata[strpart["first obj"]].size[0]/30; //16th June
                        cs_cons[cs_count_cons + 1].position.y = linestr[i - 1].geometry.attributes.position.array[4] + Math.cos(Math.PI + strpart.angle)*blockdata[strpart["first obj"]].size[0]/30; //16th June

                        cs_count_cons = cs_count_cons + 2
                        }
                    }

                    if (strpart["second obj type"] == "<class 'blocksclass.blocks'>" && strpart["first obj type"] == "<class 'blocksclass.blocks'>") {
                        linestr[i - 1].geometry.attributes.position.needsUpdate = true;
                        linestr[i - 1].geometry.attributes.position.array[1] = meshk[stringdata[i]["first obj"] - 1].position.y
                        linestr[i - 1].geometry.attributes.position.array[4] = meshk[stringdata[i]["second obj"] - 1].position.y

                        linestr[i - 1].geometry.attributes.position.array[0] = meshk[stringdata[i]["first obj"] - 1].position.x //new
                        linestr[i - 1].geometry.attributes.position.array[3] = meshk[stringdata[i]["second obj"] - 1].position.x //new

                        var pt_x_1 = linestr[i - 1].geometry.attributes.position.array[0]
                        var pt_y_1 = linestr[i - 1].geometry.attributes.position.array[1]
                        var pt_x_2 = linestr[i - 1].geometry.attributes.position.array[3]
                        var pt_y_2 = linestr[i - 1].geometry.attributes.position.array[4]

                        if (step == "constraint"){
                            angle = Math.PI/2 - stringdata[i].angle
                            cs_cons[cs_count_cons].position.y = linestr[i - 1].geometry.attributes.position.array[1] + Math.sin(angle)*blockdata[stringdata[i]["first obj"]].size[0] / 28;
                            cs_cons[cs_count_cons + 1].position.y = linestr[i - 1].geometry.attributes.position.array[4] - Math.sin(angle)*blockdata[stringdata[i]["second obj"]].size[0] / 28;
                            cs_cons[cs_count_cons].position.x = linestr[i - 1].geometry.attributes.position.array[0] + Math.cos(angle)*blockdata[stringdata[i]["first obj"]].size[0] / 28;
                            cs_cons[cs_count_cons + 1].position.x = linestr[i - 1].geometry.attributes.position.array[3] - Math.cos(angle)*blockdata[stringdata[i]["second obj"]].size[0] / 28;
                            /*if (pt_y_1 < pt_y_2){
                                cs_cons[cs_count_cons].position.y = linestr[i - 1].geometry.attributes.position.array[1] + 0.6;
                                cs_cons[cs_count_cons + 1].position.y = linestr[i - 1].geometry.attributes.position.array[4] - 0.6;
                            }
                            if (pt_y_1 > pt_y_2){
                                cs_cons[cs_count_cons].position.y = linestr[i - 1].geometry.attributes.position.array[1] - 0.6;
                                cs_cons[cs_count_cons + 1].position.y = linestr[i - 1].geometry.attributes.position.array[4] + 0.6;
                            }
                            if (pt_x_1 < pt_x_2){
                                cs_cons[cs_count_cons].position.x = linestr[i - 1].geometry.attributes.position.array[0] + 0.6;
                                cs_cons[cs_count_cons + 1].position.x = linestr[i - 1].geometry.attributes.position.array[3] - 0.6;
                            }
                            if (pt_x_1 > pt_x_2){
                                cs_cons[cs_count_cons].position.x = linestr[i - 1].geometry.attributes.position.array[0] - 0.6;
                                cs_cons[cs_count_cons + 1].position.x = linestr[i - 1].geometry.attributes.position.array[3] + 0.6;
                            }*/
                            cs_count_cons = cs_count_cons + 2
                        }
                    }

                    if (strpart["second obj type"] == "<class 'blocksclass.pulleys'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                        linestr[i - 1].geometry.attributes.position.needsUpdate = true;
                        //linestr[i-1].geometry.attributes.position.array[3] = meshk[stringdata[i]["second obj"] - 1].position.x
                        angle = Math.PI - stringdata[i].angle
                        firstobj = meshp[stringdata[i]["first obj"] - 1]
                        secondobj = meshp[stringdata[i]["second obj"] - 1]
                        //console.log( firstobj)
                        if (strpart["toc"][0] == "m") {
                            pt1 = new THREE.Vector3(meshp[stringdata[i]["first obj"] - 1].position.x, meshp[stringdata[i]["first obj"] - 1].position.y, meshp[stringdata[i]["first obj"] - 1].position.z)
                        }
                        else if (strpart["toc"][0] == "z") 
                            pt1 = new THREE.Vector3(firstobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(Math.PI - angle), firstobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(Math.PI - angle), firstobj.position.z)
                        else 
                            pt1 = new THREE.Vector3(firstobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(angle), firstobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(angle), firstobj.position.z)
                        points[i - 1] = []
                        points[i - 1].push(pt1);

                        if (strpart["toc"][1] == "m") {
                            pt2 = new THREE.Vector3(meshp[stringdata[i]["second obj"] - 1].position.x, meshp[stringdata[i]["second obj"] - 1].position.y, meshp[stringdata[i]["second obj"] - 1].position.z)
                        }
                        else if (strpart["toc"][1] == "t")
                            pt2 = new THREE.Vector3(secondobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(angle), secondobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(angle), secondobj.position.z)
                        else
                            pt2 = new THREE.Vector3(secondobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(Math.PI - angle), secondobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(Math.PI - angle), secondobj.position.z)

                        linestr[i - 1].geometry.attributes.position.array[0] = pt1.x
                        linestr[i - 1].geometry.attributes.position.array[1] = pt1.y
                        linestr[i - 1].geometry.attributes.position.array[3] = pt2.x
                        linestr[i - 1].geometry.attributes.position.array[4] = pt2.y
                        
                        if (step == "constraint"){

                            cs_cons[cs_count_cons].position.x = linestr[i - 1].geometry.attributes.position.array[0]
                            cs_cons[cs_count_cons].position.y = linestr[i - 1].geometry.attributes.position.array[1] //+ 0.6;
                            
                            cs_cons[cs_count_cons + 1].position.x = linestr[i - 1].geometry.attributes.position.array[3]
                            cs_cons[cs_count_cons + 1].position.y = linestr[i - 1].geometry.attributes.position.array[4] //+ 0.6;

                            cs_count_cons = cs_count_cons + 2
                        }
                    }
                    if (strpart["second obj type"] == "<class 'blocksclass.grounds'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                        linestr[i - 1].geometry.attributes.position.needsUpdate = true;
                        secondobj = meshpl[stringdata[i]["second obj"] - 1]
                        firstobj = meshp[stringdata[i]["first obj"] - 1]
                        //console.log( firstobj)
                        pt2 = new THREE.Vector3(secondobj.position.x, secondobj.position.y, secondobj.position.z)

                        console.log(Math.sin(angle))
                
                        if (strpart["toc"] == "zm") {
                            linestr[i - 1].geometry.attributes.position.array[0] = meshp[stringdata[i]["first obj"] - 1].position.x + firstobj.geometry.parameters.radiusTop * Math.cos(Math.PI - angle)
                            linestr[i - 1].geometry.attributes.position.array[1] = meshp[stringdata[i]["first obj"] - 1].position.y + firstobj.geometry.parameters.radiusTop * Math.sin(Math.PI - angle)
                            //pt1 = new THREE.Vector3(meshp[stringdata[i]["first obj"] - 1].position.x + firstobj.geometry.parameters.radiusTop * Math.cos(Math.PI - angle), meshp[stringdata[i]["first obj"] - 1].position.y + firstobj.geometry.parameters.radiusTop * Math.sin(Math.PI - angle), meshp[stringdata[i]["second obj"] - 1].position.z)
                        }
                        if (strpart["toc"] == "mm") {
                            //debugger
                            pt1 = new THREE.Vector3(meshp[stringdata[i]["first obj"] - 1].position.x, meshp[stringdata[i]["first obj"] - 1].position.y, meshp[stringdata[i]["first obj"] - 1].position.z)
                            linestr[i - 1].geometry.attributes.position.array[0] = pt1.x
                            linestr[i - 1].geometry.attributes.position.array[1] = pt1.y
                        }
                        if (strpart["toc"] == "tm") {
                            pt1 = new THREE.Vector3(meshp[stringdata[i]["first obj"] - 1].position.x + firstobj.geometry.parameters.radiusTop * Math.cos(angle), meshp[stringdata[i]["first obj"] - 1].position.y + firstobj.geometry.parameters.radiusTop * Math.sin(Math.PI - angle), meshp[stringdata[i]["second obj"] - 1].position.z)
                            linestr[i - 1].geometry.attributes.position.array[0] = pt1.x
                            linestr[i - 1].geometry.attributes.position.array[1] = pt1.y
                        }
                        /*
                        if (Math.abs(strpart["angle"] - Math.PI) < 0.01 || Math.abs(strpart["angle"] < 0.01))
                            linestr[i - 1].geometry.attributes.position.array[1] = meshp[stringdata[i]["first obj"] - 1].position.y
                        if (Math.abs(strpart["angle"] - Math.PI/2) < 0.01 || Math.abs(strpart["angle"] + Math.PI/2) < 0.01)
                            linestr[i - 1].geometry.attributes.position.array[0] = meshp[stringdata[i]["first obj"] - 1].position.x
                        //linestr[i-1].geometry.attributes.position.array[3] = meshk[stringdata[i]["second obj"] - 1].position.x
                        //linestr[i-1].geometry.attributes.position.array[4] = meshp[stringdata[i]["second obj"] - 1].position.y
                        */
                        //linestr[i - 1].geometry.attributes.position.array[1] = meshp[stringdata[i]["first obj"] - 1].position.y
                        if (step == "constraint"){
                        cs_cons[cs_count_cons].position.x = linestr[i - 1].geometry.attributes.position.array[0]
                        cs_cons[cs_count_cons].position.y = linestr[i - 1].geometry.attributes.position.array[1];

                        cs_count_cons = cs_count_cons + 2
                        }
                    }
                }

            }

            //cylinder.position.y = elapsedTime*0.5


            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            //if( animation_on == 1)

            window.requestAnimationFrame(tick)

        }

        tick()


        //******************************************SHIVAM CODE ENDS */