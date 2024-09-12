// // my Code
// import { addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { db } from "../database/firebase.Config";



// export default function Chat() {
 
//     const navigate = useNavigate()
//     const {state} = useLocation()
//     const [messege, setMessege] = useState([])
//     const [chatList, setChatList] = useState([])

//   console.log('state use',state);
  
  
//   useEffect(()=> {
// //    getMessages()
// //    const getMessages = async ()=>{}
    
//    const q = query(collection(db, 'chat'), where(state.uid, "==", true), where(state.myUid, "==", true));
//    const unsubscribe = onSnapshot(q, (docSnap) => {
//        const List =[];
//        docSnap.forEach((doc) => {
//             List.push(doc.data());
//           });
//           setChatList(List);
//       })     
     
//       return ()=> unsubscribe();
// },[])

//  const sendMsg = async ()=> {
//     addDoc(collection(db, "chat"),{
//         messege,
//         [state.myUid]: true,
//         [state.uid]: true,
//         createdAt: Date.now(),
//     })
//     sendMsg("")
//  }

//   return(
//       <div className='h-[100vh] w-full'>
//          <div className="bg-[#0f546f] w-full p-6 flex items-center uppercase">
//            <img src="data:image/jpeg;base64,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" className=" w-10 mr-10 rounded-full cursor-pointer" onClick={()=> navigate('/home')} />
//            <img src="data:image/png;base64,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" className="h-12 w-12 mr-4 rounded-full" />
//            <h1 className="text-xl font-bold text-white">{state.name}</h1>
//          </div>

//           <div className="bg-gray-300  h-[75vh]">
//             {chatList.map( (item, index)=> (
//               <div key={index} onClick={()=> navigate('/Chat',{state: {...item, myUid}  } )} className="w-11/12 shadow-md shadow-gray-300 bg-blue-50 border cursor-pointer border-black rounded-md mx-auto my-4 py-5 px-10 flex justify-between ">
//               <div className="flex items-center">                
//                 <h1 className="font-semibold uppercase text-xl">{item.messege}</h1>
//               </div>
//              </div>
//             ))}
//           </div> 
  
//           <div className="flex justify-center items-center pt-3">
//          <input value={messege} onChange={ e=> setMessege(e.target.value) } type="text"  placeholder="Enter Message" className="w-10/12  border border-gray-500 rounded-lg px-6 py-2  text-xl" />
//          <button onClick={sendMsg} className=" text-xl w-30 bg-pink-300 px-8 py-1 rounded-lg ml-2">Send</button>
//            </div>

//       </div>

//   )
// }

























// Chatgpt
// import { addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { db } from "../database/firebase.Config";

// export default function Chat() {
 
//     const navigate = useNavigate()
//     const {state = {uid: "", myUid: "", name: ""}} = useLocation() // Added default value to avoid null
//     const [messege, setMessege] = useState("")
//     const [chatList, setChatList] = useState([])

//     useEffect(()=> {
//         if (!state?.uid || !state?.myUid) return; // Ensure valid data before query

//         const q = query(collection(db, 'chat'), where(state.uid, "==", true), where(state.myUid, "==", true));
//         const unsubscribe = onSnapshot(q, (docSnap) => {
//             const List = [];
//             docSnap.forEach((doc) => {
//                 List.push(doc.data());
//             });
//             setChatList(List);
//         });

//         return () => unsubscribe();
//     }, [state]);

//     const sendMsg = async ()=> {
//         if (messege.trim() === "") return; // Prevent sending empty messages

//         await addDoc(collection(db, "chat"), {
//             messege,
//             [state.myUid]: true,
//             [state.uid]: true,
//             createdAt: Date.now(),
//         });
//         setMessege(""); // Clear input field after sending message
//     }

//     return (
//         <div className='h-[100vh] w-full'>
//             <div className="bg-[#0f546f] w-full p-6 flex items-center uppercase">
//                 <img src="data:image/jpeg;base64,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" className="w-10 mr-10 rounded-full cursor-pointer" onClick={() => navigate('/home')} />
//                 <img src="data:image/png;base64,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" className="h-12 w-12 mr-4 rounded-full" />
//                 <h1 className="text-xl font-bold text-white">{state.name}</h1>
//             </div>

