import * as THREE from "three";
import { MathUtils } from "three";

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
        scene.add(light)
        /// sheersha code end for text
        var step = "fbd"; // motion -> fbd -> constraint
        var substep = 1; // for fbd it goes from 1 to n_b + n_p , for contraint 1 to n_s
        var subsubstep = 100 // 1 and 2 - used only for contraint , signifie sthe ends
       
        var uselessvar = 0.55
        


        //var loader = new THREE.JSONLoader();
        //alldata =  fetch("D:/Mangalik_Mitra/Engphile_Labs_Internship/Project/src/alldata14.json").then(results=> results.json() ).then(console.log);
        var alld_question_no = "14"
        const alldata = require("D:/Mangalik_Mitra/Engphile_Labs_Internship/Project/src/alldata"+alld_question_no + ".json");
        //console.log(alldata);
        const blockdata = alldata["block dick"];
        const pulleydata = alldata["pulley dick"]
        const stringdata = alldata["string dick"]
        const ceilingdata = alldata["ceiling dick"]

        //console.log(pulleydata)
        var n_b = Object.keys(blockdata).length;
        //console.log(stringdata)    
        var n_p = Object.keys(pulleydata).length;
        const n_s = Object.keys(stringdata).length;
        var n_c = Object.keys(ceilingdata).length;
        //console.log(n_s);
        var i;

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

        var acc_arrow_length
        var acc_arrowHelper = new Array(n_b + n_p)
        var acc_cone = new Array(n_b + n_p)
        const geometryc = new THREE.ConeGeometry(0.1, 0.2, 32);
        const materialc = new THREE.MeshBasicMaterial({ color: 0xffffff });

        var clr = [0xff0000, 0xffff00, 0x0000ff, 0x00ff00]

        for (i = 1; i < n_b + 1; i++) {

            //const material = new THREE.MeshNormalMaterial()
            const materialx = new THREE.MeshBasicMaterial({color: 'red'})
            //const material2 = new THREE.MeshMatcapMaterial()
            //materialx.map = texture
            //materialx.color = new THREE.Color(clr[i - 1])
            meshk[i - 1] = new THREE.Mesh(
                new THREE.BoxGeometry(blockdata[i].size[0] / 15, blockdata[i].size[0] / 15, blockdata[i].size[1] / 15),
                materialx);
            //debugger
            
            scene.add(meshk[i - 1])

            meshk[i - 1].position.x = (blockdata[i].loc[0] - 150) / 20;
            meshk[i - 1].position.y = (blockdata[i].loc[1] - 150) / 20;

            block_ini_pos_x[i - 1] = meshk[i - 1].position.x;
            block_ini_pos_y[i - 1] = meshk[i - 1].position.y;
            text_loc_x[i - 1] = meshk[i - 1].position.x + 0.8 * blockdata[i].textloc
            text_loc_y[i - 1] = meshk[i - 1].position.y

            acc_arrow_to = new THREE.Vector3(meshk[i - 1].position.x + 0.8 * blockdata[i].textloc, meshk[i - 1].position.y + 0.5, 0)
            acc_arrow_from = new THREE.Vector3(meshk[i - 1].position.x + 0.8 * blockdata[i].textloc, meshk[i - 1].position.y - 0.5, 0)


            acc_arrow_direction = acc_arrow_to.clone().sub(acc_arrow_from);
            acc_arrow_length = acc_arrow_direction.length();
            acc_arrowHelper[i - 1] = new THREE.ArrowHelper(acc_arrow_direction.normalize(), acc_arrow_from, acc_arrow_length, clr[i - 1]);
            acc_cone[i - 1] = new THREE.Mesh(geometryc, materialx);


            acc_cone[i - 1].position.x = meshk[i - 1].position.x + 0.8 * blockdata[i].textloc;

            if (blockdata[i].acceleration[1] > 0) {
                acc_cone[i - 1].position.y = meshk[i - 1].position.y + 0.5;
            }

            if (blockdata[i].acceleration[1] < 0) {
                acc_cone[i - 1].position.y = meshk[i - 1].position.y - 0.5;


                acc_cone[i - 1].rotation.z = 3.14
            }

            if (step != "constraint Understanding") {
                scene.add(acc_arrowHelper[i - 1])
                scene.add(acc_cone[i - 1])
            }

            //debugger
        }
        const geometrypl = new THREE.PlaneGeometry(1.7, 1.7);
        const materialpl = new THREE.MeshBasicMaterial({
            color: 0x964B00, side:
                THREE.DoubleSide
        });
        var x;
        for (x = 1; x < n_c + 1; x++) {

            meshpl[x - 1] = new THREE.Mesh(geometrypl, materialpl);

            meshpl[x - 1].position.x = (ceilingdata[x].loc[0] - 150) / 20;
            meshpl[x - 1].position.y = (ceilingdata[x].loc[1] - 150) / 20 + 1;
            if (step != "constraint Understanding") {
                scene.add(meshpl[x - 1])
            }
            meshpl[x - 1].rotation.x = 3.14 / 1.5

        }

        var meshp = new Array(n_p);
        //var clr = [ 0xff0000, 0xffff00, 0x0088ff, 0x00ff00]  
        for (i = 1; i < n_p + 1; i++) {

            const materialp = new THREE.MeshNormalMaterial()
            //const materialx = new THREE.MeshStandardMaterial()
            //const material2 = new THREE.MeshMatcapMaterial()
            //materialp.map = texture
            //materialp.color = new THREE.Color(clr[i-1])
            meshp[i - 1] = new THREE.Mesh(
                new THREE.CylinderGeometry(pulleydata[i].radius / 20, pulleydata[i].radius / 20, 0.03, 32),
                materialp
            )

            scene.add(meshp[i - 1])

            meshp[i - 1].rotation.x = 1.57
            meshp[i - 1].position.x = (pulleydata[i].centre[0] - 150) / 20;
            meshp[i - 1].position.y = (pulleydata[i].centre[1] - 150) / 20;

            pulley_ini_pos_x[i - 1] = meshp[i - 1].position.x;
            pulley_ini_pos_y[i - 1] = meshp[i - 1].position.y;

            acc_arrow_to = new THREE.Vector3(meshp[i - 1].position.x + 1.05, meshp[i - 1].position.y + 0.5, 0)
            acc_arrow_from = new THREE.Vector3(meshp[i - 1].position.x + 1.05, meshp[i - 1].position.y - 0.5, 0)


            acc_arrow_direction = acc_arrow_to.clone().sub(acc_arrow_from);
            acc_arrow_length = acc_arrow_direction.length();
            acc_arrowHelper[i + n_b - 1] = new THREE.ArrowHelper(acc_arrow_direction.normalize(), acc_arrow_from, acc_arrow_length, clr[i - 1]);
            acc_cone[i + n_b - 1] = new THREE.Mesh(geometryc, materialx);


            acc_cone[i + n_b - 1].position.x = meshp[i - 1].position.x + 1.05;

            if (pulleydata[i].acceleration[1] > 0) {
                acc_cone[i + n_b - 1].position.y = meshp[i - 1].position.y + 0.5;
            }

            if (pulleydata[i].acceleration[1] < 0) {
                acc_cone[i + n_b - 1].position.y = meshp[i - 1].position.y - 0.5;


                acc_cone[i + n_b - 1].rotation.z = 3.14
            }


            if (pulleydata[i].acceleration[1] != 0 && step != "constraint Understanding") {
                scene.add(acc_cone[i + n_b - 1])
                scene.add(acc_arrowHelper[i + n_b - 1])
            }

        }
        var spherefbd = []

        for (i = 1; i < n_b + 1; i++) {

            //const material = new THREE.MeshNormalMaterial()
            const materialfbd = new THREE.MeshBasicMaterial()
            //const materialfbd = new THREE.MeshMatcapMaterial()

            materialfbd.color = new THREE.Color(0xffffff)
            materialfbd.transparent = true
            materialfbd.opacity = 0.3
            spherefbd[i - 1] = new THREE.Mesh(
                new THREE.SphereGeometry(0.90, 16, 16),
                materialfbd
            )

            spherefbd[i - 1].position.x = meshk[i - 1].position.x;
            spherefbd[i - 1].position.y = meshk[i - 1].position.y;
            if (step == "fbd" && substep == i) {
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
            if (step == "fbd" && substep == i + n_b) {
                scene.add(spherefbd[i - 1 + n_b])
            }

        }
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
        camera.position.z = 8;
        camera.position.x = 2;
        camera.position.y = -0.2;
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

            //1.
            if (strpart["first obj type"] == "<class 'blocksclass.blocks'>" && strpart["second obj type"] == "<class 'blocksclass.pulleys'>") {
                pt1 = new THREE.Vector3(meshk[stringdata[i]["first obj"] - 1].position.x, meshk[stringdata[i]["first obj"] - 1].position.y, meshk[stringdata[i]["first obj"] - 1].position.z)
                points[i - 1] = []
                endpos[i - 1] = []

                points[i - 1].push(pt1);
                angle = 3.14 - stringdata[i].angle
                secondobj = meshp[stringdata[i]["second obj"] - 1]
                pt2 = new THREE.Vector3(secondobj.position.x + secondobj.geometry.parameters.radiusTop * Math.cos(angle), secondobj.position.y + secondobj.geometry.parameters.radiusTop * Math.sin(angle), secondobj.position.z)
                //console.log( pt2 )
                points[i - 1].push(pt2);
                const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);

                if (pt1.y < pt2.y) {
                    pt1.y = pt1.y + 0.6 // box k aadhe size ka karo
                }
                if (pt2.y < pt1.y) {
                    pt1.y = pt1.y - 0.6 // box k aadhe size ka karo
                }
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
            //debugger

            //2.
            if (strpart["second obj type"] == "<class 'blocksclass.blocks'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                angle = 3.14 - stringdata[i].angle
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

                pt2 = new THREE.Vector3(meshk[stringdata[i]["second obj"] - 1].position.x, meshk[stringdata[i]["second obj"] - 1].position.y, meshk[stringdata[i]["second obj"] - 1].position.z)

                //console.log( pt2 )
                points[i - 1].push(pt2);
                const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);

                if (pt2.y < pt1.y) {
                    pt2.y = pt2.y + 0.6 // box k aadhe size ka karo
                }
                if (pt1.y < pt2.y) {
                    pt2.y = pt2.y - 0.6 // box k aadhe size ka karo
                }
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

            //3.
            if (strpart["second obj type"] == "<class 'blocksclass.blocks'>" && strpart["first obj type"] == "<class 'blocksclass.blocks'>") {
                angle = 3.14 - stringdata[i].angle
                firstobj = meshk[stringdata[i]["first obj"] - 1]
                //console.log(firstobj)
                pt1 = new THREE.Vector3(meshk[stringdata[i]["first obj"] - 1].position.x, meshk[stringdata[i]["first obj"] - 1].position.y, meshk[stringdata[i]["first obj"] - 1].position.z)
                points[i - 1] = []
                points[i - 1].push(pt1);

                pt2 = new THREE.Vector3(meshk[stringdata[i]["second obj"] - 1].position.x, meshk[stringdata[i]["second obj"] - 1].position.y, meshk[stringdata[i]["second obj"] - 1].position.z)

                //console.log(pt2)
                points[i - 1].push(pt2);
                const geometry4 = new THREE.BufferGeometry().setFromPoints(points[i - 1]);

                if (pt2.y < pt1.y) {
                    pt2.y = pt2.y + 0.6 // box k aadhe size ka karo
                }
                if (pt1.y < pt2.y) {
                    pt2.y = pt2.y - 0.6 // box k aadhe size ka karo
                }
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

            //4.
            if (strpart["second obj type"] == "<class 'blocksclass.pulleys'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                angle = 3.14 - stringdata[i].angle
                firstobj = meshp[stringdata[i]["first obj"] - 1]
                //console.log( firstobj)
                pt1 = new THREE.Vector3(firstobj.position.x + firstobj.geometry.parameters.radiusTop * Math.cos(angle), firstobj.position.y + firstobj.geometry.parameters.radiusTop * Math.sin(angle), firstobj.position.z)
                points[i - 1] = []
                points[i - 1].push(pt1);

                if (strpart["toc"] == "tm") {
                    pt2 = new THREE.Vector3(meshp[stringdata[i]["second obj"] - 1].position.x, meshp[stringdata[i]["second obj"] - 1].position.y, meshp[stringdata[i]["second obj"] - 1].position.z)
                }
                if (strpart["toc"] == "tz") {
                    pt2 = new THREE.Vector3(meshp[stringdata[i]["second obj"] - 1].position.x - firstobj.geometry.parameters.radiusTop, meshp[stringdata[i]["second obj"] - 1].position.y, meshp[stringdata[i]["second obj"] - 1].position.z)
                }
                if (strpart["toc"] == "zt") {
                    pt2 = new THREE.Vector3(meshp[stringdata[i]["second obj"] - 1].position.x - firstobj.geometry.parameters.radiusTop, meshp[stringdata[i]["second obj"] - 1].position.y, meshp[stringdata[i]["second obj"] - 1].position.z)
                }


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

            //5.
            if (strpart["second obj type"] == "<class 'blocksclass.grounds'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                angle = 3.14 - stringdata[i].angle
                secondobj = meshpl[stringdata[i]["second obj"] - 1]
                //console.log( firstobj)
                pt2 = new THREE.Vector3(secondobj.position.x, secondobj.position.y, secondobj.position.z)


                if (strpart["toc"] == "mm") {
                    pt1 = new THREE.Vector3(meshp[stringdata[i]["first obj"] - 1].position.x, meshp[stringdata[i]["first obj"] - 1].position.y, meshp[stringdata[i]["second obj"] - 1].position.z)
                }
                if (strpart["toc"] == "zm") {
                    pt1 = new THREE.Vector3(meshp[stringdata[i]["first obj"] - 1].position.x + firstobj.geometry.parameters.radiusTop, meshp[stringdata[i]["first obj"] - 1].position.y, meshp[stringdata[i]["second obj"] - 1].position.z)
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
        var intersection_y1
        var intersection_y2
        var ip_x = new Array(n_b + n_p); // intersection points
        var ip_y = new Array(n_b + n_p); // intersection points y coordinate
        var a_from
        var a_to
        var arrow_from = new Array(n_b + n_p); //new THREE.Vector3( 0, 0.9, 0 );
        var arrow_to = new Array(n_b + n_p);//new THREE.Vector3( 0, 0.9+0.7, 0 );
        var cone = [];
        var arrowHelper = [];
        var arrow_direction;
        var arrow_length


        // finding the cutting points
        for (i = 0; i < n_b; i++) {
            console.log(meshk[i])
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
                    if (Math.abs(slope) > 100) {
                        intersection_x = (linestr[j].geometry.attributes.position.array[0] + linestr[j].geometry.attributes.position.array[3]) / 2;
                        if ((stringdata[j + 1]["first obj"] - 1 == i) && stringdata[j + 1]["first obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[4] > linestr[j].geometry.attributes.position.array[1])) {
                            intersection_y1 = meshk[i].position.y + 0.9
                            a_to = new THREE.Vector3(intersection_x, intersection_y1 + 0.7, 0);
                        }
                        if ((stringdata[j + 1]["second obj"] - 1 == i) && stringdata[j + 1]["second obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[4] > linestr[j].geometry.attributes.position.array[1])) {
                            intersection_y1 = meshk[i].position.y - 0.9
                            a_to = new THREE.Vector3(intersection_x, intersection_y1 - 0.7, 0);
                        }
                        if ((stringdata[j + 1]["second obj"] - 1 == i) && stringdata[j + 1]["second obj type"] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[1] > linestr[j].geometry.attributes.position.array[4])) {
                            intersection_y1 = meshk[i].position.y + 0.9
                            a_to = new THREE.Vector3(intersection_x, intersection_y1 + 0.7, 0);
                        }


                        ip_x[i].push(intersection_x)
                        ip_y[i].push(intersection_y1)
                        a_from = new THREE.Vector3(intersection_x, intersection_y1, 0);

                        arrow_from[i].push(a_from)
                        arrow_to[i].push(a_to)


                    }
                }
            }
        }

        for (i = 0; i < n_p; i++) {

            ip_x[i + n_b] = [];
            ip_y[i + n_b] = [];
            arrow_from[i + n_b] = [];
            arrow_to[i + n_b] = [];
            //debugger;
            for (j = 0; j < linestr.length; j++) {

                var endpt1 = [];
                var endpt2 = [];
                if ((stringdata[j + 1]["first obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["first obj"] - 1) == i) ||
                    (stringdata[j + 1]["second obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["second obj"] - 1) == i)) {
                    slope = (linestr[j].geometry.attributes.position.array[1] - linestr[j].geometry.attributes.position.array[4]) / (linestr[j]
                        .geometry.attributes.position.array[0] - linestr[j].geometry.attributes.position.array[3])
                    //console.log(linestr)

                    if (Math.abs(slope) > 100) {
                        intersection_x = (linestr[j].geometry.attributes.position.array[0] + linestr[j].geometry.attributes.position.array[3]) / 2;
                        if (stringdata[j + 1]["second obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["second obj"] - 1) == i) {
                            if (linestr[j].geometry.attributes.position.array[1] > linestr[j].geometry.attributes.position.array[4]) {
                                intersection_y1 = meshp[i].position.y + Math.pow(1.2 * 1.2 - Math.pow(intersection_x - meshp[i].position.x, 2), 0.5);
                                a_to = new THREE.Vector3(intersection_x, intersection_y1 + 0.7, 0);
                            }
                            if (linestr[j].geometry.attributes.position.array[4] > linestr[j].geometry.attributes.position.array[1]) {
                                intersection_y1 = meshp[i].position.y - Math.pow(1.2 * 1.2 - Math.pow(intersection_x - meshp[i].position.x, 2), 0.5);

                                a_to = new THREE.Vector3(intersection_x, intersection_y1 - 0.7, 0);

                            }

                        }
                        if (stringdata[j + 1]["first obj type"] == "<class 'blocksclass.pulleys'>" && (stringdata[j + 1]["first obj"] - 1) == i) {
                            if (linestr[j].geometry.attributes.position.array[1] > linestr[j].geometry.attributes.position.array[4]) {
                                intersection_y1 = meshp[i].position.y - Math.pow(1.2 * 1.2 - Math.pow(intersection_x - meshp[i].position.x, 2), 0.5);
                                a_to = new THREE.Vector3(intersection_x, intersection_y1 - 0.7, 0);
                            }
                            if (linestr[j].geometry.attributes.position.array[4] > linestr[j].geometry.attributes.position.array[1]) {
                                intersection_y1 = meshp[i].position.y + Math.pow(1.2 * 1.2 - Math.pow(intersection_x - meshp[i].position.x, 2), 0.5);
                                a_to = new THREE.Vector3(intersection_x, intersection_y1 + 0.7, 0);
                            }
                        }
                        ip_x[i + n_b].push(intersection_x)
                        ip_y[i + n_b].push(intersection_y1)

                        a_from = new THREE.Vector3(intersection_x, intersection_y1, 0);

                        arrow_from[i + n_b].push(a_from)
                        arrow_to[i + n_b].push(a_to)



                    }
                }

            }
        }

        var chotasphere = []
        var mg_cone

        var cs_count = 0;
        for (i = 1; i < n_b + 1; i++) {
            //debugger
            mg_cone = new THREE.Mesh(geometryc, materialx)
            var mg_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y, 0);
            var mg_to = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y - 1.6, 0);
            var mg_direction = mg_to.clone().sub(mg_from);
            var mg_length = mg_direction.length();
            //var mg_arrow_direction = arrow_to[meshk[i - 1].position.x][meshk[i - 1].position.y - 1].clone().sub(arrow_from[meshk[i - 1].position.x][meshk[i - 1].position.y]);
            //var mg_arrow_length = mg_direction.length();
            var mg_arrowHelper = new THREE.ArrowHelper(mg_direction.normalize(), mg_from, mg_length, 0xffffff);

            mg_cone.position.x = meshk[i - 1].position.x;
            mg_cone.position.y = meshk[i - 1].position.y - 1.5;

            // if (arrow_to[i - 1][j].y < arrow_from[i - 1][j].y) {
            mg_cone.rotation.z = 3.14
            //}

            for (j = 0; j < ip_x[i - 1].length; j++) {

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


                cone[cs_count].position.x = ip_x[i - 1][j];
                cone[cs_count].position.y = arrow_to[i - 1][j].y;//ip_y[i-1][j] + 0.5;

                if (arrow_to[i - 1][j].y < arrow_from[i - 1][j].y) {
                    cone[cs_count].rotation.z = 3.14
                }


                if (step == "fbd" && substep == i && (subsubstep == -100 || subsubstep == j + 1)) {
                    scene.add(chotasphere[cs_count]);
                }

                if (step == "fbd" && substep == i && (subsubstep > j + 1 || subsubstep == 100)) {
                    scene.add(chotasphere[cs_count]);
                    scene.add(arrowHelper[cs_count]);
                    scene.add(cone[cs_count]);
                    scene.add(mg_arrowHelper)
                    scene.add(mg_cone)
                }
                cs_count = cs_count + 1;
            }
        }

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


                cone[cs_count].position.x = ip_x[i - 1 + n_b][j];
                //cone[cs_count].position.y = ip_y[i-1+n_b][j] - 0.5;  

                cone[cs_count].position.y = arrow_to[i + n_b - 1][j].y;//ip_y[i-1][j] + 0.5;

                if (arrow_to[i + n_b - 1][j].y < arrow_from[i + n_b - 1][j].y) {
                    cone[cs_count].rotation.z = 3.14
                }
                //cone[cs_count].rotation.z = 3.14  


                if (step == "fbd" && substep == i + n_b && (subsubstep == -100 || subsubstep == j + 1)) {
                    scene.add(chotasphere[cs_count]);
                }
                if (step == "fbd" && substep == i + n_b && (subsubstep > j + 1 || subsubstep == 100)) {
                    scene.add(chotasphere[cs_count]);
                    scene.add(arrowHelper[cs_count]);
                    scene.add(cone[cs_count]);
                }
                cs_count = cs_count + 1;
            }
        }

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

                if (animation_on == 0) {
                    for (i = 1; i < n_b + 1; i++) {

                        meshk[i - 1].position.x = block_ini_pos_x[i - 1];
                        meshk[i - 1].position.y = block_ini_pos_y[i - 1];

                        Time_tillnow = elapsedTime


                    }
                    for (i = 1; i < n_p + 1; i++) {

                        meshp[i - 1].position.x = pulley_ini_pos_x[i - 1];
                        meshp[i - 1].position.y = pulley_ini_pos_y[i - 1];

                        Time_tillnow = elapsedTime


                    }
                    animation_on = 1;
                }

                for (i = 1; i < n_b + 1; i++) {

                    time_main = elapsedTime - Time_tillnow;

                    if (step == "motion" || (step == "constraint" && subsubstep == -1)) {
                        meshk[i - 1].position.x = meshk[i - 1].position.x + 0.5 * (blockdata[i].acceleration[0]) * time_main * time_main / 5000;
                        meshk[i - 1].position.y = meshk[i - 1].position.y + 0.5 * (blockdata[i].acceleration[1]) * time_main * time_main / 5000;
                    }

                    if (step == "constraint" && (stringdata[substep]["first obj type"] == "<class 'blocksclass.blocks'>" || stringdata[substep]["second obj type"] == "<class 'blocksclass.blocks'>")) {
                        if (stringdata[substep]["first obj type"] == "<class 'blocksclass.blocks'>") {
                            if (stringdata[substep]["first obj"] == i && subsubstep == 1) {
                                meshk[i - 1].position.x = meshk[i - 1].position.x + 0.5 * (blockdata[i].acceleration[0]) * time_main * time_main / 5000;
                                meshk[i - 1].position.y = meshk[i - 1].position.y + 0.5 * (blockdata[i].acceleration[1]) * time_main * time_main / 5000;
                            }
                        }

                        if (stringdata[substep]["second obj type"] == "<class 'blocksclass.blocks'>") {
                            if (stringdata[substep]["second obj"] == i && subsubstep == 2) {
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

                    if (line_size_cu < 0.5 || line_size_cu > 10 || cs_cu[1].position.x > 9) {
                        cs_cu[0].position.x = -0.3
                        cs_cu[1].position.x = 4
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
                            if (stringdata[substep]["first obj"] == i && subsubstep == 1) {
                                meshp[i - 1].position.x = meshp[i - 1].position.x + 0.5 * (pulleydata[i].acceleration[0]) * time_main * time_main / 5000;
                                meshp[i - 1].position.y = meshp[i - 1].position.y + 0.5 * (pulleydata[i].acceleration[1]) * time_main * time_main / 5000;
                            }
                        }

                        if (stringdata[substep]["second obj type"] == "<class 'blocksclass.pulleys'>") {
                            if (stringdata[substep]["second obj"] == i && subsubstep == 2) {
                                meshp[i - 1].position.x = meshp[i - 1].position.x + 0.5 * (pulleydata[i].acceleration[0]) * time_main * time_main / 5000;
                                meshp[i - 1].position.y = meshp[i - 1].position.y + 0.5 * (pulleydata[i].acceleration[1]) * time_main * time_main / 5000;
                            }
                        }
                    }
                }


                cs_count_cons = 0
                for (i = 1; i < n_s + 1; i++) {

                    strpart = stringdata[i];

                    //if( line_size < 0 )
                    //console.log( strpart["first obj type"])
                    if (strpart["first obj type"] == "<class 'blocksclass.blocks'>" && strpart["second obj type"] == "<class 'blocksclass.pulleys'>") {
                        linestr[i - 1].geometry.attributes.position.needsUpdate = true;
                        linestr[i - 1].geometry.attributes.position.array[1] = meshk[stringdata[i]["first obj"] - 1].position.y
                        linestr[i - 1].geometry.attributes.position.array[0] = meshk[stringdata[i]["first obj"] - 1].position.x

                        linestr[i - 1].geometry.attributes.position.array[4] = meshp[stringdata[i]["second obj"] - 1].position.y

                        cs_cons[cs_count_cons].position.x = linestr[i - 1].geometry.attributes.position.array[0]
                        cs_cons[cs_count_cons].position.y = linestr[i - 1].geometry.attributes.position.array[1] + 0.6;

                        cs_count_cons = cs_count_cons + 2

                    }

                    if (strpart["second obj type"] == "<class 'blocksclass.blocks'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                        linestr[i - 1].geometry.attributes.position.needsUpdate = true;
                        linestr[i - 1].geometry.attributes.position.array[3] = meshk[stringdata[i]["second obj"] - 1].position.x
                        linestr[i - 1].geometry.attributes.position.array[4] = meshk[stringdata[i]["second obj"] - 1].position.y

                        linestr[i - 1].geometry.attributes.position.array[1] = meshp[stringdata[i]["first obj"] - 1].position.y

                        cs_cons[cs_count_cons + 1].position.x = linestr[i - 1].geometry.attributes.position.array[3]
                        cs_cons[cs_count_cons + 1].position.y = linestr[i - 1].geometry.attributes.position.array[4] + 0.6;

                        cs_count_cons = cs_count_cons + 2
                    }

                    if (strpart["second obj type"] == "<class 'blocksclass.blocks'>" && strpart["first obj type"] == "<class 'blocksclass.blocks'>") {
                        linestr[i - 1].geometry.attributes.position.needsUpdate = true;
                        linestr[i - 1].geometry.attributes.position.array[1] = meshk[stringdata[i]["first obj"] - 1].position.y
                        linestr[i - 1].geometry.attributes.position.array[4] = meshk[stringdata[i]["second obj"] - 1].position.y

                        cs_cons[cs_count_cons].position.y = linestr[i - 1].geometry.attributes.position.array[1] + 0.6;
                        cs_cons[cs_count_cons + 1].position.y = linestr[i - 1].geometry.attributes.position.array[4] - 0.6;

                        cs_count_cons = cs_count_cons + 2
                    }

                    if (strpart["second obj type"] == "<class 'blocksclass.pulleys'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                        linestr[i - 1].geometry.attributes.position.needsUpdate = true;
                        //linestr[i-1].geometry.attributes.position.array[3] = meshk[stringdata[i]["second obj"] - 1].position.x
                        linestr[i - 1].geometry.attributes.position.array[4] = meshp[stringdata[i]["second obj"] - 1].position.y

                        linestr[i - 1].geometry.attributes.position.array[1] = meshp[stringdata[i]["first obj"] - 1].position.y

                        cs_cons[cs_count_cons + 1].position.x = linestr[i - 1].geometry.attributes.position.array[3]
                        cs_cons[cs_count_cons + 1].position.y = linestr[i - 1].geometry.attributes.position.array[4] + 0.6;

                        cs_count_cons = cs_count_cons + 2
                    }
                    if (strpart["second obj type"] == "<class 'blocksclass.grounds'>" && strpart["first obj type"] == "<class 'blocksclass.pulleys'>") {
                        linestr[i - 1].geometry.attributes.position.needsUpdate = true;
                        //linestr[i-1].geometry.attributes.position.array[3] = meshk[stringdata[i]["second obj"] - 1].position.x
                        //linestr[i-1].geometry.attributes.position.array[4] = meshp[stringdata[i]["second obj"] - 1].position.y

                        linestr[i - 1].geometry.attributes.position.array[1] = meshp[stringdata[i]["first obj"] - 1].position.y

                        cs_cons[cs_count_cons + 1].position.x = linestr[i - 1].geometry.attributes.position.array[3]
                        cs_cons[cs_count_cons + 1].position.y = linestr[i - 1].geometry.attributes.position.array[4] + 0.6;

                        cs_count_cons = cs_count_cons + 2
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

        for (j = 0; j < blockdata[i].forces.length; j++){

            var currentnormal = normaldata[blockdata[i].forces[j][1]]
            var norm_arrow_dir_x = 0
            var norm_arrow_dir_y = 0
            var norm_angle = currentnormal[2];
            var cone_angle

            if (currentnormal[1] == ("b"+i)){
                normal_from = new THREE.Vector3(meshk[i - 1].position.x - Math.cos(norm_angle)*blockdata[i].size[0] / 30, meshk[i - 1].position.y - Math.sin(norm_angle)*blockdata[i].size[0] / 30, 1)
                normal_to = new THREE.Vector3(meshk[i - 1].position.x + 2*Math.cos(norm_angle)*blockdata[i].size[0] / 30, meshk[i - 1].position.y + 2*Math.sin(norm_angle)*blockdata[i].size[0] / 30, 1)
                cone_angle = 1.57 - norm_angle;
            }
            if (currentnormal[0] == ("b"+i)){
                normal_from = new THREE.Vector3(meshk[i - 1].position.x + Math.cos(norm_angle)*blockdata[i].size[0] / 30, meshk[i - 1].position.y + Math.sin(norm_angle)*blockdata[i].size[0] / 30, 1)
                normal_to = new THREE.Vector3(meshk[i - 1].position.x - 2*Math.cos(norm_angle)*blockdata[i].size[0] / 30, meshk[i - 1].position.y - 2*Math.sin(norm_angle)*blockdata[i].size[0] / 30, 1)
                cone_angle = 1.57 + norm_angle
            }

            acc_arrow_direction = normal_to.clone().sub(normal_from);
            acc_arrow_length = acc_arrow_direction.length();
            
            var normal_helper = new THREE.ArrowHelper(acc_arrow_direction.normalize(), normal_from, acc_arrow_length, 0x00ff00);
            const material_norm = new THREE.MeshBasicMaterial({color: 'blue'})
            var normal_cone = new THREE.Mesh(geometryc, material_norm);
            
            //approx
            normal_cone.position.x = normal_to.x - acc_arrow_length * 0.1 * Math.cos(norm_angle);
            normal_cone.position.y = normal_to.y - acc_arrow_length * 0.1 * Math.sin(norm_angle);
            normal_cone.position.z = 1
            
            
            normal_cone.rotation.z = cone_angle;
            
            const materialch = new THREE.MeshBasicMaterial()
            materialch.color = new THREE.Color(0xffffff)
            //materialfbd.transparent = true
            //materialfbd.opacity = 0.8
            var normal_chotasphere = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 16, 16),
                materialch
            )
            
            normal_chotasphere.position.x = normal_from.x;
            normal_chotasphere.position.y = normal_from.y;
            normal_chotasphere.position.z = 1
            if (step == "fbd" && substep == i){
                scene.add(normal_chotasphere)
                scene.add(normal_helper)
                scene.add(normal_cone)
            }
        }

        for (j = 0; j < blockdata[i].forces.length; j++){

            var currentnormal = normaldata[blockdata[i].forces[j][1]]
            var norm_arrow_dir_x = 0
            var norm_arrow_dir_y = 0
            if (currentnormal[1] == ("b"+i)){

                if (currentnormal[0][0] == "c"){

                    var curr_ceil = ceilingdata[currentnormal[0][1]]

                    if ((curr_ceil.loc[1] - 150) / 20 + 1 < meshk[i - 1].position.y){
                        normal_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y - blockdata[i].size[0] / 30, 1)
                        normal_to = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y + blockdata[i].size[0] / 45, 1)
                        var normal_cone 
                        norm_arrow_dir_x = 0
                        norm_arrow_dir_y = 1
                    }
                }
                if (currentnormal[0][0] == "b"){
                    
                    var curr_block = blockdata[currentnormal[0][1]]

                    if ((curr_block.loc[0] - 150) / 20 > meshk[i - 1].position.y){
                        //approx
                        normal_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y + (blockdata[i].size[0]) / 30, 1)
                        normal_to = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y - (blockdata[i].size[0]) / 45, 1)

                        var normal_cone 
                        norm_arrow_dir_x = 0
                        norm_arrow_dir_y = -1
                    }
                }
            }

            if (currentnormal[0] == ("b"+i)){
                
                if (currentnormal[1][0] == "b"){
                    
                    var curr_block = blockdata[currentnormal[1][1]]

                    if ((curr_block.loc[1] - 150) / 20 < meshk[i - 1].position.y){
                        //approx
                        normal_from = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y - blockdata[i].size[0] / 30, 1)
                        normal_to = new THREE.Vector3(meshk[i - 1].position.x, meshk[i - 1].position.y + blockdata[i].size[0] / 45, 1)
                        var normal_cone 
                        norm_arrow_dir_x = 0
                        norm_arrow_dir_y = 1
                    }
                }
            }

            acc_arrow_direction = normal_to.clone().sub(normal_from);
            acc_arrow_length = acc_arrow_direction.length();
            
            var normal_helper = new THREE.ArrowHelper(acc_arrow_direction.normalize(), normal_from, acc_arrow_length, 0xffffff);
            const material_norm = new THREE.MeshBasicMaterial({color: 'white'})
            var normal_cone = new THREE.Mesh(geometryc, material_norm);
            
            //approx
            normal_cone.position.x = normal_to.x - acc_arrow_length * 0.1 * norm_arrow_dir_x;
            normal_cone.position.y = normal_to.y - acc_arrow_length * 0.1 * norm_arrow_dir_y;
            normal_cone.position.z = 1
            
            if (norm_arrow_dir_y == -1){
                normal_cone.rotation.z = 3.14
            }
            const materialch = new THREE.MeshBasicMaterial()
            materialch.color = new THREE.Color(0xffffff)
            //materialfbd.transparent = true
            //materialfbd.opacity = 0.8
            var normal_chotasphere = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 16, 16),
                materialch
            )
            
            normal_chotasphere.position.x = normal_from.x;
            normal_chotasphere.position.y = normal_from.y;
            normal_chotasphere.position.z = 1
            if (step == "fbd" && substep == i){
                scene.add(normal_chotasphere)
                scene.add(normal_helper)
                scene.add(normal_cone)
            }
        }
        if (step == "fbd" && substep == i && (subsubstep == -100 || subsubstep == j + 1 + blockdata[i].forces.length)) {
            scene.add(chotasphere[cs_count]);
        }

        if (step == "fbd" && substep == i && (subsubstep > j + 1 + blockdata[i].forces.length || subsubstep == 100)) {
            
            scene.add(chotasphere[cs_count]);
            scene.add(arrowHelper[cs_count]);
            scene.add(cone[cs_count]);
        }

        // constraint understanding code starts
        if (step == "constraint Understanding") {
            var points_cu
            //upper line
            cs_cu[0].position.x = cs_cu[0].position.x + velocity_cu[0] * (elapsedTime - Time_tillnow) / 200
            cs_cu[1].position.x = cs_cu[1].position.x + velocity_cu[1] * (elapsedTime - Time_tillnow) / 200

            linestr_cu.geometry.attributes.position.needsUpdate = true;
            linestr_cu.geometry.attributes.position.array[0] = cs_cu[0].position.x
            linestr_cu.geometry.attributes.position.array[3] = cs_cu[1].position.x
            var line_pos_cu
            var line_size_cu
            line_pos_cu = linestr_cu.geometry.attributes.position.array;
            line_size_cu = line_pos_cu[3] - line_pos_cu[0];

            if (line_size_cu < 0.5 || line_size_cu > 10 || cs_cu[1].position.x > 9) {
                cs_cu[0].position.x = -0.3
                cs_cu[1].position.x = 4
                Time_tillnow = elapsedTime
            }

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

            if (line_size_cu_more < 0.5 || line_size_cu_more > 10 || cs_cu_more[1].position.x > 9) {
                cs_cu_more[0].position.x = -0.3
                cs_cu_more[1].position.x = 4
                Time_tillnow = elapsedTime
            }
        }

        // constraint understanding code ends
        const bigblockdata = alldata["bigblock dick"]
        var n_bb = Object.keys(bigblockdata).length;

        var meshbb = new Array(n_bb);

        var y;
        for (y = 1; y < n_bb + 1; y++) {
            if (bigblockdata[i].type == "tp") {
                meshbb[i - 1] = new THREE.Mesh(
                    new THREE.BoxGeometry(bigblockdata[y].size[0] / 15, bigblockdata[y].size[0] / 15, bigblockdata[y].size[1] / 15), 
                    materialx);
                
                meshbb[i - 1].position.x = (bigblockdata[y].loc[0] - 150) / 20; // where do these positions come from?
                meshbb[i - 1].position.y = (bigblockdata[y].loc[1] - 150) / 20;
                
                if (bigblockdata[y].mass != 0) {
                    if (!step.includes("constraint"))
                        scene.add(meshbb[y - 1]);
                }
            }
            else {
                
            }
        }

