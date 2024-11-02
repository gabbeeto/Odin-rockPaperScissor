
import CloudStage from './../../objectsIn3D/stage.glb'

import Displayer from "../display3DObjects/DisplayerFor3D.jsx"

let rotation = 0
let rotationToRightDir = true
const rotationSpeed = 0.005

function RotateToTheRightAndComeBack() {
	if (rotation > .4) {
		rotationToRightDir = false
	}
	else if (rotation < -.4) {
		rotationToRightDir = true
	}

	rotation += rotationToRightDir ? rotationSpeed : -rotationSpeed
}


export default function MainElement() {
	return <section className='flex justify-center items-center'>


		<Displayer stage={CloudStage} widthAndHeightArray={[window.innerWidth * .8, window.innerHeight * .8]} extraFunctionality={object => {RotateToTheRightAndComeBack(); object.rotation.y = rotation}} idForObject='stage1' />

	</section>

}

