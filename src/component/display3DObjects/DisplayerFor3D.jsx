import {useEffect} from 'react'
import * as three from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

window.canvasId = [];

export default function ({stage, widthAndHeightArray = [window.innerWidth, window.innerHeight], alpha = true, extraFunctionality = function () {}, idForObject = `scene${window.canvasId.length + 1}`, className = ``}) {

	// console.log(stage)
	let [width, height] = widthAndHeightArray;
	useEffect(() => load3DScene(idForObject, stage, width, height, alpha, extraFunctionality), [])

	return (
		<canvas className={className} id={idForObject} ></canvas>
	)
}

function load3DScene(canvas, stage, width, height, alpha = true, extraFunctionality) {
	let scene = new three.Scene();
	// console.log(`#${canvas}`)
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


function loadStageFile(stageText, scene) {
	let objectLoader = new GLTFLoader();

	objectLoader.load(stageText, (file) => {
		scene.add(file.scene)
	})
}

function animate(extraFunctionality = () => {}, scene, sceneRender) {
	if (scene.children[1]) {

		let object;
		let camera;



		for (let child of scene.children[1].children) {
			if (child.name.startsWith("0")) {
				camera = child
			}
			else {
				object = child
			}
		}

		extraFunctionality(object, camera)
		sceneRender.render(scene, camera);
	}

}
