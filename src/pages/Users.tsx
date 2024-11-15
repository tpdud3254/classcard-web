import React, { useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Paper,
    Stack,
    TextField,
} from "@mui/material";

const question = [
    {
        type: "ox",
        q: "문제1",
        a: true,
    },
    {
        type: "choice",
        q: "문제2",
        list: ["선택지1", "선택지2", "선택지3", "선택지4", "선택지5"],
        a: 1,
    },
    {
        type: "ox",
        q: "문제3",
        a: false,
    },
    {
        type: "ox",
        q: "문제4",
        a: true,
    },
    {
        type: "choice",
        q: "문제5",
        list: ["선택지1", "선택지2", "선택지3", "선택지4", "선택지5"],
        a: 3,
    },
];
function Users() {
    const [showQuestion, setShowQuestion] = useState(false);

    return (
        <Box sx={{ pt: 5, pb: 5 }}>
            <Stack spacing={4}>
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
                        onClick={() => setShowQuestion(true)}
                    >
                        검색
                    </Button>
                </Stack>
                {showQuestion && (
                    <Stack alignItems="center">
                        <Paper sx={{ p: 5, minWidth: "600px" }} elevation={3}>
                            <Stack spacing={3}>
                                {question.map((v, i) => (
                                    <Stack key={i}>
                                        <Stack>
                                            {i + 1}. {v.q}
                                        </Stack>
                                        <Stack pl={5}>
                                            {v.type === "ox" ? (
                                                <FormGroup>
                                                    <Stack flexDirection="row">
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox />
                                                            }
                                                            label="O"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox />
                                                            }
                                                            label="X"
                                                        />
                                                    </Stack>
                                                </FormGroup>
                                            ) : (
                                                <FormGroup>
                                                    <Stack>
                                                        {v?.list?.map(
                                                            (
                                                                item,
                                                                itemIdex
                                                            ) => (
                                                                <FormControlLabel
                                                                    key={
                                                                        itemIdex
                                                                    }
                                                                    control={
                                                                        <Checkbox />
                                                                    }
                                                                    label={item}
                                                                />
                                                            )
                                                        )}
                                                    </Stack>
                                                </FormGroup>
                                            )}
                                        </Stack>
                                    </Stack>
                                ))}
                            </Stack>
                        </Paper>
                    </Stack>
                )}
            </Stack>
        </Box>
    );
}

export default Users;
