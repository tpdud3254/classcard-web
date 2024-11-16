import React, { useState } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid2,
    InputLabel,
    MenuItem,
    Pagination,
    Paper,
    Select,
    SelectChangeEvent,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Assignment from "./Assignment";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (value, row) =>
            `${row.firstName || ""} ${row.lastName || ""}`,
    },
];

const rows2 = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

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
function Management() {
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
                <Box
                    width={"100%"}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"right"}
                >
                    <Button variant="contained" onClick={handleClickOpen}>
                        Add
                    </Button>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, rowIndex) => (
                                <TableRow
                                    key={rowIndex}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                        ":hover": {
                                            backgroundColor: "#00000022",
                                        },
                                    }}
                                    onClick={handleClickOpen}
                                >
                                    <TableCell component="th" scope="row">
                                        {rowIndex + 1}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                    <TableCell>{row.type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination count={10} />
            </Paper>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(
                            (formData as any).entries()
                        );
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>수정</DialogTitle>
                <DialogContent sx={{ width: 500, p: 5 }}>
                    {/* <DialogContentText>테스트 문제입니다.</DialogContentText> */}
                    <FormControl fullWidth sx={{ marginTop: 1 }}>
                        <InputLabel id="demo-simple-select-label">
                            Type
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Age"
                            onChange={(event: SelectChangeEvent) => {
                                setType(event.target.value as string);
                            }}
                        >
                            <MenuItem value={1}>OX</MenuItem>
                            <MenuItem value={2}>객관식</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="문제 제목"
                        type="text"
                        fullWidth
                        variant="standard"
                        value="테스트 문제입니다."
                    />
                    {type === "1" ? (
                        <FormGroup>
                            <Stack flexDirection="row">
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="O"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="X"
                                />
                            </Stack>
                        </FormGroup>
                    ) : (
                        <>
                            {Array(5)
                                .fill(undefined)
                                .map((v, i) => (
                                    <TextField
                                        key={i}
                                        autoFocus
                                        required
                                        margin="dense"
                                        id="name"
                                        name="email"
                                        label={`선택지 ${i + 1}`}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value=""
                                    />
                                ))}
                            <FormGroup>
                                정답 선택
                                <Stack flexDirection="row">
                                    {Array(5)
                                        .fill(undefined)
                                        .map((v, i) => (
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label={`선택지${i + 1}`}
                                            />
                                        ))}
                                </Stack>
                            </FormGroup>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button>삭제</Button>
                    <Button type="submit">수정</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Management;
