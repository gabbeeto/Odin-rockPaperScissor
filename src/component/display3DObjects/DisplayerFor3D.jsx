import {useEffect} from 'react'
import * as three from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

window.canvasId = [];




export default function ({stage, widthAndHeightArray = [window.innerWidth, window.innerHeight], alpha = true, extraFunctionality = function () {}, idForObject = `scene${window.canvasId.length + 1}`}) {





	let [width, height] = widthAndHeightArray;
	useEffect(() => load3DScene(idForObject, stage, width, height, alpha, extraFunctionality), [])

	return (
		<canvas id={idForObject} className='p-5'>game displayer</canvas>
	)
}

function load3DScene(canvas, stage, width, height, alpha = true, extraFunctionality) {
	let scene = new three.Scene();
	console.log(`#${canvas}`)
	let sceneRender = new three.WebGLRenderer({
		canvas: document.querySelector(`#${canvas}`),
		alpha
	})

	sceneRender.setSize(width, height)

	scene.add(new three.AmbientLight())
	loadStageFile(stage, scene)

	sceneRender.setAnimationLoop(() => {animate(extraFunctionality, scene, sceneRender)})

	window.canvasId.push(canvas);
}


function loadStageFile(stageText,scene) {
	let objectLoader = new GLTFLoader();

	objectLoader.load(stageText, (file) => {
		scene.add(file.scene)
	})
}

function animate(extraFunctionality = () => {}, scene, sceneRender) {
	if (scene.children[1]) {
		let object = scene.children[1].children[0]
		let camera = scene.children[1].children[1]

		extraFunctionality(object, camera)
		sceneRender.render(scene, camera);
	}

}
