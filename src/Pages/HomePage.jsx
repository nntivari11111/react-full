import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import { getTasks } from "../Redux/AppReducer/action";



const HomePage = () => {
    const tasks = useSelector((state) =>state.AppReducer.tasks);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const getTasksHandler = useCallback(() => {
        dispatch(getTasks())
    }, [dispatch])



    useEffect(() => {
        if(tasks.length === 0){
            getTasksHandler()
        }
    }, [getTasksHandler, tasks.length]);

    const filterByParamTags = (task) => {
        const ParamsTags = searchParams.getAll("tags");

        const data = task.tags.filter((tag) =>{
            if(ParamsTags.includes(tag)){
                return true;
            }
            return false;
        });
        if(data.length){
            return task;
        }
        return false;
    }

    return (
       <Box border="1px solid green" width="100%">
        <Flex justifyContent="space-around">
            <Box border="1px solid black" width="250px" height="98vh">
                <Box>
                    <Text textAlign="center">TODO</Text>
                </Box>
                {
                    tasks.length > 0 &&
                    tasks.filter((item) => item.task_status === "todo")
                    .filter(filterByParamTags)
                    .map((item) => {
                        return <TaskCard key={item.id} {...item} />
                    })
                }
            </Box>
            <Box border="1px solid black" width="250px" height="98vh">
                <Box>
                    <Text textAlign="center">IN-PROGRESS</Text>
                </Box>
                {
                    tasks.length > 0 &&
                    tasks.filter((item) => item.task_status === "in-progress")
                    .filter(filterByParamTags)
                    .map((item) => {
                        return <TaskCard key={item.id} {...item} 
                        colorScheme="yellow"/>
                    })
                }
            </Box>
            <Box border="1px solid black" width="250px" height="98vh">
                <Box>
                    <Text textAlign="center">DONE</Text>
                </Box>
                {
                    tasks.length > 0 &&
                    tasks.filter((item) => item.task_status === "done")
                    .filter(filterByParamTags)
                    .map((item) => {
                        return <TaskCard key={item.id} {...item} 
                        colorScheme="blue"/>
                    })
                }
            </Box>
        </Flex>
       </Box>
    )
};
export default HomePage;