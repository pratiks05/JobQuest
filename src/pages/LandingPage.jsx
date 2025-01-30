import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import companies from '../data/companies.json';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import faqs from '../data/faq.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const LandingPage = () => {
  return (
  <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
    <section className="text-center">
      <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4"
      >Find your Dream Job {" "}
      <span className="flex items-center gap-2 sm:gap-6 ">and get {" "} Hired
      {/* <img
       src="/logo-dark-2.png"
       alt="Logo" 
       className="h-48 sm:h-40 invert brightness-0 "/> */}
       </span>
      </h1>
      <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
        Explore thousands of Job listings or Find the perfect candidate
      </p>
    </section>


    {/* Buttons */}
      <div className="flex gap-5 justify-center">
       <Link to="/jobs">
          <Button variant="blue" size="xl">Find Jobs</Button>
       </Link>
       <Link to="/post-job">
          <Button variant="destructive" size="xl">Post a Job</Button>
       </Link>
      </div>


    {/* Carousel */}
    <Carousel
    plugins={[Autoplay({ delay: 2000 })]}
     className="w-full py-10">
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
       {companies.map(({name,id,path})=>{
          return(
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <img src={path}
               alt={name} 
              className="h-9 sm:h-14 object-contain"
               />
            </CarouselItem>
          )
       })}
      </CarouselContent>
    </Carousel>

       {/* banner image */}
       <img 
          src="/banner1.png" 
          className="w-full rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 ease-in-out opacity-90 hover:opacity-100"
          alt="banner" 
        />



         {/* cards */}  
         <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
              <CardHeader>
                <CardTitle>For Employers</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Post jobs, manage applications, and find the best candidates.</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
              <CardHeader>
                <CardTitle>For Job Seekers</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Search and apply for jobs, track applications and more.</p>
              </CardContent>
            </Card>
  </section>

      {/* Accordion */}

      <Accordion 
        type="multiple" 
        className="w-full bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-lg"
      >
  {faqs.map((faq, index) => (
    <AccordionItem 
      key={index} 
      value={`item-${index + 1}`} 
      className="border-b border-gray-300 dark:border-gray-700 w-full"
    >
      <AccordionTrigger 
        className="w-full flex justify-between items-center py-3 px-4 text-lg font-semibold text-gray-800 dark:text-gray-200 transition-all hover:text-blue-600 dark:hover:text-blue-400"
      >
        {faq.question}
      </AccordionTrigger>
      <AccordionContent 
        className="px-4 pb-3 text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-300 ease-in-out"
      >
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>


  </main>
  )
}

export default LandingPage;
