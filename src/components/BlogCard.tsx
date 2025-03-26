'use client';
import { Card } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
export function BlogCard({ blog }: { blog: Blog }) {
    const { image, title, desc, time, tags } = blog;
    const date = new Date(time);
    const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', 'month': 'long', day: '2-digit' })
    const formattedDate = formatter.format(date);
    return (
        <Card className='w-full p-3 flex flex-col text-left h-full justify-between gap-2'>
            <div className="w-full flex items-center justify-center relative">
                <Image src={image} alt={title} width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="flex flex-col gap-1">
                <span className='font-bold'>{title}</span>
                <span className='text-sm text-gray-500'>{desc}</span>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1">
                    {
                        tags.map(tag => {
                            return <Badge key={tag} className='p-1 bg-blue-400 min-w-10 flex justify-center'>{tag}</Badge>
                        })
                    }
                </div>
                <span className='text-sm text-gray-400'>{formattedDate}</span>
            </div>
        </Card>
    )
}