
import Rock from './../../objectsIn3D/rock.glb'
import Paper from './../../objectsIn3D/paper.glb'
import Scissor from './../../objectsIn3D/scissor.glb'

import Displayer from "../display3DObjects/DisplayerFor3D.jsx"




export default function Selector() {
	return <section className='flex justify-center items-center'>

		<Displayer stage={Paper} widthAndHeightArray={[window.innerWidth * 0.3, window.innerHeight * .3]} extraFunctionality={object2 => { object2.rotation.y += .01}} idForObject='paper' />

		<Displayer stage={Rock} widthAndHeightArray={[window.innerWidth * 0.3, window.innerHeight * .3]} extraFunctionality={object => { object.rotation.y += .01}} idForObject='rock' />

		<Displayer stage={Scissor} widthAndHeightArray={[window.innerWidth * 0.3, window.innerHeight * .3]} extraFunctionality={object => { object.rotation.y += .01}} idForObject='scissor' />

	</section>

}

