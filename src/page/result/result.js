import { Card } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Result() {
  const { ask } = useParams();
  return (
    <div className="container Flex mt-32 text-center min-h-24">
      <Card className="w-2/3 mx-auto p-8 ">
        <div className="text-center font-bold">추천 영양제</div>
        <div className="mt-6 text-left">
          <p>{ask}</p>
        </div>
      </Card>
    </div>
  );
}
