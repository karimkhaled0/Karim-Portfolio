import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import ExperienceWork from '../components/ExperienceWork'
import Header from '../components/Header'
import Hero from '../components/Hero'
import OrderGig from '../components/OrderGig'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { urlFor } from '../sanity'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperience } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className='bg-[rgb(24,24,24)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
     z-0 overflow-x-hidden scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Karim Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <ExperienceWork experiences={experiences} />
      </section>

      <section id='skills' className='snap-center'>
        <Skills skills={skills} />
      </section>

      <section id='projects' className='snap-center'>
        <Projects projects={projects} />
      </section>
      {/* 
      <section id='order' className='snap-center'>
        <OrderGig />
      </section> */}

      <section id='contact' className='snap-end'>
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href='#hero'>
        <footer className='absolute bottom-5 left-0 right-0 mx-auto w-10'>
          <div className='flex items-center justify-center'>
            <Image
              className='rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src={urlFor(pageInfo.heroImage).url()}
              alt='Home'
              width={30}
              height={30}
            />
          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
  }
}
