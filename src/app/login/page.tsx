"use client"

import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { logIn } from "@/hooks/authService";

export default function Login() {
    return (
      <div className="w-full flex-grow-[100] flex justify-center items-center">
        <form method="post" onSubmit={submit}>
            <Card className="h-[320px] w-[350px]">
            <CardHeader className="justify-center font-bold text-secondary text-2xl">Login</CardHeader>
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
                <Button variant="light" color="danger" type="reset">Cancel</Button>
                <Button variant="light" type="submit">Login</Button>
            </CardFooter>
            </Card>
        </form>
      </div>
    );
}

async function submit(e: any) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());
  const user = await logIn(userData.name as string, userData.password as string);
}