"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import user from "../assets/icons/user.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";

export function KirishModal() {
    const form = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });
    return (
        <Dialog>
            <DialogTrigger>
                <div className="flex flex-col items-center text-sm text-gray-800 cursor-pointer">
                    <Image width={30} height={30} src={user} alt="user" />
                    <p>Kirish</p>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <Form {...form}>
                    <form className="space-y-8">
                        <FormField
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Ismingizni kiriting"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
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
