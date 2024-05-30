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
  { value: "actionAdventure", label: "Action / Adventure" },
  { value: "adult", label: "Adult" },
  { value: "adventure", label: "Adventure" },
  { value: "bisexual", label: "Bisexual" },
  { value: "comedy", label: "Comedy" },
  { value: "comicsAdaptations", label: "Comics adaptations" },
  { value: "comingOfAge", label: "Coming-of-age" },
  { value: "detectiveMystery", label: "Detective / Mystery" },
  { value: "doujinshi", label: "Dōjinshi (Self-published)" },
  { value: "drama", label: "Drama" },
  { value: "ecchiErotic", label: "Ecchi / Erotic" },
  { value: "fantasy", label: "Fantasy (includes Isekai)" },
  { value: "genderBender", label: "Gender Bender" },
  { value: "graphicNovels", label: "Graphic Novels" },
  { value: "harem", label: "Harem" },
  { value: "historical", label: "Historical / Historical Fiction / Alternative Histories" },
  { value: "horror", label: "Horror" },
  { value: "howToGakushu", label: "How-to / Gakushu" },
  { value: "humorous", label: "Humorous" },
  { value: "legal", label: "Legal" },
  { value: "medical", label: "Medical" },
  { value: "magical", label: "Magical / Magical Girl" },
  { value: "martialArts", label: "Martial Arts" },
  { value: "mecha", label: "Mecha (Machines and Robots)" },
  { value: "monsterKaiju", label: "Monster / Kaiju" },
  { value: "nonfiction", label: "Nonfiction" },
  { value: "paranormal", label: "Paranormal" },
  { value: "parody", label: "Parody" },
  { value: "pornographic", label: "Pornographic" },
  { value: "psychological", label: "Psychological" },
  { value: "queer", label: "Queer" },
  { value: "religious", label: "Religious" },
  { value: "romance", label: "Romance" },
  { value: "romanticComedy", label: "Romantic Comedy" },
  { value: "samurai", label: "Samurai" },
  { value: "school", label: "School" },
  { value: "scienceFiction", label: "Science Fiction (includes Cyberpunk)" },
  { value: "shojoAi", label: "Shōjo-ai (Girls’ Love)" },
  { value: "shonenAi", label: "Shōnen-ai (Boys’ Love, or BL)" },
  { value: "sliceOfLife", label: "Slice of Life" },
  { value: "socialIssue", label: "Social issue" },
  { value: "sports", label: "Sports" },
  { value: "spy", label: "Spy" },
  { value: "superhero", label: "Superhero" },
  { value: "supernatural", label: "Supernatural" },
  { value: "thriller", label: "Thriller" },
  { value: "tragedy", label: "Tragedy" },
  { value: "transgender", label: "Transgender" },
  { value: "underground", label: "Underground" },
  { value: "war", label: "War" },
  { value: "wordless", label: "Wordless" },
  { value: "yaoi", label: "Yaoi" },
  { value: "yuri", label: "Yuri" }
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
