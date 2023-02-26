import { Heading } from '@chakra-ui/react';
import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import './components.css';
export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
export const Sales: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const enhance = (id: any) => {
    const element = document.getElementById(id);
    console.log(element?.innerText);
    const text = element?.innerText.split('');

    element && (element.innerText = '');

    text?.forEach((letter) => {
      const span = document.createElement('div');
      //   span.style.backgroundColor = 'black';
      //   span.style.width = '40px';
      //   span.style.margin = '2px';
      //   span.style.color = 'white';
      span.className = 'letter';

      span.innerText = letter;

      const x = Math.floor(Math.random() * 1000);
      const y = Math.floor(Math.random() * 400) - 200;
      const rotation = Math.floor(Math.random() * 180) - 90;

      span.style.transform =
        'translate(' + x + '%,' + y + '%) rotate(' + rotation + 'deg)';
      element?.appendChild(span);
    });
  };

  //   useEffect(() => {
  //     if (!isVisible) return;
  //     for (let i = 3; i <= 5; ++i) {
  //       enhance('word-' + i);
  //     }
  //     setTimeout(() => {
  //       for (let i = 3; i <= 5; ++i) {
  //         const letters = document.getElementById('word-' + i)?.childNodes;
  //         if (letters) {
  //           for (var j = 0; j < letters?.length; ++j) {
  //             (letters[j] as HTMLElement).style.transform = 'translate(0,0)';
  //           }
  //         }
  //       }
  //     }, 1000);
  //   }, [isVisible]);

  return (
    <div className='flex flex-row w-full p-container'>
      <div
        ref={ref}
        className='rounded-md w-[90%] text-left p-container flex flex-col space-y-5'
      >
        <div className='text-xl p-container w-[60%] quote italic'>
          {/* <span className='italic ml-[-5%] text-[3rem] '>"</span> */}
          {/* <br /> */}
          There he recognized that he could combine telephone call-routing
          technology with Boole’s logic system to encode and transmit any type
          of information electronically. It was the fundamental insight on which
          computers rely. “It just happened that no one else was familiar with
          both those fields at the same time,” Shannon said.”
        </div>
        {/* <div className='w-[60%] text-left space-y-5 p-container bg rounded-md bg-selected_white drop-shadow-lg '> */}
        <div className='font-semibold text-3xl p-container'>
          <span className='font-normal'>Leverage </span>
          <span className='font-normal' id='word-1'>
            your
          </span>

          <span> </span>
          <span className='font-normal' id='word-2'>
            unique
          </span>
          <br />
          <span> </span>
          <span id='word-3'>mosaic</span>
          <span> </span>
          <span id='word-4'>of</span>

          <span> </span>
          <span id='word-5'>experiences</span>
        </div>
        {/* </div> */}
        <a className='p-container hover:cursor-pointer text-2xl font-semibold text-[#2F3C7E]'>
          Unlock your potential with the power of connections{'  '}
          <ArrowForwardIcon />
        </a>
        {/* </div> */}
      </div>
    </div>
  );
};