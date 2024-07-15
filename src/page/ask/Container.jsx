import React from "react";
import { Button, Card, Input, MenuItem, Select, TextField } from "@mui/material"; //여기꺼 Input 

export default function Container (){
    return (
        <div className="container Flex mt-32 text-ceter" >
        <Card className="w-2/3 mx-auto p-8">
            <div>
                <div className="flex">
                <label className="font-semibold mr-4 w-20">나이</label>
                <Input className="w-full" 
                placeholder="나이를 입력해주세요" type="number"/>
                </div>

                <div className="flex mt-4"> 
                <label className="font-semibold mr-4 w-20">성별</label>
                <Select className="w-full">
                <MenuItem value="남자">남자</MenuItem>
                <MenuItem value="여자">여자</MenuItem>
                </Select>
                </div>

                <div className="flex mt-4"> 
                <label className="font-semibold mr-4 w-20">운동</label>
                <Select className="w-full">
                <MenuItem value="주 1회">주 1회</MenuItem>
                <MenuItem value="주 2회">주 2회</MenuItem>
                <MenuItem value="주 3회">주 3회</MenuItem>
                <MenuItem value="주 4회">주 4회</MenuItem>
                <MenuItem value="주 5회">주 5회</MenuItem>
                <MenuItem value="주 6회">주 6회</MenuItem>
                <MenuItem value="주 7회">주 7회</MenuItem>
                </Select>
                </div>

                <div className="flex mt-4"> 
                <label className="font-semibold mr-4 w-20">기타</label>
                <TextField 
                className="w-full"
                placeholder="건강상태를 입력해주세요."
                multiline 
                maxRows={4}
                />
                </div> 

                <div className="flex mt-6"> 
                    <Button className="w-full"
                        variant="contained"
                        color="primary"
                        >전송하기
                    </Button>
                </div>
            </div>
        </Card>

        </div>
    )
}