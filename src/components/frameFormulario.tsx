import React from "react"

export default function FrameFormulario({ children, titulo, subtitulo }) {
  return (
    <React.Fragment>
      <div className="flex w-7/12 justify-center py-10 items-center bg-white">
        <div className="min-h-screen py-6 flex flex-col justify-center">
          <div className="relative py-3 max-w-xl mx-auto">

            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-2xl transform -skew-y-8 -rotate-6 rounded-3xl">
            </div>

            <div className="relative px-20 py-10 bg-white shadow-lg rounded-3xl">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">{titulo}</h1>
              <p className="text-sm font-normal text-gray-600 mb-5">{subtitulo}</p>
              <div className="py-3 text-base space-y-2 text-gray-700">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}