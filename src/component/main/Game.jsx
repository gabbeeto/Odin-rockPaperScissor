import {useEffect} from 'react'
import * as three from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import stage from './../../objectsIn3D/stage2.glb'
import {degToRad} from 'three/src/math/MathUtils';


let sceneRender;

const scene = new three.Scene()
const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.0001, 100000)

camera.position.x = -9;
camera.position.z = 1;
camera.position.y = 5;
camera.rotateY(degToRad(-90))

// scene.add(new three.Mesh(
// 	new three.BoxGeometry(5, 5),
// 	new three.MeshBasicMaterial({color: 'blue'}))
// );


// scene.add(new three.Mesh(
// 	new three.BoxGeometry(5, 5),
// 	new three.MeshPhongMaterial({color: 'blue'}))
// );


const objectLoader = new GLTFLoader();

console.log(objectLoader)
console.log()

function animate() {

	sceneRender.render(scene, camera);
}

function load3DScene() {
	sceneRender = new three.WebGLRenderer({
		canvas: document.querySelector('#scene'),
		alpha: true
	})
	sceneRender.setSize(window.innerWidth * .8, window.innerHeight * .8)

	// console.log(sceneRender)

	// scene.add(new three.AxesHelper())
	// scene.add(new three.AmbientLight())
	loadStageFile()

	// Object3D.lightOff = true
	sceneRender.setAnimationLoop(animate)
}


function loadStageFile() {
	objectLoader.load(stage, (file) => {
		console.log(file.scene)

		scene.add(file.scene)
	})
}

export default function GameDisplayer() {

	useEffect(load3DScene, [])

	return (
		<div className='flex justify-center items-center'>
			<canvas id="scene" className='p-5'>game displayer</canvas>
		</div>
	)

}
