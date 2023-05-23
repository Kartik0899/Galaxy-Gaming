import * as THREE from 'three'
import cloud from '../assets/smoke-1.png'
import gsap from 'gsap'
import spaceship from '../assets/starwars-tie-fighter.glb'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const buildCanvas = () => {

    /**
 * Base
 */
// Canvas


const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sizes
 */
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



/**
 * Camera
 */
// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0,0,10)
cameraGroup.add(camera)



//Clouds

let cloudParticles = []

let cloudDirectionalLight = new THREE.DirectionalLight(0x752ade)
cloudDirectionalLight.position.set(0,0,50)
// scene.add(cloudDirectionalLight)

let cloudRenderer = new THREE.WebGLRenderer()
cloudRenderer.setSize(sizes.width, sizes.height)
cloudRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

let orangeLight = new THREE.PointLight(0x1ac6ff,50,18,1.2);
orangeLight.position.set(4,3,7);
// scene.add(orangeLight);

let redLight = new THREE.PointLight(0xd8547e,50,26,1.2);
redLight.position.set(6,8,6);
// scene.add(redLight);

let blueLight = new THREE.PointLight(0x3677ac,50,30,1.2);
blueLight.position.set(4,5,7);
// scene.add(blueLight);

let ambient = new THREE.AmbientLight(0x555555)
// scene.add(ambient)

const cloudGroup = new THREE.Group()

let loader = new THREE.TextureLoader();
loader.load(cloud, function(texture){


    //console.log(cloud)

    let cloudGeo = new THREE.PlaneBufferGeometry(500, 500)
    let cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true
    })

    for(let p=0; p<40; p++){
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial)

        cloud.position.set(
            (Math.random() - 0.5) * 60 ,
            ((Math.random() - 0.5) * 150) -55,
            ((Math.random()- 0.5) * 35) -26.8
        )
        
        cloud.scale.set(0.065, 0.065, 0.065)
        cloud.rotation.y = 0
        cloud.rotation.x = 0
        cloud.rotation.z = (Math.random() - 0.5) * Math.PI
        
        cloud.material.opacity = 0.55

        cloudParticles.push(cloud)

        //console.log(cloud)

        let blueLight = new THREE.PointLight(0x3677ac,50,10,1.7);
        blueLight.position.set((Math.random() - 0.5) * 8,5,7);
        scene.add(blueLight)

        cloudGroup.add(cloud);
    }

    render()

})



    
cloudGroup.add(cloudDirectionalLight)
cloudGroup.add(orangeLight)
cloudGroup.add(blueLight)
cloudGroup.add(redLight)
cloudGroup.add(ambient)

cloudGroup.position.y = 0
cloudGroup.position.z = -5

scene.add(cloudGroup)

//spaceship

var gltfLoader = new GLTFLoader();
let spaceshipModel;
let spaceshipRenderer = new THREE.WebGLRenderer()

gltfLoader.load( spaceship, function ( data ) {

  
    spaceshipModel = data.scene;
     spaceshipModel.position.set(-2.5, -50, 0);
     spaceshipModel.rotation.y = Math.PI / 5
     spaceshipModel.scale.set(0.3, 0.3, 0.3)

    scene.add( spaceshipModel );
    spaceshipRender()
});


function spaceshipRender() {

    spaceshipModel.rotation.z += 0.005

    spaceshipRenderer.render(scene,camera);
    requestAnimationFrame(spaceshipRender);
  }





function render() {

    cloudParticles.forEach(p => {
        p.rotation.z -= 0.001
    })

    cloudRenderer.render(scene,camera);
    requestAnimationFrame(render);
  }





/**
 * Objects
 */
const objectsDistance = 10


/**
 * Particles
 */
// Geometry
const particlesCount = 2000
const positions = new Float32Array(particlesCount * 3)

for(let i = 0; i < particlesCount; i++)
{
    positions[i * 3 + 0] = (Math.random() - 0.5) * 40
    positions[i * 3 + 1] = ((Math.random() - 0.5) * 150) -55
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40 
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: '#ffeded',
    sizeAttenuation: true,
    size: 0.03
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)



window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

let prevSec = 0

const animateCamera = (sec) => {

    console.log(prevSec, sec)

    prevSec = sec

    gsap.to(
            camera.position,
            {
                duration: 1.3,
                ease: 'power2.inOut',
                y: sec *(-100 * 0.1)
            },
            
        )

    // console.log(camera)
}

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Animate meshes
    

    // Animate camera
    let currSec = window.section || 0

    if(currSec != prevSec)  animateCamera(currSec)
    
    // camera.position.z = - scrollY / sizes.height * objectsDistance * 0.2
    //cloudGroup.position.y = - (scrollY / sizes.height * objectsDistance) 
    //cloudGroup.position.z = (scrollY / sizes.height * objectsDistance) * 0.5

    const parallaxX = cursor.x 
    const parallaxY = - cursor.y 

    // const newSection = Math.round(window.scrollY / sizes.height * 10) / 10

    // if(newSection >= 1.7 && newSection <= 2.4){
    //     particles.rotation.y += 0.008
    // }
    // else{
    //     particles.rotation.y += 0.001
    // }
    
    // spaceshipModel.rotation.z += 0.01

    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()





}

export default buildCanvas