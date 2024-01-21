import { Text, Box, Heading } from "@chakra-ui/layout";
import { HeadTodo } from "./HeadTodo";
import { Image } from "@chakra-ui/react";
import devIcon from '../public/Vitall.png'

const App = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      w={"100%"}
    >
      <Heading fontSize={"30px"} my={"30px"} gap={'10px'} display={'flex'} alignItems={'end'}>
        create by ibrohim <Image w={'40px'} src={devIcon}/>
      </Heading>
      <HeadTodo />
    </Box>
  );
};

export default App;
