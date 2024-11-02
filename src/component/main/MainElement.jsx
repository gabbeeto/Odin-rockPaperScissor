import CloudStage from './../../objectsIn3D/stage.glb'

import Displayer from "../display3DObjects/DisplayerFor3D.jsx"

export default function MainElement() {
	return <main>
		<Displayer stage={CloudStage} widthAndHeightArray={[window.innerWidth * .8, window.innerHeight * .8]} extraFunctionality={object => {object.rotation.y += .001}} idForObject='stage1'/>

		<Displayer stage={CloudStage} widthAndHeightArray={[window.innerWidth * .8, window.innerHeight * .8]} extraFunctionality={lala => {lala.rotation.z += .001}} idForObject='stage2'/>

	</main>

}

