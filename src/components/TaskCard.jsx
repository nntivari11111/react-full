import { EditIcon } from "@chakra-ui/icons";
import { Badge, Box, Stack, Text, Flex, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const TaskCard = ({title, description, tags, subTasks, colorScheme="green"}) => {
   
    const [checkbox, setCheckBox] = useState(() => {
        let data = subTasks.filter((item) => {
            return item.status && item.subTaskTitle;
        })
        .map((item) => item.subTaskTitle);
        return data;
    });


    return (
    <Box width={"230px"} 
    padding="10px"
     border="1px solid red"
      margin = "auto"
      >
        <Flex justifyContent={"space-between"}>
          <Text>{title}</Text>
          <EditIcon />
        </Flex>
        
        <Box>
            <Stack direction="row">
                {tags.length &&
                tags.map((item, index) => {
                    return (
                        <Badge
                         key={index}
                         colorScheme = {colorScheme}
                        >{item}</Badge>
                    )
                })}
            </Stack>
        </Box>
        <Text>{description}</Text>
        <Box>
            <CheckboxGroup value={checkbox}>
                {
                    subTasks.length &&
                    subTasks.map((item, index) => (
                        <Checkbox key={index} size="md" value={item.subTaskTitle}>
                             {item.subTaskTitle}
                        </Checkbox>
                    ))
                }
            </CheckboxGroup>
        </Box>
    </Box>
    )
};

export default TaskCard;