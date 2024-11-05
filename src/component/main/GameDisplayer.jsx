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

export default function MainElement() {


	return <section className='flex justify-center items-center flex-col'>
		<Displayer stage={CloudStage} widthAndHeightArray={[window.innerWidth * .8, window.innerHeight * .8]} idForObject='stage1'

			extraFunctionality={objects => {
				RotateToTheRightAndComeBack();

				addTheAppropiateChild(objects)


				objects[0].rotation.y = rotation



			}}
		/>

		<h2 className='text-orange-400'>{
			window.currentChoices && window.currentChoices.winner != "=" ? `${window.currentChoices.winner} has won because human has chosen ${window.currentChoices.humanChoice} and computer has chosen ${window.currentChoices.computerChoice}` : window.currentChoices.winner == "=" ? `it's even because both has chosen ${currentChoices.humanChoice}` : ``

		}

		</h2>
		<h2 className='text-orange-400'>{`human:${window.score.human}`}</h2>
		<h2 className='text-orange-400'>{`computer:${window.score.computer}`}</h2>
	</section>

}

