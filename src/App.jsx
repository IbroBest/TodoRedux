import { Text, Box,Heading } from "@chakra-ui/layout";
import { HeadTodo } from "./HeadTodo";

const App = () => {
  return (
    <Box  display={"flex"} flexDirection={'column'} alignItems={"center"} w={"100%"}>
      <Heading fontSize={'30px'} my={'30px'} >create by ibrohim 🧑🏻‍💻</Heading>
      <HeadTodo/>
    </Box>
  );
};

export default App;
