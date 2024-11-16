import React, { useState } from "react";
import { Button, Paper, Stack, TextField } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
function createData(
    title: string,
    type: string,
    fat: number,
    carbs: number,
    protein: number
) {
    return { title, type, fat, carbs, protein };
}

const rows = [
    createData("테스트 문제 제목입니다.", "OX", 6.0, 24, 4.0),
    createData("테스트 문제 제목입니다.", "객관식", 9.0, 37, 4.3),
    createData("테스트 문제 제목입니다.", "OX", 16.0, 24, 6.0),
    createData("테스트 문제 제목입니다.", "OX", 3.7, 67, 4.3),
    createData("테스트 문제 제목입니다.", "객관식", 16.0, 49, 3.9),
];

const paginationModel = { page: 0, pageSize: 5 };
function Result() {
    const [menu, setMenu] = useState(1);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("1");

    const MENU = ["문제 관리", "문제 할당", "결과 조회"];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Paper
                sx={{
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                }}
                elevation={3}
            >
                <Stack
                    alignItems="center"
                    flexDirection="row"
                    justifyContent={"center"}
                >
                    <TextField
                        id="outlined-basic"
                        label="학생ID"
                        variant="outlined"
                        sx={{ width: 250, mr: 1 }}
                    />
                    <Button
                        variant="contained"
                        size="large"
                        // onClick={() => setShowQuestion(true)}
                    >
                        할당
                    </Button>
                </Stack>
                <BarChart
                    xAxis={[
                        {
                            scaleType: "band",
                            data: ["group A", "group B", "group C"],
                        },
                    ]}
                    series={[
                        { data: [4, 3, 5] },
                        { data: [1, 6, 3] },
                        { data: [2, 5, 6] },
                    ]}
                    width={500}
                    height={300}
                />
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    width={500}
                    height={300}
                />
            </Paper>
        </>
    );
}

export default Result;
