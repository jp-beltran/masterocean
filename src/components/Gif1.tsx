import gif1 from "../assets/gifs/gif1.gif";

function Gif1() {
  return (
    <div className="flex items-center justify-center w-full mt-10 md:mt-30 px-4 md:px-20">
      <img
        src={gif1}
        alt=""
        className="w-full h-[250px] md:h-[500px] object-cover rounded-3xl"
      />
    </div>
  );
}

export default Gif1;
