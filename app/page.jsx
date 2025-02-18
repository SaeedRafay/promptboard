import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Share & Find
        <br />
        <span className='indigo_gradient text-center'>AI Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptboard is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  )
}

export default Home