import { Fragment } from "preact";
import Face from "../components/Face.tsx";
import { Head } from "$fresh/runtime.ts";
import Icon from "../components/Icon.tsx";
import Button from "../components/Button.tsx";

export default function IndexPage() {
  const icons = [
    { iconName: "github", href: "https://github.com/teexone" },
    { iconName: "linkedin", href: "https://www.linkedin.com/in/aleksandr-lobanov-366893273/" },
    { iconName: "telegram", href: "https://t.me/teexone" },
    { iconName: "email", href: "mailto:aleksandr.lobanov.official@gmail.com" },
  ]

  return <div class="w-screen flex flex-col justify-center items-center">
    <div class="lg:max-w-[500px] lg:text-normal flex flex-col justify-center items-center">
      <Head>
        <title>Aleksandr Lobanov</title>
        <meta name="description" content="Aleksandr Lobanov's personal website" />
        <meta name="keywords" content="Aleksandr Lobanov, Lobanov, Aleksandr, Lobanov, ML, MLOps, Machine Learning, Machine Learning Operations, Machine Learning Engineer, Machine Learning Operations Engineer, Machine Learning Operations Engineering, Machine Learn" />
        <meta name="author" content="Aleksandr Lobanov" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Face />
      <h1 class="font-heebo text-xl">Aleksandr Lobanov</h1>
      <hr class="w-[75%]"/>
      <h2 class="font-quicksand ">ML & MLOps Engineer</h2>
      <ul class="w-[15em] flex gap-4 mt-4 justify-center items-center">
        {icons.map((icon) => 
            <li class="block w-full">
              <Icon {...icon} />
            </li>
        )
        }
      </ul>
      <p class="font(quicksand light) p-[1.5em] text(sm justify) break-word">
      I am Aleksandr Lobanov, a passionate individual focused on MLOps and ML engineering. Known for my friendly and open-minded nature, I am constantly seeking new knowledge and eagerly taking on fresh challenges. I actively participate in various projects ranging from NLP (Natural Language Processing) to CV (Computer Vision), putting my skills to work in diverse domains. Hackathons have become a source of great enthusiasm for me, as they provide a platform to showcase my abilities. With experience in data analysis, backend development, and more, I continually strive to learn and grow. It would be a pleasure to collaborate with you on any exciting project.    </p>
      <a class="bg-gradient-to-r from-[#0275E0] to-[#8F00FF] text(white 2xl center) font-bold px-8 py-4 rounded-[1em] w-[75%] mb-10"
        href="https://storage.yandexcloud.net/alobanov-personal/Aleksandr%20Lobanov%20CV%20English.pdf">Cirriculum Vitae</a>
    </div>
  </div>
}