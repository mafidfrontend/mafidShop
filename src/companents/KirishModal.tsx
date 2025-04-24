"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import user from "../assets/icons/user.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { DialogTitle } from "@radix-ui/react-dialog";

export function KirishModal() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);
    const [usernameDisplay, setUsernameDisplay] = useState("");
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const username = localStorage.getItem("username");

        if (token && username) {
            setIsLoggedIn(true);
            setUsernameDisplay(username);
        }
    }, []);

    async function onSubmit(values: { email: string; password: string }) {
        try {
            const response = await axios.post(
                "https://nt.softly.uz/api/auth/login",
                {
                    email: values.email,
                    password: values.password,
                }
            );
            localStorage.setItem("authToken", response.data.accessToken);
            localStorage.setItem("username", values.email);
            if (response) {
                setOpen(false);
            }
            setIsLoggedIn(true);
            const username = values.email.split("@")[0];
            setUsernameDisplay(username);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Server javobi:", error.response?.data);
                alert(
                    error.response?.data?.message || "Login xatoligi yuz berdi."
                );
            } else {
                console.error("Noma'lum xatolik:", error);
                alert("Server bilan bog‘lanishda xatolik yuz berdi.");
            }
        }
    }

    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger asChild>
                <div className="flex flex-col items-center text-sm text-gray-800 cursor-pointer">
                    <Image width={30} height={30} src={user} alt="user" />
                    <DialogTitle>
                        {isLoggedIn ? usernameDisplay : "Kirish"}
                    </DialogTitle>
                </div>
            </DialogTrigger>
            <DialogContent
                className="sm:max-w-[425px] bg-white"
                aria-describedby={undefined}
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Ismingizni kiriting"
                                            autoComplete="username"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Parolingizni kiriting"
                                            type="password"
                                            autoComplete="password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
