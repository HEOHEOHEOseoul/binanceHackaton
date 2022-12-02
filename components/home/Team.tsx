import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import TeamCard, { TeamCardProps } from "./TeamCard";

// PLN 팀원 정보 교체
const teamCardContents: TeamCardProps[] = [
  {
    name: "오동재",
    position: "Contract/Backend Dev",
    image: "images/team1.png",
  },
  {
    name: "임성은",
    position: "Designer",
    image: "images/team2.jpg",
  },
  {
    name: "허진혁",
    position: "App/Frontend Dev",
    image: "images/team3.JPG",
  },
];

const Team: FC = () => {
  return (
    <Flex
      id="roadmap"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      pb={24}
      flexDir="column"
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        TEAM
      </Text>
      <Flex>
        {teamCardContents.map((v, i) => {
          return (
            <TeamCard
              key={i}
              name={v.name}
              position={v.position}
              image={v.image}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Team;
