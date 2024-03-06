import React from 'react';

// icon
import Image from 'next/image';
import iconCP from '@/assets/skill/c-logo.png';
import iconCS from '@/assets/skill/c-sharp.png';
import iconC from '@/assets/skill/c.png';
import iconEng from '@/assets/skill/eng.png';
import iconGit from '@/assets/skill/git.png';
import iconHtml from '@/assets/skill/html.png';
import iconJS from '@/assets/skill/java-script.png';
import iconJV from '@/assets/skill/java.png';
import iconJR from '@/assets/skill/jira.png';
import iconReact from '@/assets/skill/library.png';
import iconPHP from '@/assets/skill/php.png';
import iconTw from '@/assets/skill/tw.jpg';
import iconVN from '@/assets/skill/vietnam.png';

const skill = [
  {
    name: 'Programming Languages',
    lists: ['Javascript'],
  },
];

const Skill = () => {
  return (
    <div id='skill'>
      <div className='flex gap-10 ml-6 mt-5'>
        <p>
          Hi mate ! This part is about what i learned in my jorney to become a
          IT guy 💂. I has been learned many program Language such as PHP&nbsp;
          <Image
            className='w-[20px] inline-table'
            src={iconPHP}
            alt='icon'
          />
          , C#&nbsp;
          <Image
            className='w-[20px] inline-table'
            src={iconCS}
            alt='icon'
          />
          , C&nbsp;
          <Image
            className='w-[20px] inline-table'
            src={iconC}
            alt='icon'
          />
          , C++&nbsp;
          <Image
            className='w-[20px] inline-table'
            src={iconCP}
            alt='icon'
          />
          , JAVA&nbsp;
          <Image
            className='w-[20px] inline-table'
            src={iconJV}
            alt='icon'
          />
          .., Honestly, Im not sure about my knowledge about these things
          because The last time I use these things it been a long time .Instance
          of I prefer using <b>Javascript</b> for my work and my personal
          projects because I has learned about <b>Javascript</b>&nbsp;
          <Image
            className='w-[20px] inline-table'
            src={iconJS}
            alt='icon'
          />
          &nbsp; for a long time and Im still learning <b>Javascript </b>
          <Image
            className='w-[20px] inline-table'
            src={iconJS}
            alt='icon'
          />
          &nbsp; . In my <b>Javascript</b> learning jorney , I has been learned
          about
          <b>
            HTM &nbsp;
            <Image
              className='w-[20px] inline-table'
              src={iconHtml}
              alt='icon'
            />
            ,Css , Scss , React&nbsp;
            <Image
              className='w-[20px] inline-table'
              src={iconReact}
              alt='icon'
            />
            , NextJS, Redux , Redux saga, Tailwind
            <Image
              className='w-[20px] inline-table'
              src={iconTw}
              alt='icon'
            />
            , antd, React hook form, Jquery
          </b>
          ,Etc... Im sorry when I am not list all my skill but you can check
          <b> my CV</b> if you're interesting. When I am working with my team in
          company I has been used
          <b>
            &nbsp;Git&nbsp;
            <Image
              className='w-[20px] inline-table'
              src={iconGit}
              alt='icon'
            />
            , Gitlab, sourcetree, jira &nbsp;
            <Image
              className='w-[20px] inline-table'
              src={iconJR}
              alt='icon'
            />
            , confluence
          </b>
          &nbsp;as a tool . The last things , I'm VietNamese&nbsp;
          <Image
            className='w-[20px] inline-table'
            src={iconVN}
            alt='icon'
          />
          &nbsp; so <b>VietNamese</b> is my orignal language and I can able to
          speak&nbsp;
          <b>English </b>
          <Image
            className='w-[20px] inline-table'
            src={iconEng}
            alt='icon'
          />
          &nbsp;Although it's not good but I think you can understand what i say
          . hopefully , You're enjoying and if you have any question just send
          to me through my social networks. Thanks 😊
        </p>
      </div>
    </div>
  );
};

export default Skill;
