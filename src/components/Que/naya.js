
import { useEffect, useRef } from "react";
import { propTypes } from "react-latex";
import * as THREE from "three";

const TestThree = (props) => {

    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene()
        //******************************************SHIVAM CODE STARTS */

        const loader = new THREE.FontLoader();
        loader.load('Teko_Medium_Regular.json', function (font) {
            const textGeometry = new THREE.TextGeometry("a1", {
                font: font,
                size: 0.3,
                height: 1,
                curveSegments: 5,
                bevelEnabled: false,
                
            });
            const material = [
                new THREE.MeshPhongMaterial({ color: "blue" }), // front
                new THREE.MeshPhongMaterial({ color: 0x000000 }) // side
            ];
            const textMesh = new THREE.Mesh(textGeometry, material);
            textMesh.castShadow = false
            textMesh.position.y = 0.55
            textMesh.position.x = 2.5
            scene.add(textMesh);
        });
        
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
        debugger
        var step =  props.stepName; //"constraint";
        var substep = props.substep; // for fbd it goes from 1 to n_b + np , for contraint 1 to n_s 
        var subsubstep = props.subsubstep; // 1 and 2 - used only for contraint , signifie sthe ends 
        
        
        const image = new Image()
        const texture = new THREE.Texture(image)
        image.addEventListener('load', () =>
        {
            texture.needsUpdate = true
        })
        //image.src = '/textures/door/color.jpg'
        image.src = 'door.jpg'
        
        //var loader = new THREE.JSONLoader();
        //alldata =  fetch("C:/Users/Shivam Saxena/Desktop/alldata.json").then(results=> results.json() ).then(console.log);
        const alldata = require("./alldata11.json");
        //console.log(alldata);
        const blockdata = alldata[ "block dick"];
        const pulleydata = alldata[ "pulley dick"]
        const stringdata = alldata[ "string dick"]
        //console.log(pulleydata)
        var n_b = Object.keys( blockdata ).length;
        //console.log(stringdata)    
        var n_p = Object.keys( pulleydata ).length; 
        const n_s = Object.keys( stringdata ).length; 
        
        var i;
        
        //n_p =0
        var meshk = new Array(n_b);
        var block_ini_pos_x = new Array( n_b );
        var block_ini_pos_y = new Array( n_b ); 
        
        var clr = [ 0xff0000, 0xffff00, 0x0000ff, 0x00ff00] 
         
        for( i=1; i < n_b+1; i++ )
        {
            
                //const material = new THREE.MeshNormalMaterial()
                const materialx = new THREE.MeshStandardMaterial()
                //const material2 = new THREE.MeshMatcapMaterial()
                //materialx.map = texture
                materialx.color = new THREE.Color(clr[i-1])
                meshk[i-1] =  new THREE.Mesh(
                    new THREE.BoxGeometry(blockdata[i].size[0]/15, blockdata[i].size[0]/15, blockdata[i].size[1]/15),
                    materialx ); 
                
                if( step != "constraint" )    
                {
                    scene.add( meshk[i-1] )
                }
                if( step == "constraint" && ( stringdata[substep]["first obj type"]  == "<class 'blocksclass.blocks'>" || stringdata[substep]["second obj type"]  == "<class 'blocksclass.blocks'>" )  )
                {
                    if( stringdata[substep]["first obj type"]  == "<class 'blocksclass.blocks'>" )
                    {
                        if( stringdata[substep]["first obj"]  == i )
                        {
                            scene.add( meshk[i-1] )
                        }
        
        
                    }
                    if( stringdata[substep]["second obj type"]  == "<class 'blocksclass.blocks'>" )
                    {
                        if( stringdata[substep]["second obj"]  == i  )
                        {
                            scene.add( meshk[i-1] )
                        }
        
        
                    }
                }
        
                meshk[i-1].position.x = (blockdata[i].loc[0] - 150)/20;
                meshk[i-1].position.y = (blockdata[i].loc[1] - 150)/20;
        
               block_ini_pos_x[i-1] = meshk[i-1].position.x;
               block_ini_pos_y[i-1] = meshk[i-1].position.y;
        
        
            
        }
        debugger
        const materialx = new THREE.MeshNormalMaterial()
        const materialy = new THREE.MeshNormalMaterial()
        materialx.map = texture
        materialy.map = texture
        materialx.color = new THREE.Color(0xff0000)
        materialy.color = new THREE.Color(0x00ff00)
        //const materialrdm = new THREE.MeshNormalMaterial()
        var rdm1
        rdm1 =  new THREE.Mesh(
            new THREE.BoxGeometry(0.3, 0.3, 0.3),
            materialx
        )
        rdm1.position.x = -1
        
        var rdm2
        rdm2 =  new THREE.Mesh(
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
        rdm3 =  new THREE.Mesh(
            new THREE.BoxGeometry(0.25, 0.05, 0.25),
            materialrdm1
        )
        rdm3.position.x = -1
        rdm3.position.y = 0.14
        //scene.add( rdm3)
        
        
        
        var meshp = new Array(n_p);
        //var clr = [ 0xff0000, 0xffff00, 0x0088ff, 0x00ff00]  
        for( i=1; i < n_p+1; i++ )
        {
            
                const materialp = new THREE.MeshNormalMaterial()
                //const materialx = new THREE.MeshStandardMaterial()
                //const material2 = new THREE.MeshMatcapMaterial()
                //materialp.map = texture
                //materialp.color = new THREE.Color(clr[i-1])
                meshp[i-1] =  new THREE.Mesh(
                    new THREE.CylinderGeometry( pulleydata[i].radius/20, pulleydata[i].radius/20, 0.03, 32 ),
                    materialp
                )
                //debugger
                if( step != "constraint")
                {
                    scene.add( meshp[i-1])
                }  
                if( step == "constraint" && ( stringdata[substep]["first obj type"]  == "<class 'blocksclass.pulleys'>" || stringdata[substep]["second obj type"]  == "<class 'blocksclass.pulleys'>" )  )
                {
                    if( stringdata[substep]["first obj type"]  == "<class 'blocksclass.pulleys'>" )
                    {
                        if( stringdata[substep]["first obj"]  ==  i   )
                        {
                            scene.add( meshp[i-1] )
                        }
        
        
                    }
                    if( stringdata[substep]["second obj type"]  == "<class 'blocksclass.pulleys'>" )
                    {
                        if( stringdata[substep]["second obj"]  == i  )
                        {
                            scene.add( meshp[i-1] )
                        }
        
        
                    }
                }  
                meshp[i-1].rotation.x= 1.57
                meshp[i-1].position.x = (pulleydata[i].centre[0] - 150)/20;
                meshp[i-1].position.y = (pulleydata[i].centre[1] - 150)/20;
        
            
        }
        
        //console.log( meshp[0].position.y )
        
        
        
        // Object
        //const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3)
        //const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        //const mesh = new THREE.Mesh(geometry, material)
        
        //const material = new THREE.MeshBasicMaterial( { map: texture })
        const material = new THREE.MeshNormalMaterial()
        //const material = new THREE.MeshBasicMaterial()
                material.map = texture
                material.color = new THREE.Color(0xff0000)
        
        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.3, 0.3, 0.3),
            material
        )
        
        const material4 = new THREE.LineBasicMaterial( { color: 0xff00ff } ); // pink
        const material5 = new THREE.LineBasicMaterial( { color: 0xff0000 } ); // yellow
        //const material4 = new THREE.LineBasicMaterial( { color: 0x00ff00 } ); // lime
        const material6 = new THREE.LineBasicMaterial( { color: 0xffffff } ); // white
        
        var line_materials = [ material4, material5, material6]
        
        
        /*points.push( new THREE.Vector3( 0, 0, 0 ) );
        points.push( new THREE.Vector3( 0, 1, 0 ) );
        //points.push( new THREE.Vector3( 1, 0, 0 ) );
        
        const geometry4 = new THREE.BufferGeometry().setFromPoints( points );
        const line = new THREE.Line( geometry4, material4 );
        //scene.add( line );
        */
        
        
        //mesh.position.z = -1
        //mesh.position.x = -1
        //mesh.position.y = 0
        
        //const material2 = new THREE.MeshNormalMaterial()
        const material2 = new THREE.MeshStandardMaterial()
        //const material2 = new THREE.MeshMatcapMaterial()
        material2.map = texture
        material2.color = new THREE.Color(0xff0000)
        //material2.metcap = texture
        
        material.metalness = 0.45
        material.roughness = 0.65
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
        
        
        var spherefbd = []
        
        for( i=1; i < n_b+1; i++ )
        {
            
                //const material = new THREE.MeshNormalMaterial()
                const materialfbd = new THREE.MeshBasicMaterial()
                //const materialfbd = new THREE.MeshMatcapMaterial()
                
                materialfbd.color = new THREE.Color(0xffffff)
                materialfbd.transparent = true
                materialfbd.opacity = 0.3
                spherefbd[i-1] =  new THREE.Mesh(
                    new THREE.SphereGeometry(0.90, 16, 16),
                    materialfbd
                )
               
                spherefbd[i-1].position.x = meshk[i-1].position.x;
                spherefbd[i-1].position.y = meshk[i-1].position.y;
                if( step == "fbd" && substep == i )
                {
                    scene.add( spherefbd[i-1])
                }        
            
        }
        
        for( i=1; i < n_p+1; i++ )
        {
            
                //const material = new THREE.MeshNormalMaterial()
                const materialfbd = new THREE.MeshBasicMaterial()
                //const materialfbd = new THREE.MeshMatcapMaterial()
                
                materialfbd.color = new THREE.Color(0xffffff)
                materialfbd.transparent = true
                materialfbd.opacity = 0.3
                spherefbd[i-1+n_b] =  new THREE.Mesh(
                    new THREE.SphereGeometry( 1.2, 16, 16),
                    materialfbd
                )
               
                spherefbd[i-1+n_b].position.x = meshp[i-1].position.x;
                spherefbd[i-1+n_b].position.y = meshp[i-1].position.y;
                if( step == "fbd" && substep == i + n_b )
                {
                    scene.add( spherefbd[i-1+n_b])
                }        
            
        }
        
        
        
        
        
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
        camera.position.z = 7;
        camera.position.x = 2;
        camera.position.y = 0;
        scene.add(camera)
          // FLOOR
          const plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshPhongMaterial({ color: 0x0a7d15 }));
          plane.rotation.x = - Math.PI / 2
          plane.receiveShadow = true
          scene.add(plane);
        //camera.lookAt( mesh.position)
        
        /// Renderer
        const renderer = new THREE.WebGLRenderer({

            alpha: false
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
        
        const kpt =[];
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
        var endpos =[]
        var strpt_acc_y =[]
        var endpt_acc_y =[]
        //var endpos_second =[]
        console.log(meshk)
        
        for(i=1; i < n_s+1; i++ )
        {
            strpart = stringdata[i];
            //debugger
            console.log( stringdata[i])
            if( strpart["first obj type"] == "<class 'blocksclass.blocks'>"  && strpart["second obj type"] == "<class 'blocksclass.pulleys'>")
            {    
                pt1 = new THREE.Vector3( meshk[stringdata[i]["first obj"] - 1].position.x, meshk[stringdata[i]["first obj"] - 1].position.y, meshk[stringdata[i]["first obj"] - 1].position.z )
                points[i-1] = []
                endpos[i-1] =[]
        
                points[i-1].push( pt1 ) ;
                angle = 3.14- stringdata[i].angle
                secondobj = meshp[ stringdata[i]["second obj"] - 1 ]
                pt2 =  new THREE.Vector3( secondobj.position.x + secondobj.geometry.parameters.radiusTop* Math.cos(angle), secondobj.position.y + secondobj.geometry.parameters.radiusTop* Math.sin(angle), secondobj.position.z  )
                //console.log( pt2 )
                points[i-1].push( pt2 );
                const geometry4 = new THREE.BufferGeometry().setFromPoints( points[i-1] );
        
                if( pt1.y < pt2.y )
                {
                    pt1.y = pt1.y + 0.6 // box k aadhe size ka karo 
                }
                if( pt2.y < pt1.y )
                {
                    pt1.y = pt1.y - 0.6 // box k aadhe size ka karo 
                }
                endpos[i-1].push( pt1 ) 
                endpos[i-1].push( pt2 )
        
               
            
                linestr[i-1] = new THREE.Line( geometry4, line_materials[strpart[ "str no"] - 1] );
                if( step != "constraint" )
                {
                    scene.add( linestr[i-1] )
                }    
                if( step == "constraint" && i == substep )
                {
                    scene.add( linestr[i-1])
                }
            } 
            //debugger
            if( strpart["second obj type"] == "<class 'blocksclass.blocks'>"  && strpart["first obj type"] == "<class 'blocksclass.pulleys'>")
            {   
                angle = 3.14- stringdata[i].angle
                firstobj = meshp[ stringdata[i]["first obj"] - 1 ] 
                //console.log( firstobj)
                pt1 =  new THREE.Vector3( firstobj.position.x + firstobj.geometry.parameters.radiusTop* Math.cos(angle), firstobj.position.y + firstobj.geometry.parameters.radiusTop* Math.sin(angle), firstobj.position.z  )
                points[i-1] = []
                points[i-1].push( pt1 ) ;
                
                pt2 = new THREE.Vector3(  meshk[stringdata[i]["second obj"] - 1].position.x, meshk[stringdata[i]["second obj"] - 1].position.y, meshk[stringdata[i]["second obj"] - 1].position.z )
                
                //console.log( pt2 )
                points[i-1].push( pt2 );
                const geometry4 = new THREE.BufferGeometry().setFromPoints( points[i-1] );
        
                if( pt2.y < pt1.y )
                {
                    pt2.y = pt2.y + 0.6 // box k aadhe size ka karo 
                }
                if( pt1.y < pt2.y )
                {
                    pt2.y = pt2.y - 0.6 // box k aadhe size ka karo 
                }
                endpos[i-1] =[]
                endpos[i-1].push( pt1 ) 
                endpos[i-1].push( pt2 )
        
                
            
                linestr[i-1] = new THREE.Line( geometry4, line_materials[strpart[ "str no" ] - 1] );
                if( step != "constraint" )
                {
                    scene.add( linestr[i-1] )
                }  
                if( step == "constraint" && i == substep )
                {
                    scene.add( linestr[i-1])
                }  
            } 
        
            if( strpart["second obj type"] == "<class 'blocksclass.blocks'>"  && strpart["first obj type"] == "<class 'blocksclass.blocks'>")
            {   
                angle = 3.14- stringdata[i].angle
                firstobj = meshk[ stringdata[i]["first obj"] - 1 ] 
                console.log( firstobj)
                pt1 =  new THREE.Vector3( meshk[stringdata[i]["first obj"] - 1].position.x, meshk[stringdata[i]["first obj"] - 1].position.y, meshk[stringdata[i]["first obj"] - 1].position.z )
                points[i-1] = []
                points[i-1].push( pt1 ) ;
                
                pt2 = new THREE.Vector3( meshk[stringdata[i]["second obj"] - 1].position.x, meshk[stringdata[i]["second obj"] - 1].position.y, meshk[stringdata[i]["second obj"] - 1].position.z )
                
                console.log( pt2 )
                points[i-1].push( pt2 );
                const geometry4 = new THREE.BufferGeometry().setFromPoints( points[i-1] );
        
                if( pt2.y < pt1.y )
                {
                    pt2.y = pt2.y + 0.6 // box k aadhe size ka karo 
                }
                if( pt1.y < pt2.y )
                {
                    pt2.y = pt2.y - 0.6 // box k aadhe size ka karo 
                }
                endpos[i-1] =[]
                endpos[i-1].push( pt1 ) 
                endpos[i-1].push( pt2 )
            
                linestr[i-1] = new THREE.Line( geometry4, line_materials[strpart[ "str no"] - 1] );
                if( step != "constraint" )
                {
                    scene.add( linestr[i-1] )
                }  
                if( step == "constraint" && i == substep )
                {
                    scene.add( linestr[i-1])
                }  
            } 
        }
        //debugger
        //console.log(linestr[0])
        //debugger
        /*const points1 =[]
        points1.push( new THREE.Vector3( 0.4,2,0) );
        points1.push( new THREE.Vector3( 0.4, 0 ,0 ) );
        const geometry5 = new THREE.BufferGeometry().setFromPoints( points1 );
            
        const line1 = new THREE.Line( geometry5, material4 );
        scene.add( line1 )*/
        var realpts_x= []
        var realpts_y =[]
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
        var x1,x2,y1,y2
        var intersection_x
        var intersection_y1
        var intersection_y2
        var ip_x = new Array( n_b + n_p ); // intersection points
        var ip_y = new Array( n_b + n_p ); // intersection points y coordinate
        var a_from 
        var a_to
        var arrow_from = new Array( n_b + n_p ); //new THREE.Vector3( 0, 0.9, 0 );
        var arrow_to = new Array( n_b + n_p );//new THREE.Vector3( 0, 0.9+0.7, 0 );
        var cone = [];
        var arrowHelper =[]; 
        var arrow_direction;
        var arrow_length
        const geometryc = new THREE.ConeGeometry( 0.1, 0.2, 32 );
         const materialc = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        
        // finding the cutting points 
        for( i=0; i < n_b; i++)
        {
            console.log(meshk[i])
            realpts_x[i] = []
            realpts_y[i] = []
            ip_x[i] =[];
            ip_y[i] =[]; 
            arrow_from[i] = [];
            arrow_to[i] =[];
            //debugger;
            for(j=0; j < linestr.length; j++)
            {   
                 
                 var endpt1 =[];
                 var endpt2 =[];
                if( ( stringdata[ j+1 ][ "first obj type" ] == "<class 'blocksclass.blocks'>" && ( stringdata[ j+1 ][ "first obj" ] - 1 ) == i ) ||
                    ( stringdata[ j+1 ][ "second obj type" ] == "<class 'blocksclass.blocks'>" && ( stringdata[ j+1 ][ "second obj" ] - 1 ) == i ) )
                {
                    slope =  ( linestr[j].geometry.attributes.position.array[1] - linestr[j].geometry.attributes.position.array[4] )/ ( linestr[j]
                    .geometry.attributes.position.array[0] - linestr[j].geometry.attributes.position.array[3])
                //console.log(linestr)
                   // debugger
                    if( Math.abs( slope ) > 100 )
                    {
                        intersection_x = (linestr[j].geometry.attributes.position.array[0] + linestr[j].geometry.attributes.position.array[3])/2;
                        if( ( stringdata[j+1]["first obj"] -1 == i) && stringdata[ j+1 ][ "first obj type" ] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[4] > linestr[j].geometry.attributes.position.array[1]))
                        {
                            intersection_y1 = meshk[i].position.y + 0.9
                            a_to = new THREE.Vector3( intersection_x, intersection_y1 + 0.7, 0 );
                        }
                        if( ( stringdata[j+1]["second obj"] -1 == i) && stringdata[ j+1 ][ "second obj type" ] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[4] > linestr[j].geometry.attributes.position.array[1]))
                        {
                            intersection_y1 = meshk[i].position.y - 0.9
                            a_to = new THREE.Vector3( intersection_x, intersection_y1 - 0.7, 0 );
                        }
                        if( ( stringdata[j+1]["second obj"] -1 == i) && stringdata[ j+1 ][ "second obj type" ] == "<class 'blocksclass.blocks'>" && (linestr[j].geometry.attributes.position.array[1] > linestr[j].geometry.attributes.position.array[4]))
                        {
                            intersection_y1 = meshk[i].position.y + 0.9
                            a_to = new THREE.Vector3( intersection_x, intersection_y1 + 0.7, 0 );
                        }
        
        
                        ip_x[i].push( intersection_x )
                        ip_y[i].push( intersection_y1 )
                        a_from = new THREE.Vector3( intersection_x, intersection_y1, 0 );
                        
                        arrow_from[i].push( a_from )
                        arrow_to[i].push( a_to )
                        
        
                    }
                }    
        
              /*  if( ( stringdata[ j+1 ][ "first obj type" ] == "<class 'blocksclass.blocks'>" && ( stringdata[ j+1 ][ "first obj" ] - 1 ) == i ) 
                {
                    slope =  ( linestr[j].geometry.attributes.position.array[1] - linestr[j].geometry.attributes.position.array[4] )/ ( linestr[j].
                    geometry.attributes.position.array[0] - linestr[j].geometry.attributes.position.array[3])
                //console.log(linestr)
        
                dis_line =  Math.pow( Math.pow( linestr[j].geometry.attributes.position.array[1] - linestr[j].geometry.attributes.position.array[4],2 ) +  Math.pow( linestr[j].
                    geometry.attributes.position.array[0] - linestr[j].geometry.attributes.position.array[3], 2 ), 0.5 );
        
                    cos_theta =  
                    
                        intersection_x = meshk[i].position.x + 0.9 * cos_theta
                        intersection_y1 = meshk[i].position.y + 0.9 
        
                        ip_x[i].push( intersection_x )
                        ip_y[i].push( intersection_y1 )
                        a_from = new THREE.Vector3( intersection_x, intersection_y1, 0 );
                        a_to = new THREE.Vector3( intersection_x, intersection_y1 + 0.7, 0 );
                        arrow_from[i].push( a_from )
                        arrow_to[i].push( a_to )
                        
        
                    
                } */   
        
                
         
        
        
        
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
        
        for( i=0; i < n_p; i++)
        {
            
            ip_x[i+n_b] =[];
            ip_y[i+n_b] =[]; 
            arrow_from[i+n_b] = [];
            arrow_to[i+n_b] =[];
            //debugger;
            for(j=0; j < linestr.length; j++)
            {   
                 
                 var endpt1 =[];
                 var endpt2 =[];
                if( ( stringdata[ j+1 ][ "first obj type" ] == "<class 'blocksclass.pulleys'>" && ( stringdata[ j+1 ][ "first obj" ] - 1 ) == i ) ||  
                ( stringdata[ j+1 ][ "second obj type" ] == "<class 'blocksclass.pulleys'>" && ( stringdata[ j+1 ][ "second obj" ] - 1 ) == i ) )
                {
                    slope =  ( linestr[j].geometry.attributes.position.array[1] - linestr[j].geometry.attributes.position.array[4] )/ ( linestr[j]
                    .geometry.attributes.position.array[0] - linestr[j].geometry.attributes.position.array[3])
                //console.log(linestr)
        
                    if( Math.abs( slope ) > 100 )
                    {
                        intersection_x = (linestr[j].geometry.attributes.position.array[0] + linestr[j].geometry.attributes.position.array[3])/2;
                        intersection_y1 = meshp[i].position.y - Math.pow( 1.2*1.2 - Math.pow( meshp[i].position.x,2), 0.5); 
        
                        ip_x[i+n_b].push( intersection_x )
                        ip_y[i+n_b].push( intersection_y1 )
        
                        a_from = new THREE.Vector3( intersection_x, intersection_y1, 0 );
                        a_to = new THREE.Vector3( intersection_x, intersection_y1 - 0.7, 0 );
                        arrow_from[i+n_b].push( a_from )
                        arrow_to[i+n_b].push( a_to )
        
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
        
        
        
        //debugger
        var chotasphere =[]
        
        var cs_count =0;  
        for( i=1; i < n_b+1; i++ )
        {
            //debugger
            for( j=0; j < ip_x[i-1].length; j++)
            {    
            
            const materialch = new THREE.MeshBasicMaterial()
            materialch.color = new THREE.Color(0xffffff)
                    //materialfbd.transparent = true
                    //materialfbd.opacity = 0.8
                    chotasphere[cs_count] =  new THREE.Mesh(
                        new THREE.SphereGeometry(0.1, 16, 16),
                        materialch
                    )
                    
                    chotasphere[cs_count].position.x = ip_x[i-1][j];
                    chotasphere[cs_count].position.y = ip_y[i-1][j];
        
                    arrow_direction = arrow_to[i-1][j].clone().sub(arrow_from[i-1][j]);
                    arrow_length = arrow_direction.length();
                    arrowHelper[cs_count] = new THREE.ArrowHelper(arrow_direction.normalize(), arrow_from[i-1][j], arrow_length, 0xffffff );
                    cone[cs_count] = new THREE.Mesh( geometryc, materialc );
        
                    
                    cone[cs_count].position.x = ip_x[i-1][j];
                    cone[cs_count].position.y = arrow_to[i-1][j].y;//ip_y[i-1][j] + 0.5;
            
                    if( arrow_to[i-1][j].y < arrow_from[i-1][j].y )
                    {
                        cone[cs_count].rotation.z = 3.14
                    }              
        
        
                    if( step == "fbd" && substep == i )
                    {
                        scene.add( chotasphere[cs_count]);
                        scene.add( arrowHelper[cs_count] );
                        scene.add( cone[cs_count] );
                    }
        
                     
          
         
        
        
            
            
             
        
        
        
         
         
        
        
        
                    cs_count = cs_count + 1;
                    
                    
                       
                       
            }        
        
            
        }
        
        var cs_cons =[]
        
        var cs_count_cons =0; 
        
        for( i=1; i < n_s+1; i++ )
        {
            for( j=0; j < 2; j++)
            {    
            
            const materialch = new THREE.MeshBasicMaterial()
            materialch.color = new THREE.Color(0xffffff)
                    //materialfbd.transparent = true
                    //materialfbd.opacity = 0.8
                    cs_cons[cs_count_cons] =  new THREE.Mesh(
                        new THREE.SphereGeometry(0.1, 16, 16),
                        materialch
                    )
                    
                    cs_cons[cs_count_cons].position.x = endpos[i-1][j].x;
                    cs_cons[cs_count_cons].position.y = endpos[i-1][j].y;
                    if( step == "constraint"  && substep == i )
                    {    
                        scene.add( cs_cons[cs_count_cons] );
                    }    
                    
        
                     
          
         
        
        
            
            
             
        
        
        
         
         
        
        
        
                    cs_count_cons = cs_count_cons + 1;
                    
                    
                       
                       
            }        
        
            
        }
        
        for( i=1; i < n_p+1; i++ )
        {
            for( j=0; j < ip_x[i+n_b-1].length; j++)
            {    
            
            const materialch = new THREE.MeshBasicMaterial()
            materialch.color = new THREE.Color(0xffffff)
                    //materialfbd.transparent = true
                    //materialfbd.opacity = 0.8
                    chotasphere[cs_count] =  new THREE.Mesh(
                        new THREE.SphereGeometry(0.1, 16, 16),
                        materialch
                    )
                    
                    chotasphere[cs_count].position.x = ip_x[i+n_b-1][j];
                    chotasphere[cs_count].position.y = ip_y[i+n_b-1][j];
        
                    arrow_direction = arrow_to[i+n_b-1][j].clone().sub(arrow_from[i+n_b-1][j]);
                     arrow_length = arrow_direction.length();
                     arrowHelper[cs_count] = new THREE.ArrowHelper(arrow_direction.normalize(), arrow_from[i+n_b-1][j], arrow_length, 0xffffff );
                    cone[cs_count] = new THREE.Mesh( geometryc, materialc );
        
                    
                    cone[cs_count].position.x = ip_x[i-1+n_b][j];
                    cone[cs_count].position.y = ip_y[i-1+n_b][j] - 0.5;  
                    cone[cs_count].rotation.z = 3.14  
        
        
                    if( step == "fbd" && substep == i+n_b )
                    {
                    scene.add( chotasphere[cs_count]);
                    scene.add( arrowHelper[cs_count] );
                        scene.add( cone[cs_count] );
                    }
                    cs_count = cs_count + 1;
                    
                    
                       
                       
            }        
        
            
        }
        
        
        
        
        
        //console.log(realpts) 
        const clock = new THREE.Clock()
        var animation_on =1;
        var line_pos; 
        var line_size ; 
        var Time_tillnow =0; 
        var time_main;
        
        const tick = () =>
        {
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
        
            if( step == "motion" || step == "constraint" )
            {
            for(i=1; i < n_s+1; i++ )
            {   
            line_pos = linestr[i-1].geometry.attributes.position.array;
            line_size = ((line_pos[0] - line_pos[3] )**2 + (line_pos[1] - line_pos[4] )**2 + (line_pos[2] - line_pos[5] )**2)**0.5 ;
        
                if( line_size < 1 )
                {
                    animation_on =0; 
                }    
            }
        
            if( animation_on == 0 )
            {
                for( i=1; i < n_b+1; i++ )
                {
                
                    meshk[i-1].position.x = block_ini_pos_x[i-1];
                    meshk[i-1].position.y = block_ini_pos_y[i-1];
                    Time_tillnow = elapsedTime
                     
        
                }
                animation_on =1; 
            }
        
            for( i=1; i < n_b+1; i++ )
            {
                
                time_main = elapsedTime - Time_tillnow;    
                
                if( step == "motion")
                {
                    meshk[i-1].position.x = meshk[i-1].position.x + 0.5*(blockdata[i].acceleration[0])*time_main*time_main/5000;
                    meshk[i-1].position.y = meshk[i-1].position.y + 0.5*(blockdata[i].acceleration[1])*time_main*time_main/5000;
                }
                
                if( step == "constraint" &&  ( stringdata[substep]["first obj type"]  == "<class 'blocksclass.blocks'>"  || stringdata[substep]["second obj type"]  == "<class 'blocksclass.blocks'>" ))
                {
                    if( stringdata[substep]["first obj type"]  == "<class 'blocksclass.blocks'>" )
                    {
                        if( stringdata[substep]["first obj"]  == i && subsubstep == 1 )
                        {
                            meshk[i-1].position.x = meshk[i-1].position.x + 0.5*(blockdata[i].acceleration[0])*time_main*time_main/5000;
                            meshk[i-1].position.y = meshk[i-1].position.y + 0.5*(blockdata[i].acceleration[1])*time_main*time_main/5000;
                        }
                    }
        
                    if( stringdata[substep]["second obj type"]  == "<class 'blocksclass.blocks'>" )
                    {
                        if( stringdata[substep]["second obj"]  == i && subsubstep == 2 )
                        {
                            meshk[i-1].position.x = meshk[i-1].position.x + 0.5*(blockdata[i].acceleration[0])*time_main*time_main/5000;
                            meshk[i-1].position.y = meshk[i-1].position.y + 0.5*(blockdata[i].acceleration[1])*time_main*time_main/5000;
                        }
                    }
        
        
                }
        
            
            }
            
            
        
        cs_count_cons =0
        for(i=1; i < n_s+1; i++ )
        {   
            
            strpart = stringdata[i];
            
            //if( line_size < 0 )
            //console.log( strpart["first obj type"])
            if( strpart["first obj type"] == "<class 'blocksclass.blocks'>"  && strpart["second obj type"] == "<class 'blocksclass.pulleys'>")
            {    
                linestr[i-1].geometry.attributes.position.needsUpdate = true;
                linestr[i-1].geometry.attributes.position.array[1] = meshk[stringdata[i]["first obj"] - 1].position.y
                linestr[i-1].geometry.attributes.position.array[0] = meshk[stringdata[i]["first obj"] - 1].position.x
        
                cs_cons[cs_count_cons].position.x = linestr[i-1].geometry.attributes.position.array[0]
                cs_cons[cs_count_cons].position.y = linestr[i-1].geometry.attributes.position.array[1] +0.6 ;
                
                cs_count_cons = cs_count_cons + 2
                
            
                
            }
            
            if( strpart["second obj type"] == "<class 'blocksclass.blocks'>"  && strpart["first obj type"] == "<class 'blocksclass.pulleys'>")
            {   
                linestr[i-1].geometry.attributes.position.needsUpdate = true;
                linestr[i-1].geometry.attributes.position.array[3] = meshk[stringdata[i]["second obj"] - 1].position.x
                linestr[i-1].geometry.attributes.position.array[4] = meshk[stringdata[i]["second obj"] - 1].position.y
        
                cs_cons[cs_count_cons+1].position.x = linestr[i-1].geometry.attributes.position.array[3]
                cs_cons[cs_count_cons+1].position.y = linestr[i-1].geometry.attributes.position.array[4] + 0.6 ;
                
                cs_count_cons = cs_count_cons + 2
            } 
        
            if( strpart["second obj type"] == "<class 'blocksclass.blocks'>"  && strpart["first obj type"] == "<class 'blocksclass.blocks'>")
            {   
                linestr[i-1].geometry.attributes.position.needsUpdate = true;
                linestr[i-1].geometry.attributes.position.array[1] = meshk[stringdata[i]["first obj"] - 1].position.y
                linestr[i-1].geometry.attributes.position.array[4] = meshk[stringdata[i]["second obj"] - 1].position.y
        
                cs_cons[cs_count_cons].position.y = linestr[i-1].geometry.attributes.position.array[1] + 0.6 ; 
                cs_cons[cs_count_cons+1].position.y = linestr[i-1].geometry.attributes.position.array[4] - 0.6 ;
                
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


        mountRef.current.appendChild(renderer.domElement);
        return () => mountRef.current.removeChild(renderer.domElement);
    }, [props]);

    return (
        <div ref={mountRef}>

        </div>
    );



}

export default TestThree;
