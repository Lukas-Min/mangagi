import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export const Tags = [
  { value: "aliens", label: "Aliens" },
  { value: "animals", label: "Animals" },
  { value: "cooking", label: "Cooking" },
  { value: "crossdressing", label: "Crossdressing" },
  { value: "delinquents", label: "Delinquents" },
  { value: "demons", label: "Demons" },
  { value: "genderswap", label: "Genderswap" },
  { value: "ghosts", label: "Ghosts" },
  { value: "gyaru", label: "Gyaru" },
  { value: "harem", label: "Harem" },
  { value: "incest", label: "Incest" },
  { value: "loli", label: "Loli" },
  { value: "mafia", label: "Mafia" },
  { value: "magic", label: "Magic" },
  { value: "martialArts", label: "Martial Arts" },
  { value: "military", label: "Military" },
  { value: "monsterGirls", label: "Monster Girls" },
  { value: "monsters", label: "Monsters" },
  { value: "music", label: "Music" },
  { value: "ninja", label: "Ninja" },
  { value: "officeWorkers", label: "Office Workers" },
  { value: "police", label: "Police" },
  { value: "postApocalyptic", label: "Post-Apocalyptic" },
  { value: "reincarnation", label: "Reincarnation" },
  { value: "reverseHarem", label: "Reverse Harem" },
  { value: "samurai", label: "Samurai" },
  { value: "schoolLife", label: "School Life" },
  { value: "shota", label: "Shota" },
  { value: "supernatural", label: "Supernatural" },
  { value: "survival", label: "Survival" },
  { value: "timeTravel", label: "Time Travel" },
  { value: "traditionalGames", label: "Traditional Games" },
  { value: "vampires", label: "Vampires" },
  { value: "videoGames", label: "Video Games" },
  { value: "villainess", label: "Villainess" },
  { value: "virtualReality", label: "Virtual Reality" },
  { value: "zombies", label: "Zombies" },
];

export const Genres = [
  { value: "action", label: "Action" },
  { value: "adventure", label: "Adventure" },
  { value: "comedy", label: "Comedy" },
  { value: "drama", label: "Drama" },
  { value: "fantasy", label: "Fantasy" },
  { value: "horror", label: "Horror" },
  { value: "mystery", label: "Mystery" },
  { value: "romance", label: "Romance" },
  { value: "sciFi", label: "Science Fiction" },
  { value: "sliceOfLife", label: "Slice of Life" },
  { value: "sports", label: "Sports" },
  { value: "thriller", label: "Thriller" },
  { value: "western", label: "Western" },
];

export const State = [
  { value: "onGoing", label: "Ongoing" },
  { value: "completed", label: "Completed" },
  { value: "onHold", label: "On Hold" },
  { value: "cancelled", label: "Cancelled" },
];

export const Status = [
  { value: "published", label: "Published" },
  { value: "comingSoon", label: "Coming Soon" },
];

const AnimatedMulti = ({ isTags }) => {
  const tagsGenres = isTags ? Tags : Genres;

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue=""
      isMulti
      options={tagsGenres}
      className="rounded-md border-amaranth border text-licorice w-full"
    />
  );
};

const SingleOption = ({ isState }) => {
  const stateStatus = isState ? State : Status;
  return (
    <Select
      className="basic-single rounded-md border-amaranth border text-licorice w-full"
      classNamePrefix="select"
      options={stateStatus}
    />
  );
};

export { AnimatedMulti, SingleOption };
