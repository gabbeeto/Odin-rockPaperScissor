import {createRoot} from 'react-dom/client'
import './index.css'
import Header from './component/Header.jsx'
import MainElement from './component/main/MainElement.jsx'
import Footer from './component/Footer.jsx'


let root = createRoot(document.getElementById('root'));


export default function renderWebsite() {

	root.render(<div className=''>

		< Header />

		<MainElement />
		<Footer />
		<dialog className='bg-emerald-700 p-10 rounded-lg backdrop:bg-emerald-400 backdrop:opacity-45' onCancel={e => {e.preventDefault()}}  >


		<button
		onClick={() => {window.location.reload(true)}}
		className='bg-orange-400 rounded-md p-2 hover:bg-teal-400 border-transparent'>play again</button></dialog>

	</div>
	)

}
renderWebsite()


