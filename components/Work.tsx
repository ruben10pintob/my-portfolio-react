'use client'
import Link from "next/link";
import { Button } from '@/components/ui/button';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import { ProjectCard } from "@/components/ProjectCard";

import { projectData } from '@/app/data/projectData'; 

export const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">My latest projects that I use to learn and improve my level like front end developer</p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>

                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper 
                      className="h-[480px]" 
                      slidesPerView={1} 
                      breakpoints={{640: {slidesPerView: 2}}} 
                      spaceBetween={30} 
                      modules={[Pagination]} 
                      pagination={{clickable: true}}>
                        {projectData.slice(0, 3).map((project, index) => {
                            const { category, description, github, image, name } = project;
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard 
                                      category={category}
                                      description={description}
                                      github={github}
                                      image={image}
                                      name={name}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}