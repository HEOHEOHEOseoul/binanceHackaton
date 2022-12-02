import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import { FC, ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Head>
        {/* PLN title, meta의 content 변경  */}
        <title>SpotSpot NFT</title>
        <meta name="description" content="SpotSpot NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <footer>
        <Box textAlign="center" my={2}>
          <Text fontSize="sm">
            Team HotSpot | Seoul, Republic
            of Korea 
          </Text>
          <Text fontSize="xs" mt={1}>
            COPYRIGHT &copy; Team HotSpot. ALL RIGHT RESERVED
          </Text>
        </Box>
      </footer>
    </Box>
  );
};

export default Layout;
