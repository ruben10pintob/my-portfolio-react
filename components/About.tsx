import Image from "next/image";
import { DevImg } from "./DevgImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";
import vscode from '../public/assets/about/vscode.svg';
import bitbucket from '../public/assets/about/bitbucket.svg';
import jira from '../public/assets/about/jira.svg';
import developer from '../public/assets/about/developer-image.png';

interface ArrayData {
    title?: String
    data?: Array<any>
} 

const infoData = [
    {
        icon: <User2 size={20}/>,
        name: 'Rubén García Mier',
    },
    {
        icon: <PhoneCall size={20}/>,
        name: '+34 616 860 338',
    },
    {
        icon: <MailIcon size={20}/>,
        name: 'ruben10pintob@gmail.com',
    },
    {
        icon: <Calendar size={20}/>,
        name: 'Born on 10 Apr, 1998',
    },
    {
        icon: <GraduationCap size={20}/>,
        name: 'Front End Developer',
    },
    {
        icon: <HomeIcon size={20}/>,
        name: 'Madrid, Spain',
    },
]
const qualificationData = [
    {
        title: 'education',
        data: [
            {
                hightSchool: 'Laguna de Joatzel',
                qualification: 'Microcomputer Systems and Networks',
                years: '2016 - 2028'
            },
            {
                hightSchool: 'Laguna de Joatzel',
                qualification: 'Web Application Development',
                years: '2018 - 2020'
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Internet4e',
                role: 'Junior Front End Developer',
                years: '09/2020 - 12/2020'
            },
            {
                company: 'Minsait',
                role: 'Front End Developer',
                years: '2021 - Present'
            }
        ]
    }
];
const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML5 CSS3'
            },
            {
                name: 'Front-end Development'
            },
            {
                name: 'Javascript Typescript'
            },
            {
                name: 'React React Native'
            }
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: vscode,
                name: 'Visual Studio Code'
            },
            {
                imgPath: bitbucket,
                name: 'Bitbucket'
            },
            {
                imgPath: jira,
                name: 'Jira'
            }
        ]
    }
];

export const About = () => {
    const getData = (arr: Array<ArrayData>, dataTitle : String) => {
        return arr.find(item => item.title === dataTitle)
    }
    
    return(
       <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className="flex flex-col xl:flex-row">
                    {/**Image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg 
                            containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                             imgSrc={developer} // cambiar
                        />
                    </div>
                    {/**Tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            {/**Tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Front end developer for over 3 years</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">Font end developer with more than 3 years of experience using technologies like React, LitElement, JavaScript, TypeScript in the banking sector.</p>
        
                                        {/*Icons*/}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                const { icon, name } = item;
                                                return ( 
                                                    <div 
                                                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                        key={index}>
                                                        <div className="text-primary">{icon}</div>
                                                        <div>{name}</div>
                                                    </div> )
                                            })}
                                        </div>
                                        {/**Languages */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>Spanish, English</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">
                                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                    <div className="grid md:grid-cols-2">

                                        <div className="flex flex-col gap-y-6"> 
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase size={28}/>
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'experience')?.title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'experience')?.data?.map((item, index) => { 
                                                    const { company, role, years } = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition all duration-500">

                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                    })}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-y-6">    
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28}/>
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'education')?.title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'education')?.data?.map((item, index) => { 
                                                    const { hightSchool, qualification, years } = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition all duration-500">

                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{hightSchool}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                    })}
                                            </div>

                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">Tools I use Everyday</h3>
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>

                                            <div>
                                                {getData(skillData, 'skills')?.data?.map((item, index) => {
                                                    const { name } = item;
                                                    return(
                                                        <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                            <div className="font-medium">{name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                            <div className="border-b border-border mb-4"></div>

                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(skillData, 'tools')?.data?.map((item, index) => {
                                                    const { imgPath, name } = item;
                                                    return(
                                                        <div key={index}>
                                                            <Image src={ imgPath } width={48} height={48} alt={name} priority/>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>    
                        </Tabs>
                    </div>
                </div>
            </div>
       </section>
    )
}