import {createRoot} from 'react-dom/client'
import './index.css'
import Header from './component/Header.jsx'
import MainElement from './component/main/MainElement.jsx'


let root = createRoot(document.getElementById('root'));


export default function renderWebsite() {

	root.render(<div className=''>

		< Header />

		<MainElement />
	</div>
	)

}
renderWebsite()


