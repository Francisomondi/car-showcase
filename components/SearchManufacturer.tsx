'use client'
import {Combobox,Transition} from '@headlessui/react'
import { SearchManufacturerProps } from '@/app/types'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import { manufacturers } from '@/constants'


const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
    const [query, setQuery] = useState('')

const filteredManufacturer = query ===''?
manufacturers : manufacturers.filter((item)=>(
    item.toLocaleLowerCase()
    .replace(/\s+/g,'')
    .includes(query.toLocaleLowerCase()
    .replace(/\s+/g,''))
))
    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image src={'/car-logo.svg'} alt={''}
                        height={20}
                        width={20}
                        className='ml-4'/>
                    </Combobox.Button>

                    <Combobox.Input
                     className='search-manufacture__input'
                    displayValue={(manufacturer: string)=>manufacturer}
                    placeholder='Volkswagen'
                    onChange={(e)=>setQuery(e.target.value)}/>

                    
                </div>
                <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            show={true}
            afterLeave={()=>setQuery('')}>
                <Combobox.Options>
                    {filteredManufacturer.length=== 0 && query!=='' ? (
                        <Combobox.Option
                        value={query}
                        className={'search-manufacturer_option'}>
                            Create '{query}'
                        </Combobox.Option>
                    ):(
                        filteredManufacturer.map((item)=>(
                            <Combobox.Option
                            key={item}
                            className={({active})=> `relative search-manufacturer_option ${active ? 'bg-primary-blue-100 text-white': 'text-gray-900'}`}
                            value={item}>
                                {item}
                            </Combobox.Option>

                        ))
                    )}
                </Combobox.Options>

            </Transition>
            </Combobox>
            
        </div>
    )
}

export default SearchManufacturer
