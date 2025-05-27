import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';


const Errorpage = () => {
    return (
      <div>
        <Header></Header>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
          <div className="max-w-xl text-center">
            <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              The page you are looking for might have been removed or is
              temporarily unavailable.
            </p>
            <Link to="/"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Go Back Home
            </Link>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Errorpage;