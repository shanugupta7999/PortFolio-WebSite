import React from "react";

const Education = () => {
  const timelineData = [
    {
      date: "2022-2025",
      title: "POST GRADUATION",
      description: `Master of Computer Application (MCA)<br />
                    National Institute Of Technology, Karnataka (NITK)<br />
                    CGPA - 7.49`,
    },
    {
      date: "2017-2020",
      title: "UNDER GRADUATION",
      description: `Bachelor Of Computer Application (BCA)<br />
                    Pt. Ravi Shanker Shukla University (PRSU)<br />
                    CGPA - 7.8`,
    },
    {
      date: "2016-2017",
      title: "CLASS 12th",
      description: `LOYOLA HIGHER SECONDARY ENGLISH MEDIUM SCHOOL<br />
                    CGPA - 7.0`,
    },
    {
      date: "2014-2015",
      title: "CLASS 10th",
      description: `LOYOLA HIGHER SECONDARY ENGLISH MEDIUM SCHOOL<br />
                    CGPA - 8.0`,
    },
  ];

  return (
    <section className=" bg-[#101010] py-16 px-4 mt-24">
      <h2 className="heading text-white text-5xl font-bold text-center">
        Education
      </h2>
      <div className="timeline-items relative mx-auto flex flex-wrap max-w-5xl">
        <div className="absolute w-1 bg-[#0080ff] h-full left-1/2 transform -translate-x-1/2"></div>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item relative w-full mb-10 ${
              index % 2 === 0 ? "pl-20 text-left" : "pr-20 text-right"
            }`}
          >
            <div className="timeline-dot absolute top-2 left-1/2 transform -translate-x-1/2 h-5 w-5 rounded-full bg-[#0080ff] shadow-[0_0_25px]"></div>
            <div className="timeline-date text-xl font-bold text-white mb-4">
              {item.date}
            </div>
            <div className="timeline-content bg-[#101010] border-2 border-[#0080ff] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
              <h3 className="text-lg text-[#0080ff] font-semibold mb-3">
                {item.title}
              </h3>
              <p
                className="text-white text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
