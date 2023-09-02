"use client";

import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { logIn } from "@/hooks/authService";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full flex-grow-[100] flex justify-center items-center">
      <form method="post" onSubmit={(e) => submit(e,setLoading)}>
        <Card className="h-[320px] w-[350px]">
          <CardHeader className="justify-center font-bold text-secondary text-2xl">
            Login
          </CardHeader>
          <CardBody>
            <Input
              type="name"
              name="name"
              variant="bordered"
              label="Username/email"
              labelPlacement="outside"
              className="my-4"
            ></Input>
            <Input
              type="password"
              name="password"
              variant="bordered"
              label="Password"
              labelPlacement="outside"
              className="my-4"
            ></Input>
          </CardBody>
          <CardFooter className="justify-evenly">
            <Button variant="light" color="danger" type="reset">
              Cancel
            </Button>
            <Button variant="light" type="submit" isLoading={loading}>
              Login
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export async function submit(e: any, setLoading: any) {
  setLoading(true);
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());
  logIn(userData.name as string, userData.password as string).finally(() => {
    setLoading(false);
  });
}
