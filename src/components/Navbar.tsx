
import { Link } from 'react-router-dom';
import Search from './Search';

type NavbarProps = {
    darkTheme: Boolean,
    setDarkTheme: (nextState: boolean) => void,
}

const Navbar = ({ setDarkTheme, darkTheme }: NavbarProps) => {
  return (
    <div className="p-5 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
        <div className="flex justify-between items-center space-x-5 w-screen ">
            <Link to="/">
                <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
                    Vexgle
                </p>
            </Link>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl h-12 w-12 dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:bg-slate-100">{darkTheme ? '💡' : '🌙'}</button>
        </div>
        <Search />
  </div>
  )
}

export default Navbar