import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { coursesOffered } from "../../styles/constant";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-90" : ""
        } h-5 w-5 transition-transform shrink-0 text-[#0193DC]`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        fillRule="evenodd"
        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const CourseAccordion = ({ courses }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div>
      {coursesOffered.map((data) => (
        <Accordion open={open === data.id} key={data.id} animate={customAnimation}>
          <AccordionHeader
            onClick={() => handleOpen(data.id)}
            className="flex justify-start relative gap-4 px-2 xl:px-0 xl:pl-2 bg-[#F0F0F0] border-none force-font text-lg"
          >
            <Icon id={data.id} open={open} />
            {data.programme}
            <a
              href="http://nsut.ac.in/en/educational-programmes"
              target="_blank"
              rel="noreferrer"
              className={`bg-[#0193DC] absolute right-0 bottom-0 px-6 text-white hidden xl:flex justify-center items-center gap-2 py-4 lg:py-0 h-full self-end`}
            >Curriculum & Syllabus
              <DownloadIcon />
            </a>
          </AccordionHeader>
          <a
            href="http://nsut.ac.in/en/educational-programmes"
            target="_blank"
            rel="noreferrer"
            className={`${open === data.id ? "" : "hidden"
              } bg-[#0193DC] text-white flex xl:hidden justify-center items-center gap-2 py-4 z-10`}
          >Curriculum & Syllabus
            <DownloadIcon />
          </a>
          <AccordionBody className="text-center py-0 text-blue-900">
            {data.courses.map((course) => (
              <Accordion open={open === course.id} key={course.name}>
                <AccordionHeader
                  className="flex justify-start xl:justify-center relative px-4 gap-4 border-b border-black xl:px-0 xl:pl-2 bg-[#e0dfdf] border-none force-font text-lg"
                >
                  {course.name}
                </AccordionHeader>
              </Accordion>
            ))}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default CourseAccordion;
