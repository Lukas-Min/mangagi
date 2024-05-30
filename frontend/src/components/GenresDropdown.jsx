import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export const Genres = [
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



export default function GenresDropdown() {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,

    }),
    input: (provided, state) => ({
      ...provided,
      margin: "0",
      padding: "0",
      lineHeight: "16px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      margin: "0",
      padding: "0",

    }),
  };

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue=""
      isMulti
      options={Tags}
      className="rounded-md border-amaranth border text-licorice w-full"
      styles={customStyles} // Apply the custom styles here
    />
  );
}
