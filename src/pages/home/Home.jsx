// Jai Shree Ram

import React from 'react'
import "./Home.css"
import { Toaster , toast } from 'react-hot-toast';

function Home() {


  const getCurrentDateTime = () => {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yy = String(now.getFullYear()).slice(-2);
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    return `${dd} - ${mm} - ${yy} ${hh} - ${min}`;
  };

  return (
    <div className="relative w-full ">
      <div className="sheet textarea font-['trap']" role="textbox" spellCheck="false" contentEditable="true">
        <p>{getCurrentDateTime()}</p>
      </div>
      <div className="submit p-3 absolute shadow-xl bottom-5 left-4 w-14 h-14 rounded-full bg-[#6dff3c]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
      </div>
      <div onClick={toast.loading("Logging Out.")} className="logout p-3 absolute shadow-xl bottom-5 right-4 w-14 h-14 rounded-full bg-[#fb3b3b]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"></path></svg>
      </div>
      <Toaster
      position="top-right"
      reverseOrder={false}
      />
    </div>
  )
}

export default Home