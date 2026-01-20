// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          소개
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-semibold mb-4 text-[#16f2b3] text-2xl lg:text-3xl">
            자기소개
          </p>
          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
            빠르게 학습하고 새로운 환경에 적응하는 데 강점을 가진 개발자 
            <span className="text-gray-100 font-medium"> 심재탁</span>입니다. 
            프론트엔드와 백엔드를 구분하지 않고 
            <span className="text-gray-100"> 문제의 본질</span>을 먼저 파악하며, 
            상황에 맞는 기술과 구조를 선택해 
            <span className="text-gray-100"> 효율적인 해결책</span>을 만드는 것을 중요하게 생각합니다.
            <br /><br />
            단기적인 구현에 그치지 않고 
            <span className="text-gray-100"> 유지보수성과 확장성</span>을 고려한 코드를 지향하며, 
            하나의 기능이 시스템 전체에서 어떤 역할을 하는지 고민하며 개발합니다. 
            특정 기술에 국한되지 않고 변화하는 기술 환경 속에서도 
            <span className="text-gray-100"> 지속적으로 성장할 수 있는 개발자</span>를 목표로 학습하고 있습니다.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="심재탁"
            className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;