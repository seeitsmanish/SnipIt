import React from 'react';
import cn from '../../lib/cn';
import { LoaderCircle } from 'lucide-react';

type LoaderProps = {
    className?: string;
    loaderClassName?: string;
};

const Loader: React.FC<LoaderProps> = ({ className, loaderClassName }) => {

    return <div className={cn('h-full w-full flex items-center justify-center ', className)}>
        <LoaderCircle className={cn("animate-spin rounded-full h-32 w-32 ", loaderClassName)}></LoaderCircle>
    </div>
}
export default Loader;