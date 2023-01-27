// import log from '../utils/coolog'
// import { AiOutlineLogout } from 'react-icons/ai'
// import { IoInvertModeOutline } from 'react-icons/io5'
// import Context from './Context'
// import { useContext } from 'react'

// export default function Header({ userName }) {
//     log.info('Header -> render')

//     const { logout } = useContext(Context)

//     const switchMode = () => document.querySelector('html').classNameList.toggle('dark')

//     return <header className="p-3 bg-dark text-white">
//     <div className="container">
//       <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//         <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
//           <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
//         </a>

//         <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//           <li><a  className="nav-link px-2 text-secondary">Home</a></li>
//           <li><a href="/login" className="nav-link px-2 text-white">Features</a></li>
//           <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
//           <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
//           <li><a href="#" className="nav-link px-2 text-white">About</a></li>
//         </ul>



//         <div className="text-end">
//           <button type="button" className="btn btn-outline-light me-2">Login</button>
//           <button type="button" className="btn btn-warning">Sign-up</button>
//         </div>
//       </div>
//     </div>
//   </header>
// }