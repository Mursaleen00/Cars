import React from "react";
import { GiCarWheel } from "react-icons/gi";
interface ModalProps {
  modal: boolean;
  ModalState: () => void;
}

function Modal(props: ModalProps) {
  const { ModalState, modal } = props;

  return (
    <div className={`relative z-10 ${modal ? "block" : "hidden"}`}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 py-3 sm:px-6 text-black flex flex-col gap-y-5">
              <GiCarWheel
                onClick={ModalState}
                size={30}
                className=" cursor-pointer absolute right-3"
              />
              <h1 className="font-semibold text-lg">Mission: Performance</h1>
              <p className="  text-base font-medium ">
                “Our core area of expertise lies in complex, efficient, and
                high-performance powertrains—just look at the 918 Spyder or 919
                Hybrid.” (Stefan Weckbach, Mission E project head)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
