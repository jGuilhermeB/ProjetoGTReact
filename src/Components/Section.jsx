import React from 'react'

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <section className="w-full mb-8">
      <div className={`flex items-center ${titleAlign === "center" ? "justify-center" : "justify-start"} mb-6`}>
        <h2
          className={`text-[24px] font-bold text-[#474747] ${titleAlign === "center" ? "text-center w-full" : ""}`}
        >
          {title}
        </h2>
        {link && (
          <a
            href={link.href}
            className="ml-auto text-[18px] text-[#C92071] font-semibold hover:underline"
            style={{ marginLeft: "auto" }}
          >
            {link.text}
          </a>
        )}
      </div>
      {children}
    </section>
  )
}

export default Section
