import gif from "../assets/gifs/gif1.gif";
function BackgroundGif() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-center z-[-1] h-full max-w-full ">
      <img
        src={gif}
        alt="Animated Background"
        className="h-full max-h-[1160px] max-w-full object-cover opacity-30 rounded-b-full filter grayscale top-0"
      />
    </div>
  );
}

export default BackgroundGif;
