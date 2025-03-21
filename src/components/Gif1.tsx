import gif1 from "../assets/gifs/gif1.gif";
function Gif1() {
  return (
    <div className="flex items-center justify-center max-w-screen mt-30 px-20">
      <img
        src={gif1}
        alt=""
        className="w-full h-[500px] object-cover rounded-3xl"
      />
    </div>
  );
}

export default Gif1;
