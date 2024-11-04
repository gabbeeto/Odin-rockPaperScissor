
import Rock from './../../objectsIn3D/rock.glb'
import Paper from './../../objectsIn3D/paper.glb'
import Scissor from './../../objectsIn3D/scissor.glb'

import Displayer from "../display3DObjects/DisplayerFor3D.jsx"


function ItemChoice({stage, id}) {

	const selectorStyle = 'bg-orange-500 p-4 hover:bg-amber-400  rounded-lg ';
	let directionForItem = 1;

	return (<div onMouseEnter={() => {directionForItem = -5}} onMouseLeave={() => {directionForItem = 1}} className={selectorStyle} >
		<Displayer stage={stage} widthAndHeightArray={[window.innerWidth * 0.25, window.innerHeight * .25]} extraFunctionality={object2 => {object2.rotation.y += .01 * directionForItem}} idForObject={id} />
	</div>)
}


export default function Selector() {
	const selectorStyle = 'bg-orange-500 p-4 hover:bg-amber-400  rounded-lg ';
	return <section className='flex justify-center flex-col items-center gap-2 border-orange-400 border-2 p-4 rounded-lg m-4 '>

		<h2 className=' bg-orange-400  text-black p-4 rounded-lg'>select one</h2>
		<div className='flex justify-center gap-4 items-center '>
			<ItemChoice id='paper' stage={Paper} />
			<ItemChoice id='rock' stage={Rock} />
			<ItemChoice id='scissor' stage={Scissor} />
		</div>
	</section>

}

