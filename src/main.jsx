import {createRoot} from 'react-dom/client'
import './index.css'
import Header from './component/Header.jsx'
import MainElement from './component/main/MainElement.jsx'
import './component/main/logic.js'
import './component/display3DObjects/displayer.js'
import * as three from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'


// const sceneRender = new three.WebGLRenderer({canvas: document.querySelector('#scene'), alpha: true})

// const scene = new three.Scene()
// const camera = new three.PerspectiveCamera(75, innerWidth / innerHeight, 0.0001, 100000)

// scene.add(new three.Mesh(
// 	new three.BoxGeometry(1, 1),
// 	new three.MeshPhongMaterial({color: 'blue'}))
// );

// sceneRender.render(scene, camera)

// const objectLoader = new GLTFLoader();

// objectLoader.load('./objectsIn3D/stage.glb', (mat) => console.log(mat))

createRoot(document.getElementById('root')).render(<div className=''>

	< Header />

	<MainElement />
</div>
)


