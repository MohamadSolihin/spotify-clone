import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
        <img src={albumData.image} alt="" className="w-32 md:w-48 rounded" />
        <div className="flex flex-col">
          <p className="text-sm md:text-base">Playlist</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {albumData.name}
          </h2>
          <h2 className="text-sm md:text-base">{albumData.desc}</h2>
          <p className="mt-1 text-sm md:text-base">
            <img
              src={assets.spotify_logo}
              alt=""
              className="inline-block w-4 md:w-5"
            />
            <b>Spotify</b> ● 1,123,123 likes ● <b>50 songs,</b> about 2 hr 30
            min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer text-xs sm:text-base"
          key={index}>
          <p className="text-white flex items-center">
            <b className="mr-2 text-[#a7a7a7]">{index + 1}</b>
            <img
              src={item.image}
              alt=""
              className="inline w-8 h-8 sm:w-10 sm:h-10 mr-3"
            />
            <span className="truncate">{item.name}</span>
          </p>
          <p className="text-[13px] truncate">{albumData.name}</p>
          <p className="text-[13px] hidden sm:block">5 days ago</p>
          <p className="text-[13px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
