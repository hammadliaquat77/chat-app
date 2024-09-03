import Navbar from "./Navbar";
import Chat from "./Chat";

function Home( ) {

  return(
    <div className='h-[100vh] w-full flex justify-center items-center'>
      <Navbar />
      <Chat />
    </div>
  )
}


export default Home;


