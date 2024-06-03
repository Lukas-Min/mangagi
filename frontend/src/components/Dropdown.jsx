import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PropTypes from 'prop-types';

const animatedComponents = makeAnimated();

const Tags = [
  { value: "Aliens", label: "Aliens" },
  { value: "Animals", label: "Animals" },
  { value: "Cooking", label: "Cooking" },
  { value: "Cross Dressing", label: "Cross Dressing" },
  { value: "Delinquents", label: "Delinquents" },
  { value: "Demons", label: "Demons" },
  { value: "Gender Swap", label: "Gender Swap" },
  { value: "Ghosts", label: "Ghosts" },
  { value: "Gyaru", label: "Gyaru" },
  { value: "Harem", label: "Harem" },
  { value: "Incest", label: "Incest" },
  { value: "Loli", label: "Loli" },
  { value: "Mafia", label: "Mafia" },
  { value: "Magic", label: "Magic" },
  { value: "Martial Arts", label: "Martial Arts" },
  { value: "military", label: "Military" },
  { value: "Monster Girls", label: "Monster Girls" },
  { value: "Monsters", label: "Monsters" },
  { value: "Music", label: "Music" },
  { value: "Ninja", label: "Ninja" },
  { value: "Office Workers", label: "Office Workers" },
  { value: "Police", label: "Police" },
  { value: "Post-Apocalyptic", label: "Post-Apocalyptic" },
  { value: "Reincarnation", label: "Reincarnation" },
  { value: "Reverse Harem", label: "Reverse Harem" },
  { value: "Samurai", label: "Samurai" },
  { value: "School Life", label: "School Life" },
  { value: "Shota", label: "Shota" },
  { value: "Supernatural", label: "Supernatural" },
  { value: "Survival", label: "Survival" },
  { value: "Time Travel", label: "Time Travel" },
  { value: "Traditional games", label: "Traditional Games" },
  { value: "Vampires", label: "Vampires" },
  { value: "Video Games", label: "Video Games" },
  { value: "Villainess", label: "Villainess" },
  { value: "Virtual reality", label: "Virtual Reality" },
  { value: "Zombies", label: "Zombies" },
  { value: "Action", label: "Action / Adventure" },
  { value: "Adult", label: "Adult" },
  { value: "Adventure", label: "Adventure" },
  { value: "Bisexual", label: "Bisexual" },
  { value: "Comedy", label: "Comedy" },
  { value: "Comics Adaptations", label: "Comics Adaptations" },
  { value: "Coming of Age", label: "Coming-of-age" },
  { value: "Detective Mystery", label: "Detective / Mystery" },
  { value: "Doujinshi", label: "Dōjinshi (Self-published)" },
  { value: "Drama", label: "Drama" },
  { value: "Ecchi Erotic", label: "Ecchi / Erotic" },
  { value: "Fantasy", label: "Fantasy (includes Isekai)" },
  { value: "Gender Bender", label: "Gender Bender" },
  { value: "Graphic Novels", label: "Graphic Novels" },
  { value: "Harem", label: "Harem" },
  { value: "Historical", label: "Historical / Historical Fiction / Alternative Histories" },
  { value: "Horror", label: "Horror" },
  { value: "How to Gakushu", label: "How-to / Gakushu" },
  { value: "Humorous", label: "Humorous" },
  { value: "Legal", label: "Legal" },
  { value: "Medical", label: "Medical" },
  { value: "Magical", label: "Magical / Magical Girl" },
  { value: "Martial Arts", label: "Martial Arts" },
  { value: "Mecha", label: "Mecha (Machines and Robots)" },
  { value: "Monster Kaiju", label: "Monster / Kaiju" },
  { value: "Nonfiction", label: "Nonfiction" },
  { value: "Paranormal", label: "Paranormal" },
  { value: "Parody", label: "Parody" },
  { value: "Pornographic", label: "Pornographic" },
  { value: "Psychological", label: "Psychological" },
  { value: "Queer", label: "Queer" },
  { value: "Religious", label: "Religious" },
  { value: "Romance", label: "Romance" },
  { value: "Romantic Comedy", label: "Romantic Comedy" },
  { value: "Samurai", label: "Samurai" },
  { value: "School", label: "School" },
  { value: "Sci-Fi", label: "Science Fiction (includes Cyberpunk)" },
  { value: "Girl's Love", label: "Shōjo-ai (Girls' Love)" },
  { value: "Boys' Love", label: "Shōnen-ai (Boys' Love, or BL)" },
  { value: "Slice of Life", label: "Slice of Life" },
  { value: "Social Issue", label: "Social issue" },
  { value: "Sports", label: "Sports" },
  { value: "Spy", label: "Spy" },
  { value: "Superhero", label: "Superhero" },
  { value: "Supernatural", label: "Supernatural" },
  { value: "Thriller", label: "Thriller" },
  { value: "Tragedy", label: "Tragedy" },
  { value: "Transgender", label: "Transgender" },
  { value: "Underground", label: "Underground" },
  { value: "War", label: "War" },
  { value: "Wordless", label: "Wordless" },
  { value: "Yaoi", label: "Yaoi" },
  { value: "Yuri", label: "Yuri" }
];

const State = [
    { value: "published", label: "Published" },
    { value: "coming soon", label: "Coming Soon" },
];

const Status = [
  
  { value: "ongoing", label: "Ongoing" },
  { value: "completed", label: "Completed" },
  { value: "hiatus", label: "Hiatus" },
  { value: "cancelled", label: "Cancelled" },
];

const AnimatedMulti = ({onChange, tags}) => {

    const handleChange = (selectedOptions) => {
        onChange(selectedOptions);
    };

    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue=""
            value={tags.map(tag => Tags.find(t => t.value === tag))}
            isMulti
            options={Tags}
            className="rounded-md border-amaranth border text-licorice w-full"
            onChange={handleChange}
        />
    );
};

AnimatedMulti.propTypes = {
    onChange: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

const SingleOption = ({ isState, onChange, value }) => {
  const stateStatus = isState ? State : Status;

  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

    return (
        <Select
            className="basic-single rounded-md border-amaranth border text-licorice w-full"
            classNamePrefix="select"
            value={stateStatus.find(s => s.value === value)}
            options={stateStatus}
            onChange={handleChange}
        />
    );
};

SingleOption.propTypes = {
    isState: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export { AnimatedMulti, SingleOption };
export default { Tags, State, Status }; 
