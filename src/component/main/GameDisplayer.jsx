import CloudStage from './../../objectsIn3D/stage.glb'
import Displayer from "../display3DObjects/DisplayerFor3D.jsx"
import {createRoot} from 'react-dom/client'

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

function addTheAppropiateChild(objects) {
	if (window.currentChoices) {
		let lastestChildrenIndex = objects[0].children.length - 2
		let almostLastestChildrenIndex = objects[0].children.length - 1
		let lastestChildren = objects[0].children[lastestChildrenIndex];
		let almostLastestChildren = objects[0].children[almostLastestChildrenIndex];
		lastestChildren.children = [];
		almostLastestChildren.children = [];
		window.currentChoices.humanChoice == "rock"
		window.rockPaperScissorModels
		for (let model of rockPaperScissorModels) {
			if (model.name == window.currentChoices.humanChoice && model.name == window.currentChoices.computerChoice) {
				let model2 = model.clone()
				lastestChildren.add(model);
				almostLastestChildren.add(model2);
			}
			else if (model.name == window.currentChoices.humanChoice) {
				almostLastestChildren.add(model);
			}

			else if (model.name == window.currentChoices.computerChoice) {
				lastestChildren.add(model);
			}
		}
	}
}

export function reRenderMainElement() {
	createRoot(document.querySelector('#cStage')).render(<MainElement />)
}



export default function MainElement() {
		const winnerStyle = {
			computer:  "bg-emerald-500",
			human: "bg-orange-500",
		};

	return <section id="cStage" className='flex justify-center items-center flex-col'>
		<Displayer stage={CloudStage} widthAndHeightArray={[window.innerWidth * .6, window.innerHeight * .6]} idForObject='stage1'

			extraFunctionality={objects => {
				RotateToTheRightAndComeBack();

				addTheAppropiateChild(objects)


				objects[0].rotation.y = rotation



			}}
		/>

		<h2 className='text-orange-400'>{
			window.currentChoices && window.currentChoices.winner != "=" ? <> <span className={`p-1 text-black rounded-md ${winnerStyle[window.currentChoices.winner]}`}>{window.currentChoices.winner} </span> has won because human has chosen {window.currentChoices.humanChoice} and computer has chosen {window.currentChoices.computerChoice} </> : window.currentChoices.winner == "=" ? `it's even because both has chosen ${currentChoices.humanChoice}` : ``

		}

		</h2>
		<div className='flex gap-2 my-1'>
			<h2 className='bg-orange-400 p-1 rounded-lg'>{<>human: <span className='bg-orange-500 p-1 rounded-md'>{window.score.human}</span></>}</h2>
			<h2 className='bg-emerald-400 p-1 rounded-lg'>{<>computer: <span className='bg-emerald-500 p-1 rounded-md'>{window.score.computer} </span></>}</h2>
		</div>
	</section>

}

