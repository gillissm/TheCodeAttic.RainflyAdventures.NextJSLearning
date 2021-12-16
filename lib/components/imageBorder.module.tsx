/* eslint-disable react/jsx-key */
import Image from 'next/image';
import { DisplayImageModel } from '../models/displayImage.model';

interface ImageBorderProp{
    imageList: DisplayImageModel[];
}

function ImageBorder({imageList}:ImageBorderProp) {
    return (
        <>
            {imageList !== null && imageList.length > 0 && <div className='containerRow'>
                {
                    imageList.map((img) => (
                        <Image className='centerContainerItem'
                            src={'/'+img.ImageName}
                            alt={img.AltText}
                            height={img.Height + 'px'}
                            width={img.Width + 'px'}></Image>
                    ))
                }
            </div>
            }
        </>
    );
}

export default ImageBorder;