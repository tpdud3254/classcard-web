import React, { useState } from "react";
import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import Assignment from "./Assignment";
import Management from "./Management";
import Result from "./Result";

function Admin() {
    const [menu, setMenu] = useState(1);
    const MENU = ["문제 관리", "문제 할당", "결과 조회"];

    return (
        <>
            <Box sx={{ p: 5 }}>
                <Stack spacing={5}>
                    <Stack alignItems="center">
                        <ButtonGroup variant="text" size="large">
                            {MENU?.map((v, i) => (
                                <Button
                                    key={i}
                                    {...(menu !== i + 1 && {
                                        sx: { color: "grey" },
                                    })}
                                    onClick={() => setMenu(i + 1)}
                                >
                                    {v}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </Stack>
                    <Stack>
                        {menu === 1 && <Management />}
                        {menu === 2 && <Assignment />}
                        {menu === 3 && <Result />}
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default Admin;
