'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb';
import { usePathname } from 'next/navigation';

export default function BreadcrumbBox() {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
        return null;
    }
    const routingMap = [
        {
            key: 'blogs',
            label: 'Blogs'
        },
        {
            key: 'aboutMe',
            label: 'About Me'
        },
        {
            key: 'TechStacks',
            label: 'Tech Stacks'
        },
    ]
    return (
        <div className="p-3">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {
                        segments.map((segment, index) => {
                            const url = `/${segments.slice(0, index + 1).join('/')}`;
                            return (
                                <div className='flex items-center gap-1' key={segment}>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={url} style={index === segments.length - 1 ? { color: 'blueviolet', textDecoration: 'underline' } : {}}>{routingMap.find(item => item.key === segment)?.label || segment}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {
                                        index < segments.length - 1 && (
                                            <BreadcrumbSeparator />
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </BreadcrumbList>
            </Breadcrumb>
        </div>

    )
}

