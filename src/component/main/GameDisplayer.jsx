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


	return <section className='flex justify-center items-center flex-col'>
		<Displayer stage={CloudStage} widthAndHeightArray={[window.innerWidth * .8, window.innerHeight * .8]} extraFunctionality={object => {RotateToTheRightAndComeBack(); object.rotation.y = rotation}} idForObject='stage1' />

		<h2 className='text-orange-400'>{
			window.currentChoices && window.currentChoices.winner != "=" ? `${window.currentChoices.winner} has won because human has chosen ${window.currentChoices.humanChoice} and computer has chosen ${window.currentChoices.computerChoice}` : window.currentChoices.winner == "=" ? `it's even because both has chosen ${currentChoices.humanChoice}` :``

		}

		</h2>
		<h2 className='text-orange-400'>{`human:${window.score.human}`}</h2>
		<h2 className='text-orange-400'>{`computer:${window.score.computer}`}</h2>
	</section>

}

