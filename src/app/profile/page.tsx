"use client";

import { UserAuth } from "@/contexts/auth.context";
import { getById, uploadProfilePicture } from "@/hooks/authService";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Switch } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Profile() {
  const { user } = UserAuth();
  const [userObj, setUserObj] = useState({ photoUrl: "" } as any);
  let fileInputRef: any;

  useEffect(() => {
    if (user) {
      getById(user.uid)
        .then((ret) => setUserObj(ret))
        .catch((error) => {
          // Handle error appropriately
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]);

  function handleClick() {
    fileInputRef.click();
  }

  async function upload(event: any) {
    event.preventDefault();
    const uploadRes = await uploadProfilePicture(
      event.target.files[0],
      user.uid
    );
    if (uploadRes) {
      user.photoUrl = uploadRes;
      setUserObj((prev: any) => ({ ...prev, photoUrl: uploadRes }));
    }
  }

  async function submit(event: any) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
  }

  return (
    <div className="w-full flex-grow-[100] flex items-center justify-center gap-6 flex-wrap content-center">
      <Card className="w-[250px] h-[250px] items-center justify-center">
        {userObj && userObj.photoUrl ? (
          <>
            <Image
              src={userObj.photoUrl}
              alt="Profile picture"
              width={200}
              height={200}
              className="absolute z-10 w-[200px] h-[200px] hover:opacity-30 hover:z-0 hover:cursor-pointer rounded-xl"
              onClick={handleClick}
            ></Image>
            <span className="material-symbols-outlined !text-[78px]">
              add_a_photo
            </span>
            <input
              type="file"
              hidden
              accept="image/*"
              ref={(fileInput) => (fileInputRef = fileInput)}
              onChange={upload}
            ></input>
          </>
        ) : (
          <>
            <span
              className="material-symbols-outlined !text-[78px] hover:cursor-pointer hover:opacity-80"
              onClick={handleClick}
            >
              add_a_photo
            </span>
            <input
              type="file"
              hidden
              accept="image/*"
              ref={(fileInput) => (fileInputRef = fileInput)}
              onChange={upload}
            ></input>
          </>
        )}
      </Card>
      <Card className="w-[500px]">
        <CardHeader className="text-xl">My Profile</CardHeader>
        {user && (
          <form method="post" onSubmit={submit}>
            <CardBody className="gap-5">
              <Input
                type="name"
                name="displayName"
                label="Username"
                labelPlacement="outside-left"
                variant="bordered"
                defaultValue={user.displayName}
              />
              <Input
                type="email"
                name="email"
                label="Email Address"
                isReadOnly
                labelPlacement="outside-left"
                variant="bordered"
                value={user.email}
              />
              <div className="flex items-center gap-[8px]">
                <label className="block text-small font-medium text-foreground">
                  Synchronise dark mode preference
                </label>
                <Switch name="sync" value="sync"></Switch>
              </div>
            </CardBody>
            <CardFooter>
              <Button
                type="submit"
                color="primary"
                className="text-white hover:text-secondary"
              >
                Confirm changes
              </Button>
            </CardFooter>
          </form>
        )}
      </Card>
    </div>
  );
}
