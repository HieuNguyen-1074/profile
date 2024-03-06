export const metadata = {
  title: 'Résumé',
  description: '',
};
export default function ProfileLayout({
  children,
  education,
  skill,
  workExperience,
  wrapper,
  project,
}) {
  return (
    <>
      <div className='flex md:flex-row flex-col h-[85vh] leading-10 '>
        <div className='flex flex-col justify-start items-start'>{wrapper}</div>

        <div className='h-full overflow-y-hidden scroll-smooth md:ml-9'>
          <div
            id='education'
            className='h-full flex flex-col md:justify-center overflow-auto'>
            {education}
          </div>
          <div
            id='skill'
            className='  h-full flex flex-col md:justify-center overflow-auto'>
            {skill}
          </div>
          {/* <div
            id='experience'
            className='h-full flex flex-col justify-center'>
            {workExperience}
          </div>
          <div
            id='project'
            className='h-full flex flex-col justify-center'>
            {project}
          </div> */}
          {children}
        </div>
      </div>
    </>
  );
}
