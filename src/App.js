import './App.css';
import Random from './component/Random';
import Tag from './component/Tag';

export default function App() {
  return (
    <div className="w-full min-h-screen h-max relative flex flex-col background items-center">
      
      <h1 className="w-7/12 bg-gradient-to-r from-cyan-500 to-blue-500 ... text-center text-[3.8vw] lg:text-[2vw] mt-5 py-3 rounded-2xl text-2xl font-bold">RANDOM GIF GENERATOR</h1>
      <div className="flex flex-col w-full items-center gap-y-8 mt-8 relative">
        <Random/>
        <Tag/>
      </div>

    </div>
  )
}