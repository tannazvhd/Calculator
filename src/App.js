import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

import Screen from "./components/Screen";
import Head from "./components/Head";
import Body from "./components/Body";

export default function App() {
  const [resultValue, setResultValue] = useState(0);
  const [previewValue, setPreviewValue] = useState(0);

  function handleValue(newPreview, newValue) {
    setPreviewValue(newPreview);
    setResultValue(newValue);
  }

  return (
    <Card className="mainCard">
      <CardContent>
        <Head />
        <Typography variant="h6" component="div">
          <Screen preview={previewValue} value={resultValue} />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Body handleNewValue={handleValue} />
        </Typography>
      </CardContent>
    </Card>
  );
}
