import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

import professionalImg from '@/../public/foto1.png'
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Professionals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Clínicas disponíveis
        </h2>

        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-48 ">
                <Image
                  src={professionalImg}
                  alt="Foto da clínica"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-semibold">
                      Clinica centro
                    </h3>

                    <p className="text-sm text-gray-500">
                      Rua x, centro, Campo Grande - MS
                    </p>
                  </div>

                  <div className="w-2.5 h-2.5 rounded-lg bg-emerald-500"></div>
                </div>

                <Link
                  href="/clinica/123"
                  className="flex justify-center items-center bg-emerald-500 hover:bg-emerald-400 text-white w-full py-2 rounded-md text-sm md:text-base font-medium"
                >
                  Agendar horário
                  <ArrowRight className="ml-2" />
                </Link>
              </div>
            </CardContent>
          </Card>


        </section>
      </div>
    </section>
  )
}