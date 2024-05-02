import { LiaCheckCircleSolid } from "react-icons/lia";


function EmailConfirm() {
  return (
    <>
      <div className="bg-slate-800 h-screen w-screen flex">
          <div className="m-auto">
            <LiaCheckCircleSolid className="text-8xl text-green-600 m-auto" />
            <div className="text-3xl font-bold text-white ">
              Email successfully verified
            </div>
          </div>
      </div>
    </>
  )
}

export default EmailConfirm

