import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FC, useState } from "react";

// PLN width, height 사이즈 수정
const width = 512;
const height = 512;

// PLN image - public/images 교체, contents - 세계관에 관한 내용 추가
const StoryContents = [
  {
    image: "images/story1.gif",
    contents: `"여긴 너무 답답해. 더 넓은 세상으로 나갈거야"`,
  },
  {
    image: "images/story2.png",
    contents: `"우리도 현실세계로 나갈 수 있을까?"`,
  },
  {
    image: "images/story3.png",
    contents: `"너네끼리만 가지말고 나도 끼워줘!"`,
  },
];

const Story: FC = () => {
  const [page, setPage] = useState<number>(0);

  const onClickPage = (_page: number) => () => {
    setPage(_page);
  };
  const onClickPrev = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(StoryContents.length - 1);
    }
  };
  const onClickNext = () => {
    if (page < StoryContents.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };

  return (
    <Flex
      id="story"
      minH="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        2122년
      </Text>
      <Text fontWeight="bold">컴퓨터 안에 갇혀 지내던 수 많은 0과 1</Text>
      <Text fontWeight="bold" mb={10}>가상의 답답함을 견디지 못해 현실로 나와 여행을 시작한다</Text>
      <Flex mb={4}>
        {StoryContents.map((_, i) => {
          return (
            <Box
              key={i}
              mx={1}
              w={4}
              h={4}
              rounded="full"
              bgColor={i === page ? "gray.300" : "gray.100"}
              onClick={onClickPage(i)}
              cursor="pointer"
            ></Box>
          );
        })}
      </Flex>
      <Flex alignItems="center">
        <Text onClick={onClickPrev} mr={12} fontSize="6xl" cursor="pointer">
          ←
        </Text>
        <Flex width={width} minH={height} overflow="hidden">
          {StoryContents.map((v, i) => {
            return (
              <Box
                key={i}
                width={width}
                flex="none"
                ml={i === 0 ? `-${page}00%` : ""}
                style={{ transition: "all 0.3s ease-out" }}
              >
                <Image src={v.image} alt="Story" mt={10} mb={10}/>
                {i === page && (
                  <Text fontSize="xl" w={width} mt={10} mb={10}>
                    {v.contents}
                  </Text>
                )}
              </Box>
            );
          })}
        </Flex>
        <Text onClick={onClickNext} ml={12} fontSize="6xl" cursor="pointer">
          →
        </Text>
      </Flex>
    </Flex>
  );
};

export default Story;
