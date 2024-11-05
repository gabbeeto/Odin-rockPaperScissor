
import Rock from './../../objectsIn3D/rock.glb'
import Paper from './../../objectsIn3D/paper.glb'
import Scissor from './../../objectsIn3D/scissor.glb'

import Displayer from "../display3DObjects/DisplayerFor3D.jsx"
import playOneRound from './logic.js'
import setScore from '../../matchlogic'
import {reRenderMainElement} from './GameDisplayer'

window.rockPaperScissorModels = []

function ItemChoice({stage, id, choiceId}) {


	function choose() {
		window.currentChoices = playOneRound(choiceId)
		directionForItem = 1;
		setScore()
		// renderWebsite()
		reRenderMainElement()
	}
	function pushElementToGlobal(model) {
		let modelInluded = false
		for (let arrayModel of rockPaperScissorModels) {
			if (model.name == arrayModel.name) {
				modelInluded = true
			}
		}
		if (modelInluded == false) {
			rockPaperScissorModels.push(model.clone())
		}



	}

	const selectorStyle = 'bg-orange-500 p-2 hover:bg-amber-400  rounded-lg  cursor-pointer';
	let directionForItem = 1;

	return (<div
		onMouseEnter={() => {directionForItem = -6}}
		onMouseLeave={() => {directionForItem = 1}}
		onClick={choose}
		className={selectorStyle}>

		<Displayer stage={stage} widthAndHeightArray={[window.innerWidth * 0.15, window.innerHeight * .15]} idForObject={id}
			extraFunctionality={objects => {

				if (!objects[0]) {
					console.log(objects)
				}
				objects[0].rotation.y += .01 * directionForItem;
				pushElementToGlobal(objects[0])
			}} />

	</div>)
}


export default function Selector() {
	const selectorStyle = 'bg-orange-500 p-2 hover:bg-amber-400  rounded-lg ';
	return <section className='flex justify-center flex-col items-center gap-2 bg-orange-200  p-2 rounded-lg m-2 '>

		<h2 className=' bg-orange-400  text-black p-4 rounded-lg'>select one</h2>
		<div className='flex justify-center gap-2 items-center '>
			<ItemChoice id='rock' stage={Rock} choiceId={0} />
			<ItemChoice id='paper' stage={Paper} choiceId={1} />
			<ItemChoice id='scissor' stage={Scissor} choiceId={2} />
		</div>
	</section>
}

