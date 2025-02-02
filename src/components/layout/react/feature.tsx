import { Badge } from '@/components/ui/badge.tsx'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel.tsx'

export const Feature = () => (
    <div className="w-full pb-20 lg:pb-40">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 items-end justify-end gap-10 lg:grid-cols-2">
                <div className="flex flex-col items-start gap-4">
                    <div>
                        <Badge>UNDER DEVELOPMENT!!</Badge>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-regular text-left text-xl tracking-tighter md:text-3xl lg:max-w-xl lg:text-5xl">
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                        </h2>
                        <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight lg:max-w-sm">
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            <br />
                            <br />
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Nec inceptos curabitur ultricies potenti; maximus at
                            vel. Euismod facilisi in vel proin etiam tempus
                            vestibulum libero. Mi quisque platea erat placerat
                            risus venenatis curabitur. Volutpat nunc conubia
                            posuere vitae dis himenaeos ac efficitur. Urna
                            vestibulum per natoque mauris blandit arcu aenean
                            convallis.
                            <br />
                            <br />
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-full px-6">
                    <Carousel>
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="bg-muted flex aspect-video items-center justify-center rounded-md p-6">
                                        <span className="text-sm">
                                            Platform Screenshot {index + 1}
                                        </span>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
)
