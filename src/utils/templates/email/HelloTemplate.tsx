import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import * as React from "react";

export type HelloTemplateProps = {
  message?: string
}

export default function HelloTemplate({message='Hello'}:HelloTemplateProps) {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: '12px 20px' }}
      >
        {message}
      </Button>
    </Html>
  );
}