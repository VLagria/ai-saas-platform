"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Hannah Ramirez",
        avatar: "H",
        title: "UI/UX Engineer",
        desciption: "This is the remarkable AI tools that I ever used!"
    },
    {
        name: "Jomer Mae Lima",
        avatar: "J",
        title: "Beadstatic Owner",
        desciption: "This is the remarkable AI tools that I ever used!"
    },
    {
        name: "Jonnel Sevilla",
        avatar: "J",
        title: "Web App Developer",
        desciption: "This is the remarkable AI tools that I ever used!"
    },
    {
        name: "Edgardo Abong",
        avatar: "E",
        title: "Software Engineer",
        desciption: "This is the remarkable AI tools that I ever used!"
    }
]

export const LandingContent = () => {
    return(
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    testimonials.map((item) => (
                        <Card key={item.desciption} className="bg-[#192339] border-none text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-x-2">
                                    <div>
                                        <p className="text-lg">{item.name}</p>
                                        <p className="text-zinc-400 text-sm">{item.title}</p>
                                    </div>
                                </CardTitle>
                                <CardContent className="pt-4 px-0">
                                    {item.desciption}
                                </CardContent>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}