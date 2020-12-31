import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const AchieveProject = () => {
  const achievements = [
    {
      name: "NSSC 2019, IIT KGP",
      events: [
        {
          eventName: "Case Study",
          result: ["1st (Yash Vinod & Vaibhav Singh)", "3rd (Vamsi Bodaballa & Aditya Keshari)"]
        },
        {
          eventName: "The Science of Paper Folding",
          result: ["1st (Arjeet Dewanagan & Anmol Saluja)", "3rd (Yash Vinod & Vaibhav Singh)"]
        }
      ]
    },
    {
      name: "NSSC 2018, IIT KGP",
      events: [
        {
          eventName: "Case Study",
          result: ["1st (Ayush Kumar Singh & Shristi Singh)"]
        },
        {
          eventName: "Designeer",
          result: ["3rd (Rahul Viswakarma, Pranjal & Yash Agrawal)"]
        },
        {
          eventName: "The Science of Paper Folding",
          result: ["2nd (Yash Vinod & Vaibhav Krishna)"]
        }
      ]
    },
    {
      name: "Inter IIT Tech Meet",
      events: [
        {
          eventName: "Star Cluster Identifying",
          result: ["3rd (Sambhav Jain, Yash Agrawal, Abhishek & Govindswaroop Rahangdale)"]
        }
      ]
    }
  ]

  const projects = [
    {
      name: "Planetarium",
      desc: "With the support of SERAI, the Astronomy Club has undertaken the project to build a planetarium to promote astronomy culture within the college. Being one of the first steps to enter into astronomy, the planetarium helps to attract people into amateur astronomy. The planetarium serves the purpose of observing the night sky of Varanasi as well as other regions of the world regardless of weather conditions and time of the day. The planetarium will have sufficient space for 15-20 people to sit inside comfortably. The planetarium will be used primarily to conduct observational sessions. It will also be used to conduct various competitions and events throughout the year."
    },
    {
      name: "Horn Antenna",
      desc: "Radio astronomy is a major field in observational and computational astronomy. There are many types of antennae to observe radio waves, the most basic which is a Horn Antenna. To encourage advanced astronomy in the institute, the Astronomy Club is building its own Pyramidal Horn Antenna. Upon its completion, the club will be able to conduct its own radio observations and analyze and study the data obtained."
    }
  ]

  const projectImgs = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "projects" } }, sort: { fields: [name], order: ASC }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }`
  );

  return (
    <div className="lg:w-2/3 rounded-lg bg-gray-900 md:w-1/2 px-5 py-5 mx-10 mb-5 bg-white px-10">

      <div className="text-2xl text-center pb-2 mt-5">Projects</div>
      <hr style={{ borderTop: "1px dotted lightgray" }}></hr>
      {
        projects.map((data, index) => {
          return (
            <div class="my-3">
              <div class="inline text-xl">{data.name}</div>
              <p class="my-1 text-gray-200">{data.desc}</p>
              {
                index === 0 &&
                <div className="mx-auto mt-2 w-full w-1">
                  <Img
                    alt={data.name}
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    fluid={projectImgs.allFile.edges[0].node.childImageSharp.fluid}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              }
            </div>
          )
        })
      }

      <div className="text-2xl	text-center pb-2">Recent Achievements</div>
      <hr style={{ borderTop: "1px dotted lightgray" }}></hr>
      {
        achievements.map(data => {
          return (
            <div class="my-3">
              <div class="inline my-2 text-xl">{data.name}</div>
              {
                data.events.map(event => {
                  return (
                    <ul class="px-5 list-disc list-inside pb-3">
                      <li class="text-lg text-gray-200">{event.eventName}</li>
                      <div>
                        {event.result.map(val => { return (<div class="pl-7 text-gray-300">{val}</div>) })}
                      </div>
                    </ul>
                  )
                })
              }
            </div>
          )
        })
      }

    </div>
  );
};

export default AchieveProject;
