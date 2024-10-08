
export default function Role({forwardedRef}) {
  return (
    <section ref={forwardedRef} className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change" aria-label="">
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
        I have a deep passion for technology and a genuine curiosity about how things work. I love exploring and understanding the intricate details behind technological innovations
        </h1>
      </div>
    </section>
  );
}
