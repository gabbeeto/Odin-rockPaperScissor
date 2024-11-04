
import Rock from './../../objectsIn3D/rock.glb'
import Paper from './../../objectsIn3D/paper.glb'
import Scissor from './../../objectsIn3D/scissor.glb'

import Displayer from "../display3DObjects/DisplayerFor3D.jsx"




export default function Selector() {
	const selectorStyle = 'bg-orange-500  rounded-full ';

	return <section className='flex justify-center flex-col items-center gap-2 border-orange-400 border-2 p-4 rounded-lg m-4'>

		<h2 className='text-orange-400 bg-orange-400 text-black p-4 rounded-full'>select one</h2>
		<div className='flex justify-center gap-4 items-center '>
			<div className={selectorStyle}>
				<Displayer stage={Paper} widthAndHeightArray={[window.innerWidth * 0.3, window.innerHeight * .3]} extraFunctionality={object2 => {object2.rotation.y += .01}} idForObject='paper' />
			</div>
			<div className={selectorStyle}>
				<Displayer stage={Rock} widthAndHeightArray={[window.innerWidth * 0.3, window.innerHeight * .3]} extraFunctionality={object => {object.rotation.y += .01}} idForObject='rock' />
			</div>
			<div className={selectorStyle}>
				<Displayer stage={Scissor} widthAndHeightArray={[window.innerWidth * 0.3, window.innerHeight * .3]} extraFunctionality={object => {object.rotation.y += .01}} idForObject='scissor' />
			</div>
		</div>
	</section>

}

