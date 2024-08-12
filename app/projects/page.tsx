'use client'

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/ProjectCard";
import { projectData } from '@/app/data/projectData'; 

const uniqueCategories = ['all projects', ...new Set(projectData.map(item => item.category))];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');

    const filteredProjects = projectData.filter(project => {
        const { category: categoryProject } = project
        return category === 'all projects'
            ? project
            : categoryProject === category
    });

    return(
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My projects</h2>
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
                        {categories.map((category, index) => {
                            return (
                                <TabsTrigger
                                    onClick={() => setCategory(category)} 
                                    value={category} 
                                    key={index}
                                    className="capitalize w-[162px] md:w-auto"
                                >
                                    {category}
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project, index) => {
                            const { category: categoryProject, description, github, image, name } = project;
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard 
                                        category={categoryProject}
                                        description={description}
                                        github={github}
                                        image={image}
                                        name={name}
                                    />
                                </TabsContent>
                            )
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default Projects;