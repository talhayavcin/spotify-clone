import './App.css';
import Sidebar from './layout/Sidebar'
import Content from './layout/Content'
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <div className='flex min-h-screen max-w-full wrapper'>
      <Sidebar />
      <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
