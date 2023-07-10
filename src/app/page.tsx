// Widgets
import JobDetails, { JobOptions } from "src/widgets/JobDetails";

const DATA_JOBS: JobOptions[] = [
  {
    title: "Lead Front-end Develope",
    company: "RoadStr",
    address: "Los Angeles, USA",
    url: "https://roadstr.io",
    startDate: "11/2021",
    endDate: "02/2023",
    works: [
      "Technical leadership: Ensuring that the codebase is clean, scalable, and maintainable.",
      "Team management: Managing and mentoring front-end development team members, setting goals and deadlines, and ensuring that the team is working efficiently.",
      "Quality assurance: Ensuring the quality of the front-end codebase through testing, debugging, and code review to best practices.",
      "Documentation: Ensuring that the codebase is well documented, including the code, architecture, and design decisions.",
    ],
  },
  {
    title: "Sr. Front-end Develope",
    company: "ICODELABS",
    address: "Mohali , Punjab, India",
    url: "https://icodelabs.co",
    startDate: "06/2020",
    endDate: "10/2021",
    works: [
      "Technical expertise: Demonstrating expertise in front-end technologies and frameworks, and providing technical guidance to other team members.",
      "Problem-solving: Identifying and solving technical problems and challenges in a timely and effective manner.",
      "Quality assurance: Ensuring the quality of the front-end codebase through testing, debugging, and code review to ensure that the code is free from errors.",
    ],
  },
  {
    title: "Front-End Develope",
    company: "Vanila",
    address: "California, USA",
    url: "https://vanila.io",
    startDate: "02/2018",
    endDate: "04/2020",
    works: [
      "Design & Development: Implement pixel-perfect design as requirement and completing responsive.",
      "Bug Fix: Fixed new incoming bugs in a timely.",
      "Project collaboration: Collaborating with other team members, including back-end developers, designers, and project managers, to ensure that the front-end development meets the project's requirements and deadlines.",
    ],
  },
];

export default function Home() {
  return (
    <>
      {DATA_JOBS.map((job: JobOptions, i) => (
        <JobDetails key={i} data={job} />
      ))}
      {/* <JobDetails />
      <JobDetails /> */}
    </>
  );
}
