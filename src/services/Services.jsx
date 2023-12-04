import React from 'react'
import { servicesConstnat } from '../constant/AppConstant'

const Services = () => {

    const serviceElements = servicesConstnat?.map(service => {
        return (
            <div className="relative pl-16" key={service.title}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <img src={service.image} alt={service.title} />
                    </div>
                    {service.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{service.paragraph}</dd>
            </div>
        )
    })
  return (
    <div className="bg-[#fdecec] py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="service-title">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl service_title">Our Services</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {serviceElements}
                </dl>
            </div>
        </div>
    </div>
  )
}

export default Services