//             <div className="bg-gray-300 h-[75vh]">
//                 {chatList.map((item, index) => (
//                     <div key={index} onClick={() => navigate('/Chat', { state: { ...item, myUid: state.myUid } })} className="w-11/12 shadow-md shadow-gray-300 bg-blue-50 border cursor-pointer border-black rounded-md mx-auto my-4 py-5 px-10 flex justify-between ">
//                         <div className="flex items-center">
//                             <h1 className="font-semibold uppercase text-xl">{item.messege}</h1>
//                         </div>
//                     </div>
//                 ))}
//             </div> 

//             <div className="flex justify-center items-center pt-3">
//                 <input value={messege} onChange={e => setMessege(e.target.value)} type="text" placeholder="Enter Message" className="w-10/12 border border-gray-500 rounded-lg px-6 py-2 text-xl" />
//                 <button onClick={sendMsg} className="text-xl w-30 bg-pink-300 px-8 py-1 rounded-lg ml-2">Send</button>
//             </div>
//         </div>
//     )
// }






















// my Code
import { addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../database/firebase.Config";
import moment from "moment";



export default function Chat() {
 
    const navigate = useNavigate()
    const {state} = useLocation()
    const [messege, setMessege] = useState([])
    const [chatList, setChatList] = useState([])

  console.log('state use',state);
  
  
  useEffect(()=> {
  //  getMessages()
  //  const getMessages = async ()=>{}
    
   const q = query(collection(db, 'chat'), where(state.uid, "==", true), where(state.myUid, "==", true));
   const unsubscribe = onSnapshot(q, (docSnap) => {
       const List =[];

       docSnap.forEach((doc) => {
            List.push(doc.data());
          });
          
          console.log('List', List);
          
          
          const SortList = List.sort((a, b) => a.createdAt - b.createdAt);
          setChatList(SortList);
        })     
        
        return ()=> unsubscribe();
},[])

 const sendMsg = async ()=> {
    addDoc(collection(db, "chat"),{
        messege,
        [state.myUid]: true,
        senderUid: state.myUid,
        [state.uid]: true,
        createdAt: Date.now(),
    })
    sendMsg("")
 }

  return(
      <div className='h-[100vh] w-full'>
         <div className="bg-[#0f546f] w-full p-6 flex items-center uppercase">
           <img src="data:image/jpeg;base64,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" className=" w-10 mr-10 rounded-full cursor-pointer" onClick={()=> navigate('/home')} />
           <img src="data:image/png;base64,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" className="h-12 w-12 mr-4 rounded-full" />
           <h1 className="text-xl font-bold text-white">{state.name}</h1>
         </div>

          <div className="bg-gray-300  h-[75vh]">
            {chatList.map( (item, index)=> (
              <div key={index} onClick={()=> navigate('/Chat',{state: {...item, myUid}  } )} className={`w-full flex px-10 ${item.senderUid == state.myUid ? 'justify-end' : 'justify-start'}`}>
                <div className="shadow-md shadow-gray-300 bg-blue-50 border cursor-pointer border-black rounded-md my-4 pt-5 px-10">
                <h1 className="font-semibold text-xl">{item.messege}</h1>
                {/* <h1 className="text-gray-400">{new Date(item.createdAt).toLocaleString()}</h1> */}
                <h1 className="text-gray-400">{moment(item.createdAt).startOf('seconds').fromNow()}</h1>
                </div>
             </div>
            ))}
          </div> 
  
          <div className="flex justify-center items-center pt-3">
         <input value={messege} onChange={ e=> setMessege(e.target.value) } type="text"  placeholder="Enter Message" className="w-10/12  border border-gray-500 rounded-lg px-6 py-2  text-xl" />
         <button onClick={sendMsg} className=" text-xl w-30 bg-pink-300 px-8 py-1 rounded-lg ml-2">Send</button>
           </div>

      </div>

  )
}