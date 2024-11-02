import {createRoot} from 'react-dom/client'
import './index.css'
import Header from './component/Header.jsx'
import MainElement from './component/main/MainElement.jsx'

createRoot(document.getElementById('root')).render(<div className=''>

	< Header />

	<MainElement />
</div>
)


