import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import axios from "axios";
export default function ContainerVersion3() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("남자");
  const [health, setHealth] = useState("주 1회");

  const [healthStatus, setHealthStatus] = useState(""); 

  const [response, setResponse] = useState(""); 
  
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

  const formFields = [
    {
      label: "나이",
      inputType: "text",
      placeholder: "나이를 입력해주세요",
      value: age,
      onChange: ageHandleChange,
    },
    {
      label: "성별",
      inputType: "select",
      options: genderArr,
      value: gender,
      onChange: genderHandleChange,
    },
    {
      label: "운동",
      inputType: "select",
      options: healthArr,
      value: health,
      onChange: healthHandleChange,
    },
    {
      label: "기타",
      inputType: "multiline",
      placeholder: "건강 상태를 입력해주세요.",
      value: healthStatus,
      onChange: healthStatusHandleChange,
    },
  ];

  const handleButtonClick = () => {
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://api.kakaobrain.com/v1/inference/kogpt/generation",
        {
          prompt: `나이는 ${age}, 성별은 ${gender}, 운동은 ${health}, 가타 건강상태는 ${healthStatus}정도인테 영양제 추천해줘`,
          max_tokens: 120,
          temperature: 0.3,
        },
        {
          headers: {
            Authorization: "KakaoAK 76b1078f46c1edb5c8b44ac7cf05ef93",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setResponse(response.generations[0].text); 
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container Flex mt-32 text-center">
      <Card className="w-2/3 mx-auto p-8">
        <div>
          <div>
            {formFields.map((field, index) => (
              <FormInput
                key={index}
                label={field.label}
                inputType={field.inputType}
                placeholder={field.placeholder}
                options={field.options}
                value={field.value}
                onChange={field.onChange}
              />
            ))}
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
      </Card>
          {response} 
    </div>
  );
}