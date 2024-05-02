import { VscError } from "react-icons/vsc";

function Error() {
  return (
    <>
      <div className="bg-slate-800 h-screen w-screen flex">
          <div className="m-auto">
            <VscError className="text-8xl text-red-600 m-auto"/>
            <div className="text-3xl font-bold text-white ">
              <p>Sorry, an unexpected error has occurred.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Error

