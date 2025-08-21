import { Timeline } from "../common/Timeline";
import { education } from "../constants";

const Education = () => {
  return (
    <div className="w-full section-spacing  ">
      <div className="flex items-center justify-center mb-10 ">
        <div className="flex-grow border-t border-gray-600"></div>
        <h2 className="mx-4 text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
          Education
        </h2>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      {/* Timeline should be outside the heading wrapper */}
     
        <Timeline data={education} />
     
    </div>
  );
};

export default Education;
