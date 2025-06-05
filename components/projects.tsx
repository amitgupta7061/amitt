"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';


export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);


  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/20 md:px-14 lg:px-28">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-10 rounded-full"></div>
          <p className="text-center text-muted-foreground">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group bg-card border border-primary/5 hover:border-primary/20 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.date}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <p className={expandedId === project.id ? "" : "line-clamp-3"}>
                      {project.longDescription}
                    </p>
                    {project.longDescription.length > 100 && (
                      <button 
                        onClick={() => toggleExpand(project.id)} 
                        className="text-primary hover:underline text-sm mt-2"
                      >
                        {expandedId === project.id ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/5">
                        {tag}
                      </Badge>
                    ))}
                    
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-0">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="default" className="w-full gap-1">
                      <ExternalLink size={16} /> Live Demo
                    </Button>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full gap-1">
                      <Github size={16} /> Code
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}