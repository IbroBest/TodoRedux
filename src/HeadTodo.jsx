import { Box } from "@chakra-ui/layout";
import { Button, Input,Text } from "@chakra-ui/react";
import { useState } from "react";

export const HeadTodo = () => {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);
  const infarmation = (event) => {
    setInputVal(event.target.value);
  };
  const handleVal = () => {
     setData([...data , { id: data.length + 1 , input: inputVal }])
      setInputVal('')
    
  
  };
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box display={"flex"} gap={"10px"}>
        <Input onChange={infarmation} w={"400px"} value={inputVal}/>
        <Button onClick={handleVal} colorScheme="green">
          Add
        </Button>
      </Box>
      <Box my={'20px'}>

        {
          data.map((value)=>(
            <Box key={value.id} my={'10px'}  border={'0.5px solid grey'} padding={'7px'} display={'flex'} justifyContent={'space-between'}w={'400px'} alignItems={'center'}>
              <Text fontSize={'18px'}>{value.id} :  {value.input}</Text>
            <Button colorScheme="red">Delete</Button>
        </Box>
        ))}
      </Box>
    </Box>
  );
};
