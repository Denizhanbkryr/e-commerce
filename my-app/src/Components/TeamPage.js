import image1 from "../images/team-1.jpg";
import image2 from "../images/team-2.jpg";
import image3 from "../images/team-3.jpg";
import image4 from "../images/team-4.jpg";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const projectData = [
  {
    id: 1,
    title: "Jerome Bell",
    cardSubtitle: "IBM",
    imgSrc: image1,
  },
  {
    id: 2,
    title: "Brooklyn Simons",
    cardSubtitle: "EBay",
    imgSrc: image2,
  },
  {
    id: 3,
    title: "Ronald Richards",
    cardSubtitle: "Starbucks",
    imgSrc: image3,
  },
  {
    id: 4,
    title: "Floyd Miles",
    cardSubtitle: "Facebook",
    imgSrc: image4,
  },
  {
    id: 5,
    title: "Jerome Bell",
    cardSubtitle: "IBM",
    imgSrc: image1,
  },
  {
    id: 6,
    title: "Brooklyn Simons",
    cardSubtitle: "EBay",
    imgSrc: image2,
  },
  {
    id: 7,
    title: "Ronald Richards",
    cardSubtitle: "Starbucks",
    imgSrc: image3,
  },
  {
    id: 8,
    title: "Floyd Miles",
    cardSubtitle: "Facebook",
    imgSrc: image4,
  },
];

const TeamPage = () => {
  return (
    <div>
      <header
        style={{ textAlign: "center", marginBottom: "5%", marginTop: "5%" }}
      >
        <h1 className="teamPageh1">Meet Our Team</h1>
        <p className="teamPageP">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </header>
      <div className="teamPageExhibitionPart">
        {projectData.map((member) => (
          <Card key={member.id}>
            <img style={{ margin: "unset" }} alt="Sample" src={member.imgSrc} />
            <CardBody style={{ textAlign: "center" }}>
              <CardTitle tag="h5">{member.title}</CardTitle>
              <CardSubtitle className=" text-muted" tag="h6">
                {member.cardSubtitle}
              </CardSubtitle>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
