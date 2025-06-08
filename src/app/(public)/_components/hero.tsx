import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorHeroImg from '@/../public/doctor-hero.png'

export function Hero() {
  return (
    <section className="">

      <div className="container mx-auto px-4 pt-20 flex items-center justify-center">
        <article className="flex-[2] max-w-3xl space-y-8 flex flex-col">
          <h1 className="max-w-2xl text-4xl lg:text-6xl font-bold tracking-tight">
            Encontre os melhores profissionais em um único local!
          </h1>

          <p className="text-base md:text-lg text-gray-600">
            Nós somos uma plataforma para profissionais da saúde com foco em agilizar seu atendimento de forma simplificada e organizada.
          </p>

          <Button className="bg-emerald-500 hover:bg-emerald-400 hover:font-semibold w-fit px-6">
            Encontre uma clínica
          </Button>
        </article>

        <div className="hidden lg:block">
          <Image
            src={doctorHeroImg}
            alt="Foto ilustrativa de um profissional de saúde"
            width={340}
            height={400}
            className="object-contain"
            quality={100}
            priority
          />
        </div>


      </div>

    </section>
  )
}