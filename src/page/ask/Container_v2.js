import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import FormInput from "../../components/FormInput";
export default function Container_v2() {
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

  return (
    <div className="container Flex mt-32 text-center">
      <Card className="w-2/3 mx-auto p-8">
        <div>
          <div>
            <FormInput
              label="나이"
              inputType="text"
              placeholder="나이를 입력해주세요"
              value={age}
              onChange={ageHandleChange}
            />
            <FormInput
              label="성별"
              inputType="select"
              options={genderArr}
              value={gender}
              onChange={genderHandleChange}
            />
            <FormInput
              label="운동"
              inputType="select"
              options={healthArr}
              value={healthStatus}
              onChange={healthStatusHandleChange}
            />
            <FormInput
              label="기타"
              inputType="multiline"
              placeholder="건강 상태를 입력해주세요."
              value={health}
              onChange={healthHandleChange}
            />
          </div>
          <div className="flex mt-6">
            <Button className="w-full" variant="contained" color="primary">
              전송하기
            </Button>
          </div>
        </div>
        <div></div>
      </Card>
    </div>
  );
}
