import { Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomSelect from "../../components/CustomSelect";

export default function Container() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("남자");
  const [health, setHealth] = useState("주 1회");

  const [healthStatus, setHealthStatus] = useState("");

  const ageHandleChange = (e) => {
    setAge(e.target.value);
  };
  const healthStatusHandleChange = (e) => {
    setHealthStatus(e.target.value);
  };

  const genderHandleChange = (event) => {
    setGender(event.target.value);
  };
  const healthHandleChange = (event) => {
    setHealth(event.target.value);
  };

  const genderArr = [{ value: "남자" }, { value: "여자" }];
  const healthArr = [
    { value: "주 1회" },
    { value: "주 2회" },
    { value: "주 3회" },
    { value: "주 4회" },
    { value: "주 5회" },
    { value: "주 6회" },
  ];


  const handleButtonClick = () => {
    // 쿼리 스트링 생성

  };

  return (
    <div className="container Flex mt-32 text-center">
      <Card className="w-2/3 mx-auto p-8">
        <div>
          <div className="flex">
            <label className="font-semibold mr-4 w-20">나이</label>
            <CustomInput
              placeholder="나이를 입력해주세요"
              age={age}
              onChange={ageHandleChange}
            ></CustomInput>
          </div>
          <div className="flex mt-6">
            <label className="font-semibold mr-4 w-20">성별</label>
            <CustomSelect
              onChange={genderHandleChange}
              value={gender}
              options={genderArr}
            />
          </div>

          <div className="flex mt-6">
            <label className="font-semibold mr-4 w-20">운동</label>
            <CustomSelect
              value={health}
              onChange={healthHandleChange}
              options={healthArr}
            />
          </div>

          <div className="flex mt-6">
            <label className="font-semibold mr-4 w-20">기타</label>
            <TextField
              className="w-full"
              placeholder="건강 상태를 입력해주세요."
              multiline
              maxRows={4}
              
              onChange={healthStatusHandleChange}
              value={healthStatus}
            />
          </div>
          <div className="flex mt-6">
            <Button
              className="w-full"
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              전송하기
            </Button>
          </div>
        </div>
        <div></div>
      </Card>
    </div>
  );
}
