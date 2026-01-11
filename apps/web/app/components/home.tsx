import { Button } from "@nacercodes/ui"
import { ArrowRight } from "lucide-react"

export function Home() {
  return (
    <main className="h-dvh bg-gray-1 text-gray-12 flex flex-col gap-12 items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-semibold">Nacer Codes</h1>
        <p className="text-gray-10">This is the website.</p>
      </div>
      <Button variant="outline" endIcon={<ArrowRight size={16} />}>
        Start learning
      </Button>
    </main>
  )
}
