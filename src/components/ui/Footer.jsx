export default function Footer() {
  function toTop() {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="mt-14 flex items-end justify-between px-5 py-4 sm:flex text-body-4 md:text-body-3">
      <div className="flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between">
        <div className="flex space-x-1" >
          <span>&copy;</span>
          <span>2024</span>
          <span className="font-extrabold uppercase 2xl:text-body-1">naba mf</span>
        </div>
        <div>
          <span className=" text-body-4 2xl:text-body-1">xxx</span>
        </div>
      </div>
   
          </footer>
  );
}
