import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.tsx'
import { Link } from '@/components/layout/react/link.tsx'


export const Hero = () => {
    const [titleNumber, setTitleNumber] = useState(0)
    const titles = useMemo(
        () => ['Tailwind', 'ShadCN'],
        []
    )

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0)
            } else {
                setTitleNumber(titleNumber + 1)
            }
        }, 2000)
        return () => clearTimeout(timeoutId)
    }, [titleNumber, titles])

    return (
        <div className="w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-regular max-w-2xl text-center text-5xl tracking-tighter md:text-7xl">
                            <span className="text-spektr-cyan-50">
                                React Hero
                            </span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pt-1 md:pb-4">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-semibold"
                                        initial={{ opacity: 0, y: '-100' }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 50,
                                        }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                      y: 0,
                                                      opacity: 1,
                                                  }
                                                : {
                                                      y:
                                                          titleNumber > index
                                                              ? -150
                                                              : 150,
                                                      opacity: 0,
                                                  }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-muted-foreground max-w-2xl text-center text-lg leading-relaxed tracking-tight md:text-xl">
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Nec inceptos curabitur ultricies potenti; maximus at
                            vel. Euismod facilisi in vel proin etiam tempus
                            vestibulum libero. Mi quisque platea erat placerat
                            risus venenatis curabitur. Volutpat nunc conubia
                            posuere vitae dis himenaeos ac efficitur. Urna
                            vestibulum per natoque mauris blandit arcu aenean
                            convallis.
                        </p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Link
                            href="/samples"
                            className="flex flex-row items-center"
                        >
                            <Button variant="default" size="lg">
                                Samples{' '}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
