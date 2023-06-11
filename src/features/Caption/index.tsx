import { Brain } from "phosphor-react";
import { CaptionProps } from './caption.types';


export const Caption = ({style}:CaptionProps) => {
    return (
      <header className='lg:text-3xl text-2xl lg:pt-12 font-bold flex items-center justify-center' style={style}>
        MEMORIZE
        <Brain size={30} style={{marginLeft:"3px",paddingTop:"3px"}} />
      </header>
  )
}
 