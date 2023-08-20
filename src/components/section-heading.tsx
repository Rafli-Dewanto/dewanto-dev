import React from 'react'

export default function SectionHeading({
    children,
    sectionTitle
}: {
    children: React.ReactNode,
    sectionTitle: string
}) {
    return (
        <section className='max-w-[45rem] w-full mb-28 text-center leading-8 sm:mb-40'>
            <h2 className='text-3xl mb-8 font-medium capitalize'>{sectionTitle}</h2>
            {children}
        </section>
    )
}
