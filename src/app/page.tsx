// import Link from "next/link";

// export default function (){
//   return (
//     // navbar/header
//     <div className="bg-[#043873] min-h-screen text-white ">
//       <nav className="w-full py-6 px-12  flex justify-around">
//         <h1 className="text-xl font-bold">whitepace</h1>
//         <div className="flex space-x-4  ">
// <Link href="/" className="hover:text-gray-400">products</Link>
// <Link href="/" className="hover:text-gray-400">solutuons</Link>
// <Link href="/" className="hover:text-gray-400">resources</Link>
// <Link href="/" className="hover:text-gray-400">pricing</Link>
// </div>
//  <div className="bg-[#FFE492] text-black h-8 w-12 rounded-md "> 
//    <button >Login</button> 
//   </div> 
//   </nav>
//   {/* hero section py-12 px-12 */}
  
//   <div className=" px-36 text-5xl mt-40  ">
//     <h2>Get more done with <br/>whitepace</h2>
//     </div>
//     <div className="text-xs px-36 py-3  ">
//    <p>Project management software that enables your teams to collaborate, plan,<br/> analyze and manage everyday tasks</p> 
//    </div>
//    <div className="bg-[#4F9CF9] h-8 w-40 rounded-md  mt-6 m-36 py-6 ">
    
//     <button>Try Whitepace free </button>
//    </div>
//    {/* right section */}
//    <div className="bg-[#C4DEFD] flex flex-row justify-items-center  h-80 w-[500] ml-[600] mt-[-380]">
//    </div>
//   </div> 
//   )
// }





import React from 'react'
import Card from './components/card/card'

const main = () => {
  return (
    <div className='flex'> 
     
    <div className=" bg-yellow-400 p-3"></div>
      <div className="bg-purple-500 flex"></div>

      <Card 
      color="bg-pink-100"
      heading="Heading 1"
       paragraph="lorem gdeufhufhdjchdfuehgfjsdnbcsgfeufdggfgedyubvdxjgcuesfwdfhhdnd fuewfbdicgeufbebve dcyewg dscducd cheygf iuhiuewbfkjewgfuew cewifgirubf ciy"/>

     <Card 
     color="bg-green-500"
    //there we use default
      paragraph="foren uifrgfurrefrefnefrhufnndoifknrfierhfdenehjrfiuhrifmehjiurfrenmfjreuhfr3hfir"/>

     <Card 
     color="bg-blue-400"
     heading="Heading 3"
      paragraph="foren uifrgfurrefrefnefrhufnndoifknrfierhfdenehjrfiuhrifmehjiurfrenmfjreuhfr3hfir"/>

     <Card 
     color="bg-black"
     heading="Heading 4"
      paragraph="foren uifrgfurrefrefnefrhufnndoifknrfierhfdenehjrfiuhrifmehjiurfrenmfjreuhfr3hfir"/>
  
    </div>
  )
}

export default main










// heading ma ? is lia lgaya ha taky agr heading k lia kuch pass kia wa ha to wo ay ga wrna default value hogi jo mn aheading k bad=" " k ander likha
