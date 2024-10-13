import DotSvg from "./svg/DotSvg";
import FbSvg from "./svg/FbSvg";
import InstaSvg from "./svg/InstaSvg";
import TwitterSvg from "./svg/TwitterSvg";
const members = [
  {
    id: 1,
    name: "Melissa Tatcher",
    position: "Marketing Expert",
    image: "./assets/images/team/team-01.png",
    fbLink: "https://www.facebook.com/",
    xLink: "https://x.com/",
    instaLink: "https://www.instagram.com/",
  },
  {
    id: 2,
    name: "Stuard Ferrel",
    position: "Digital Marketer",
    image: "./assets/images/team/team-02.png",
    fbLink: "https://www.facebook.com/",
    xLink: "https://x.com/",
    instaLink: "https://www.instagram.com/",
  },
  {
    id: 3,
    name: "Eva Hudson",
    position: "Creative Designer",
    image: "./assets/images/team/team-03.png",
    fbLink: "https://www.facebook.com/",
    xLink: "https://x.com/",
    instaLink: "https://www.instagram.com/",
  },
  {
    id: 4,
    name: "Jackie Sanders",
    position: "Founder of Facebook",
    image: "./assets/images/team/team-04.png",
    fbLink: "https://www.facebook.com/",
    xLink: "https://x.com/",
    instaLink: "https://www.instagram.com/",
  },
];

export default function Team() {
  const memberList = members.map((member) => (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4" key={member.id}>
      <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
          <img
            src={member.image}
            alt={member.name}
            className="h-[120px] w-[120px] rounded-full"
          />
          <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
          <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
            <DotSvg />
          </span>
        </div>
        <div className="text-center">
          <h4 className="mb-1 text-lg font-semibold text-dark dark:text-dark">
            {member.name}
          </h4>
          <p className="mb-5 text-sm text-body-color dark:text-dark-6">
            {member.position}
          </p>
          <div className="flex items-center justify-center gap-5">
            <a
              href={member.fbLink}
              target="_blank"
              className="text-dark-6 hover:text-primary"
            >
              <FbSvg />
            </a>
            <a
              href={member.xLink}
              target="_blank"
              className="text-dark-6 hover:text-primary"
            >
              <TwitterSvg />
            </a>
            <a
              href={member.instaLink}
              target="_blank"
              className="text-dark-6 hover:text-primary"
            >
              <InstaSvg />
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section
        id="team"
        className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Team Members
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-dark sm:text-4xl md:text-[40px]">
                  Our Clients
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            {memberList}
          </div>
        </div>
      </section>
    </>
  );
}
