import {createRoot} from 'react-dom/client'
import './index.css'
import Header from './component/Header.jsx'
import MainElement from './component/main/MainElement.jsx'
import './component/main/logic.js'
import './component/display3DObjects/displayer.js'
createRoot(document.getElementById('root')).render(<div className=''>

	< Header />

	<MainElement />
</div>
)


